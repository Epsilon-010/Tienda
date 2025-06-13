// src/contexts/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto del Carrito
export const CartContext = createContext();

// 2. Crear el Proveedor del Contexto del Carrito
export const CartProvider = ({ children }) => {
  // Estado para almacenar los ítems del carrito
  // Cada ítem se espera que tenga { id, nombre, descripcion, precio, imagen, quantity, genero, tipoPrenda }
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    // Busca si el producto ya existe en el carrito
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Si ya existe, incrementa su cantidad
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Si no existe, lo añade al carrito con una cantidad inicial de 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Función para eliminar completamente un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Función para incrementar la cantidad de un producto específico en el carrito
  const incrementQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Función para decrementar la cantidad de un producto específico en el carrito
  const decrementQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId && item.quantity > 1 // Solo decrementa si la cantidad es mayor a 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0)); // Si la cantidad llega a 0, elimina el ítem
  };

  // Función para obtener el número total de ítems individuales en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para calcular el precio total de todos los ítems en el carrito
  const getTotalPrice = () => {
    // ***** IMPORTANTE: Aquí se cambió de item.price a item.precio *****
    return cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  // El valor que se proporciona a los componentes hijos a través del contexto
  const contextValue = {
    cartItems, // El array de ítems en el carrito
    addToCart, // Función para añadir ítems
    removeFromCart, // Función para eliminar ítems
    incrementQuantity, // Función para incrementar cantidad
    decrementQuantity, // Función para decrementar cantidad
    getTotalItems, // Función para obtener el total de ítems
    getTotalPrice, // Función para obtener el precio total
    // NOTA: authState y requestLoginModal no están definidos aquí en este contexto,
    // asumo que vienen de otro contexto de autenticación que usarás en el componente Carrito.
    // Si no es así, necesitarás pasarlos o definirlos en un contexto superior.
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children} {/* Renderiza los componentes hijos que están envueltos por este proveedor */}
    </CartContext.Provider>
  );
};

// Hook personalizado para facilitar el consumo del contexto del carrito en cualquier componente
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    // Esto asegura que useCart solo se use dentro de un CartProvider
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};