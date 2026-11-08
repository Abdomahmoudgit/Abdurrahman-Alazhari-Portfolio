"use client";

import Image from "next/image";

import type { Content, Heading } from "@/data";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/MovingBorders";

const Experience = ({
  items,
  heading,
}: {
  items: Content["workExperience"];
  heading: Heading;
}) => {
  return (
    <section id="experience" className="py-20 w-full">
      <SectionHeading heading={heading} />

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-6 md:gap-10">
        {items.map((card, i) => (
          <Button
            key={card.id}
            // Fixed per-card duration (Math.random here caused hydration mismatches)
            duration={12000 + i * 2500}
            borderRadius="1.75rem"
            as="div"
            // The newest role spans the full row on desktop; the rest sit two per row.
            containerClassName={i === 0 ? "card-surface lg:col-span-4" : "card-surface"}
            className="flex-1"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-5 lg:p-10 gap-3">
              <Image
                src={card.thumbnail}
                alt=""
                width={128}
                height={120}
                className="lg:w-32 md:w-20 w-16 h-auto shrink-0"
              />
              <div className="lg:ms-5">
                <h3 className="text-start text-xl md:text-2xl font-bold text-fg">{card.title}</h3>
                <p className="text-start text-purple text-sm md:text-base mt-1">{card.company}</p>
                <p className="text-start text-fg-soft text-xs md:text-sm mt-1">{card.period}</p>
                <p className="text-start text-fg-muted mt-3 text-sm md:text-base font-medium leading-relaxed rtl:leading-loose">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
