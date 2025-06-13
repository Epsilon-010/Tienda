// Menu.jsx
import { useState, useEffect } from "react";
import Hombre from "../assets/hombre2.jpg";
import Mujer from "../assets/mujer.jpg";
import Login from "./Login"; // Importamos el componente Login

const Menu = (props) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar el modal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario está logueado

  useEffect(() => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true); // Abrir modal
  const closeModal = () => setIsModalOpen(false); // Cerrar modal

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFFEA] text-[#000102]">
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFFEA] text-[#000102]">
      {loading ? (
        <div className="flex items-center justify-center flex-1">
          <h1 className="text-6xl font-bold animate-pulse">HxM</h1>
        </div>
      ) : (
        <>
          <header className="w-full bg-white shadow-md py-4 px-8 flex items-center justify-between">
            <div className="flex-1"></div>
            <h1 className="text-3xl font-bold text-center flex-1">HxM</h1>
            <div className="flex-1 flex justify-end">
              {!isLoggedIn && (
                <button
                  onClick={openModal}
                  className="bg-[#000102] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition cursor-pointer"
                >
                  Login
                </button>
              )}
            </div>
          </header>

          {/* Aquí llamamos al componente Login y le pasamos las props */}
          <Login
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            setIsLoggedIn={setIsLoggedIn}
          />

          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-32 px-16 py-12">
              <div className="text-center">
                <img
                  src={Hombre}
                  alt="Hombre"
                  onClick={props.hombre}
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px] max-h-[300px] cursor-pointer"
                />
                <h2 className="text-2xl font-semibold mt-8">Hombre</h2>
              </div>
              <div className="text-center">
                <img
                  src={Mujer}
                  alt="Mujer"
                  onClick={props.mujer}
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px] max-h-[300px] cursor-pointer"
                />
                <h2 className="text-2xl font-semibold mt-8">Mujer</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
  );
};

export default Menu;

export default Menu;
