import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      title: 'Summer Sale',
      subtitle: 'Up to 70% off on selected items'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      title: 'Electronics Deal',
      subtitle: 'Latest gadgets at best prices'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Home & Living',
      subtitle: 'Transform your space'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 bg-gray-100 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}