import React from 'react';
import Articulo from './Articulo'; // Asegúrate de importar Articulo

// Opcionesmujer ahora recibe la prop 'productos'
const Opcionesmujer = ({ menu, productos }) => {
  return (
    <div className="p-6">
      <button 
        onClick={menu} 
        className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-200 mb-6 cursor-pointer"
      >
        Volver al Menú Principal
      </button>
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Moda para Mujer</h2>
      <div className="flex flex-wrap justify-center gap-6"> {/* Usa gap para espacio entre artículos */}
        {/* Itera sobre los productos recibidos y renderiza Articulo para cada uno */}
        {productos.map(producto => (
          <Articulo
            key={producto.id} // Es importante usar una key única
            id={producto.id}
            imagen={producto.imagen}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
      </div>
    </div>
  );
};

export default Opcionesmujer;
