import React from "react";
import { SiWhatsapp } from "react-icons/si";

const WhatsAppWidget = () => {
  return (
    <>
      <a
        className="whapp fixed bottom-8 right-8 z-50"
        href="http://wa.me/5545991015678/?text=Olá! Vim pelo site e gostaria de tirar uma dúvida."
        target="_blank"
        rel="noopener noreferrer"
        title="Enviar mesagem para o WhatsApp"
      >
        <div className="whapp-btn bg-primary-500 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition duration-100 hover:brightness-150">
          <SiWhatsapp size={"2rem"} color="white" />
        </div>
      </a>

      <style>
        {`
          @keyframes pulse-wpp {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 54, 102, 0.7);
            }
            70% {
              box-shadow: 
                0 0 0 10px rgba(0, 54, 102, 0),
                0 0 0 10px rgba(0, 54, 102, 0.4),
                0 0 0 10px rgba(0, 54, 102, 0.2),
                0 0 0 10px rgba(0, 54, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 54, 102, 0);
            }
          }

          .whapp-btn {
            animation: pulse-wpp 2s infinite;
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppWidget;
