import React, { useState } from 'react';
import Articulo from './Articulo';
import ProductDetailModal from './ProductDetailModal';
import { useCart } from '../contexts/CartContext';

import productosH from '../datos/ProductosHombre';
import productosM from '../datos/ProductoMujer';

const Menu = ({ category, onGoBack }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [searchText, setSearchText] = useState('');        // input actual
  const [searchFilter, setSearchFilter] = useState('');    // texto aplicado

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const productsOriginal = category === 'hombre' ? productosH : productosM;
  const title = category === 'hombre' ? 'Colección Hombre' : 'Colección Mujer';

  // 🔍 Filtro por nombre o descripción
  const filteredProducts = productsOriginal.filter((product) => {
    const texto = searchFilter.toLowerCase();
    return (
      product.nombre.toLowerCase().includes(texto) ||
      product.descripcion.toLowerCase().includes(texto)
    );
  });

  const handleSearch = () => {
    setSearchFilter(searchText.trim());
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={onGoBack}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
      >
        &larr; Volver a Categorías
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>

      {/* 🔍 Buscador */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </div>

      {/* 🛍️ Lista de productos */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No se encontraron productos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Articulo
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onViewDetails={openProductDetails}
            />
          ))}
        </div>
      )}

      {/* 🔍 Detalle modal */}
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeProductDetails} />
      )}
    </div>
  );
};

export default Menu;
