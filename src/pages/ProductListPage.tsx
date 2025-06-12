import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { QuickViewModal } from '../components/QuickViewModal';
import { products } from '../data/products';
import { Product, Category } from '../types';
import { MAIN_CATEGORIES } from '../constants/categories';

export function ProductListPage() {
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Update active category when URL parameter changes
  useEffect(() => {
    if (category && MAIN_CATEGORIES.find(cat => cat.id === category)) {
      setActiveCategory(category as Category);
    } else {
      setActiveCategory('all');
    }
  }, [category]);
  
  // Filter products based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  const getCategoryDisplayName = (categoryId: string) => {
    if (categoryId === 'all') return 'All Products';
    const category = MAIN_CATEGORIES.find(cat => cat.id === categoryId);
    return category ? `${category.icon} ${category.label}` : 'Products';
  };
  
  return (
    <div className="container mx-auto px-4 py-8 bg-bg-primary min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-heading">
        {getCategoryDisplayName(activeCategory)}
      </h1>
      
      <CategoryFilter activeCategory={activeCategory} onChangeCategory={handleCategoryChange} />
      
      {filteredProducts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-text-primary">No products found in this category.</p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredProducts.length} products
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </>
      )}
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
}