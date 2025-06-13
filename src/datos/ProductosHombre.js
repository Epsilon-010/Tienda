// src/datos/ProductosHombre.js
// Necesitas reemplazar 'imgprueba' con la ruta a tus propias imágenes de hombre
import imgHombre1 from "../assets/Ropahombre/imgprueba.jpg"; // Cambia esta ruta
import imgHombre2 from "../assets/Ropahombre/imgprueba2.jpg"; // Cambia esta ruta
import pantalon from "../assets/Ropahombre/pantalonchino.jpeg";
const productosH = [
  {
    id: 101, // Asegúrate de que los IDs no se repitan con los de mujer
    nombre: "Camisa Casual Hombre",
    descripcion: "Camisa de lino para un look relajado.",
    precio: 550,
    imagen: imgHombre1, // Usa tu imagen real
    talla: "",
    genero: "hombre", // ¡Añadido!
    tipoPrenda: "camisa" // ¡Añadido!
  },
  {
    id: 102,
    nombre: "Pantalón Chino",
    descripcion: "Pantalón cómodo y versátil para el día a día.",
    precio: 700,
    imagen: pantalon, // Usa tu imagen real
    talla: "",
    genero: "hombre", // ¡Añadido!
    tipoPrenda: "pantalón" // ¡Añadido!
  },
  // Añade más productos para hombre aquí con sus respectivas propiedades
];

export default productosH;