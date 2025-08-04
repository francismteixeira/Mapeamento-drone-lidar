import Image from "next/image";
import BrandCarousel from "./components/BrandCarousel";
import Aplicabilidade from "./components/Aplicabilidade";
import WhatsAppWidget from "./components/WhatsappWidget";
import EntregaveisTecnicos from "./components/EntregaveisTecnicos";
import Footer from "./components/Footer";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  return (
    <div className="w-full">
      <div className="relative w-full  ">
        <Image
          src="/bg-top-planet.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="z-0"
        />

        <div className="absolute inset-0  "></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10    ">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-planet.svg" // substitua pelo caminho real do logo
                alt="Planet Topografia"
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
              Mapeamento aéreo com <br className="hidden sm:block" /> LiDAR em
              São Paulo
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              <span className="bg-gradient-to-b from-[#00b89f] to-[#029f9f] rounded-full px-2 text-texto-fundo">
                Precisão milimétrica para grandes áreas, vegetação densa e
                locais de difícil acesso.
              </span>{" "}
              Ganhe agilidade e reduza custos com a tecnologia LiDAR + RTK.
            </p>

            <div className="mt-10">
              <Image
                src="/drone-planet-topografia.webp" // substitua pelo caminho real da imagem do drone
                alt="Drone com LiDAR"
                width={600}
                height={200}
                className="mx-auto w-full max-w-2xl h-auto"
              />
            </div>

            <button className=" bg-gradient-to-b from-[#00b89f] to-[#029f9f] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300">
              Solicite agora sua proposta técnica personalizada
            </button>
          </div>
        </div>
      </div>
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
      <Footer />
    </div>
  );
}
