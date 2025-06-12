import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MAIN_CATEGORIES } from '../../constants/categories';

interface CategoryCardProps {
  title: string;
  icon: string;
  image: string;
  link: string;
  description?: string;
}

function CategoryCard({ title, icon, image, link, description }: CategoryCardProps) {
  return (
    <Link to={link} className="group flex-shrink-0 w-64 sm:w-72">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center text-white">
              <span className="text-2xl mr-2 drop-shadow-lg">{icon}</span>
              <h3 className="text-lg font-bold drop-shadow-lg">{title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          {description && (
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">{description}</p>
          )}
          
          <span className="text-orange-600 hover:text-orange-700 text-sm font-medium group-hover:underline transition-colors">
            Shop now →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CategorySection() {
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

  const categoryData = [
    {
      id: 'home-kitchen',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Everything for your home and kitchen needs'
    },
    {
      id: 'tech-gadgets',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
      description: 'Latest gadgets and electronics'
    },
    {
      id: 'fashion-travel',
      image: 'https://ik.imagekit.io/123e/download.jpg?updatedAt=1749461277742',
      description: 'Fashion and travel essentials'
    },
    {
      id: 'baby-family',
      image: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg',
      description: 'Products for babies and families'
    },
    {
      id: 'health-beauty',
      image: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg',
      description: 'Health and beauty products'
    },
    {
      id: 'kitchen-food',
      image: 'https://ik.imagekit.io/123e/download%20(2).jpg?updatedAt=1749468981834',
      description: 'Kitchen essentials and food items'
    },
    {
      id: 'pets-outdoors',
      image: 'https://images.pexels.com/photos/4498555/pexels-photo-4498555.jpeg',
      description: 'Pet supplies and outdoor gear'
    },
    {
      id: 'office-stationery',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
      description: 'Office and stationery supplies'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop All Categories</h2>
            <p className="text-gray-600">Discover our wide selection of products</p>
          </div>
          
          {/* Navigation buttons */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-orange-600 hover:shadow-lg transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-orange-600 hover:shadow-lg transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categoryData.map((category) => {
            const categoryInfo = MAIN_CATEGORIES.find(cat => cat.id === category.id);
            if (!categoryInfo) return null;
            
            return (
              <CategoryCard
                key={category.id}
                title={categoryInfo.label}
                icon={categoryInfo.icon}
                image={category.image}
                link={`/products/${category.id}`}
                description={category.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}