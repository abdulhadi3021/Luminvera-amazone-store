import React, { useState } from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategorySection } from '../components/home/CategorySection';
import { NewArrivalsSection } from '../components/home/NewArrivalsSection';
import { DealsSection } from '../components/home/DealsSection';
import { RecommendationsSection } from '../components/home/RecommendationsSection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { QuickViewModal } from '../components/QuickViewModal';
import { Product } from '../types';
import { products } from '../data/products';

export function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const featuredProducts = products.filter(product => product.isFeatured);
  
  return (
    <div className="bg-white">
      <HeroBanner />
      <CategorySection />
      <NewArrivalsSection />
      <DealsSection />
      
      <div className="bg-white py-12">
        <FeaturedProducts 
          products={featuredProducts}
          title="Featured Products"
          onQuickView={setQuickViewProduct}
        />
      </div>
      
      <RecommendationsSection />
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
}