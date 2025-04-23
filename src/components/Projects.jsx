import React from 'react';
import img1 from '../assets/IMG_9061.jpg';
import img2 from '../assets/IMG_9128.jpg';
import img3 from '../assets/C80A9427.jpg';

function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6" data-aos="fade-up">
          Casos de Éxito
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Algunos proyectos donde aplicamos innovación, tecnología y diseño a medida.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 - Ejemplo 1 */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-md" data-aos="fade-up">
            <img src={img2} alt="Proyecto 2" className="rounded mb-4 w-full" />
            <h3 className="text-xl font-semibold mb-2">Nota de evento</h3>
            <p className="text-white/70 text-sm">
            Texto para poner debajo de esta seccion, ejemplo 1.
            </p>
          </div>

          {/* 2 -  Ejemplo 2 */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-md" data-aos="fade-up" data-aos-delay="100">
            <img src={img3} alt="Proyecto 3" className="rounded mb-4 w-full" />
            <h3 className="text-xl font-semibold mb-2">Nota de evento</h3>
            <p className="text-white/70 text-sm">
              Texto para poner debajo de esta seccion, ejemplo 2.
            </p>
          </div>

          {/* 3 - Ejemplo 3*/}
          <div className="bg-[#1a1a1a] rounded-xl p-6 shadow-md" data-aos="fade-up" data-aos-delay="200">
            <img src={img1} alt="Proyecto 1" className="rounded mb-4 w-full" />
            <h3 className="text-xl font-semibold mb-2">Nota de evento</h3>
            <p className="text-white/70 text-sm">
              Texto para poner debajo de esta seccion, ejemplo 3.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
