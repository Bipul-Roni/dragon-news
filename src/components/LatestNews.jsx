import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <h1 className="text-base bg-secondary px-2 py-2 text-white">Latest</h1>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
