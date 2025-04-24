import React from 'react';

function Evento() {
  return (
    <section id="evento" className="py-24 px-6 bg-[#111] text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-blue-400">Sobre el evento</h2>

        <p className="text-white/80 text-lg max-w-3xl mx-auto">
          Exploraremos cómo la inteligencia artificial y soluciones tecnológicas se integran sinérgicamente en nuestro ecosistema, potenciando nuestras capacidades, optimizando procesos y habilitando mejores resultados en todos los niveles de la vida urbana y social.
        </p>

        <div data-aos="zoom-in" data-aos-delay="200">
          <hr className="my-6 border-blue-500 w-24 mx-auto" />
          <p className="text-2xl md:text-3xl font-bold text-cyan-300 leading-relaxed">
            Ciberseguridad · Inteligencia Artificial · Infraestructura · Tecnología en la nube · Analítica de datos · Transformación digital · Automatización · Estrategia IT
          </p>
          <hr className="my-6 border-blue-500 w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto text-white/90 text-sm mt-10">
          <div className="flex items-center gap-3">
            <span className="text-xl">📅</span> Miércoles 14 de mayo
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">⏰</span> 8:30 a 18:00 hs
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <span>
              Hotel Quinto Centenario – Córdoba Capital<br />
              <a
                href="https://www.google.com/maps/place/Hotel+Quinto+Centenario/@-31.4131842,-64.2052887,17z/data=!3m1!4b1!4m9!3m8!1s0x94329889372cc000:0x40ceacba09d4dc1b!5m2!4m1!1i2!8m2!3d-31.4131884!4d-64.2028131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline ml-1"
              >
                Ver en mapa
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evento;
