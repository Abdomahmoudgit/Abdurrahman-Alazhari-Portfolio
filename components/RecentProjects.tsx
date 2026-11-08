"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLocationArrow } from "react-icons/fa6";

import type { Content, Heading } from "@/data";
import SectionHeading from "./SectionHeading";
import { PinContainer } from "./ui/Pin";

const linkClass = "flex items-center gap-1.5 text-sm lg:text-base transition-colors";

const RecentProjects = ({
  projects,
  heading,
  ui,
  base,
}: {
  projects: Content["projects"];
  heading: Heading;
  ui: Content["ui"];
  base: string;
}) => {
  return (
    <section id="projects" className="py-20">
      <SectionHeading heading={heading} />
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        {projects.map((item) => (
          // Plain div: PinContainer renders its own <a>, and nested anchors are invalid HTML.
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <Image src="/bg.png" alt="" fill sizes="384px" className="object-cover" />
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={384}
                  height={216}
                  sizes="(max-width: 640px) 80vw, 384px"
                  className="z-10 absolute bottom-0 w-full h-auto"
                />
              </div>

              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-fg">
                {item.title}
              </h3>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-fg-muted my-[1vh]">
                {item.des}
              </p>

              <div className="flex items-center justify-between gap-3 mt-7 mb-3">
                <div className="flex items-center" dir="ltr">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <Image src={icon} alt="" width={40} height={40} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 lg:gap-4 shrink-0">
                  <Link
                    href={`${base}/projects/${item.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`${linkClass} text-fg-muted hover:text-fg`}
                  >
                    {ui.details}
                    <FaArrowRight className="h-3 w-3 rtl:-scale-x-100" />
                  </Link>
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${ui.github} — ${item.title}`}
                      className={`${linkClass} text-fg-muted hover:text-fg`}
                    >
                      <FaGithub />
                      <span className="hidden sm:inline">{ui.github}</span>
                    </a>
                  )}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`${linkClass} text-purple hover:opacity-80`}
                  >
                    {ui.liveSite}
                    <FaLocationArrow className="h-3 w-3 rtl:-scale-x-100" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
