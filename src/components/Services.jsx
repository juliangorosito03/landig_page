import React from 'react';

function Services() {
  return (
    <section id="servicios" className="w-full py-16 bg-[#0e0e0e] text-white flex flex-col items-center">
      
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4 text-[#00B2FF]" data-aos="fade-up">
        Nuestros Servicios
      </h2>

      {/* Divider opcional para mejor visual */}
      <div className="w-24 h-1 bg-[#00B2FF] mb-8" data-aos="fade-up" data-aos-delay="50"></div>

      {/* Bajada */}
      <p className="text-center text-lg font-bold mb-10 max-w-4xl px-4" data-aos="fade-up" data-aos-delay="100">
        +30 AÑOS LIDERANDO LA TRANSFORMACIÓN TECNOLÓGICA
      </p>

      {/* Cuadrícula de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl">

        {/* CEDI */}
        <div 
          className="border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/public/cedi-logo.png" alt="Logo CEDI" className="max-h-24 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">Consulting</h4>
          <p className="text-sm text-center">
            Lo mejor de nosotros al servicio de su empresa.<br /><br />
            Interpretamos un problema e ideamos la mejor solución desde un punto de vista tecnológico.
          </p>
        </div>

        {/* PI DATA */}
        <div 
          className="border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/public/logo-pi.png" alt="Logo PI DATA" className="max-h-24 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">AI, Big Data, Machine Learning & Business Intelligence</h4>
          <p className="text-sm text-center">
            Somos un equipo de profesionales especializados en AI, Big Data, Machine Learning & Business Intelligence.
          </p>
        </div>

        {/* WEMOX */}
        <div 
          className="border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/public/logo-wemox.png" alt="Logo WEMOX" className="max-h-35 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">Business Applications</h4>
          <p className="text-sm text-center">
            Ofrecemos soluciones de negocios y productos especializados para agilizar y escalar procesos y servicios de nuestros clientes.
          </p>
        </div>

        {/* VULPS */}
        <div 
          className="border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/public/logo-vulps.png" alt="Logo VULPS" className="max-h-35 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">Ciberseguridad</h4>
          <p className="text-sm text-center">
            Brindamos soluciones y servicios enfocados en la gobernanza, identificación, protección, detección, respuesta y recuperación ante amenazas cibernéticas.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;
