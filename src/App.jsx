import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Evento from './components/Evento';
import Acompanian from './components/Acompanian';
import SomosCedi from './components/SomosCedi';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Services from './components/Services';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
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
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#0e0e0e] text-white">
          <Navbar />
          <Hero />
          <Evento />
          <Acompanian />
          <SomosCedi />
          <Agenda />
          <Speakers />
          <Services />
          <Projects />
          <FAQ />

          <div className="w-full bg-[#0e0e0e] flex justify-center py-8">
            <img 
              src="/cedi-footer.png" 
              alt="Footer Grupo CEDI" 
              className="h-24 md:h-30 lg:h-30 object-contain"
              data-aos="fade-up"
            />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
