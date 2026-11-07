import { education, skills } from "@/data";

const cardStyle = {
  background:
    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">skills & education</span>
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {skills.map(({ group, items }) => (
          <div
            key={group}
            className="rounded-3xl border border-white/[0.1] p-6 lg:p-8"
            style={cardStyle}
          >
            <h2 className="text-xl lg:text-2xl font-bold mb-5">{group}</h2>
            <ul className="flex flex-wrap gap-2 lg:gap-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="py-2 px-3 text-xs lg:text-sm rounded-lg bg-[#10132E] text-white-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ol className="relative mt-16 max-w-3xl mx-auto border-s border-white/[0.15]">
        {education.map((item) => (
          <li key={item.id} className="ms-6 mb-10 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -start-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-purple ring-4 ring-black-100"
            />
            <time className="text-xs md:text-sm text-white-200">
              {item.period}
            </time>
            <h3 className="text-lg md:text-xl font-bold mt-1">{item.title}</h3>
            <p className="text-sm md:text-base text-purple">{item.place}</p>
            <p className="text-sm text-white-100 mt-1">{item.highlight}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Skills;
