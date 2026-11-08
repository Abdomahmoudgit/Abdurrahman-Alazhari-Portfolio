import type { Content } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = ({ items, ui }: { items: Content["gridItems"]; ui: Content["ui"] }) => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-10 md:py-20">
        {items.map((item) => (
          <BentoGridItem key={item.id} item={item} ui={ui} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
