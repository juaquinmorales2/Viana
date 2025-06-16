import React from 'react';
import { Mail } from 'lucide-react';
import vos from "../sections/vos.jpg";
import logo from '../sections/channels4_banner-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <img src={logo} className="h-14" alt="Logo Viana" />
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Lo nuestro no es llegar, es seguir navegando. Subite y vení a disfrutar del viaje.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-purple-400 transition-colors">Inicio</a></li>
              <li><a href="#musica" className="hover:text-purple-400 transition-colors">Música</a></li>
              <li><a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre Mí</a></li>
              <li><a href="#galeria" className="hover:text-purple-400 transition-colors">Galería</a></li>
              <li><a href="#aviso" className="hover:text-purple-400 transition-colors">Avisos</a></li>
              <li><a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="flex space-x-6 mb-6 justify-center md:justify-start">
              <a href="https://www.instagram.com/juaanvianaa/?__pwa=1" target="_blank" rel="noopener noreferrer" className="group">
                <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="https://www.youtube.com/channel/UC7HqYkA3OOhLiY3Off786XQ" target="_blank" rel="noopener noreferrer" className="group">
                <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              <a href="https://open.spotify.com/intl-es/artist/7lt6YhtJyaJZH1eEF8lz64" target="_blank" rel="noopener noreferrer" className="group">
                <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.178-.385.234-.563.108-1.531-1.058-3.617-1.306-5.979-.719-.198.054-.378-.092-.432-.289-.054-.197.091-.379.288-.433 2.571-.654 4.893-.373 6.634.826.179.126.235.385.108.563l-.056.08zm.816-1.955c-.159.26-.498.342-.758.183-1.751-1.182-4.417-1.424-6.486-.734-.299.082-.609-.098-.691-.397-.082-.299.098-.61.397-.691 2.373-.784 5.322-.505 7.365.85.26.159.341.498.182.758l-.069.112zm.074-2.056c-2.102-1.251-5.598-1.365-7.678-.722-.36.102-.738-.093-.84-.453-.103-.36.092-.738.453-.84 2.447-.694 6.284-.553 8.722.828.317.188.42.597.232.914-.188.317-.597.42-.914.232l-.115-.068z" />
                </svg>
              </a>

              <a href="http://music.apple.com/uy/artist/viana/1555135666" target="_blank" rel="noopener noreferrer" className="group">
                <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.597-1.101.782.033 2.979.316 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                </svg>
              </a>

              <a href="https://www.deezer.com/mx/artist/124665082" target="_blank" rel="noopener noreferrer" className="group">
                <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.77v3.029h5.19V16.77H0zm6.27 0v3.029h5.189V16.77h-5.19zm6.271 0v3.029h5.19V16.77h-5.19zm6.27 0v3.029H24V16.77h-5.19z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm mt-4 justify-center md:justify-start">
              <Mail size={16} />
              <a href="mailto:contacto@carlosvega.com" className="hover:text-purple-400 transition-colors">
                navegandostream@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-400 flex justify-center">
          <div className="flex items-center space-x-4 ml-3">
            <img
              src={vos}
              alt="VOS Marketing Logo"
              className="w-14 h-14 object-cover rounded-full shadow-lg border border-gray-700"
            />
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-white">VOS Marketing S.A.</span> Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
