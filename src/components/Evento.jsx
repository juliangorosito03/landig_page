import React from 'react';

function Evento() {
  return (
    <section id="evento" className="py-24 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6" data-aos="fade-up">
          Sobre el Evento
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          El evento de CEDI TECH CONSULTING es una experiencia única pensada para conectar tecnología, innovación y personas. Nos reunimos para compartir conocimientos, mostrar soluciones reales, y crear redes con impacto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div data-aos="fade-up" className="bg-[#1a1a1a] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">📍 Ubicación</h3>
            <p className="text-white/80 text-sm">Complejo Capitalinas — Humberto Primo 670, Córdoba Capital</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="bg-[#1a1a1a] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">📅 Fecha</h3>
            <p className="text-white/80 text-sm">Sábado 15 de junio · 09:00 a 18:00 hs</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-[#1a1a1a] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">🎤 Actividades</h3>
            <p className="text-white/80 text-sm">Charlas técnicas, experiencias en vivo, networking y presentación de proyectos tecnológicos desarrollados por CEDI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evento;

