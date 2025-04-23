import React from 'react';

function Agenda() {
  return (
    <section id="agenda" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12" data-aos="fade-up">
          Agenda del Evento
        </h2>

        <div className="space-y-12 relative border-l border-gray-600 pl-6">
          <div data-aos="fade-up" className="relative">
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-blue-400 rounded-full" />
            <p className="text-sm text-blue-300 mb-1">09:00 hs</p>
            <h3 className="text-lg font-semibold mb-1">Acreditación y bienvenida</h3>
            <p className="text-white/70 text-sm">
              Recepción, café de bienvenida y entrega de credenciales a los asistentes.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="relative">
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-blue-400 rounded-full" />
            <p className="text-sm text-blue-300 mb-1">10:00 hs</p>
            <h3 className="text-lg font-semibold mb-1">Charla: Tecnología aplicada a eventos</h3>
            <p className="text-white/70 text-sm">
              Un recorrido por los sistemas implementados por CEDI en eventos reales.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="relative">
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-blue-400 rounded-full" />
            <p className="text-sm text-blue-300 mb-1">13:00 hs</p>
            <h3 className="text-lg font-semibold mb-1">Almuerzo + networking</h3>
            <p className="text-white/70 text-sm">
              Espacio para compartir ideas, conocer proyectos y generar conexiones.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="relative">
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-blue-400 rounded-full" />
            <p className="text-sm text-blue-300 mb-1">15:00 hs</p>
            <h3 className="text-lg font-semibold mb-1">Panel de speakers</h3>
            <p className="text-white/70 text-sm">
              Expertos comparten sus experiencias sobre transformación digital en distintos sectores.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="relative">
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-blue-400 rounded-full" />
            <p className="text-sm text-blue-300 mb-1">17:00 hs</p>
            <h3 className="text-lg font-semibold mb-1">Cierre + sorteos</h3>
            <p className="text-white/70 text-sm">
              Palabras finales, entrega de premios y actividades de cierre del evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agenda;
