import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();
  const { product, quantity } = item;
  
  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b border-border">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-1 px-4">
        <h3 className="text-lg font-medium text-heading">{product.name}</h3>
        <p className="text-sm text-text-primary opacity-70">{product.category}</p>
        <div className="mt-1 flex items-center">
          <span className="font-semibold text-text-primary">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-text-primary opacity-60 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center border border-border rounded-md mt-4 sm:mt-0">
        <button
          onClick={handleDecrement}
          className="px-3 py-1 text-text-primary hover:bg-highlight disabled:opacity-50"
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <span className="px-3 py-1 text-text-primary">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-3 py-1 text-text-primary hover:bg-highlight"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Item Total */}
      <div className="text-right ml-4 sm:ml-6">
        <div className="text-lg font-semibold text-text-primary">
          ${(product.price * quantity).toFixed(2)}
        </div>
        <button
          onClick={handleRemove}
          className="mt-2 text-red-500 hover:text-red-700 flex items-center text-sm"
        >
          <Trash2 size={16} className="mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
}