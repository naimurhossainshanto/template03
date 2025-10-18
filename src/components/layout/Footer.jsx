import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-24 lg:pb-6 ">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Food<span className="text-red-500"> X</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Taste the future of flavor. Food X brings you handcrafted dishes,
            made with passion and served with perfection — every single time.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Menu", "Promise", "Reservations", "FAQ"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-red-500" />
              45 Rampura Bonani, Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-red-500" />
              01645-455710
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-red-500" />
              contact@foodx.com
            </li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
          <div className="flex flex-wrap gap-4 justify-start items-center">
            <img
              src="/images/Visa.svg"
              alt="Visa"
              className="h-10 bg-white p-2 rounded shadow-sm"
            />
            <img
              src="/images/Mastercard.svg"
              alt="MasterCard"
              className="h-10 bg-white p-2 rounded shadow-sm"
            />
            <img
              src="/images/bkash.svg"
              alt="bKash"
              className="h-10 bg-white p-2 rounded shadow-sm"
            />
            <img
              src="/images/Nagad.svg"
              alt="Nagad"
              className="h-10 bg-white p-2 rounded shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 mb-6 opacity-30"></div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500">
        © {currentYear} <span className="text-red-500 font-semibold">Food X</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
