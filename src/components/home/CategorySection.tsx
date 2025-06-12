import React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={link} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">{icon}</span>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        {description && (
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        )}
        
        <span className="text-blue-600 hover:text-orange-600 text-sm font-medium group-hover:underline">
          Shop now
        </span>
      </div>
    </Link>
  );
}

export function CategorySection() {
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
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shop All Categories</h2>
        <p className="text-gray-600 text-center mb-8">Discover our wide selection of products</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
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