import React, { useState } from 'react';
import { Search, ShoppingCart, MapPin, User, Menu, Globe, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';
import { AuthModal } from '../../AuthModal';
import { SearchBar } from '../../SearchBar/SearchBar';
import { MAIN_CATEGORIES } from '../../../constants/categories';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  const { cart } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleSearch = (query: string, filters: any) => {
    const searchParams = new URLSearchParams();
    searchParams.set('q', query);
    
    if (filters.category !== 'All') {
      searchParams.set('category', filters.category);
    }
    if (filters.priceRange !== 'all') {
      searchParams.set('price', filters.priceRange);
    }
    if (filters.rating > 0) {
      searchParams.set('rating', filters.rating.toString());
    }
    if (filters.inStock) {
      searchParams.set('inStock', 'true');
    }
    
    navigate(`/search?${searchParams.toString()}`);
    setIsSearchExpanded(false);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-3">
            
            {/* Logo */}
            <Link to="/" className="flex items-center mr-4 md:mr-6">
              <div className="bg-orange-500 px-3 py-2 rounded">
                <span className="text-white font-bold text-xl">Luminvera</span>
              </div>
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mr-6">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Mobile Search Icon */}
            <button 
              onClick={toggleSearch}
              className="md:hidden mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search size={20} className="text-gray-600" />
            </button>

            {/* Right side icons */}
            <div className="flex items-center space-x-2 md:space-x-4 ml-auto">
              {/* Delivery location - Desktop only */}
              <div className="hidden lg:flex items-center mr-2 cursor-pointer hover:bg-gray-100 rounded p-2 transition-colors">
                <MapPin size={16} className="mr-1 text-gray-600" />
                <div className="text-xs">
                  <div className="text-gray-500">Deliver to</div>
                  <div className="font-medium text-gray-800">Pakistan</div>
                </div>
              </div>

              {/* Language selector - Desktop only */}
              <div className="hidden md:flex items-center mr-2 cursor-pointer hover:bg-gray-100 rounded p-2 transition-colors">
                <Globe size={16} className="mr-1 text-gray-600" />
                <span className="text-sm text-gray-800">EN</span>
              </div>

              {/* Account */}
              <div 
                onClick={handleAuthClick}
                className="hidden md:flex flex-col cursor-pointer hover:bg-gray-100 rounded p-2 mr-2 transition-colors"
              >
                <span className="text-xs text-gray-500">Hello, {user ? user.email?.split('@')[0] : 'Sign in'}</span>
                <span className="text-sm font-medium text-gray-800">Account</span>
              </div>

              {/* Orders - Desktop only */}
              <div className="hidden lg:flex flex-col cursor-pointer hover:bg-gray-100 rounded p-2 mr-2 transition-colors">
                <span className="text-xs text-gray-500">Returns</span>
                <span className="text-sm font-medium text-gray-800">& Orders</span>
              </div>

              {/* Cart */}
              <Link to="/cart" className="flex items-center hover:bg-gray-100 rounded p-2 transition-colors">
                <div className="relative">
                  <ShoppingCart size={24} className="text-gray-600" />
                  {cart.items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </div>
                <span className="ml-1 text-sm font-medium text-gray-800 hidden sm:block">Cart</span>
              </Link>

              {/* Mobile menu button */}
              <button 
                className="md:hidden ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {isSearchExpanded && (
            <div className="md:hidden pb-3 border-t border-gray-200 pt-3 mt-3">
              <div className="flex items-center">
                <div className="flex-1">
                  <SearchBar onSearch={handleSearch} />
                </div>
                <button 
                  onClick={toggleSearch}
                  className="ml-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Categories Navigation Bar */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex items-center py-2 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 md:space-x-2 min-w-max">
                <Link 
                  to="/products" 
                  className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-white rounded-full transition-all duration-200 whitespace-nowrap"
                >
                  <Menu size={14} className="mr-1" />
                  All
                </Link>
                {MAIN_CATEGORIES.slice(1, 8).map(category => (
                  <Link 
                    key={category.id}
                    to={`/products/${category.id}`} 
                    className="px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-white rounded-full transition-all duration-200 whitespace-nowrap"
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.label}
                  </Link>
                ))}
                <Link 
                  to="/deals" 
                  className="px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-white rounded-full transition-all duration-200 whitespace-nowrap font-medium"
                >
                  Today's Deals
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <div onClick={handleAuthClick} className="flex items-center py-2 text-gray-800 hover:text-orange-600 cursor-pointer">
                <User size={18} className="mr-3" />
                {user ? 'Sign Out' : 'Sign In'}
              </div>
              <Link to="/products" className="flex items-center py-2 text-gray-800 hover:text-orange-600">
                <Menu size={18} className="mr-3" />
                All Products
              </Link>
              {MAIN_CATEGORIES.slice(1, 6).map(category => (
                <Link 
                  key={category.id}
                  to={`/products/${category.id}`} 
                  className="flex items-center py-2 text-gray-800 hover:text-orange-600"
                >
                  <span className="mr-3 text-lg">{category.icon}</span>
                  {category.label}
                </Link>
              ))}
              <Link to="/deals" className="flex items-center py-2 text-red-600 hover:text-red-700 font-medium">
                🔥 Today's Deals
              </Link>
            </nav>
          </div>
        )}
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}