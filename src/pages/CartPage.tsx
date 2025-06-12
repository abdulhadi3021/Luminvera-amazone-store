import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';

export function CartPage() {
  const { cart, clearCart } = useCart();
  
  // Calculate shipping cost (free above $50)
  const shipping = cart.total >= 50 ? 0 : 4.99;
  
  // Calculate tax (7%)
  const tax = cart.total * 0.07;
  
  // Calculate order total
  const orderTotal = cart.total + shipping + tax;
  
  return (
    <div className="container mx-auto px-4 py-8 bg-bg-primary min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-heading">Shopping Cart</h1>
      
      {cart.items.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-block p-6 bg-highlight rounded-full mb-4">
            <ShoppingCart size={48} className="text-text-primary" />
          </div>
          <h2 className="text-xl font-medium text-heading mb-4">Your cart is empty</h2>
          <p className="text-text-primary mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="bg-cta text-cta-text px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center">
            Continue Shopping <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-cta-text rounded-lg shadow-sm p-6 border border-border">
              <div className="border-b border-border pb-4 mb-4">
                <h2 className="text-xl font-medium text-heading">Cart Items ({cart.items.reduce((sum, item) => sum + item.quantity, 0)})</h2>
              </div>
              
              <div>
                {cart.items.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6 flex justify-between">
                <button 
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Clear Cart
                </button>
                <Link 
                  to="/products" 
                  className="text-cta hover:text-heading transition-colors inline-flex items-center"
                >
                  Continue Shopping <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cta-text rounded-lg shadow-sm p-6 sticky top-24 border border-border">
              <h2 className="text-xl font-medium border-b border-border pb-4 mb-4 text-heading">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-primary">Subtotal</span>
                  <span className="font-medium text-text-primary">${cart.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-primary">Shipping</span>
                  <span className="font-medium text-text-primary">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-primary">Tax (7%)</span>
                  <span className="font-medium text-text-primary">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-border my-4 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-heading">Total</span>
                    <span className="text-heading">${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                {cart.total < 50 && (
                  <div className="bg-highlight text-text-primary p-3 rounded-md text-sm mb-4 border border-border">
                    Add ${(50 - cart.total).toFixed(2)} more to get free shipping!
                  </div>
                )}
                
                <button className="w-full py-3 bg-cta text-cta-text rounded-md hover:bg-opacity-90 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}