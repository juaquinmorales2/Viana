import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

const tweets = [
  {
    id: 1,
    content: "¡Gracias a todos por el apoyo en mi último lanzamiento! 🚀🎶 #MeDiCuenta",
    date: "2025-05-20"
  },
  {
    id: 2,
    content: "Estuve trabajando en nuevas canciones, pronto habrá sorpresas... 👀🔥",
    date: "2025-05-18"
  },
  {
    id: 3,
    content: "Gracias por acompañarme hoy en Box Garden, cada canción es parte de mi alma. ❤️🎤",
    date: "2025-05-15"
  },
];

const TwitterSection = () => {
  const sectionRef = useRef(null);
  const tweetsRef = useRef(null);
  const { inView } = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="aviso" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden md:pt-20"
    >
      <div className="container mx-auto px-4 relative z-10 md:pt-20">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            NOVEDADES
          </h2>
          <p 
            className={`text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Mira aquí anuncios de mis próximos lanzamientos y eventos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center">

          <div
            ref={tweetsRef}
            className={`relative max-w-lg w-full bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 shadow-xl transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <HeartsAnimation containerRef={tweetsRef} />
            <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
              Últimos Tweets
            </h3>
            <ul className="space-y-5">
              {tweets.map(tweet => (
                <li key={tweet.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300">{tweet.content}</p>
                  <span className="text-sm text-gray-500 block mt-2">{tweet.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div 
            className={`flex flex-col gap-6 flex-grow max-w-md rounded-lg overflow-hidden shadow-xl transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ minHeight: '400px' }}
          >
            <iframe
              className="w-full flex-grow rounded-md"
              src="https://www.youtube.com/embed/P1F1ZPums30"
              title="YouTube Short 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="w-full flex-grow rounded-md"
              src="https://www.youtube.com/embed/ikclWltlRcY"
              title="YouTube Short 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const HeartsAnimation = ({ containerRef }) => {
  const hearts = Array.from({ length: 4 });

  return (
    <>
      {hearts.map((_, i) => (
        <span
          key={i}
          className="absolute text-purple-400 animate-heart"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: '3px', 
            fontSize: `${14 + Math.random() * 12}px`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${5 + Math.random() * 3}s`,
            pointerEvents: 'none',
          }}
        >
          💜
        </span>
      ))}

      <style jsx>{`
        @keyframes float-heart {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-180px) scale(1.3);
            opacity: 0;
          }
        }
        .animate-heart {
          animation-name: float-heart;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
};

export default TwitterSection;
