// src/components/ContactAndSupportContent.jsx
import React from 'react';

const ContactAndSupportContent = () => {
  return (
    <div className="space-y-4 text-lg">
      <p>
        ¡Estamos aquí para ayudarte! Si tienes alguna pregunta, comentario o necesitas asistencia, no dudes en contactarnos a través de los siguientes medios:
      </p>

      <h3 className="font-semibold text-xl">Atención al Cliente</h3>
      <p>
        **Correo Electrónico:** <a href="ayudaHxM@gmail.com" className="text-blue-600 hover:underline">ayudaHxM@gmail.com</a> <br/>
        Para consultas generales, información sobre productos o ayuda con tu cuenta.
      </p>
      <p>
        **Teléfono:** <a href="tel:+529511174380" className="text-blue-600 hover:underline">+52 951 436 5215</a> <br/>
        Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM (Hora de México).
      </p>

      <h3 className="font-semibold text-xl mt-6">Soporte Técnico</h3>
      <p>
        Si experimentas problemas técnicos con nuestra página web o necesitas ayuda con un pedido existente, por favor contacta a: <br/>
        **Correo Electrónico:** <a href="mailto:soporteHxM@gmail.com" className="text-blue-600 hover:underline">soporteHxM@gmail.com</a>
      </p>

      <h3 className="font-semibold text-xl mt-6">Preguntas Frecuentes (FAQ)</h3>
      <p>
        Antes de contactarnos, te invitamos a visitar nuestra sección de <a href="#" className="text-blue-600 hover:underline">Preguntas Frecuentes</a>, donde podrías encontrar la respuesta a tu consulta.
      </p>

      <p className="mt-6 text-sm italic">
        Nos esforzamos por responder a todas las consultas en un plazo de 24-48 horas hábiles.
      </p>
    </div>
  );
};

export default ContactAndSupportContent;