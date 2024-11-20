import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeBox from "./MarqueeBox";
import { backendTechnologies, frontendTechnologies } from "~/data/data";

const MarqueeSection = () => {
  return (
    <div className="relative w-full flex-col gap-5 flex overflow-hidden">
      <Marquee
        speed={50}
        gradient={true}
        direction="left"
        className=" space-x-5"
      >
        {frontendTechnologies.map((front) => (
          <MarqueeBox key={front.id} front={front} />
        ))}
      </Marquee>

      <Marquee
        speed={50}
        gradient={true}
        direction="right"
        className="space-x-5"
      >
        {backendTechnologies.map((front) => (
          <MarqueeBox key={front.id} front={front} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
