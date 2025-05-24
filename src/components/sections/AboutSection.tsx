import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import yo from './yo.jpg'

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { inView } = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black md:pt-[120px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${inView ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="relative">
              <img
                src={yo}
                alt="Juan Viana"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
              <div className="absolute inset-0 border-2 border-purple-500 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>

          <div
            className={`lg:w-1/2 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'
              }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">SOBRE MÍ</h2>

            <div className="space-y-4 text-gray-300">
              <p>
                ¡Hola! Soy un músico con una gran pasión por la creación musical. Desde que descubrí el poder de la música para expresar lo que a veces no se puede decir con palabras, supe que quería dedicarme a componer y compartir mis sonidos con el mundo.
              </p>

              <p>
                Me encanta experimentar con distintos estilos y emociones en mis composiciones, siempre buscando transmitir algo auténtico. Aunque estoy empezando este camino, cada día aprendo algo nuevo y pongo todo mi corazón en cada nota.

              </p>

              <p>
                Estoy en constante crecimiento, creando mis propias canciones y explorando nuevas formas de expresión musical. Este es solo el comienzo, y me emociona todo lo que viene por delante.

              </p>

              <p>
                Gracias por acompañarme en este viaje musical. 🎶
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;