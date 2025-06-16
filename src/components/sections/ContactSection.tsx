import React, { useRef, useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { inView } = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    
    setTimeout(() => {
      const { name, email, subject, message } = formData;
      
      const whatsappMessage = `¡Hola Juan! Soy ${name}. 

${subject === 'booking' ? 'Estoy interesado/a en contratar tus servicios para un evento.' : 
 subject === 'collaboration' ? 'Me gustaría explorar una posible colaboración contigo.' :
 subject === 'press' ? 'Te contacto desde medios/prensa para una posible nota.' :
 'Quería contactarte por lo siguiente:'}

${message}

Puedes responder a este mensaje o contactarme por:
📧 Email: ${email}

¡Quedo atento/a a tu respuesta!`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/59892401818?text=${encodedMessage}`, '_blank');
      setShowModal(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };
  
  return (
    <section 
      id="contacto" 
      ref={sectionRef}
      className="py-20 bg-black relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 md:pt-20 transition-all duration-700 ${
              inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}
          >
            CONTACTO
          </h2>
          <p
            className={`text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}
          >
            ¿Tienes alguna pregunta o propuesta? No dudes en ponerte en contacto conmigo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="booking">Contratación para eventos</option>
                  <option value="collaboration">Propuesta de colaboración</option>
                  <option value="press">Prensa y medios</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-300/80 to-amber-300/70 text-white rounded-lg font-medium hover:from-amber-400 hover:to-amber-500 transition-all"
              >
                <span>Enviar mensaje</span>
                <Send size={16} />
              </button>
            </form>
          </div>
          
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-300/20 rounded-lg text-amber-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Teléfono</h4>
                  <p className="text-gray-400">+598 92 401 818</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-300/20 rounded-lg text-amber-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">navegandostream@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-300/20 rounded-lg text-amber-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-3.314 0-6 2.686-6 6v1h12v-1c0-3.314-2.686-6-6-6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Ubicación</h4>
                  <p className="text-gray-400">Maldonado, Uruguay</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Sígueme en redes sociales</h3>
              <div className="flex space-x-6 mb-6 justify-center md:justify-start">
                {/* Instagram */}
                <a href="https://www.instagram.com/juaanvianaa/?__pwa=1" target="_blank" rel="noopener noreferrer" className="group">
                  <svg className="w-6 h-6 group-hover:text-amber-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/channel/UC7HqYkA3OOhLiY3Off786XQ" target="_blank" rel="noopener noreferrer" className="group">
                  <svg className="w-6 h-6 group-hover:text-amber-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>

                {/* Spotify */}
                <a href="https://open.spotify.com/intl-es/artist/7lt6YhtJyaJZH1eEF8lz64" target="_blank" rel="noopener noreferrer" className="group">
                  <svg className="w-6 h-6 group-hover:text-amber-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.178-.385.234-.563.108-1.531-1.058-3.617-1.306-5.979-.719-.198.054-.378-.092-.432-.289-.054-.197.091-.379.288-.433 2.571-.654 4.893-.373 6.634.826.179.126.235.385.108.563l-.056.08zm.816-1.955c-.159.26-.498.342-.758.183-1.751-1.182-4.417-1.424-6.486-.734-.299.082-.609-.098-.691-.397-.082-.299.098-.61.397-.691 2.373-.784 5.322-.505 7.365.85.26.159.341.498.182.758l-.069.112zm.074-2.056c-2.102-1.251-5.598-1.365-7.678-.722-.36.102-.738-.093-.84-.453-.103-.36.092-.738.453-.84 2.447-.694 6.284-.553 8.722.828.317.188.42.597.232.914-.188.317-.597.42-.914.232l-.115-.068z" />
                  </svg>
                </a>

                {/* Apple Music */}
                <a href="http://music.apple.com/uy/artist/viana/1555135666" target="_blank" rel="noopener noreferrer" className="group">
                  <svg className="w-6 h-6 group-hover:text-amber-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.597-1.101.782.033 2.979.316 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                  </svg>
                </a>

                {/* Deezer */}
                <a href="https://www.deezer.com/mx/artist/124665082" target="_blank" rel="noopener noreferrer" className="group">
                  <svg className="w-6 h-6 group-hover:text-amber-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.77v3.029h5.19V16.77H0zm6.27 0v3.029h5.189V16.77h-5.19zm6.271 0v3.029h5.19V16.77h-5.19zm6.27 0v3.029H24V16.77h-5.19z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de WhatsApp */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300"></div>
          
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-amber-100/90 rounded-xl p-8 max-w-md w-full mx-4 animate-fade-in">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    className="h-12 w-12 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Redirigiendo a WhatsApp</h3>
                <p className="mt-2 text-white">Preparando tu mensaje...</p>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`style
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
        `}</style>
    </section>
  );
};

export default ContactSection;
