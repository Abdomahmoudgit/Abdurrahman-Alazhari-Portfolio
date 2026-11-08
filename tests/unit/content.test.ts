import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

import { getContent } from "@/data";
import { projectBase } from "@/data/shared";

const en = getContent("en");
const ar = getContent("ar");

/** Shape of a value: keys for objects, length + item shapes for arrays. */
function shape(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shape);
  if (v && typeof v === "object")
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, shape((v as Record<string, unknown>)[k])]));
  return typeof v;
}

// Layout/class fields and optional bits that are allowed to be empty.
const MAY_BE_EMPTY = new Set(["description", "imgClassName", "img", "spareImg", "base", "before"]);

function collectEmpty(v: unknown, at: string, out: string[]) {
  if (typeof v === "string") {
    const key = at.split(".").pop()!.replace(/\[\d+\]$/, "");
    if (!v.trim() && !MAY_BE_EMPTY.has(key)) out.push(at);
  } else if (Array.isArray(v)) v.forEach((x, i) => collectEmpty(x, `${at}[${i}]`, out));
  else if (v && typeof v === "object")
    for (const [k, x] of Object.entries(v)) collectEmpty(x, at ? `${at}.${k}` : k, out);
}

describe("site content", () => {
  it("English and Arabic have exactly the same structure", () => {
    expect(shape(ar)).toEqual(shape(en));
  });

  it("has no unexpected empty strings", () => {
    for (const c of [en, ar]) {
      const empty: string[] = [];
      collectEmpty(c, "", empty);
      expect(empty, `${c.locale}: ${empty.join(", ")}`).toEqual([]);
    }
  });

  it("project text lines up with projectBase", () => {
    expect(en.projects).toHaveLength(projectBase.length);
    en.projects.forEach((p, i) => {
      expect(p.slug).toBe(projectBase[i].slug);
      expect(ar.projects[i].slug).toBe(projectBase[i].slug);
    });
  });

  it("project slugs are unique and URL-safe", () => {
    const slugs = en.projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });

  it("every referenced image exists in public/", () => {
    const paths = new Set<string>();
    for (const c of [en, ar]) {
      c.projects.forEach((p) => [p.img, ...p.iconLists].forEach((x) => paths.add(x)));
      c.workExperience.forEach((w) => paths.add(w.thumbnail));
      c.testimonials.forEach((t) => paths.add(t.img));
      c.companies.forEach((co) => co.img && paths.add(co.img));
      c.gridItems.forEach((g) => [g.img, g.spareImg].filter(Boolean).forEach((x) => paths.add(x)));
    }
    const missing = Array.from(paths).filter((p) => !fs.existsSync(path.join(process.cwd(), "public", p)));
    expect(missing).toEqual([]);
  });

  it("the CV PDF is present", () => {
    expect(fs.existsSync(path.join(process.cwd(), "public", "Abdurrahman-Alazhari-CV.pdf"))).toBe(true);
  });
});
