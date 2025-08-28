export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DevSoft</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Somos una empresa líder en desarrollo de software, especializada en crear 
              soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio.
            </p>
            <div className="text-gray-300">
              <p className="mb-2">📧 contacto@devsoft.com</p>
              <p className="mb-2">📞 +1 (555) 123-4567</p>
              <p>📍 Ciudad de México, México</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Consultoría TI
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Sistemas Empresariales
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DevSoft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
