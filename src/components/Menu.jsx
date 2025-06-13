// src/components/Menu.jsx
import React, { useState } from 'react';
import Articulo from './Articulo';
import ProductDetailModal from './ProductDetailModal';
import { useCart } from '../contexts/CartContext';

// Importa tus datos de productos
import productosH from '../datos/ProductosHombre';
import productosM from '../datos/ProductoMujer';

// Este componente ahora recibe la categoría a mostrar y una función para volver.
const Menu = ({ category, onGoBack }) => { 
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  // Determina qué productos mostrar según la categoría recibida
  const productsToDisplay = category === 'hombre' ? productosH : productosM;
  const title = category === 'hombre' ? 'Colección Hombre' : 'Colección Mujer';

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={onGoBack} // Botón para volver a la selección de categorías
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
      >
        &larr; Volver a Categorías
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{title}</h2>

      {productsToDisplay.length === 0 ? (
        <p className="text-center text-gray-600">No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {productsToDisplay.map((product) => (
            <Articulo
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onViewDetails={openProductDetails}
            />
          ))}
        </div>
      )}

      {/* Renderiza el modal si hay un producto seleccionado */}
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeProductDetails} />
      )}
    </div>
  );
};

export default Menu;