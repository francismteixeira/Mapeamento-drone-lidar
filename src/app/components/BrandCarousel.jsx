'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
    
  { name: 'Marca 1', logo: 'clientes/acciona-business-as-unusual.webp' },
  { name: 'Marca 2', logo: 'clientes/Aragon-perfuracoes-e-sondagens.webp' },
  { name: 'Marca 3', logo: 'clientes/bht-engenharia.webp' },
  { name: 'Marca 4', logo: 'clientes/bosch.webp' },
  { name: 'Marca 5', logo: 'clientes/brechtson-engenharia.webp' },
  { name: 'Marca 5', logo: 'clientes/cbi-companhia-brasileira-de-infraestrutura.webp' },
  { name: 'Marca 5', logo: 'clientes/CDG-contrutura-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/cdhu-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/Cerqueira-torres-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/Dubai-incorpracao-e-construcao-planet-topograia.webp' },
  { name: 'Marca 5', logo: 'clientes/durazzo-medeiros-advogados-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/eco-rodovias-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/Elefe-engenharia-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/essenza-conceito-taboao.webp' },
  { name: 'Marca 5', logo: 'clientes/FBS-Planet-Topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/Geovector-engenharia-geomatica-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/habcasa-incorporadora-e-contrutora.webp' },
  { name: 'Marca 5', logo: 'clientes/htf-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/LSE-LABORATORIO-DE-SISTEMAS-ESTRUTURAIS.webp' },
  { name: 'Marca 5', logo: 'clientes/mrv.webp' },
  { name: 'Marca 5', logo: 'clientes/or.webp' },
  { name: 'Marca 5', logo: 'clientes/ozaki-engenharia.webp' },
  { name: 'Marca 5', logo: 'clientes/porto-seguro-planet topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/prefeitura-rio-grande-da-serra.webp' },
  { name: 'Marca 5', logo: 'clientes/Procert-engenharia-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/rmr-engenharia-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/Roy-engenharia.webp' },
  { name: 'Marca 5', logo: 'clientes/Sao-paulo-governo-do-estado-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/sst-engenharia.webp' },
  { name: 'Marca 5', logo: 'clientes/tliq-planet-topografia.webp' },
  { name: 'Marca 5', logo: 'clientes/transmac.webp' },
  { name: 'Marca 5', logo: 'clientes/vercelli-Engenharia-planet-topografia.webp' },
 


  
];

export default function BrandCarousel() {
  return (
    <div className="w-full bg-white py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2100,
          disableOnInteraction: false,
        }}
        breakpoints={{
           140: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 10 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-30 px-1">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}