import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Evento from './components/Evento';
import Services from './components/Services';
import Projects from './components/Projects';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';



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
          <Agenda />
          <Speakers />
          <Services />
          <Projects />
          <FAQ />
          <Ubicacion />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

