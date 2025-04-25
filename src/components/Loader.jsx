import React from 'react';
import logo from '../assets/logo_CEDI.webp';

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img 
      src={logo} 
      alt="Cargando..." 
      className="w-[100px] h-[100px] animate-pulse"
      />
    </div>
  );
}

export default Loader;