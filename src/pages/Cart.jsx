import React, { useState } from "react";

const Cart = () => {
  // Dummy cart data (backend এ যুক্ত হলে dynamic হবে)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Grilled Chicken Burger",
      image: "/images/hero-main.png",
      price: 8.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Cheesy Pizza Slice",
      image: "/images/hero-main.png",
      price: 4.99,
      quantity: 2,
    },
  ]);

  // Quantity control
  const handleQuantityChange = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Total Price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-red-700 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10">
        {/* Header */}
        <h1 className="text-3xl font-extrabold mb-6 text-center">
          Your Cart
        </h1>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white/10 rounded-xl p-4 shadow-md hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-yellow-300 font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity & Total */}
                <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="bg-yellow-400 text-red-900 px-2 py-1 rounded-md font-bold hover:bg-yellow-300"
                    >
                      −
                    </button>
                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="bg-yellow-400 text-red-900 px-2 py-1 rounded-md font-bold hover:bg-yellow-300"
                    >
                      +
                    </button>
                  </div>

                  <p className="ml-6 font-bold text-lg text-yellow-300">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-200 mt-6">
            Your cart is empty. Start adding delicious food!
          </p>
        )}

        {/* Total & Checkout */}
        {cartItems.length > 0 && (
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-white/30 pt-6">
            <h3 className="text-2xl font-extrabold">
              Total: <span className="text-yellow-400">${total.toFixed(2)}</span>
            </h3>
            <button className="bg-yellow-400 text-red-900 font-bold py-2 px-8 rounded-lg mt-4 md:mt-0 hover:bg-yellow-300 transition-all">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
