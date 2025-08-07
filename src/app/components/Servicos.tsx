import React from "react";

export default function ProjetosRealizados() {
  const projetos = [
    {
      imagem:
        "/servicos/Mapeamento-com-LiDAR-em-Apiaí-SP-Precisão-no-Combate-à-Erosão.jpg",
      texto: "Mapeamento com LiDAR em Apiaí/SP: Precisão no Combate à Erosão",
    },
    {
      imagem:
        "/servicos/Mapeamento-com-tecnologia-LiDAR-no-Autódromo-de-interlagos-Precisão-no-Planejamento-de-Eventos.jpg",
      texto:
        "Mapeamento com tecnologia LiDAR no Autódromo de Interlagos: Precisão no Planejamento de Eventos",
    },
    {
      imagem:
        "/servicos/Mapeamento-LiDAR-em-Cabreúva-SP-para-Planejamento-de-Loteamento-Imobiliário.jpg",
      texto:
        "Mapeamento LiDAR em Cabreúva/SP para Planejamento de Loteamento Imobiliário",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-20 text-[#153D34]">
      <div className="max-w-screen-xl mx-auto">
        {/* Título */}
        <div className="text-left mb-12">
          <p className="text-sm text-[#153D34] font-light mb-2">
            — Planet em ação
          </p>
          <h2 className="text-4xl font-extrabold leading-tight">
            PROJETOS REALIZADOS
          </h2>
          <p className="mt-4 text-[#153D34]/80 max-w-xl">
            Com Equipamentos próprio, equipe própria e entrega técnica completa,
            somos referência em precisão e agilidade.
          </p>
        </div>

        {/* Imagens de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={projeto.imagem}
                alt={`Projeto realizado ${index + 1}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md">
                <p className="text-sm text-[#153D34] font-medium">
                  {projeto.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para ação */}
        <div className="text-center">
          <h3 className="max-w-2xl mx-auto text-centertext-2xl md:text-3xl font-medium text-gray-800">
            Quer o <span className="font-bold">melhor serviço</span> com o
            melhor preço por hectare em{" "}
            <span className="font-bold">São Paulo?</span>
          </h3>
          <p className="mt-5 text-gray-600">
            Aqui você conta com qualidade técnica de alto nível
            <br />
            <span className="font-semibold">
              ATENDIMENTO DIRETO COM QUEM EXECUTA O SERVIÇO.
            </span>
          </p>
          <a
            href="https://wa.me/5511999999999" // Substitua pelo número correto do WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-gradient-to-b from-[#00b89f] to-[#029f9f] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300"
          >
            Receber proposta agora
          </a>
        </div>
      </div>
    </section>
  );
}
