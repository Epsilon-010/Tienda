import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './components/Menu.jsx'
import CarroCompras from './components/Carrito.jsx'
import Historial from './components/Historial.jsx'
import Pedidos from './datos/Pedidos.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
