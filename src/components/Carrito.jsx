// src/components/Carrito.jsx
import React, { useState } from 'react'; // Importa useState para manejar el estado del modal
import { useCart } from '../contexts/CartContext';
import ProductDetailModal from './ProductDetailModal'; // Importa el nuevo componente modal

const Carrito = ({ onGoBackToMenu }) => {
  // Obtén el estado del carrito y las funciones necesarias del contexto
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice, getTotalItems, authState, requestLoginModal } = useCart();

  // Nuevo estado para controlar qué producto se está viendo en detalle en el modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para abrir el modal de detalles de un producto específico
  const openProductDetails = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado para mostrar en el modal
  };

  // Función para cerrar el modal de detalles
  const closeProductDetails = () => {
    setSelectedProduct(null); // Limpia el producto seleccionado para cerrar el modal
  };

  // Renderiza el contenido para usuarios "invitados" (guest)
  if (authState === "guest") {
    return (
      <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8 text-center">
        <button
          onClick={onGoBackToMenu}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
        >
          &larr; Volver a la Tienda
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Carrito de Compras</h2>
        <p className="text-gray-600 mb-4">
          Para ver o manipular el contenido de tu carrito, por favor{" "}
          <button onClick={() => requestLoginModal()} className="text-blue-600 hover:underline font-semibold">
            inicia sesión
          </button>
          .
        </p>
        <button
          onClick={() => requestLoginModal()}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Iniciar Sesión
        </button>
      </div>
    );
  }

  // Renderiza el contenido del carrito para usuarios logueados
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <button
        onClick={onGoBackToMenu}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
      >
        &larr; Volver a la Tienda
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Tu Carrito de Compras ({getTotalItems()} ítems) {/* Muestra el número total de ítems */}
      </h2>

      {/* Renderiza un mensaje si el carrito está vacío, o los ítems del carrito */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Tu carrito está vacío. ¡Añade algunos productos!</p>
      ) : (
        <div>
          {/* Mapea sobre cada ítem en el carrito para mostrarlo */}
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
              <div className="flex items-center">
                <img src={item.imagen} alt={item.nombre} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.nombre}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.precio.toFixed(2)} cada uno {/* Muestra el precio individual del producto */}
                  </p>
                  {/* Botón de Detalles: Llama a openProductDetails con el ítem actual */}
                  <button
                    onClick={() => openProductDetails(item)}
                    className="mt-2 text-blue-600 hover:underline text-sm"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
              {/* Controles de cantidad y eliminar */}
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
                  className="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-300 transition-colors duration-200"
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

          {/* Sección del total del carrito */}
          <div className="mt-6 flex justify-between items-center text-xl font-bold text-gray-900 border-t pt-4">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span> {/* Muestra el precio total del carrito */}
          </div>

          {/* Botón de proceder al pago */}
          <button className="mt-8 w-full bg-[#000102] text-white text-lg py-3 rounded-md hover:bg-opacity-80 transition-colors duration-200">
            Proceder al Pago
          </button>
        </div>
      )}

      {/* Renderiza el modal de detalles si 'selectedProduct' tiene un valor (es decir, un producto está seleccionado) */}
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeProductDetails} />
      )}
    </div>
  );
};

export default Carrito;