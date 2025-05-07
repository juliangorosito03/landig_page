import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Evento from './components/Evento';
import Acompanian from './components/Acompanian';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          .text-stroke {
            -webkit-text-stroke: 1px black;
            text-stroke: 1px black;
          }
        `}
      </style>

      {loading ? (
        <Loader />
      ) : (
        <div
          className="text-white font-[Space Grotesk]"
          style={{
            background: 'linear-gradient(to right, #7704E0 0%, #00D6AE 30%, #23255A 70%, #6C6CFF 100%), rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'overlay',
          }}
        >
          <Navbar />
          <Hero />
          <Evento />
          <Acompanian />
          <Services />
          <Agenda />
          <Speakers />
          <Projects />

          <div
            className="w-full flex justify-center py-12"
            data-aos="fade-up"
          >
            <img
              src="/cedi-footer.png"
              alt="Grupo CEDI"
              className="h-24 md:h-28 lg:h-32 object-contain"
            />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
