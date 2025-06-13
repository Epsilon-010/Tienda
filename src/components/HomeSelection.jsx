// src/components/HomeSelection.jsx
import { useState, useEffect } from "react";
// Asegúrate de que estas rutas sean CORRECTAS para tus imágenes grandes de selección
import Hombre from "../assets/hombre2.jpg"; 
import Mujer from "../assets/mujer.jpg"; 

const HomeSelection = ({ onSelectCategory }) => { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga inicial. Ajusta el tiempo si quieres.
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFFEA] text-[#000102]">
      {loading ? (
        // Si loading es true, muestra la animación de carga
        <div className="flex items-center justify-center flex-1">
          <h1 className="text-6xl font-bold animate-pulse">HxM</h1>
        </div>
      ) : (
        // Si loading es false, muestra el contenido de selección de categoría
        // TODO el contenido debe estar dentro de un solo Fragment o un div padre
        // Aquí usamos un div principal porque ya lo teníamos con flex-1
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-32 px-16 py-12">
            <div className="text-center">
              <img
                src={Hombre}
                alt="Moda Hombre" 
                onClick={() => onSelectCategory('hombre')} 
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px] max-h-[300px] cursor-pointer"
              />
              <h2 className="text-2xl font-semibold mt-8">Hombre</h2>
            </div>
            <div className="text-center">
              <img
                src={Mujer}
                alt="Moda Mujer" 
                onClick={() => onSelectCategory('mujer')} 
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px] max-h-[300px] cursor-pointer"
              />
              <h2 className="text-2xl font-semibold mt-8">Mujer</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSelection;