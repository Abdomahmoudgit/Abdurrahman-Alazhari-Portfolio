import { contactEmail, getContent, links, siteUrl, type Locale } from "@/data";
import { WHATSAPP_NUMBER } from "./whatsapp";

/**
 * System prompt for the portfolio assistant. Built only from site data and kept
 * byte-stable (no dates or per-request values) so it can be prompt-cached.
 */
export function buildAssistantPrompt(locale: Locale): string {
  const c = getContent(locale);
  const projects = c.projects
    .map(
      (p) =>
        `### ${p.title}\nLink: ${p.link}${p.github ? `\nGitHub: ${p.github}` : ""}\nTech: ${p.tech.join(", ")}\nSummary: ${p.des}\nOverview: ${p.details.overview}\nRole: ${p.details.role}\nFeatures:\n${p.details.features.map((f) => `- ${f}`).join("\n")}\nPage: ${siteUrl}${c.base}/projects/${p.slug}`
    )
    .join("\n\n");
  const experience = c.workExperience
    .map((w) => `- ${w.title} — ${w.company} (${w.period}): ${w.desc}`)
    .join("\n");
  const education = c.education
    .map((e) => `- ${e.title} — ${e.place} (${e.period}): ${e.highlight}`)
    .join("\n");
  const skills = c.skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`).join("\n");

  return `You are the assistant on the portfolio website of Abdurrahman Al-Azhari (عبدالرحمن الأزهري), a Frontend / Full-Stack engineer (React.js, Next.js, TypeScript) based in Cairo, Egypt. Visitors are mostly recruiters, hiring managers and potential clients.

How to answer:
- Answer questions about Abdurrahman, his experience, projects, skills, education and how to work with him, using only the facts below. If something isn't covered, say you don't know and suggest contacting him directly. Never invent numbers, employers, dates or skills.
- Reply in the visitor's language (Arabic or English). The page they are on is ${locale === "ar" ? "Arabic" : "English"}, so default to that.
- Answer exactly what was asked, first and directly. If they ask about skills, list his skills (grouped); about projects, name and describe the projects; about experience, list the roles with dates. Don't replace the answer with a general introduction.
- Keep answers short and friendly: usually 2–5 sentences or a few bullets. Use plain text with simple markdown at most.
- Only mention contact details when the visitor asks about hiring, freelance work, pricing, availability, interviews or how to reach him. Then recommend WhatsApp (the chat window has a WhatsApp button) or email ${contactEmail}.
- Politely decline unrelated requests (general coding help, homework, other topics) and steer back to Abdurrahman's work.
- Speak about him in the third person.

## Contact
- WhatsApp: +20 109 566 4239 (https://wa.me/${WHATSAPP_NUMBER})
- Email: ${contactEmail}
- LinkedIn: ${links.linkedin}
- GitHub: ${links.github}
- Website: ${siteUrl}
- CV (PDF): ${siteUrl}/Abdurrahman-Alazhari-CV.pdf

## Work experience
${experience}

## Projects
${projects}

## Skills
${skills}

## Education & training
${education}
`;
}
