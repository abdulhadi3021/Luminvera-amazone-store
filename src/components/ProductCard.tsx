import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  compact?: boolean;
}

export function ProductCard({ product, onQuickView, compact = false }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const { id, name, price, originalPrice, image, rating, isNew, discount } = product;
  
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
      {/* Product Badge */}
      {isNew && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold py-1 px-2 rounded z-10">
          New
        </div>
      )}
      
      {discount && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold py-1 px-2 rounded z-10">
          -{discount}%
        </div>
      )}
      
      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            compact ? 'h-32' : 'h-48'
          }`}
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          {onQuickView && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }} 
              className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              aria-label="Quick view"
            >
              <Eye size={16} />
            </button>
          )}
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              // Add to wishlist functionality
            }}
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Add to wishlist"
          >
            <Heart size={16} />
          </button>
        </div>
      </Link>
      
      {/* Product Details */}
      <div className={`p-3 ${compact ? 'p-2' : 'p-4'}`}>
        <Link to={`/product/${id}`} className="block">
          <h3 className={`font-medium text-gray-900 hover:text-orange-600 transition-colors line-clamp-2 ${
            compact ? 'text-sm min-h-[2rem]' : 'text-base min-h-[2.5rem]'
          }`}>
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-600">({rating})</span>
        </div>
        
        {/* Price */}
        <div className="mt-2 flex items-center">
          <span className={`font-bold text-gray-900 ${compact ? 'text-sm' : 'text-lg'}`}>
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className={`ml-2 text-gray-500 line-through ${compact ? 'text-xs' : 'text-sm'}`}>
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Prime badge */}
        <div className="mt-2">
          <span className="text-xs text-blue-600 font-medium">
            FREE delivery
          </span>
        </div>
      </div>
    </div>
  );
}