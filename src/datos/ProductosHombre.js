// src/datos/ProductoHombre.js
// Necesitas reemplazar 'imgprueba' con la ruta a tus propias imágenes de hombre
import imgHombre1 from "../assets/Ropahombre/imgprueba.jpg"; // Cambia esta ruta
import imgHombre2 from "../assets/Ropahombre/imgprueba2.jpg"; // Cambia esta ruta

const productosH = [
  {
    id: 101, // Asegúrate de que los IDs no se repitan con los de mujer
    nombre: "Camisa Casual Hombre",
    descripcion: "Camisa de lino para un look relajado.",
    precio: 550,
    imagen: imgHombre1, // Usa tu imagen real
    talla: ""
  },
  {
    id: 102,
    nombre: "Pantalón Chino",
    descripcion: "Pantalón cómodo y versátil para el día a día.",
    precio: 700,
    imagen: imgHombre2, // Usa tu imagen real
    talla: ""
  },
  // Añade más productos para hombre aquí
];

export default productosH;
