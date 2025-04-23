import React from 'react';
import logo from '../assets/logo_CEDI.webp';

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] animate-fade-out" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
      <img src={logo} alt="Logo CEDI" className="w-20 h-auto animate-pulse" />
    </div>
  );
}

export default Loader;
