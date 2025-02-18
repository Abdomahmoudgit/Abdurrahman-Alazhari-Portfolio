"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        What I&apos;ve <span className="text-purple">accomplished so far</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[80vh] lg:h-[60vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex flex-col items-center justify-center m-4 gap-2 max-w-[160px] md:max-w-[240px]">
                <div className="">
                  <img
                    src={company.img}
                    alt={company.name || "Company logo"}
                    className="m-2 md:m-0 rounded-full w-16 h-16 border-4 border-white/30 shadow-lg object-cover transition-transform transform hover:scale-110"
                  />
                </div>
                <span className="text-center font-semibold text-purple shadow-sm text-sm md:text-base">
                  {company.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
