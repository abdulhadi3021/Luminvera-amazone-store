import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '../ProductCard';
import { products } from '../../data/products';

export function NewArrivalsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const newArrivals = products.filter(product => product.isNew).slice(0, 12);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">New Arrivals</h2>
            <p className="text-gray-600">Fresh products just added to our collection</p>
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newArrivals.map(product => (
            <div key={product.id} className="flex-shrink-0 w-64 sm:w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}