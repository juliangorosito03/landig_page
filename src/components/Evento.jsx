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
    <section
      id="evento"
      className="relative z-10 py-24 text-white font-[Space Grotesk]"
      style={{
        background: 'linear-gradient(to right, #7704E0 0%, #00D6AE 30%, #23255A 70%, #6C6CFF 100%), rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 text-[#00D6AE] drop-shadow-md"
          style={{ WebkitTextStroke: '0.5px black' }}
          data-aos="fade-up"
        >
          Sobre el Evento
        </h2>

        <div className="w-24 h-1 bg-[#00D6AE] mx-auto mb-8" data-aos="fade-up" data-aos-delay="50"></div>

        <p
          className="text-white text-lg md:text-xl leading-relaxed mb-8 drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Exploraremos cómo la inteligencia artificial y soluciones tecnológicas se integran
          sinérgicamente en nuestro ecosistema, potenciando nuestras capacidades, optimizando procesos
          y habilitando mejores resultados en todos los niveles de la vida urbana y social.
        </p>

        <div
          className="bg-white/5 border border-white/10 rounded-xl px-6 py-8 mt-8 backdrop-blur-md max-w-3xl mx-auto shadow"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#00D6AE]">
            Soluciones en tecnología
          </h3>

          <div className="flex flex-col items-center justify-center gap-4 text-base md:text-lg text-white/90 font-medium">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 max-w-[700px]">
              {[
                { icon: <ShieldCheck />, label: 'Ciberseguridad' },
                { icon: <Brain />, label: 'Inteligencia Artificial' },
                { icon: <Server />, label: 'Infraestructura' },
                { icon: <Cloud />, label: 'Tecnología en la Nube' },
                { icon: <BarChart3 />, label: 'Analítica de Datos' },
                { icon: <RefreshCw />, label: 'Transformación Digital' },
                { icon: <Repeat />, label: 'Automatización' },
                { icon: <Target />, label: 'Estrategia IT' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 min-w-[250px]">
                  {React.cloneElement(item.icon, { className: 'w-5 h-5', color: '#00D6AE' })}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 space-y-4 text-white text-base md:text-lg font-medium"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center justify-center gap-3">📅 Miércoles 14 de mayo</div>
          <div className="flex items-center justify-center gap-3">⏰ 8:30 a 18:00 hs</div>
          <div className="flex items-center justify-center gap-3">
            📍 Hotel Quinto Centenario — Córdoba Capital
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              🔗
              <a
                href="https://goo.gl/maps/tXFVP3kTyVVDQUaY7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D6AE] underline hover:text-white transition"
              >
                Ver en mapa
              </a>
            </div>
            <iframe
              title="Hotel Quinto Centenario"
              src="https://maps.google.com/maps?q=Hotel%20Quinto%20Centenario%20Córdoba&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="350"
              height="250"
              style={{ border: 0, borderRadius: '0.75rem', marginTop: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evento;
