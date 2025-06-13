const Pedidos = [
  {
    id: "A001",
    fecha: "10/06/2025",
    estado: "Pendiente de pago",
    total: 64.97,
    items: [
      { nombre: "Pantalón Jeans", talla: "32", cantidad: 1, precio: 29.99 },
      { nombre: "Camiseta Negra", talla: "L", cantidad: 2, precio: 17.49 },
    ],
  },
  {
    id: "A002",
    fecha: "11/06/2025",
    estado: "Enviado",
    total: 149.98,
    items: [
      { nombre: "Zapatillas Adidas", talla: "43", cantidad: 1, precio: 149.98 },
    ],
  },
  {
    id: "A003",
    fecha: "12/06/2025",
    estado: "Entregado",
    total: 204.95,
    items: [
      { nombre: "Mochila", talla: "Única", cantidad: 1, precio: 49.99 },
      { nombre: "Sudadera", talla: "M", cantidad: 2, precio: 38.74 },
      { nombre: "Calcetines", talla: "M", cantidad: 1, precio: 17.48 },
    ],
  },
];

export default Pedidos