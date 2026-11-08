import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";

const dir = (locale: string) => path.join(process.cwd(), "content", "blog", locale);
const files = (locale: string) => fs.readdirSync(dir(locale)).filter((f) => f.endsWith(".mdx")).sort();

describe("blog posts", () => {
  it("every post exists in both English and Arabic", () => {
    expect(files("ar")).toEqual(files("en"));
  });

  it.each(files("en"))("%s has valid frontmatter in both languages", (file) => {
    const fm = (locale: string) => matter(fs.readFileSync(path.join(dir(locale), file), "utf8")).data;
    const en = fm("en");
    const ar = fm("ar");
    for (const data of [en, ar]) {
      expect(typeof data.title).toBe("string");
      expect(data.title.length).toBeGreaterThan(5);
      expect(typeof data.description).toBe("string");
      expect(String(data.date)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(typeof data.draft).toBe("boolean");
    }
    // Publish both language versions together.
    expect(ar.draft).toBe(en.draft);
    expect(ar.date).toBe(en.date);
  });
});
