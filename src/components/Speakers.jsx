import React from 'react';

const speakers = [
  {
    nombre: 'Ejemplo Speaker 1',
    titulo: 'CEO de Empresa Tech',
    imagen: '/logo.png', 
  },
  {
    nombre: 'Ejemplo Speaker 2',
    titulo: 'Especialista en Innovación',
    imagen: '/logo.png',
  },
  {
    nombre: 'Ejemplo Speaker 3',
    titulo: 'Consultor en Eventos Digitales',
    imagen: '/logo.png',
  },
];

function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-12" data-aos="fade-up">
          Speakers del Evento
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {speakers.map((s, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={s.imagen}
                alt={s.nombre}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-blue-300">{s.nombre}</h3>
                <p className="text-white/70 text-sm mt-1">{s.titulo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
