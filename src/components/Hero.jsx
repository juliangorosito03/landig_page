import React from 'react';
import tituloImg from '../assets/loading.png';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden text-white"
    >
      <video
        src="/cedi.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-0" />

      <div
        className="absolute left-10 top-1/2 transform -translate-y-1/2 max-w-xl z-10 text-left space-y-6"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img
          src={tituloImg}
          alt="Connect GA.IA Edition"
          className="w-[300px] md:w-[400px] h-auto"
          data-aos="fade-up"
        />

        <p className="text-lg text-white/90" data-aos="fade-up" data-aos-delay="100">
          Una experiencia para construir tecnologías que se integren armónicamente con el ecosistema urbano y social desde la innovación. Una evolución hacia un futuro más conectado.
        </p>

        <div data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://shorturl.at/bDbQY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition"
          >
            Registro
          </a>
        </div>

        <p className="text-sm text-white/70" data-aos="fade-up" data-aos-delay="300">
          La participación requiere inscripción previa. Los cupos son limitados y estarán sujetos a confirmación.
        </p>

        <div className="flex items-center gap-2 text-white/80 text-sm" data-aos="fade-up" data-aos-delay="400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 12.414A2 2 0 0012 12H12a2 2 0 00-1.414.586l-4.243 4.243m5.657-10.243a4 4 0 015.656 5.657L12 21l-6.364-6.364a4 4 0 015.656-5.657z"
            />
          </svg>
          Hotel Quinto Centenario - Córdoba Capital
        </div>
      </div>
    </section>
  );
}

export default Hero;
