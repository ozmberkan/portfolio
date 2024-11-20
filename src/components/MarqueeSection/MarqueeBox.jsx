import moment from "moment";
import React from "react";

const MarqueeBox = ({ front }) => {
  const currentYear = moment().format("YYYY");

  return (
    <div className="flex bg-white shadow border p-5 rounded-xl mx-5 gap-x-5 items-center">
      <img src={front.image} className="" />
      <div>
        <h1 className="font-inter font-medium text-neutral-800">
          {front.title}
        </h1>
        <h1 className="font-inter text-sm text-neutral-500">
          {front.description}
        </h1>
        <h1 className="font-inter text-xs text-neutral-500">
          Using for {currentYear - front.since} years
        </h1>
      </div>
    </div>
  );
};

export default MarqueeBox;
