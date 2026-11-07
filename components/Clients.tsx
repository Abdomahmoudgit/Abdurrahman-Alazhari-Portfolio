"use client";

import Image from "next/image";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const logoClass =
  "rounded-full w-16 h-16 border-4 border-white/30 shadow-lg object-cover transition-transform hover:scale-110";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        What I&apos;ve <span className="text-purple">accomplished so far</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[80vh] lg:h-[60vh] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center justify-center m-4 gap-2 max-w-[160px] md:max-w-[240px]"
            >
              {company.img ? (
                <Image
                  src={company.img}
                  alt={company.name}
                  width={64}
                  height={64}
                  className={`${logoClass} p-1 bg-white/5`}
                />
              ) : (
                <div
                  className={`${logoClass} flex items-center justify-center bg-[#10132E] text-2xl font-bold text-purple`}
                  aria-hidden="true"
                >
                  {company.name.charAt(0)}
                </div>
              )}
              <span className="text-center font-semibold text-purple shadow-sm text-sm md:text-base">
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
