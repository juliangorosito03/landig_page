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
    <section
      id="speakers"
      className="py-24 text-white font-[Space Grotesk]"
      style={{
        background: 'linear-gradient(to right, #7704E0 0%, #00D6AE 30%, #23255A 70%, #6C6CFF 100%), rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="relative text-4xl font-bold text-[#00D6AE] drop-shadow-md inline-block pb-3 mx-auto"
          style={{ WebkitTextStroke: '0.5px black', width: 'fit-content' }}
          data-aos="fade-up"
        >
          Speakers del Evento
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#00D6AE] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          {speakers.map((s, index) => (
            <div
              key={index}
              className="rounded-lg p-6 shadow-md transform transition hover:-translate-y-1 hover:shadow-lg bg-transparent"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={s.imagen}
                alt={s.nombre}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#00D6AE] shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[#00D6AE]">{s.nombre}</h3>
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
