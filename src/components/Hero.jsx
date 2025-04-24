import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col">
      <main className="relative w-full overflow-hidden text-white">
        <section id="inicio" className="relative w-full h-[600px]">
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
            className="absolute left-10 top-1/2 transform -translate-y-1/2 max-w-xl z-10 text-left"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Connect GA.IA Edition
            </h1>

            <p className="text-lg mt-4 text-white/90">
              Una experiencia para construir tecnologías que se integren armónicamente con el ecosistema urbano y social desde la innovación. Una evolución hacia un futuro más conectado.
            </p>

            <a
              href="https://shorturl.at/bDbQY"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition"
            >
              Registro
            </a>

            <div className="flex items-start gap-2 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.905 0 5.584.929 7.879 2.504M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm text-white/70">
                La participación requiere inscripción previa. Los cupos son limitados y estarán sujetos a confirmación.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-white/80 text-sm">
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
              Humberto Primo 630 · Piso 5 Oficina F56 · Capitalinas · Córdoba
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hero;
