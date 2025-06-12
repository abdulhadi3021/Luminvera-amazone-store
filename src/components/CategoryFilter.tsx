import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../types';
import { MAIN_CATEGORIES } from '../constants/categories';

interface CategoryFilterProps {
  activeCategory: Category;
  onChangeCategory: (category: Category) => void;
}

export function CategoryFilter({ activeCategory, onChangeCategory }: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 200;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
      
      <div className="relative">
        {/* Navigation buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full text-gray-600 hover:text-orange-600 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full text-gray-600 hover:text-orange-600 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>

        {/* Categories container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-3 px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MAIN_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => onChangeCategory(category.id as Category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200 flex items-center whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}