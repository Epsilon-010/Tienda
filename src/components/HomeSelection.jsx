// src/components/HomeSelection.jsx
import { useState, useEffect } from "react";
// Asegúrate de que estas rutas sean CORRECTAS para tus imágenes grandes de selección
import Hombre from "../assets/hombre2.jpg"; 
import Mujer from "../assets/mujer.jpg"; 
import Modal from "./Modal"; // Importa el componente Modal
import ContactAndSupportContent from "./ContactAndSupportContent"; // <--- Nueva importación para el contenido de contacto

const HomeSelection = ({ onSelectCategory }) => { 
  const [loading, setLoading] = useState(true);
  const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState(false); // Estado para el modal de Políticas
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);   // Estado para el modal de Contacto y Soporte

  useEffect(() => {
    // Simula un tiempo de carga inicial. Ajusta el tiempo si quieres.
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  // Funciones para el modal de Políticas
  const openPoliciesModal = () => setIsPoliciesModalOpen(true);
  const closePoliciesModal = () => setIsPoliciesModalOpen(false);

  // Funciones para el modal de Contacto y Soporte
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFFEA] text-[#000102]">
      {loading ? (
        // Si loading es true, muestra la animación de carga
        <div className="flex items-center justify-center flex-1">
          <h1 className="text-6xl font-bold animate-pulse">HxM</h1>
        </div>
      ) : (
        // Si loading es false, muestra el contenido de selección de categoría y los botones de los modales
        <> {/* Usa un Fragment para agrupar los elementos */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-32 px-16 py-12">
              <div className="text-center">
                <img
                  src={Hombre}
                  alt="Moda Hombre" 
                  onClick={() => onSelectCategory('hombre')} 
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px] max-h-[300px] cursor-pointer"
                />
                <h2 className="text-2xl font-semibold mt-8">Hombre</h2>
              </div>
              <div className="text-center">
                <img
                  src={Mujer}
                  alt="Moda Mujer" 
                  onClick={() => onSelectCategory('mujer')} 
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-w-[400px] max-h-[300px] cursor-pointer"
                />
                <h2 className="text-2xl font-semibold mt-8">Mujer</h2>
              </div>
            </div>
          </div>

          {/* Contenedor de los botones de la parte inferior */}
          {/* Usamos 'space-x-4' para añadir espacio entre los botones */}
          <div className="flex justify-center py-8 space-x-4">
            {/* Botón de Políticas */}
            <button
              onClick={openPoliciesModal}
              className="bg-[#000102] text-[#FDFFEA] px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 text-lg font-semibold"
            >
              Políticas de Envío y Devoluciones
            </button>

            {/* Botón de Contacto y Soporte */}
            <button
              onClick={openContactModal}
              className="bg-[#000102] text-[#FDFFEA] px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 text-lg font-semibold"
            >
              Contacto y Soporte
            </button>
          </div>

          {/* Componente Modal para Políticas */}
          <Modal isOpen={isPoliciesModalOpen} onClose={closePoliciesModal}>
            <h2 className="text-3xl font-bold mb-6 text-center">Políticas de Envío y Devoluciones</h2>
            <div className="space-y-4 text-lg">
              <h3 className="font-semibold text-xl">Políticas de Envío</h3>
              <p>
                Todos los pedidos se procesan y envían dentro de 1-3 días hábiles. Los tiempos de envío varían según el destino:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>**Envío Estándar (México):** 3-7 días hábiles</li>
                <li>**Envío Express (México):** 1-2 días hábiles</li>
                <li>**Envíos Internacionales:** 7-20 días hábiles (pueden variar según el país)</li>
              </ul>
              <p>
                Recibirás un correo electrónico de confirmación de envío con tu número de seguimiento una vez que tu pedido sea despachado.
              </p>

              <h3 className="font-semibold text-xl mt-6">Políticas de Devoluciones</h3>
              <p>
                Queremos que estés completamente satisfecho con tu compra. Si no es así, puedes devolver los artículos dentro de los **30 días** posteriores a la fecha de compra para un reembolso completo o un cambio.
              </p>
              <p>
                **Condiciones para la devolución:**
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>Los artículos deben estar sin usar, sin lavar y en su estado original, con todas las etiquetas adjuntas.</li>
                <li>No se aceptan devoluciones de ropa interior, trajes de baño o artículos en oferta final.</li>
              </ul>
              <p>
                Para iniciar una devolución, por favor, contáctanos a <a href="mailto:soporte@tutienda.com" className="text-blue-600 hover:underline">soporte@tutienda.com</a> con tu número de pedido y el motivo de la devolución. Te proporcionaremos instrucciones detalladas.
              </p>
              <p className="mt-4">
                Los costos de envío de la devolución son responsabilidad del cliente, a menos que el artículo haya llegado dañado o defectuoso.
              </p>
            </div>
          </Modal>

          {/* Componente Modal para Contacto y Soporte */}
          <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
            <h2 className="text-3xl font-bold mb-6 text-center">Contacto y Soporte</h2>
            {/* Aquí usamos el nuevo componente para la información de contacto */}
            <ContactAndSupportContent /> 
          </Modal>
        </>
      )}
    </div>
  );
};

export default HomeSelection;