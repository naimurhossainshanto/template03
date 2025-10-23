import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';


const FAQIllustration = () => {
  return (
    <div id="faq" className="w-full h-full flex items-center justify-center mt-8">
     
      <img 
        src="/images/faq-illustration.svg" 
        alt="FAQ Illustration"
        className="w-4/5 max-w-md"
        onError={(e) => {
          
          e.target.src = "/images/faq-illustration.png";
        }}
      />
    </div>
  );
};


const DefaultFAQIllustration = () => {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full h-full mt-8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="300" cy="200" r="180" fill="#FEF3C7" fillOpacity="0.3" />
      
      {/* Main Question Mark */}
      <path
        d="M250 100C250 83.4315 263.431 70 280 70C296.569 70 310 83.4315 310 70C310 56.4315 296.569 70 280 70C263.431 70 250 83.4315 250 100V150C250 166.569 263.431 180 280 180C296.569 180 310 166.569 310 150V130"
        stroke="#F59E0B"
        strokeWidth="12"
        strokeLinecap="round"
      />
      
      {/* Dot */}
      <circle cx="280" cy="230" r="10" fill="#F59E0B" />
      
      {/* Floating Elements */}
      <circle cx="150" cy="120" r="8" fill="#60A5FA" fillOpacity="0.6" />
      <circle cx="450" cy="280" r="6" fill="#10B981" fillOpacity="0.6" />
      <circle cx="180" cy="300" r="10" fill="#F59E0B" fillOpacity="0.4" />
      <circle cx="400" cy="100" r="7" fill="#8B5CF6" fillOpacity="0.5" />
      
      {/* Thought Bubbles */}
      <path
        d="M350 150C350 160 355 165 365 165C375 165 380 160 380 150C380 140 375 135 365 135C355 135 350 140 350 150Z"
        fill="#E5E7EB"
      />
      <path
        d="M200 250C200 240 195 235 185 235C175 235 170 240 170 250C170 260 175 265 185 265C195 265 200 260 200 250Z"
        fill="#E5E7EB"
      />
    </svg>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const lenis = new Lenis();
      lenis.scrollTo(contentRef.current, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }, [isOpen]);

  return (
    <div 
      className="py-3" 
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <button
        className="flex justify-between items-center w-full text-left hover:bg-[#FFE2E2] rounded-lg px-3 py-3 transition-colors bg-[#FFE2E2] mb-2" // bg-[#FFE2E2] color added
        onClick={onClick}
      >
        <h3 className="text-sm md:text-base font-semibold text-gray-900 pr-3 leading-tight">
          {question}
        </h3>
        <svg
          className={`w-4 h-4 text-orange-500 transform transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed px-3 pb-2 bg-white rounded-lg py-3">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const lenisRef = useRef(null);

  const faqData = [
    {
      question: "How do I create an account?",
      answer: "Click 'Sign Up', fill your details, verify email, and start using our services."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, PayPal, and bank transfers. All payments are secure."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, cancel anytime without fees. Access continues until billing cycle ends."
    },
    {
      question: "How to reset password?",
      answer: "Click 'Forgot Password', enter email, follow reset link to create new password."
    },
    {
      question: "Is mobile app available?",
      answer: "Yes, available on iOS and Android. Download from App Store or Google Play."
    },
    {
      question: "How to contact support?",
      answer: "24/7 support via live chat, email, or phone. Response within 1-2 hours."
    }
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Refresh AOS when Lenis updates
    lenis.on('scroll', () => {
      AOS.refresh();
    });

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8" data-aos="fade-down">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Left Side - Image from public/images folder */}
          <div 
            className="flex items-center justify-center order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="w-full max-w-sm lg:max-w-md">
             
              <FAQIllustration />
            </div>
          </div>

         
          <div 
            className="bg-white p-3 md:p-4 order-1 lg:order-2" 
            data-aos="fade-left"
            data-aos-delay="200"
            style={{ maxHeight: '450px', overflowY: 'auto' }}
          >
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                Quick Answers
              </h2>
              <p className="text-gray-600 text-xs">
                Click questions for details
              </p>
            </div>

            <div className="space-y-3"> 
              {faqData.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleQuestionClick(index)}
                  index={index}
                />
              ))}
            </div>

           
            <div 
              className="mt-6 p-3 bg-orange-50" 
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                Still need help?
              </h3>
              <p className="text-gray-600 text-xs mb-2">
                Contact our friendly team.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-3 rounded text-xs transition duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;