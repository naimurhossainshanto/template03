// Menu.jsx
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images from public folder
import trufflePastaImage from '/images/truffle-pasta.jpg';
import searedSalmonImage from '/images/seared-salmon.jpg';
import beefWellingtonImage from '/images/beef-wellington.jpg';
import lobsterRisottoImage from '/images/lobster-risotto.jpg';
import chocolateTartImage from '/images/chocolate-tart.jpg';
import vegetableStirFryImage from '/images/vegetable-stir-fry.jpg';

const Menu = () => {
  const [activePreview, setActivePreview] = useState(null);

  const foodData = {
    'truffle-pasta': {
      title: 'Truffle Pasta',
      description: 'Handmade pasta with rich truffle sauce, premium Italian truffles, and fresh herbs.',
      image: trufflePastaImage
    },
    'seared-salmon': {
      title: 'Seared Salmon',
      description: 'Perfectly cooked salmon with crispy skin, served with lemon butter sauce and seasonal vegetables.',
      image: searedSalmonImage
    },
    'beef-wellington': {
      title: 'Beef Wellington',
      description: 'Tender beef fillet wrapped in mushroom duxelles and golden puff pastry.',
      image: beefWellingtonImage
    },
    'lobster-risotto': {
      title: 'Lobster Risotto',
      description: 'Succulent lobster chunks in creamy saffron-infused risotto with fresh herbs and Parmesan.',
      image: lobsterRisottoImage
    },
    'chocolate-tart': {
      title: 'Chocolate Tart',
      description: 'Rich dark chocolate filling in buttery crust, topped with whipped cream and chocolate shavings.',
      image: chocolateTartImage
    },
    'vegetable-stir-fry': {
      title: 'Vegetable Stir Fry',
      description: 'Colorful seasonal vegetables stir-fried in savory ginger-garlic sauce.',
      image: vegetableStirFryImage
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100
    });
  }, []);

  const openPreview = (foodId) => {
    setActivePreview(foodId);
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setActivePreview(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activePreview) {
        closePreview();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [activePreview]);

  const currentFood = activePreview ? foodData[activePreview] : null;

  return (
    <div className="min-h-screen bg-red-50 font-roboto">
      <div className="max-w-5xl px-4 py-8 mx-auto">
        {/* Our Menu Section */}
        <section className="p-4 sm:p-6 bg-red-50 rounded-lg">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-[#121211db] mb-6 border-b-2 border-[#171615c5] pb-2 text-center font-mono"
            data-aos="fade-down"
          >
            OUR MENU
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {Object.entries(foodData).map(([key, food], index) => (
              <div 
                key={key}
                className="group bg-white p-3 sm:p-4 rounded-lg border border-[#0f0f0eb7] flex flex-col items-center text-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openPreview(key)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={food.image} 
                    alt={food.title} 
                    className="object-cover w-full h-40 sm:h-48 mb-3 transition-all duration-500 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                
                <h3 className="mb-2 text-base sm:text-lg font-bold text-gray-800">{food.title}</h3>
                
                <button 
                  className="bg-[#171715] text-[#d4af37] px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm w-full opacity-0 sm:opacity-100 sm:translate-y-0 translate-y-5 transition-all duration-500 hover:bg-black hover:text-[#d4af37] relative overflow-hidden group-hover:opacity-100 group-hover:translate-y-0 font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    openPreview(key);
                  }}
                >
                  <span className="relative z-10">ORDER NOW</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Food Preview Modal */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 bg-transparent bg-opacity-70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closePreview()}
        >
          <div 
            className="bg-white border-2 border-[#676747] rounded-xl max-w-md w-full mx-4 flex flex-col p-4 sm:p-6 relative animate-scaleIn"
            data-aos="zoom-in"
          >
            <button 
              className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-transparent border-none text-2xl text-[#1b1b1a] cursor-pointer z-10 transition-all duration-300 p-1 rounded-full hover:rotate-90 hover:text-red-600 hover:bg-gray-100"
              onClick={closePreview}
            >
              ×
            </button>
            
            <div className="mb-4">
              <img 
                src={currentFood.image} 
                alt={currentFood.title} 
                className="object-cover w-full h-40 sm:h-48 rounded-lg shadow-md"
              />
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-[#d4af37] mb-3 text-center font-bold">{currentFood.title}</h2>
              <p className="mb-4 sm:mb-6 leading-relaxed text-gray-700 text-sm sm:text-base text-center px-2">
                {currentFood.description}
              </p>
              <div className="w-full">
                <button className="bg-[#131211] text-[#d4af37] px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full relative overflow-hidden hover:bg-black hover:text-[#d4af37] transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                  <span className="relative z-10">ORDER NOW - $24.99</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;