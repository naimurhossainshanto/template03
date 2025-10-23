import { useEffect, useState, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';

const Trending = () => {
  const trendingSushis = [
    { name: 'Make Sushi', img: 'https://i.pinimg.com/1200x/80/f7/05/80f705ba53b30ac7b588ffc4f977d9c2.jpg' },
    { name: 'Nigiri Sushi', img: 'https://i.pinimg.com/1200x/17/eb/e4/17ebe4e3fae17fba0babd765fd782390.jpg' },
    { name: 'Oshizushi', img: 'https://i.pinimg.com/736x/2e/67/1e/2e671e74ff11a3f2307838dcaf566c72.jpg' },
    { name: 'Temaki Sushi', img: 'https://i.pinimg.com/736x/c8/c7/d9/c8c7d9fd19f6ec1faf42b36455dba121.jpg' },
    { name: 'Uramaki Sushi', img: 'https://i.pinimg.com/736x/f5/42/be/f542be7690b729db89f39ac5c8fa78ef.jpg' },
    { name: 'Inari Sushi', img: 'https://i.pinimg.com/736x/e8/95/41/e89541dbf2b37ff2132c3710b312355d.jpg' }
  ];

  const trendingDrinks = [
    { name: "Oruncha", img: 'https://i.pinimg.com/1200x/c9/da/4e/c9da4eb623e71113cec90c79b2e46f3e.jpg' },
    { name: "Ofukucha", img: 'https://i.pinimg.com/1200x/fa/68/2e/fa682e7f9f482727cc11335d6f72285d.jpg' },
    { name: "Sakura Tea", img: 'https://i.pinimg.com/1200x/e9/b3/f8/e9b3f84bae65af2f68be7541532ea5f3.jpg' },
    { name: "Kombu-cha", img: 'https://i.pinimg.com/1200x/c0/cb/00/c0cb002de17598ed66e913ce8c063eae.jpg' },
    { name: "Aojiru", img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop' },
    { name: "Mugicha", img: 'https://i.pinimg.com/1200x/0b/e2/fb/0be2fbcedaefc9453ef97af57603bbcf.jpg' }
  ];

  const sushiImages = [
    'https://i.pinimg.com/1200x/7a/86/5f/7a865f95645f3d5c447c1c8699e71619.jpg',
    'https://i.pinimg.com/1200x/b8/cd/81/b8cd810ac8b71bd87fc458c33f0d2b55.jpg',
    'https://i.pinimg.com/736x/cc/f2/33/ccf2339740514d6a2e1b08d4d8145b23.jpg'
  ];

  const drinkImages = [
    'https://i.pinimg.com/1200x/80/8e/14/808e1444826ae4589e40e6b4d230bb63.jpg',
    'https://i.pinimg.com/1200x/7a/1a/9b/7a1a9b4404abb9c83baae2511bd85a8b.jpg',
    'https://i.pinimg.com/1200x/5a/2f/91/5a2f91d331c84735764e1549c3a9755e.jpg'
  ];

  const [currentSushiIndex, setCurrentSushiIndex] = useState(0);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [isSushiTransitioning, setIsSushiTransitioning] = useState(false);
  const [isDrinkTransitioning, setIsDrinkTransitioning] = useState(false);
  const [selectedSushi, setSelectedSushi] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const smoothTransition = useCallback((setIndex, imageCount, setIsTransitioning, direction = 1) => {
    setIsTransitioning(true);
    setIndex(prev => (prev + direction + imageCount) % imageCount);
    setTimeout(() => setIsTransitioning(false), 800);
  }, []);

  useEffect(() => {
    const initAOS = async () => {
      if (typeof window !== 'undefined') {
        const AOS = (await import('aos')).default;
        AOS.init({ 
          duration: 1000, 
          easing: 'ease-in-out-cubic', 
          offset: 50,
          once: false, // This ensures animation triggers every time element comes into view
          mirror: true // This ensures animation triggers when scrolling back up
        });
        
        // Refresh AOS on scroll to ensure animations work properly
        const handleScroll = () => {
          AOS.refresh();
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    };
    initAOS();
  }, []);

  // Auto-play Sushi
  useEffect(() => {
    if (!selectedSushi) {
      const sushiInterval = setInterval(() => {
        if (!isSushiTransitioning) {
          smoothTransition(setCurrentSushiIndex, sushiImages.length, setIsSushiTransitioning);
        }
      }, 4000);
      return () => clearInterval(sushiInterval);
    }
  }, [isSushiTransitioning, sushiImages.length, smoothTransition, selectedSushi]);

  // Auto-play Drinks
  useEffect(() => {
    if (!selectedDrink) {
      const drinkInterval = setInterval(() => {
        if (!isDrinkTransitioning) {
          smoothTransition(setCurrentDrinkIndex, drinkImages.length, setIsDrinkTransitioning);
        }
      }, 4000);
      return () => clearInterval(drinkInterval);
    }
  }, [isDrinkTransitioning, drinkImages.length, smoothTransition, selectedDrink]);

  const displayedSushiImage = selectedSushi || sushiImages[currentSushiIndex];
  const displayedDrinkImage = selectedDrink || drinkImages[currentDrinkIndex];

  return (
    <section  className="relative flex flex-col overflow-hidden bg-red-900" id="food">
      {/* Sushi Section */}
      <section className="w-full min-h-[350px] md:min-h-[500px] flex flex-wrap">
        <div id="menu" className="w-1/2 flex flex-col justify-center px-4 md:px-16 py-4 md:py-6" style={{ backgroundColor: '#F9EBD8' }} data-aos="fade-right">
          <p className="text-red-800 text-xs md:text-sm mb-2 font-medium">What's Sunday / 1-2-7</p>
          <h3 className="text-red-900 text-xl md:text-3xl font-bold mb-3">Japanese Sushi</h3>
          <p className="text-red-700 text-sm md:text-base mb-4">Put in the taste of the most delicious South Fans.</p>

          <ul className="flex flex-col gap-2 md:gap-3 mt-2">
            {trendingSushis.map((item, index) => (
              <li key={index} className="flex items-center gap-3 w-full" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                <img src={item.img} alt={item.name} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border border-red-400" />
                <div
                  onClick={() => setSelectedSushi(item.img)}
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-all duration-300"
                >
                  <FaEye className="text-white w-3 h-3 md:w-4 md:h-4" />
                </div>
                <p className="flex-1 text-sm md:text-base font-medium text-red-900">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Sushi Preview */}
        <div className="w-1/2 relative px-4 md:px-16 py-4 md:py-6 bg-white flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]" data-aos="fade-left">
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${isSushiTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
            style={{ backgroundImage: `url('${displayedSushiImage}')` }}
          />
          {/* Arrows */}
          <button
            onClick={() => {
              setSelectedSushi(null);
              smoothTransition(setCurrentSushiIndex, sushiImages.length, setIsSushiTransitioning, -1);
            }}
            className="absolute left-4 z-20 bg-white/70 hover:bg-white text-red-700 p-2 md:p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button
            onClick={() => {
              setSelectedSushi(null);
              smoothTransition(setCurrentSushiIndex, sushiImages.length, setIsSushiTransitioning, 1);
            }}
            className="absolute right-4 z-20 bg-white/70 hover:bg-white text-red-700 p-2 md:p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          <div className="absolute bottom-4 right-4 z-20">
            <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 bg-red-700 text-white text-sm md:text-base font-medium rounded-md group">
              <span className="relative z-10">Order Now</span>
              <span className="absolute inset-0 bg-red-900 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </section>

      {/* MENU Circle */}
      <div className="absolute top-[44%] left-1/2 transform -translate-x-1/2 lg:left-[44%] lg:translate-x-0 z-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-red-900 cursor-pointer flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300" data-aos="zoom-in">
        <p className="text-xs font-medium text-white uppercase tracking-wide">MENU</p>
      </div>

      {/* Drink Section */}
      <section className="w-full min-h-[350px] md:min-h-[500px] flex flex-wrap">
        <div className="w-1/2 relative px-4 md:px-16 py-4 md:py-6 bg-white flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]" data-aos="fade-right">
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${isDrinkTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
            style={{ backgroundImage: `url('${displayedDrinkImage}')` }}
          />
          {/* Arrows */}
          <button
            onClick={() => {
              setSelectedDrink(null);
              smoothTransition(setCurrentDrinkIndex, drinkImages.length, setIsDrinkTransitioning, -1);
            }}
            className="absolute left-4 z-20 bg-white/70 hover:bg-white text-red-700 p-2 md:p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button
            onClick={() => {
              setSelectedDrink(null);
              smoothTransition(setCurrentDrinkIndex, drinkImages.length, setIsDrinkTransitioning, 1);
            }}
            className="absolute right-4 z-20 bg-white/70 hover:bg-white text-red-700 p-2 md:p-3 rounded-full transition-all duration-300 cursor-pointer"
          >
            <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>

          <div className="absolute bottom-4 right-4 z-20">
            <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 bg-red-700 text-white text-sm md:text-base font-medium rounded-md group">
              <span className="relative z-10">Order Now</span>
              <span className="absolute inset-0 bg-red-900 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center px-4 md:px-16 py-4 md:py-6" style={{ backgroundColor: '#F9EBD8' }} data-aos="fade-left">
          <p className="text-red-800 text-xs md:text-sm mb-2 font-medium">What's Tuesday / 1-2-7</p>
          <h3 className="text-red-900 text-xl md:text-3xl font-bold mb-3">Japanese Drinks</h3>
          <p className="text-red-700 text-sm md:text-base mb-4">Brunch yourself with the most authentic Japanese drink.</p>

          <ul className="flex flex-col gap-2 md:gap-3 mt-2">
            {trendingDrinks.map((item, index) => (
              <li key={index} className="flex items-center gap-3 w-full" data-aos="fade-up" data-aos-delay={200 + index * 100}>
                <img src={item.img} alt={item.name} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border border-red-400" />
                <div
                  onClick={() => setSelectedDrink(item.img)}
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-all duration-300"
                >
                  <FaEye className="text-white w-3 h-3 md:w-4 md:h-4" />
                </div>
                <p className="flex-1 text-sm md:text-base font-medium text-red-900">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Trending;