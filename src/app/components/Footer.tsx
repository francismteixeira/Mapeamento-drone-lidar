// components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-center py-10">
      <div className="flex justify-center mb-6">
        <Image
          src="/logo-planet.svg" // substitua pelo caminho real do logo
          alt="Planet Topografia"
          width={120}
          height={120}
        />
      </div>

      <p className="max-w-xl mx-auto text-gray-600 px-4 mb-6 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt et dolore magna aliqua. Quis ipsum suspendisse
        ultrices gravida.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <IconButton icon={<FaFacebookF />} />
        <IconButton icon={<FaInstagram />} />
        <IconButton icon={<FaYoutube />} />
      </div>

      <div className="bg-[#2E4C73] text-white text-sm py-4">
        <p>
          Copyright © 2025{" "}
          <span className="font-semibold">Planet Topografia.</span> Todos os
          direitos reservados..
        </p>
      </div>
    </footer>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
      {icon}
    </button>
  );
}
