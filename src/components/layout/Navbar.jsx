import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0)

  const listItems = [
    { name: "Home", id: "hero", icon: "/images/home.png" },
    { name: "Menu", id: "menu", icon: "/images/menu.png" },
    { name: "Promise", id: "promise", icon: "/images/brand.png" },
    { name: "Reservations", id: "reservations", icon: "/images/booking.png" },
    { name: "FAQ", id: "faq", icon: "/images/help.png" },
  ]

  // Scroll to section function
  const handleScrollTo = (id, index) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveIndex(index)
    }
  }
 

  return (
    <div className='bg-red-50'>
      {/* Top Navbar (Hidden on small screens) */}
      <div className="hidden md:flex justify-between px-6 items-center bg-red-100 py-2">
        <div className="phonenumber flex gap-2 items-center">
          <img src="/images/iphone.png" alt="phone" className='h-6 w-6'/>
          <span>01645455710</span>
        </div>
        <h1 className='font-bold text-center text-sm md:text-base lg:text-lg'>
          One call for delicious moments.
        </h1>
        <div className="adress flex gap-2 items-center">
          <img src="/images/location.png" alt="location" className='h-6 w-6'/>
          <span>Rampur Bonani</span>
        </div>
      </div>

      {/* Bottom Navbar (Hidden on small screens) */}
      <div className="flex justify-between items-center py-4 px-6">
        <div onClick={()=> navigate("/")} className="logo cursor-pointer font-extrabold text-2xl lg:text-3xl">FOOD X</div>
        <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className={`font-bold cursor-pointer transition-all duration-300 hover:text-red-300 hover:translate-y-1 ${
                activeIndex === idx ? "text-red-500" : ""
              }`}
              onClick={() => handleScrollTo(item.id, idx)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className='flex flex-row-reverse items-center gap-4'>
          <button onClick={()=> navigate("/cart")}>
            <img src="/images/cart.png" alt="" className='h-7 w-7 lg:h-8 lg:w-8 cursor-pointer'/>
          </button>
          <button onClick={()=> navigate("/login")}>
            <img src="/images/add-user.png" alt="" className='h-7 w-7 lg:h-8 lg:w-8 cursor-pointer'/>
          </button>
          <button className='text-sm lg:text-lg font-extrabold bg-red-500 px-4 py-1 rounded-xl cursor-pointer text-gray-100'>
            Order
          </button>
        </div>
      </div>

      {/* Phone Bottom Navigation Bar */}
      <div className="fixed bg-red-200 bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t border-gray-300 flex justify-around items-center py-2 md:hidden shadow-md">
        {listItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleScrollTo(item.id, idx)}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeIndex === idx ? "text-red-500 scale-110" : "text-gray-600"
            }`}
          >
            <img
              src={item.icon}
              alt={item.name}
              className={`h-7 w-7 ${activeIndex === idx ? "brightness-110" : "opacity-80"}`}
            />
            <span className="text-[10px] font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar