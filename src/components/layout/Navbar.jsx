import React, { useState } from 'react'

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const listItems = [
    { name: "Menu", id: "menu" },
    { name: "Promise", id: "promise" },
    { name: "Reservations", id: "reservations" },
    { name: "FAQ", id: "faq" },
  ]

  // Scroll to section function
  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='bg-red-50'>
      {/* Top Navbar */}
      <div className="navtop flex justify-between px-6 items-center  bg-red-100 py-2">
        <div className="phonenumber flex gap-2 items-center">
          <img src="/images/iphone.png" alt="phone" className='h-6 w-6'/>
          <span>01645455710</span>
        </div>
        <h1 className='font-bold text-center'>
          One call for delicious moments.
        </h1>
        <div className="adress flex gap-2 items-center">
          <img src="/images/location.png" alt="location" className='h-6 w-6'/>
          <span>Rampur Bonani</span>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbottom flex justify-between items-center py-4 px-6 ">
        <div className="logo font-extrabold text-3xl">FOOD X</div>
        <ul className="flex gap-8 text-lg font-medium">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className={`font-bold cursor-pointer transition-all duration-300 hover:text-red-300 hover:translate-y-1 ${
                activeIndex === idx ? "text-red-500" : ""
              }`}
              onClick={() => {
                setActiveIndex(idx)
                handleScrollTo(item.id) // Scroll to section
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-4'>
          <button>
            <img src="/images/cart.png" alt="" className='h-8 w-8 cursor-pointer'/>
          </button>
          <button>
            <img src="/images/add-user.png" alt=""  className='h-8 w-8 cursor-pointer'/>
          </button>
          <button className='text-lg font-extrabold bg-red-500 px-4 py-1 rounded-xl cursor-pointer text-gray-100'>
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar