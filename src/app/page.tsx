import Image from "next/image";
import BrandCarousel from "./components/BrandCarousel";
import Topo from "./components/Topo";
import Aplicabilidade from "./components/Aplicabilidade";
import WhatsAppWidget from "./components/WhatsappWidget";
import EntregaveisTecnicos from "./components/EntregaveisTecnicos";
import Servicos from "./components/Servicos";
import Footer from "./components/Footer";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <div className="w-full">
      <Topo />
      <BrandCarousel />
      {/* Segunda Dobra */}
      <div className="relative w-full   px-4 flex flex-col items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-x-0 z-0 top-[50px] sm:top-[80px] md:top-[120px] lg:top-[160px]">
          <Image
            src="/bg-linhas-planet.webp"
            alt="Fundo de linhas"
            layout="fill"
            objectFit="contain"
            className="pointer-events-none z-0"
          />
        </div>
        <div className="relative z-10 text-center mb-10">
          <p className="text-gray-700 text-base">Nosso trabalho</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
            LEVANTAMENTO TOPOGRÁFICO
          </h2>
        </div>

        <div className="relative z-10 max-w-4xl w-full aspect-video">
          <iframe
            className="rounded-md w-full h-full object-cover shadow-xl"
            src="https://www.youtube.com/embed/frODEtdO8-Q?autoplay=1&mute=1&loop=1&playlist=frODEtdO8-Q&controls=0&modestbranding=1&rel=0"
            title="Levantamento Topográfico"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <main>
        {/* ...outras seções */}
        <ProblemSolutionSection />
      </main>
      <Aplicabilidade />
      <EntregaveisTecnicos />
      <Servicos />
      <Footer />
    </div>
  );
}
