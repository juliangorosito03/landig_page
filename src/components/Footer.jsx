import React from 'react';
import logo from '../assets/logo_CEDI.webp';

function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <img src={logo} alt="Logo CEDI" className="h-10 w-auto mb-4" />

      
        <p className="text-sm text-white/80 mb-2">
          Humberto Primo 670 · Piso 5 Oficina F56 (Bloque Fragueiro) · Complejo Capitalinas · Córdoba, Argentina.
        </p>

        
        <p className="text-xs text-white/50 mt-4">
          © {new Date().getFullYear()} CEDI TECH CONSULTING · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

