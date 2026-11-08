import { expect, test } from "@playwright/test";

// No real emails or AI calls are made: the contact form and /api/chat are mocked.

test.describe("languages", () => {
  test("English home is LTR with a single h1", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("#projects")).toBeVisible();
  });

  test("Arabic home is RTL", async ({ page }) => {
    await page.goto("/ar");
    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("the language switch goes to the other language", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "عرض الموقع بالعربي" }).click();
    await expect(page).toHaveURL(/\/ar$/);
    await page.getByRole("link", { name: "View the site in English" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});

test("theme toggle switches to light and survives a reload", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).toHaveClass(/dark/); // dark by default
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(html).not.toHaveClass(/dark/);
  await page.reload();
  await expect(html).not.toHaveClass(/dark/);
});

test("every page in the sitemap loads with one h1", async ({ page, request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  const paths = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g), (m) => new URL(m[1]).pathname);
  expect(paths.length).toBeGreaterThanOrEqual(16);
  for (const path of paths) {
    const res = await page.goto(path);
    expect(res?.status(), path).toBe(200);
    await expect(page.locator("h1"), path).toHaveCount(1);
  }
});

test("SEO files and share image respond", async ({ request }) => {
  expect((await request.get("/robots.txt")).status()).toBe(200);
  const og = await request.get("/og");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
});

test("unknown project returns 404", async ({ page }) => {
  const res = await page.goto("/projects/does-not-exist");
  expect(res?.status()).toBe(404);
});

for (const path of ["/", "/ar", "/cv", "/projects/home-agent-platform"]) {
  test(`no horizontal scroll on a phone: ${path}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
}

test("CV page shows experience and a print button", async ({ page }) => {
  await page.goto("/cv");
  await expect(page.getByRole("heading", { name: "Experience" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Print / Save as PDF" })).toBeVisible();
});

test("contact form validates and shows success (Web3Forms mocked)", async ({ page }) => {
  await page.route("https://api.web3forms.com/submit", (route) =>
    route.fulfill({ json: { success: true, message: "ok" } })
  );
  await page.goto("/#contact");
  const send = page.getByRole("button", { name: "Send message" });
  await send.click();
  // Required fields block the submit.
  await expect(page.locator("input[name=name]:invalid")).toHaveCount(1);

  await page.getByPlaceholder("Your name").fill("Test Visitor");
  await page.getByPlaceholder("Your email").fill("visitor@example.com");
  await page.getByPlaceholder("Tell me about your project…").fill("Hello from an automated test.");
  await send.click();
  await expect(page.getByText("Thanks! Your message was sent")).toBeVisible();
});

test("chat assistant answers (API mocked) and offers WhatsApp", async ({ page }) => {
  await page.route("**/api/chat", (route) =>
    route.fulfill({ status: 200, contentType: "text/plain", body: "He built the Home Agent platform." })
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Ask about Abdurrahman" }).click();
  const dialog = page.getByRole("dialog", { name: "Ask me anything" });
  await expect(dialog).toBeVisible();

  await dialog.getByRole("button", { name: "What did he build for Home Agent?" }).click();
  await expect(dialog.getByText("He built the Home Agent platform.")).toBeVisible();

  const wa = dialog.getByRole("link", { name: "Chat on WhatsApp" });
  await expect(wa).toHaveAttribute("href", /^https:\/\/wa\.me\/201095664239\?text=/);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("chat falls back to WhatsApp when the assistant is unavailable", async ({ page }) => {
  await page.route("**/api/chat", (route) => route.fulfill({ status: 503, body: "Assistant is not configured" }));
  await page.goto("/ar");
  await page.getByRole("button", { name: "اسأل عن عبدالرحمن" }).click();
  const dialog = page.getByRole("dialog");
  await dialog.getByRole("textbox").fill("مرحبا");
  await dialog.getByRole("button", { name: "إرسال" }).click();
  await expect(dialog.getByText("المساعد غير متاح حاليًا")).toBeVisible();
  await expect(dialog.getByRole("link", { name: "تواصل على واتساب" })).toBeVisible();
});
