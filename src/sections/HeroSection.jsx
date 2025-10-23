import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div id="hero" className="bg-red-950 text-white mt-14">
      <div className="flex flex-col justify-center items-center relative px-4 pt-10 md:pt-16 lg:pt-20">
        {/* Title */}
        <motion.h1
          className="text-center font-extrabold uppercase
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     leading-snug md:leading-tight 
                     absolute top-4 sm:top-6 md:top-10 drop-shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let&apos;s start <br /> ordering your delicious food
        </motion.h1>

        {/* Hero Image */}
        <motion.img
          src="/images/hero-main.png"
          alt="Delicious Food"
          className="relative 
                     w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] 
                     h-auto mt-24 sm:mt-28 md:mt-32 lg:mt-0
                     transition-all duration-500 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
