import React from 'react';
import { useCart } from '../contexts/CartContext';

// Carrito ahora recibe una prop 'onGoBackToMenu' para volver al menú principal
const Carrito = ({ onGoBackToMenu }) => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice, getTotalItems } = useCart();

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      {/* Botón para volver */}
      <button
        onClick={onGoBackToMenu}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
      >
        &larr; Volver a la Tienda
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Tu Carrito de Compras ({getTotalItems()} ítems)
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Tu carrito está vacío. ¡Añade algunos productos!</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
              <div className="flex items-center">
                <img src={item.imagen} alt={item.nombre} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.nombre}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.precio.toFixed(2)} cada uno
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-gray-800 font-medium">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-gray-200  text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors duration-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800 transition-colors duration-200"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center text-xl font-bold text-gray-900 border-t pt-4">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>

          <button className="mt-8 w-full bg-[#000102] text-white text-lg py-3 rounded-md hover:bg-opacity-80 transition-colors duration-200">
            Proceder al Pago
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
