import type { Content, Heading } from "@/data";
import SectionHeading from "./SectionHeading";

const Skills = ({
  skills,
  education,
  heading,
}: {
  skills: Content["skills"];
  education: Content["education"];
  heading: Heading;
}) => {
  return (
    <section id="skills" className="py-20 w-full">
      <SectionHeading heading={heading} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {skills.map(({ group, items }) => (
          <div key={group} className="rounded-3xl border border-line/10 p-6 lg:p-8 card-surface">
            <h3 className="text-xl lg:text-2xl font-bold mb-5 text-fg">{group}</h3>
            <ul className="flex flex-wrap gap-2 lg:gap-3">
              {items.map((item) => (
                <li key={item} className="py-2 px-3 text-xs lg:text-sm rounded-lg bg-chip text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ol className="relative mt-16 max-w-3xl mx-auto border-s border-line/15">
        {education.map((item) => (
          <li key={item.id} className="ms-6 mb-10 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -start-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-purple ring-4 ring-page"
            />
            <time className="text-xs md:text-sm text-fg-soft">{item.period}</time>
            <h3 className="text-lg md:text-xl font-bold mt-1 text-fg">{item.title}</h3>
            <p className="text-sm md:text-base text-purple">{item.place}</p>
            <p className="text-sm text-fg-muted mt-1">{item.highlight}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Skills;
