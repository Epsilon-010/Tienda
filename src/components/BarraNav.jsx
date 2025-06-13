import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import Login from "./Login";

const BarraNav = ({ onGoToCart }) => {
  const { getTotalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="bg-white p-4 shadow-md flex justify-between items-center border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900">HxM</h1>

        <div className="flex items-center space-x-4">
          {!isLoggedIn && (
            <button
              onClick={openModal}
              className="bg-[#000102] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            >
              Login
            </button>
          )}

          <button
            onClick={onGoToCart}
            className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none cursor-pointer"
            aria-label="Ver carrito de compras"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H19.5a2.25 2.25 0 002.25-2.25v-.877a1.5 1.5 0 00-.31-.926l-1.076-1.075A1.5 1.5 0 0019.5 13H7z"
              />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </nav>

      <Login
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        setIsLoggedIn={setIsLoggedIn}
      />
    </>
  );
};

export default BarraNav;

