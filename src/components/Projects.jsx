import React from 'react';

function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6" data-aos="fade-up">
          Ediciones anteriores
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Reviví los momentos más destacados de los eventos anteriores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-up">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-72 rounded-xl"
                src="https://www.youtube.com/embed/l4LUsZ00fR0"
                title="Connect 2022"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-white/70">Edición 2022</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-72 rounded-xl"
                src="https://www.youtube.com/embed/UXM2TC495Y0"
                title="Connect 2023"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-white/70">Edición 2023</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-72 rounded-xl"
                src="https://www.youtube.com/embed/kK21d4En87c"
                title="Connect 2024"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-white/70">Edición 2024</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-72 rounded-xl"
                src="https://www.youtube.com/embed/O9aCujDeEq0"
                title="¡Ganamos un Eikon!"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-sm text-white/70">¡Ganamos un Eikon!</p>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://events.teams.microsoft.com/event/878e4c12-01ec-43d5-a1ad-d764e514046f@adeee945-465d-469f-9c10-bbf55bed49ea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
          >
            Registrate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
