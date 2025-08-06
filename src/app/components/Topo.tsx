// components/TopSection.tsx
import Image from "next/image";

const TopSection: React.FC = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/bg-top-planet.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="z-0"
      />

      <div className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-planet.svg"
              alt="Planet Topografia"
              width={120}
              height={120}
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
            999Mapeamento aéreo com <br className="hidden sm:block" /> LiDAR em
            São Paulo
          </h1>

          <p className="mt-4 text-lg md:text-2xl">
            <span className="bg-gradient-to-b from-[#00b89f] to-[#029f9f] rounded-full px-2 text-texto-fundo">
              Precisão milimétrica para grandes áreas, vegetação densa e locais
              de difícil acesso.
            </span>{" "}
            Ganhe agilidade e reduza custos com a tecnologia LiDAR + RTK.
          </p>

          <div className="mt-10">
            <Image
              src="/drone-planet-topografia.webp"
              alt="Drone com LiDAR"
              width={600}
              height={200}
              className="mx-auto w-full max-w-2xl h-auto"
            />
          </div>

          <button className="mt-6 bg-gradient-to-b from-[#00b89f] to-[#029f9f] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300">
            Solicite agora sua proposta técnica personalizada
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
