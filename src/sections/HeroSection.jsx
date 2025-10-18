import React from "react";

const HeroSection = () => {
  return (
    <div id="hero" className="bg-red-950 text-white overflow-hidden">
      <div className="flex flex-col justify-center items-center relative px-4 pt-10 md:pt-16 lg:pt-20">
        {/* Title */}
        <h1
          className="text-center font-extrabold uppercase
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     leading-snug md:leading-tight 
                     absolute top-4 sm:top-6 md:top-10 drop-shadow-xl"
        >
          Let&apos;s start <br /> ordering your delicious food
        </h1>

        {/* Hero Image */}
        <img
          src="/images/hero-main.png"
          alt="Delicious Food"
          className="relative 
                     w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] 
                     h-auto mt-24 sm:mt-28 md:mt-32 lg:mt-0
                     transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HeroSection;
