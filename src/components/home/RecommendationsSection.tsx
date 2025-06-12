import React from 'react';
import { ProductCard } from '../ProductCard';
import { products } from '../../data/products';

export function RecommendationsSection() {
  const recommendedProducts = products.slice(0, 8);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for you</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}