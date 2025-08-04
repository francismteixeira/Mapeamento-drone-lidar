export default function PlanetTopografia() {
  return (
    <section className="max-w-[1200px] mx-auto py-15 flex flex-col md:flex-row items-center justify-center   px-6 bg-white relative overflow-hidden">
      
      {/* Coluna Esquerda (Título) */}
      <div className="w-full md:w-1/3 text-center md:text-right mb-12 md:mb-0">
        {/* Traço verde */}
        <div className="w-10 h-1 bg-teal-700 mb-4  ml-auto  " />
        
        {/* Título pequeno */}
        <p className="text-base font-semibold text-teal-800 tracking-wide mb-2">
          POR QUE ESCOLHER
        </p>
        
        {/* Título grande */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 leading-tight">
          PLANET<br />TOPOGRAFIA?
        </h1>
      </div>

      {/* Coluna Direita (Background + bloco degradê com itens) */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        {/* Imagem de fundo atrás da coluna direita */}
        <img
          src="/bg-linhas-planet.webp"
          alt="topografia"
          className="absolute inset-0 w-full h-full object-contain z-0 pointer-events-none "
        />

        {/* Bloco com degradê */}
        <div className="relative z-10 p-8 md:p-10 rounded-[3rem] shadow-2xl bg-gradient-to-b from-[#00b89f] to-[#029f9f] text-white w-full max-w-md">
          

          <ul className="space-y-6 text-xl leading-snug">
            <li className="flex items-start">
              <span className="w-5 h-10 mt-1 mr-4 rounded-full bg-[#00FFD1]" />
              <p> Tecnologia de ponta com <span className="font-bold"> LiDAR Zenmuse L2 e drone Matrice 350 RTK</span> 
                 </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-10 mt-1 mr-4 rounded-full bg-[#00FFD1]" />
              <p>
                <span className="font-bold">Entregas rápidas: </span><br />
                ortofotos, MDT, MDS, nuvem de pontos e vetores
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-10 mt-1 mr-4 rounded-full bg-[#00FFD1]" />
              <p>
                Equipe própria e qualificada (sem terceirizações)
              </p>
            </li>
            <li className="flex items-start">
              <span className="w-3 h-10 mr-4 rounded-full bg-[#00FFD1]" />
              <p>
                Processamento técnico interno e emissão de CAT
              </p>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}
