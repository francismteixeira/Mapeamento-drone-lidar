import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "5511943076945"; // Altere para o número desejado com DDI/DD
  const message =
    "Olá! Gostaria de mais informações sobre o Mapeamento aéreo com LiDAR.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Pulse Effect */}
      <span className="absolute animate-ping inline-flex h-16 w-16 rounded-full bg-green-500 opacity-75"></span>

      {/* WhatsApp Button */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppFloatingButton;
