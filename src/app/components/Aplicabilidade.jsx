import React from "react";
import CardAplicabilidade from "./CardAplicabilidade";
import BotaoOrcamento from "./BotaoOrcamento";

const Aplicabilidade = () => {
  const cards = [
    
    {
      img: "/img/imagem1.webp",
      text:  "Levantar áreas extensas com vegetação densa ou relevo complexo",
    },
    {
      img: "/img/projetar-ou-regularizar-areas-urbanas-e-rurais.webp",
      text: "Projetar ou regularizar áreas urbanas e rurais",
    },
    {
      img: "/img/trabalhar-com-dados-precisos-para-planejamento.webp",
      text: "Trabalhar com dados precisos para planejamento urbano e ambiental",
    },
    {
      img: "/img/atende-exigencias-tecnicas-de-prefeitura-planet-topografia-mapeamento-aereo.webp",
      text: "Atender exigências técnicas de prefeituras, cartórios ou órgãos reguladores",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        <h3 className="text-lg text-gray-500 mb-2">APLICABILIDADE</h3>
        <h2 className="text-3xl font-bold text-green-900 mb-10">
          Esse serviço é ideal para você que precisa de:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <CardAplicabilidade key={index} img={card.img} text={card.text} />
          ))}
        </div>

        <div className="mt-10">

  <a
            href="https://wa.me/5511943076945?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Mapeamento%20a%C3%A9reo%20com%20LiDAR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-gradient-to-b from-[#00b89f] to-[#029f9f] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300"
          >
            QUERO RECEBER UMA PROPOSTA AGORA
          </a>



         
        </div>
      </div>
    </section>
  );
};

export default Aplicabilidade;
