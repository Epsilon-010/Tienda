// src/components/ProductDetailModal.jsx
import React from 'react';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null; 

  return (
    // El div principal que crea el overlay oscuro. Mantiene `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4`.
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"> {/* Cambiado bg-opacity a 75 para hacerlo más oscuro si se desea */}
      {/* Cambiado:
        - Eliminado 'max-w-lg' para que no tenga un ancho máximo fijo.
        - Añadido 'w-full' para que ocupe el 100% del ancho disponible (descontando el padding del padre).
        - Eliminado 'max-h-[90vh]' y 'overflow-y-auto' del contenedor principal,
          y movido el overflow-y-auto al div de contenido si es necesario.
        - Añadido 'h-full' para que ocupe el 100% de la altura disponible.
        - Añadido 'md:p-8' para un padding más grande en pantallas medianas.
      */}
      <div className="bg-white rounded-lg shadow-xl w-full h-full transform scale-100 opacity-100 transition-all duration-300 ease-out p-6 md:p-8 relative"> {/* Añadido 'relative' para posicionar el botón de cerrar más fácil */}
        {/* Botón de cerrar movido para posicionamiento absoluto */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl leading-none z-10"
        >
          &times; 
        </button>

        <div className="flex flex-col md:flex-row h-full"> {/* Usamos flex-col/row para organizar el contenido */}
          {/* Columna de la imagen - ocupa la mitad del ancho en md+ */}
          <div className="md:w-1/2 flex items-center justify-center p-4"> {/* Añadido padding */}
            {product.imagen && (
              <img
                src={product.imagen}
                alt={product.nombre}
                className="max-h-full max-w-full object-contain rounded-md shadow" // Cambiado a object-contain y max-h/w-full
              />
            )}
          </div>

          {/* Columna de la información - ocupa la otra mitad del ancho en md+ */}
          <div className="md:w-1/2 p-4 overflow-y-auto"> {/* Añadido padding y overflow para la información */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.nombre}</h2>
            <p className="text-gray-700 mb-6 text-lg">{product.descripcion}</p>
            
            <div className="mb-4">
              <span className="font-semibold text-gray-800 text-xl">Precio:</span>{" "}
              <span className="text-blue-600 font-bold text-3xl">${product.precio.toFixed(2)}</span>
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold text-gray-800">Género:</span>{" "}
              <span className="text-gray-600 capitalize">{product.genero || 'No especificado'}</span>
            </div>
            <div className="mb-6 text-lg">
              <span className="font-semibold text-gray-800">Tipo de Prenda:</span>{" "}
              <span className="text-gray-600 capitalize">{product.tipoPrenda || 'No especificado'}</span>
            </div>

            {/* Puedes añadir más botones o info aquí si lo necesitas */}
            {/* Por ejemplo, un botón para añadir al carrito desde el modal */}
            {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Añadir al Carrito</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;