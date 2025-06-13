import './App.css';
import Menu from './components/Menu';
import Opcioneshombre from './components/Opcioneshombre';
import Opcionesmujer from './components/Opcionesmujer';
import Carrito from './components/Carrito';
import BarraNav from './components/BarraNav'; // Importa la BarraNav
import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';

// Importa tus datos de productos
import productosM from './datos/ProductoMujer';
import productosH from './datos/ProductosHombre'; // Asegúrate de tener este archivo creado

function App() {
  // Estado para controlar la página actual: 'menu', 'hombre', 'mujer', 'carrito'
  const [currentPage, setCurrentPage] = useState("menu");

  // Funciones para cambiar la página
  const handleGoToMenu = () => {
    setCurrentPage("menu");
  };

  const handleGoToHombre = () => {
    setCurrentPage("hombre");
  };

  const handleGoToMujer = () => {
    setCurrentPage("mujer");
  };

  const handleGoToCart = () => {
    setCurrentPage("carrito");
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        {/* La BarraNav siempre será visible en la parte superior */}
        <BarraNav onGoToCart={handleGoToCart} /> {/* Pasa la función para ir al carrito */}

        <main className="flex-grow"> {/* main para que el contenido ocupe el espacio restante */}
          {/* Renderizado condicional de componentes según la página actual */}
          {currentPage === "menu" && (
            <Menu
              opcion={currentPage}
              menu={handleGoToMenu}
              hombre={handleGoToHombre}
              mujer={handleGoToMujer}
            />
          )}

          {currentPage === "hombre" && (
            <Opcioneshombre
              opcion={currentPage}
              menu={handleGoToMenu}
              productos={productosH}
            />
          )}

          {currentPage === "mujer" && (
            <Opcionesmujer
              menu={handleGoToMenu}
              productos={productosM}
            />
          )}

          {currentPage === "carrito" && (
            // Renderiza el Carrito cuando la página actual sea 'carrito'
            <Carrito onGoBackToMenu={handleGoToMenu} /> /* Pasa una función para volver al menú */
          )}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
