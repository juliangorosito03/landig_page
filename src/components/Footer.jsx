import React from 'react';
import logo from '../assets/logo_CEDI.webp';

function Footer() {
  return (
    <footer
      className="text-white py-10 mt-20 font-[Space Grotesk]"
      style={{
        background: 'linear-gradient(to right, #7704E0 0%, #00D6AE 30%, #23255A 70%, #6C6CFF 100%), rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
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
