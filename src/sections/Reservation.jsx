import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Reservation = () => {
  const reservationImg = "/images/reservation.png";
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleBookNow = (e) => {
    e.preventDefault();
    setMessage("🎉 Your table has been booked successfully!");
    setTimeout(() => setMessage(""), 4000);
  };

  return (
    <div
      id="Reservations"
      className="w-full bg-[#F7F5DD] py-8 md:py-12 lg:py-16 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 overflow-hidden px-6 md:px-12">
        {/* Left Side */}
        <div
          className="w-full lg:w-[50%] flex flex-col items-start justify-center gap-4"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-red-500"></div>
              <p className="font-roboto md:text-lg text-base font-bold text-red-500">
                Book Now
              </p>
            </div>

            <h5 className="font-greatvibes md:text-[56px] text-[42px] font-normal text-black leading-tight">
              Book Your Table
            </h5>
          </div>

          <p className="font-roboto text-base font-normal leading-[22px] text-gray-700 max-w-md">
            Emin tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form
            onSubmit={handleBookNow}
            className="w-full max-w-md flex flex-col gap-3 mt-2"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Your Name*"
                required
                className="w-full h-[42px] py-2 px-4 text-gray-800 bg-transparent outline-none border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-[42px] py-2 px-4 text-gray-800 bg-transparent outline-none border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full h-[42px] py-2 px-4 text-gray-800 bg-transparent outline-none border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Total People"
                className="w-full h-[42px] py-2 px-4 text-gray-800 bg-transparent outline-none border border-gray-300 rounded"
              />
            </div>

            <textarea
              placeholder="Message"
              rows={3}
              className="w-full py-2 px-4 text-gray-800 bg-transparent outline-none border border-gray-300 resize-none rounded"
            ></textarea>

            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-red-500 text-white font-roboto font-bold text-base rounded hover:bg-red-600 transition-colors duration-300"
            >
              Book Now
            </button>
          </form>

          {message && (
            <p className="text-green-600 font-semibold mt-3 animate-fadeIn max-w-md">
              {message}
            </p>
          )}
        </div>

        {/* Right Side Image */}
        <div
          className="w-full lg:w-[50%] flex items-center justify-center lg:justify-end overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src={reservationImg}
            alt="Restaurant Reservation"
            className="w-full max-w-[520px] object-contain lg:translate-x-[-10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
