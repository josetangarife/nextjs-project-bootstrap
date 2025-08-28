"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            DevSoft
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-black text-white hover:bg-gray-800"
            >
              Cotizar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection('contacto')}
                className="bg-black text-white hover:bg-gray-800 w-full"
              >
                Cotizar Proyecto
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
