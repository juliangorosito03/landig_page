import React, { useState } from 'react';

const faqs = [
  {
    pregunta: '¿La entrada tiene costo?',
    respuesta: 'No, la entrada es libre y gratuita. Los cupos son limitados, por lo que deberás aguardar nuestra confirmación por correo electrónico. La misma constará de un código QR que será único e intransferible para poder ingresar al evento.',
  },
  
];

function FAQ() {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0e0e0e] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-12" data-aos="fade-up">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition flex justify-between items-center"
              >
                <span className="font-medium">{faq.pregunta}</span>
                <span className="text-blue-400">{activo === index ? '-' : '+'}</span>
              </button>
              {activo === index && (
                <div className="px-6 py-4 bg-[#151515] text-white/80 text-sm border-t border-gray-700 transition-all duration-300">
                  {faq.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

