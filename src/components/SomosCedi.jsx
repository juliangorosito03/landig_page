import React from 'react';

function SomosCedi() {
  return (
    <section id="somos-grupo-cedi" className="w-full py-16 bg-[#0e0e0e] text-white flex flex-col items-center">
      
      <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
      </h2>

      <div className="flex justify-center mt-4" data-aos="fade-up" data-aos-delay="100">
        <img 
          src="/GrupoCedi.png" 
          alt="Logo Grupo CEDI" 
          className="h-24 md:h-32 w-auto object-contain" 
        />
      </div>

    </section>
  );
}

export default SomosCedi;
