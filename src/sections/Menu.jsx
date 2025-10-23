import { useEffect, useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight, FaEye } from "react-icons/fa";

const Trending = () => {
  const trendingSushis = [
    { name: "Make Sushi", img: "https://i.pinimg.com/1200x/80/f7/05/80f705ba53b30ac7b588ffc4f977d9c2.jpg" },
    { name: "Nigiri Sushi", img: "https://i.pinimg.com/1200x/17/eb/e4/17ebe4e3fae17fba0babd765fd782390.jpg" },
    { name: "Oshizushi", img: "https://i.pinimg.com/736x/2e/67/1e/2e671e74ff11a3f2307838dcaf566c72.jpg" },
    { name: "Temaki Sushi", img: "https://i.pinimg.com/736x/c8/c7/d9/c8c7d9fd19f6ec1faf42b36455dba121.jpg" },
    { name: "Uramaki Sushi", img: "https://i.pinimg.com/736x/f5/42/be/f542be7690b729db89f39ac5c8fa78ef.jpg" },
    { name: "Inari Sushi", img: "https://i.pinimg.com/736x/e8/95/41/e89541dbf2b37ff2132c3710b312355d.jpg" },
  ];

  const trendingDrinks = [
    { name: "Oruncha", img: "https://i.pinimg.com/1200x/c9/da/4e/c9da4eb623e71113cec90c79b2e46f3e.jpg" },
    { name: "Ofukucha", img: "https://i.pinimg.com/1200x/fa/68/2e/fa682e7f9f482727cc11335d6f72285d.jpg" },
    { name: "Sakura Tea", img: "https://i.pinimg.com/1200x/e9/b3/f8/e9b3f84bae65af2f68be7541532ea5f3.jpg" },
    { name: "Kombu-cha", img: "https://i.pinimg.com/1200x/c0/cb/00/c0cb002de17598ed66e913ce8c063eae.jpg" },
    { name: "Aojiru", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop" },
    { name: "Mugicha", img: "https://i.pinimg.com/1200x/0b/e2/fb/0be2fbcedaefc9453ef97af57603bbcf.jpg" },
  ];

  const sushiImages = [
    "https://i.pinimg.com/1200x/7a/86/5f/7a865f95645f3d5c447c1c8699e71619.jpg",
    "https://i.pinimg.com/1200x/b8/cd/81/b8cd810ac8b71bd87fc458c33f0d2b55.jpg",
    "https://i.pinimg.com/736x/cc/f2/33/ccf2339740514d6a2e1b08d4d8145b23.jpg",
  ];

  const drinkImages = [
    "https://i.pinimg.com/1200x/80/8e/14/808e1444826ae4589e40e6b4d230bb63.jpg",
    "https://i.pinimg.com/1200x/7a/1a/9b/7a1a9b4404abb9c83baae2511bd85a8b.jpg",
    "https://i.pinimg.com/1200x/5a/2f/91/5a2f91d331c84735764e1549c3a9755e.jpg",
  ];

  const [currentSushiIndex, setCurrentSushiIndex] = useState(0);
  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [selectedSushi, setSelectedSushi] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [isSushiTransitioning, setIsSushiTransitioning] = useState(false);
  const [isDrinkTransitioning, setIsDrinkTransitioning] = useState(false);

  const smoothTransition = useCallback((setIndex, length, setTransition, direction = 1) => {
    setTransition(true);
    setIndex((prev) => (prev + direction + length) % length);
    setTimeout(() => setTransition(false), 800);
  }, []);

  useEffect(() => {
    if (!selectedSushi) {
      const interval = setInterval(() => {
        if (!isSushiTransitioning) smoothTransition(setCurrentSushiIndex, sushiImages.length, setIsSushiTransitioning);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [smoothTransition, sushiImages.length, selectedSushi, isSushiTransitioning]);

  useEffect(() => {
    if (!selectedDrink) {
      const interval = setInterval(() => {
        if (!isDrinkTransitioning) smoothTransition(setCurrentDrinkIndex, drinkImages.length, setIsDrinkTransitioning);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [smoothTransition, drinkImages.length, selectedDrink, isDrinkTransitioning]);

  const displayedSushi = selectedSushi || sushiImages[currentSushiIndex];
  const displayedDrink = selectedDrink || drinkImages[currentDrinkIndex];

  return (
    <section id="food" className="bg-red-900 flex flex-col items-center overflow-hidden relative">

      {/* --- TOP (Sushi + Preview same line) --- */}
      <div className="flex flex-row flex-wrap md:flex-nowrap w-full">
        {/* Sushi Menu (left) */}
        <div className="w-1/2 bg-[#F9EBD8] px-4 sm:px-6 md:px-12 py-6 flex flex-col justify-center">
          <p className="text-red-800 text-xs sm:text-sm mb-2">What's Sunday / 1-2-7</p>
          <h3 className="text-red-900 text-xl sm:text-2xl md:text-3xl font-bold mb-3">Japanese Sushi</h3>
          <p className="text-red-700 text-sm sm:text-base mb-4">Put in the taste of the most delicious Sushi firm.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            {trendingSushis.map((item, i) => {
              const active = displayedSushi === item.img;
              return (
                <li key={i} className="flex items-center gap-3 relative">
                  <div className="relative group">
                    <div
                      className={`absolute -inset-1 rounded-full transition-all duration-300 ${
                        active ? "ring-4 ring-black opacity-80" : "opacity-0 group-hover:opacity-40"
                      }`}
                    ></div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border border-red-400 relative z-10"
                    />
                  </div>
                  <div
                    onClick={() => setSelectedSushi(item.img)}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center cursor-pointer transition-all"
                  >
                    <FaEye className="text-white text-xs sm:text-sm md:text-base" />
                  </div>
                  <p className="text-red-900 text-sm sm:text-base font-medium">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sushi Preview (right) */}
        <div className="w-1/2 bg-white relative flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[500px]">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              isSushiTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
            style={{ backgroundImage: `url('${displayedSushi}')` }}
          />
          <button
            onClick={() => smoothTransition(setCurrentSushiIndex, sushiImages.length, setIsSushiTransitioning, -1)}
            className="absolute left-3 bg-white/70 hover:bg-white text-red-700 p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => smoothTransition(setCurrentSushiIndex, sushiImages.length, setIsSushiTransitioning, 1)}
            className="absolute right-3 bg-white/70 hover:bg-white text-red-700 p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* --- CENTER MENU BUTTON --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-red-900 text-white w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center font-semibold shadow-lg text-sm sm:text-base md:text-lg">
        MENU
      </div>

      {/* --- BOTTOM (Drink + Preview same line) --- */}
      <div className="flex flex-row flex-wrap md:flex-nowrap w-full">
        {/* Drink Preview (left) */}
        <div className="w-1/2 bg-white relative flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[500px]">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              isDrinkTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
            style={{ backgroundImage: `url('${displayedDrink}')` }}
          />
          <button
            onClick={() => smoothTransition(setCurrentDrinkIndex, drinkImages.length, setIsDrinkTransitioning, -1)}
            className="absolute left-3 bg-white/70 hover:bg-white text-red-700 p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => smoothTransition(setCurrentDrinkIndex, drinkImages.length, setIsDrinkTransitioning, 1)}
            className="absolute right-3 bg-white/70 hover:bg-white text-red-700 p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Drink Menu (right) */}
        <div className="w-1/2 bg-[#F9EBD8] px-4 sm:px-6 md:px-12 py-6 flex flex-col justify-center">
          <p className="text-red-800 text-xs sm:text-sm mb-2">What's Tuesday / 1-2-7</p>
          <h3 className="text-red-900 text-xl sm:text-2xl md:text-3xl font-bold mb-3">Japanese Drinks</h3>
          <p className="text-red-700 text-sm sm:text-base mb-4">
            Brunch yourself with the most authentic Japanese drink.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            {trendingDrinks.map((item, i) => {
              const active = displayedDrink === item.img;
              return (
                <li key={i} className="flex items-center gap-3 relative">
                  <div className="relative group">
                    <div
                      className={`absolute -inset-1 rounded-full transition-all duration-300 ${
                        active ? "ring-4 ring-black opacity-80" : "opacity-0 group-hover:opacity-40"
                      }`}
                    ></div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border border-red-400 relative z-10"
                    />
                  </div>
                  <div
                    onClick={() => setSelectedDrink(item.img)}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center cursor-pointer transition-all"
                  >
                    <FaEye className="text-white text-xs sm:text-sm md:text-base" />
                  </div>
                  <p className="text-red-900 text-sm sm:text-base font-medium">{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trending;
