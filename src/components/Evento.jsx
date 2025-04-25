import React from 'react';
import {
  ShieldCheck,
  Brain,
  Server,
  Cloud,
  BarChart3,
  Repeat,
  RefreshCw,
  Target,
} from 'lucide-react';

function Evento() {
  return (
    <section id="evento" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-blue-400"
          data-aos="fade-up"
        >
          Sobre el Evento
        </h2>

        <p
          className="text-white/90 text-lg md:text-xl leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Exploraremos cómo la inteligencia artificial y soluciones tecnológicas se integran
          sinérgicamente en nuestro ecosistema, potenciando nuestras capacidades, optimizando procesos
          y habilitando mejores resultados en todos los niveles de la vida urbana y social.
        </p>

        {/* BLOQUE DE SOLUCIONES CENTRADO EN CUADRO */}
        <div
          className="bg-white/5 border border-white/10 rounded-xl px-6 py-8 mt-8 backdrop-blur-md max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-6 text-center">
            Soluciones en tecnología
          </h3>

          <div className="flex flex-col items-center justify-center gap-4 text-base md:text-lg text-white/90 font-medium">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 max-w-[700px]">
              <div className="flex items-center gap-2 min-w-[250px]">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span>Ciberseguridad</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>Inteligencia Artificial</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <Server className="w-5 h-5 text-blue-400" />
                <span>Infraestructura</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span>Tecnología en la Nube</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span>Analítica de Datos</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <RefreshCw className="w-5 h-5 text-blue-400" />
                <span>Transformación Digital</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <Repeat className="w-5 h-5 text-blue-400" />
                <span>Automatización</span>
              </div>
              <div className="flex items-center gap-2 min-w-[250px]">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Estrategia IT</span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE DE FECHA, HORA Y UBICACIÓN CON ÍCONOS */}
        <div
          className="mt-12 space-y-4 text-white/90 text-base md:text-lg font-medium"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10m-13 8h16M5 21V9h14v12H5z"
              />
            </svg>
            Miércoles 14 de mayo
          </div>

          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            8:30 a 18:00 hs
          </div>

          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-400"
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
            Hotel Quinto Centenario — Córdoba Capital
          </div>

          <div className="flex items-center justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 1.656-1.567 3-3.5 3S5 12.656 5 11s1.567-3 3.5-3S12 9.344 12 11z M12 11c0 1.656 1.567 3 3.5 3S19 12.656 19 11s-1.567-3-3.5-3S12 9.344 12 11z"
              />
            </svg>
            <a
              href="https://www.google.com/maps/place/Hotel+Quinto+Centenario/@-31.4133902,-64.2036077,17z/data=!4m9!3m8!1s0x9432988237cc0001:0x4cceab0d9d4d1c1b!5m2!4m1!1i2!8m2!3d-31.4131888!4d-64.2028138!16s%2Fg%2F11j4sx9g2j?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 transition"
            >
              Ver en mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evento;
