"use client";

import Image from "next/image";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h2 className="heading">
        A glimpse of my <span className="text-purple">latest projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          // Plain div: PinContainer already renders its own <a>, and nested
          // anchors are invalid HTML (hydration errors).
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt=""
                    fill
                    sizes="384px"
                    className="object-cover"
                  />
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

              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h3>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt=""
                        width={40}
                        height={40}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 lg:gap-5">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm lg:text-lg text-white-100 hover:text-white transition-colors"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm lg:text-lg text-purple hover:opacity-80 transition-opacity"
                  >
                    Live Site
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
