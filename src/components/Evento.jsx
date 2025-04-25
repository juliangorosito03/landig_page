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

        <div
          className="mt-12 space-y-2 text-white/80 text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>📅 Miércoles 14 de mayo</div>
          <div>🕗 8:30 a 18:00 hs</div>
          <div>📍 Hotel Quinto Centenario — Córdoba Capital</div>
          <a
            href="https://www.google.com/maps/place/Hotel+Quinto+Centenario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline block pt-1"
          >
            Ver en mapa
          </a>
        </div>
      </div>
    </section>
  );
}

export default Evento;
