import React from "react";

const Banner = () => {
  return (
    <section className="pr-28">
      <div className="flex justify-between align-middle p-12 rounded-md mx-5 bg-gradient-to-r from-mygradientpurple to-mygradientorange max-h-44 min-h-max">
        <div className="text-black">
          <small className="text-xs">Request Early Access to Get Started</small>
          <p className="text-2xl font-bold">
            Register today & start exploring the endless possiblities.
          </p>
        </div>
        <div>
          <a
            href="#"
            className="bg-black py-3 px-8 rounded-full relative top-5"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
