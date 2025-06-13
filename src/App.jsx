// src/App.jsx
import React, { useState } from 'react';
import BarraNav from './components/BarraNav';
import Carrito from './components/Carrito';
import Menu from './components/Menu'; // El componente que muestra la lista de productos
import HomeSelection from './components/HomeSelection'; // El componente de selección inicial
import Login from './components/Login'; // Si lo tienes

import { CartProvider } from './contexts/CartContext';
// import { AuthProvider } from './contexts/AuthContext'; // Si tienes un AuthContext real

const App = () => {
  const [currentPage, setCurrentPage] = useState('homeSelection'); 
  const [authState, setAuthState] = useState(null); 

  const requestLoginModal = () => {
    alert("Simulando modal de login. Para ver el carrito, cambia authState a 'logged'");
    //setAuthState('logged'); 
  };

  const handleSelectCategoryFromHome = (category) => {
    if (category === 'hombre') {
      setCurrentPage('productsHombre');
    } else if (category === 'mujer') {
      setCurrentPage('productsMujer');
    }
  };

  const handleGoBackToHomeSelection = () => {
    setCurrentPage('homeSelection');
  };

  return (
    // <AuthProvider> 
    <CartProvider>
      {/* Cambiado: bg-gray-100 a bg-[#FDFFEA] para que coincida con HomeSelection y Menu */}
      <div className="min-h-screen bg-[#FDFFEA]"> 
        <BarraNav 
          onGoToCart={() => setCurrentPage('cart')} 
          onGoToHome={handleGoBackToHomeSelection} 
        />

        <main className="pt-16"> 
          {currentPage === 'homeSelection' && (
            <HomeSelection onSelectCategory={handleSelectCategoryFromHome} />
          )}

          {(currentPage === 'productsHombre' || currentPage === 'productsMujer') && (
            <Menu 
              category={currentPage === 'productsHombre' ? 'hombre' : 'mujer'} 
              onGoBack={handleGoBackToHomeSelection} 
            />
          )}

          {currentPage === 'cart' && (
            <Carrito 
              onGoBackToMenu={handleGoBackToHomeSelection} 
              authState={authState} 
              requestLoginModal={requestLoginModal}
            />
          )}

          {currentPage === 'login' && (
            <Login /> 
          )}
        </main>
      </div>
    </CartProvider>
    // </AuthProvider>
  );
};

export default App;