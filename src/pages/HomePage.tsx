import React, { useState } from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategorySection } from '../components/home/CategorySection';
import { DealsSection } from '../components/home/DealsSection';
import { RecommendationsSection } from '../components/home/RecommendationsSection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { QuickViewModal } from '../components/QuickViewModal';
import { Product } from '../types';
import { products } from '../data/products';

export function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const featuredProducts = products.filter(product => product.isFeatured);
  const newArrivals = products.filter(product => product.isNew);
  
  return (
    <div className="bg-gray-100">
      <HeroBanner />
      <CategorySection />
      <DealsSection />
      
      <div className="bg-white py-8">
        <FeaturedProducts 
          products={featuredProducts}
          title="Featured Products"
          onQuickView={setQuickViewProduct}
        />
      </div>
      
      <RecommendationsSection />
      
      <div className="bg-white py-8">
        <FeaturedProducts 
          products={newArrivals}
          title="New Arrivals"
          onQuickView={setQuickViewProduct}
        />
      </div>
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
}