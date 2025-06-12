import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart, Bell } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { useDebounce } from '../../../hooks/useDebounce';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const debouncedSearch = useDebounce(searchQuery, 500);

  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Premium Styled Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
              <span className="text-white text-xl md:text-2xl font-bold tracking-wide">L</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <Input
              type="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={20} />}
              className="w-full"
            />
          </form>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="hidden sm:flex items-center text-gray-600 hover:text-blue-600">
              <Heart size={24} />
            </Link>
            
            <Link to="/notifications" className="hidden sm:flex items-center text-gray-600 hover:text-blue-600">
              <Bell size={24} />
            </Link>

            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-gray-600 hover:text-blue-600" />
              {cart.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.items.length}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <Button
                  variant="outline"
                  size="sm"
                  icon={User}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Account
                </Button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                icon={User}
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-2">
          <form onSubmit={handleSearch}>
            <Input
              type="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={20} />}
              className="w-full"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
