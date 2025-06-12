import React from 'react';
import { X, ShoppingCart, Star, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  
  if (!product) return null;
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            
            {/* Price */}
            <div className="mt-2 flex items-center">
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <span className="ml-2 text-sm font-medium bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                  Save {product.discount}%
                </span>
              )}
            </div>
            
            {/* Rating */}
            <div className="mt-3 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{product.rating} Rating</span>
            </div>
            
            {/* Description */}
            <p className="mt-4 text-gray-600">{product.description}</p>
            
            {/* Availability */}
            <div className="mt-6">
              <span className={`${
                product.inStock ? 'text-green-600' : 'text-red-600'
              } font-medium`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            
            {/* Quantity Selector */}
            <div className="mt-4 flex items-center">
              <span className="mr-3 text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="px-3 py-1 text-gray-800">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`mt-6 py-3 px-6 rounded-md flex items-center justify-center gap-2 ${
                product.inStock
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}