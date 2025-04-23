import React, { useEffect, useState } from 'react';
import logo from '../assets/logo_CEDI.webp';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-fit max-w-[90%] bg-white/90 backdrop-blur-md rounded-full shadow-md transition-all duration-300 px-8 py-3 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="flex items-center justify-center gap-5">
        {/* Logo + Menú como bloque único */}
        <img src={logo} alt="Logo CEDI" className="h-10 w-auto" />

        <nav>
          <ul className="flex gap-5 text-sm md:text-base font-semibold text-gray-800 uppercase tracking-wide">
            <li><a href="#evento" className="hover:text-blue-600 transition">Evento</a></li>
            <li><a href="#agenda" className="hover:text-blue-600 transition">Agenda</a></li>
            <li><a href="#speakers" className="hover:text-blue-600 transition">Speakers</a></li>
            <li><a href="#faq" className="hover:text-blue-600 transition">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
