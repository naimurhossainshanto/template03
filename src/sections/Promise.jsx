// src/components/Promise.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PromiseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const chefImage = "/images/chef.png";

  const DecorativeArrow = () => (
    <svg
      className="w-20 h-14 md:w-24 md:h-16 mb-4 md:mb-6 -ml-2 md:-ml-4"
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <path 
        d="M10 40 Q 30 0, 60 40 T 100 40" 
        stroke="black" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
      />
      <path 
        d="M90 35 L 100 40 L 90 45" 
        stroke="black" 
        strokeWidth="3" 
        fill="none" 
      />
    </svg>
  );

  const DecorativeFlower = () => (
    <svg
      className="w-10 h-10 md:w-12 md:h-12 fill-current text-gray-400 opacity-50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-aos="zoom-in"
      data-aos-delay="800"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"/>
    </svg>
  );

  return (
    <section
      className="relative w-full min-h-[40vh] md:min-h-[50vh] bg-[#7c2a2a] text-white py-6 md:py-10 px-4 md:px-8 lg:px-16 flex flex-col justify-center overflow-x-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div id="promise" className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <DecorativeArrow />

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-greatvibes mb-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Our Vision
          </h1>

          <div className="space-y-3">
            <p
              className="text-sm md:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the Blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>

          <div 
            className="mt-6"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <DecorativeFlower />
          </div>
        </div>

        {/* Image Content */}
        <div
          className="w-full md:w-1/2 flex items-center justify-end"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src={chefImage}
            alt="Professional chef preparing food"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
