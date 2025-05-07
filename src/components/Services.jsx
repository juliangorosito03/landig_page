import React from 'react';

function Services() {
  return (
    <section
      id="servicios"
      className="w-full py-24 text-white flex flex-col items-center font-[Space Grotesk]"
      style={{
        background:
          'linear-gradient(to right, #7704E0 0%, #00D6AE 30%, #23255A 70%, #6C6CFF 100%), rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h2
        className="relative text-4xl font-bold mb-4 text-[#00D6AE] drop-shadow-md inline-block pb-3"
        style={{ WebkitTextStroke: '0.5px black', width: 'fit-content' }}
        data-aos="fade-up"
      >
        Nuestros Servicios
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#00D6AE] rounded-full"></span>
      </h2>

      <p
        className="text-center text-lg font-bold mb-10 max-w-4xl px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        +30 años liderando la transformación tecnológica
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl">
        <div
          className="bg-white/20 text-white border border-white/10 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/cedi-logo.png" alt="Logo CEDI" className="max-h-24 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center"></h4>
          <p className="text-sm text-center">
            Lo mejor de nosotros al servicio de su empresa.<br /><br />
            Interpretamos un problema e ideamos la mejor solución desde un punto de vista tecnológico.
          </p>
        </div>

        <div
          className="bg-white/20 text-white border border-white/10 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/logo-vulps.png" alt="Logo VULPS" className="max-h-35 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">Ciberseguridad</h4>
          <p className="text-sm text-center">
            Brindamos soluciones y servicios enfocados en la gobernanza, identificación, protección, detección, respuesta y recuperación ante amenazas cibernéticas.
          </p>
        </div>

        <div
          className="bg-white/20 text-white border border-white/10 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/logo-wemox.png" alt="Logo WEMOX" className="max-h-35 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">Business Applications</h4>
          <p className="text-sm text-center">
            Ofrecemos soluciones de negocios y productos especializados para agilizar y escalar procesos y servicios de nuestros clientes.
          </p>
        </div>

        <div
          className="bg-white/20 text-white border border-white/10 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex justify-center items-center h-36 mb-6">
            <img src="/logo-pi.png" alt="Logo PI DATA" className="max-h-24 object-contain" />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">
            AI, Big Data, Machine Learning & Business Intelligence
          </h4>
          <p className="text-sm text-center">
            Somos un equipo de profesionales especializados en AI, Big Data, Machine Learning & Business Intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
