import React from 'react';
import { FaLaptopCode, FaMicrochip, FaSitemap } from 'react-icons/fa';

function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6" data-aos="fade-up">
          Nuestros Servicios
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          En CEDI TECH CONSULTING desarrollamos soluciones tecnológicas innovadoras para empresas, eventos y organizaciones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-lg transition" data-aos="fade-up">
            <FaLaptopCode className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-white/70 text-sm">
              Sitios modernos, adaptativos y rápidos. Desde landing pages hasta plataformas completas.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
            <FaMicrochip className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Infraestructura Técnica</h3>
            <p className="text-white/70 text-sm">
              Montaje, cableado, redes, sonido, iluminación y soporte en tiempo real para tus eventos.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
            <FaSitemap className="text-blue-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Consultoría Estratégica</h3>
            <p className="text-white/70 text-sm">
              Te asesoramos para integrar tecnología y mejorar procesos en tu organización o proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
