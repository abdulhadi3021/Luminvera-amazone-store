import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, User, Menu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';
import { AuthModal } from '../../AuthModal';
import { MAIN_CATEGORIES } from '../../../constants/categories';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const { cart } = useCart();
  const { user, signOut } = useAuth();

  const categories = ['All', ...MAIN_CATEGORIES.slice(1).map(cat => cat.label)];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
  };

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      {/* Top banner */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <span>Free shipping on orders over $25 shipped by Luminvera</span>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-2">
            
            {/* Logo */}
            <Link to="/" className="flex items-center mr-6">
              <div className="bg-orange-500 px-3 py-2 rounded">
                <span className="text-white font-bold text-xl">Luminvera</span>
              </div>
            </Link>

            {/* Delivery location */}
            <div className="hidden md:flex items-center mr-4 cursor-pointer hover:border border-white rounded p-1">
              <MapPin size={16} className="mr-1" />
              <div className="text-xs">
                <div className="text-gray-300">Deliver to</div>
                <div className="font-bold">Pakistan</div>
              </div>
            </div>

            {/* Search bar */}
            <form onSubmit={handleSearchSubmit} className="flex-1 max-w-3xl mx-4">
              <div className="flex">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-200 text-gray-800 px-3 py-2 rounded-l-md border-r border-gray-300 text-sm"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Search products, categories, or brands..."
                  className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-r-md"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Language selector */}
            <div className="hidden md:flex items-center mr-4 cursor-pointer hover:border border-white rounded p-1">
              <Globe size={16} className="mr-1" />
              <span className="text-sm">EN</span>
            </div>

            {/* Account */}
            <div 
              onClick={handleAuthClick}
              className="hidden md:flex flex-col cursor-pointer hover:border border-white rounded p-1 mr-4"
            >
              <span className="text-xs">Hello, {user ? user.email?.split('@')[0] : 'Sign in'}</span>
              <span className="text-sm font-bold">Account & Lists</span>
            </div>

            {/* Orders */}
            <div className="hidden md:flex flex-col cursor-pointer hover:border border-white rounded p-1 mr-4">
              <span className="text-xs">Returns</span>
              <span className="text-sm font-bold">& Orders</span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center hover:border border-white rounded p-1">
              <div className="relative">
                <ShoppingCart size={24} />
                {cart.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </div>
              <span className="ml-1 text-sm font-bold">Cart</span>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <nav className="flex items-center py-2 space-x-6 text-sm overflow-x-auto">
              <Link to="/products" className="hover:text-orange-400 flex items-center whitespace-nowrap">
                <Menu size={16} className="mr-1" />
                All
              </Link>
              {MAIN_CATEGORIES.slice(1, 6).map(category => (
                <Link 
                  key={category.id}
                  to={`/products/${category.id}`} 
                  className="hover:text-orange-400 whitespace-nowrap"
                >
                  {category.label}
                </Link>
              ))}
              <Link to="/deals" className="hover:text-orange-400 whitespace-nowrap">Today's Deals</Link>
              <Link to="/customer-service" className="hover:text-orange-400 whitespace-nowrap">Customer Service</Link>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <nav className="px-4 py-4 space-y-2">
              <Link to="/products" className="block py-2 hover:text-orange-400">All Products</Link>
              {MAIN_CATEGORIES.slice(1).map(category => (
                <Link 
                  key={category.id}
                  to={`/products/${category.id}`} 
                  className="block py-2 hover:text-orange-400"
                >
                  {category.icon} {category.label}
                </Link>
              ))}
              <div onClick={handleAuthClick} className="block py-2 hover:text-orange-400 cursor-pointer">
                {user ? 'Sign Out' : 'Sign In'}
              </div>
            </nav>
          </div>
        )}
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}