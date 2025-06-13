// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Contenedor principal del modal
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" aria-modal="true" role="dialog">
      {/* Contenido del modal: el recuadro blanco con las políticas */}
      {/* Añadimos 'border' y 'border-gray-400' para el borde */}
      <div className="bg-[#FDFFEA] text-[#000102] rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative
                  border border-gray-400"> {/* <--- Línea modificada aquí */}
        {/* Botón de cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold"
          aria-label="Cerrar"
        >
          &times;
        </button>
        {/* Aquí se renderizará el contenido pasado como 'children' (las políticas) */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;