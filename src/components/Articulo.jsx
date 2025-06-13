// src/components/Articulo.jsx
import React from 'react';

const Articulo = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between h-full">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-full h-48 object-cover" 
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.nombre}</h3>
          <p className="text-sm text-gray-600 mb-3">{product.descripcion}</p>
        </div>
        <div className="mt-auto"> 
          <p className="text-xl font-bold text-gray-900 mb-4">${product.precio.toFixed(2)}</p>
          <div className="flex space-x-2"> 
            <button
              onClick={() => onAddToCart(product)} 
              className="flex-1 bg-[#000102] text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-200"
            >
              Añadir
            </button>
            <button
              onClick={() => onViewDetails(product)} 
              className="flex-1 border border-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulo;