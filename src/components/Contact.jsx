import React from 'react';

function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#111] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6" data-aos="fade-up">
          Contactanos
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Si querés más información sobre el evento, servicios o proyectos, dejanos tu mensaje.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" data-aos="fade-up" data-aos-delay="200">
          <div>
            <label className="block mb-2 text-sm font-semibold">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="tucorreo@email.com"
              className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold">Mensaje</label>
            <textarea
              rows="5"
              placeholder="Escribí tu mensaje..."
              className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow transition"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
