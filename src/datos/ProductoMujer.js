// src/datos/ProductoMujer.js
import imgprueba from "../assets/Ropahombre/imgprueba2.jpg"; // Asegúrate de que esta ruta sea correcta para tu imagen
import palazzo from "../assets/ropa mujer/palazzo.jpeg";
import botin from "../assets/ropa mujer/botin.jpeg";
import chaqueta from "../assets/ropa mujer/chaqueta Crop.jpeg";
import sudadera from "../assets/ropa mujer/sudpastel.jpeg";
import top from "../assets/ropa mujer/top.jpeg";



const productosM = [
  {
    id: 1,
    nombre: "Blusa Elegante",
    descripcion: "Blusa de seda ideal para eventos formales.",
    precio: 480,
    imagen: imgprueba,
    talla: "",
    genero: "mujer", // ¡Añadido!
    tipoPrenda: "blusa" // ¡Añadido!
  },
  {
    id: 2,
    nombre: "Pantalón Palazzo",
    descripcion: "Pantalón ancho y cómodo para cualquier ocasión.",
    precio: 650,
    imagen: palazzo,
    talla: "",
    genero: "mujer", // ¡Añadido!
    tipoPrenda: "pantalón" // ¡Añadido!
  },
  {
    id: 3,
    nombre: "Chaqueta Crop",
    descripcion: "Chaqueta corta con diseño juvenil.",
    precio: 870,
    imagen: chaqueta,
    talla: "",
    genero: "mujer", // ¡Añadido!
    tipoPrenda: "chaqueta" // ¡Añadido!
  },
  {
    id: 4,
    nombre: "Sudadera Pastel",
    descripcion: "Sudadera con colores suaves y corte femenino.",
    precio: 540,
    imagen: sudadera,
    talla: "",
    genero: "mujer", // ¡Añadido!
    tipoPrenda: "sudadera" // ¡Añadido!
  },
  {
    id: 5,
    nombre: "Botines de Tacón",
    descripcion: "Botines elegantes para salidas nocturnas.",
    precio: 820,
    imagen: botin,
    talla: "",
    genero: "mujer", // ¡Añadido!
    tipoPrenda: "calzado" // ¡Añadido!
  },
  {
    id: 6,
    nombre: "Top Básico",
    descripcion: "Top sencillo ideal para el día a día.",
    precio: 210,
    imagen: top,
    talla: "",
    genero: "mujer", // ¡Añadido!
    tipoPrenda: "top" // ¡Añadido!
  }
];

export default productosM;