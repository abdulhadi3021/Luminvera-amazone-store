import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Filter, Clock, TrendingUp } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { products } from '../../data/products';
import { MAIN_CATEGORIES } from '../../constants/categories';
import { Product } from '../../types';

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  className?: string;
}

interface SearchFilters {
  category: string;
  priceRange: string;
  rating: number;
  inStock: boolean;
}

interface SearchSuggestion {
  type: 'product' | 'category' | 'recent' | 'trending';
  text: string;
  category?: string;
  count?: number;
}

export function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'All',
    priceRange: 'all',
    rating: 0,
    inStock: false
  });
  
  const debouncedQuery = useDebounce(query, 300);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock recent searches and trending
  const recentSearches = ['wireless earbuds', 'kitchen organizer', 'travel backpack'];
  const trendingSearches = ['smart watch', 'led lights', 'phone holder', 'desk lamp'];

  // Generate suggestions based on query
  const getSuggestions = (): SearchSuggestion[] => {
    if (!debouncedQuery.trim()) {
      return [
        ...recentSearches.map(text => ({ type: 'recent' as const, text })),
        ...trendingSearches.map(text => ({ type: 'trending' as const, text }))
      ];
    }

    const suggestions: SearchSuggestion[] = [];
    const queryLower = debouncedQuery.toLowerCase();

    // Product suggestions
    const matchingProducts = products
      .filter(product => 
        product.name.toLowerCase().includes(queryLower) ||
        product.description.toLowerCase().includes(queryLower)
      )
      .slice(0, 5);

    matchingProducts.forEach(product => {
      suggestions.push({
        type: 'product',
        text: product.name,
        category: product.category
      });
    });

    // Category suggestions
    const matchingCategories = MAIN_CATEGORIES
      .filter(cat => 
        cat.label.toLowerCase().includes(queryLower) ||
        cat.id.toLowerCase().includes(queryLower)
      )
      .slice(0, 3);

    matchingCategories.forEach(category => {
      const productCount = products.filter(p => p.category === category.id).length;
      suggestions.push({
        type: 'category',
        text: category.label,
        category: category.id,
        count: productCount
      });
    });

    return suggestions.slice(0, 8);
  };

  const suggestions = getSuggestions();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, { ...filters, category: selectedCategory });
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    if (suggestion.category) {
      setSelectedCategory(suggestion.category);
    }
    onSearch(suggestion.text, { ...filters, category: suggestion.category || selectedCategory });
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
    setIsExpanded(true);
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'recent': return <Clock size={16} className="text-gray-400" />;
      case 'trending': return <TrendingUp size={16} className="text-orange-500" />;
      case 'category': return <Filter size={16} className="text-blue-500" />;
      default: return <Search size={16} className="text-gray-400" />;
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="flex">
        {/* Category Selector */}
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-l-md border border-gray-300 text-sm min-w-[120px] focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="All">All Categories</option>
          {MAIN_CATEGORIES.slice(1).map(cat => (
            <option key={cat.id} value={cat.id}>{cat.label}</option>
          ))}
        </select>

        {/* Search Input */}
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, brands, categories..."
            className="w-full px-4 py-2 text-gray-800 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleInputFocus}
          />
          
          {/* Clear button */}
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={16} className="text-gray-400" />
            </button>
          )}
        </div>

        {/* Search Button */}
        <button 
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors"
        >
          <Search size={20} className="text-white" />
        </button>
      </form>

      {/* Advanced Filters */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-50 p-4 mt-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Prices</option>
                <option value="under-10">Under $10</option>
                <option value="10-25">$10 - $25</option>
                <option value="25-50">$25 - $50</option>
                <option value="over-50">Over $50</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <select 
                value={filters.rating}
                onChange={(e) => setFilters({...filters, rating: Number(e.target.value)})}
                className="w-full px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value={0}>All Ratings</option>
                <option value={4}>4+ Stars</option>
                <option value={3}>3+ Stars</option>
                <option value={2}>2+ Stars</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
                  className="mr-2 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">In Stock Only</span>
              </label>
            </div>

            {/* Quick Actions */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => setFilters({ category: 'All', priceRange: 'all', rating: 0, inStock: false })}
                className="text-sm text-orange-600 hover:text-orange-700 underline"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-40 max-h-96 overflow-y-auto">
          {!debouncedQuery.trim() && (
            <>
              {recentSearches.length > 0 && (
                <div className="p-3 border-b border-gray-100">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Searches</h4>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick({ type: 'recent', text: search })}
                      className="flex items-center w-full px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      <Clock size={14} className="mr-2 text-gray-400" />
                      {search}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="p-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Trending Searches</h4>
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick({ type: 'trending', text: search })}
                    className="flex items-center w-full px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                  >
                    <TrendingUp size={14} className="mr-2 text-orange-500" />
                    {search}
                  </button>
                ))}
              </div>
            </>
          )}

          {debouncedQuery.trim() && (
            <div className="p-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                >
                  {getSuggestionIcon(suggestion.type)}
                  <span className="ml-3 flex-1 text-left">{suggestion.text}</span>
                  {suggestion.count && (
                    <span className="text-xs text-gray-500">({suggestion.count} items)</span>
                  )}
                  {suggestion.type === 'category' && (
                    <span className="text-xs text-blue-600 ml-2">Category</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}