import React from 'react';

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6" data-aos="fade-up">
          ¿Dónde nos encontramos?
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Nuestra sede está ubicada en el centro de Córdoba Capital, en el complejo Capitalinas.
        </p>
        <div className="w-full max-w-xl h-[250px] mx-auto rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200">
        <iframe
            title="Ubicación Capitalinas Córdoba"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1378.2472877871743!2d-64.18618324401173!3d-31.41220383766162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28f0602db1d%3A0x20a1fa5cbe56d2f3!2sCapitalinas%2C%20Humberto%20Primo%20670%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1713125990423!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;
