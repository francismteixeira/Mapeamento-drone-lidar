import React from 'react';

const entregaveis = [
  {
    texto: "Ortofoto georreferenciada em alta resolução",
    imagem: "/images/icone1.png", // substitua com o caminho da sua imagem
  },
  {
    texto: "Modelo digital de terreno (MDT)",
    imagem: "/images/icone2.png",
  },
  {
    texto: "Modelo digital de superfície (MDS)",
    imagem: "/images/icone3.png",
  },
  {
    texto: "Curvas de nível",
    imagem: "/images/icone4.png",
  },
  {
    texto: "Mapeamento vetorial",
    imagem: "/images/icone5.png",
  },
];

export default function EntregaveisTecnicos() {
  return (
    <div className="bg-teal-900   flex flex-col items-center justify-center px-15 py-12">
      <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-10">
        Entregáveis técnicos <br className="sm:hidden" /> inclusos:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2 gap-6 max-w-5xl">
        {entregaveis.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 p-6 rounded-2xl bg-white transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-400 hover:text-white shadow-md"
          >
            <img
              src={item.imagem}
              alt={`Ícone ${idx + 1}`}
              className="w-10 h-10 object-contain"
            />
            <p className="  text-lg  ">{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
