import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import IMG_7536_TIF from './IMG_7536_TIF.jpg';
import IMG_7414 from './IMG_7414.jpg';
import _MG_7187 from './_MG_7187.jpg';

const images = [
  {
    id: 1,
    src: _MG_7187,
    alt: "Concierto en vivo"
  },
  {
    id: 2,
    src: IMG_7414,
    alt: "Sesión de estudio"
  },
  {
    id: 3,
    src: IMG_7536_TIF,
    alt: "Tocando guitarra"
  }
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { inView } = useInView(sectionRef, { threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  return (
    <section 
      id="galeria" 
      ref={sectionRef}
      className="py-20 md:pt-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold md:pt-20 mb-4 transition-all duration-700 ${
              inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}
          >
            GALERÍA
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-700 delay-${index * 150} ${
                inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-black/60 rounded-full">
                    Ver imagen
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt} 
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
        )}
        
        <div 
  className={`mt-12 text-center transition-all duration-700 delay-600 ${
    inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
  }`}
>
  <a 
    href="https://www.instagram.com/juaanvianaa/?__pwa=1" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 text-white font-medium transition-all duration-300 hover:brightness-125"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      width="20" 
      height="20"
    >
      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.75 2a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Zm-4.5 1.5a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5Zm0 1.5a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5Z"/>
    </svg>
    Ver más en Instagram
  </a>
</div>

      </div>
    </section>
  );
};

export default GallerySection;