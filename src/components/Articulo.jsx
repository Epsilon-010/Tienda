import React from 'react';
import { useCart } from '../contexts/CartContext'; // Importa el hook para usar el carrito

// Articulo ahora recibe 'id' como prop, crucial para identificar el producto en el carrito
const Articulo = ({ id, imagen, nombre, descripcion, precio }) => {
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto del carrito

  // Función que se ejecuta cuando se hace clic en el botón "Añadir"
  const handleAddToCart = () => {
    // Llama a addToCart con todos los datos del producto
    addToCart({ id, imagen, nombre, descripcion, precio });
    // Opcional: Puedes mostrar una confirmación al usuario
    // alert(`${nombre} ha sido añadido al carrito!`); // Evita usar alert() en producción
  };

  return (
    <div className="w-[300px] h-[600px] p-4 m-4 bg-white rounded-lg shadow-md flex flex-col justify-between"> {/* Añadí algunos estilos con Tailwind para mejor visualización */}
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-[200px] object-cover rounded-t-lg" // Ajusté estilos para la imagen
      />
      <div className="mt-3 text-[#000102] flex-grow flex flex-col p-2">
        <h3 className="text-lg font-semibold leading-tight mb-1">{nombre}</h3> {/* Hice el nombre más prominente */}
        <p className="text-sm text-gray-700 mt-1 leading-snug flex-grow">{descripcion}</p>
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-200"> {/* Asegura que el precio y botón estén al final */}
          <span className="text-xl font-bold">${precio.toFixed(2)}</span> {/* Formatea el precio a 2 decimales */}
          <button
            onClick={handleAddToCart} // Asigna la función al evento click del botón
            className="bg-[#000102] text-white text-sm px-4 py-2 rounded-md hover:bg-black/60 transition-colors duration-200 cursor-pointer" // Estilos de botón mejorados
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
