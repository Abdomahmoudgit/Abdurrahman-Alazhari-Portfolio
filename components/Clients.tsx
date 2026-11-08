"use client";

import Image from "next/image";

import type { Content, Heading } from "@/data";
import SectionHeading from "./SectionHeading";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const logoClass =
  "rounded-full w-16 h-16 border-4 border-line/20 shadow-lg object-cover transition-transform hover:scale-110";

const Clients = ({
  testimonials,
  companies,
  heading,
  rtl,
}: {
  testimonials: Content["testimonials"];
  companies: Content["companies"];
  heading: Heading;
  rtl: boolean;
}) => {
  return (
    <section id="testimonials" className="py-20">
      <SectionHeading heading={heading} />

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[80vh] lg:h-[60vh] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" rtl={rtl} />
        </div>

        <div className="flex flex-wrap items-start justify-center gap-4 md:gap-x-4 md:gap-y-6 xl:gap-x-8 mt-10">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center justify-center m-4 gap-2 w-[120px] md:w-auto md:max-w-[240px]"
            >
              {company.img ? (
                <Image
                  src={company.img}
                  alt={company.name}
                  width={64}
                  height={64}
                  className={`${logoClass} p-1 bg-white`}
                />
              ) : (
                <div
                  className={`${logoClass} flex items-center justify-center bg-chip text-2xl font-bold text-purple`}
                  aria-hidden="true"
                >
                  {company.name.charAt(0)}
                </div>
              )}
              <span className="text-center font-semibold text-purple text-sm md:text-base">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
