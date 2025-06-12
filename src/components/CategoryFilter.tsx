import React from 'react';
import { Category } from '../types';
import { MAIN_CATEGORIES } from '../constants/categories';

interface CategoryFilterProps {
  activeCategory: Category;
  onChangeCategory: (category: Category) => void;
}

export function CategoryFilter({ activeCategory, onChangeCategory }: CategoryFilterProps) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-heading mb-3">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {MAIN_CATEGORIES.map(category => (
          <button
            key={category.id}
            onClick={() => onChangeCategory(category.id as Category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors flex items-center ${
              activeCategory === category.id
                ? 'bg-cta text-cta-text'
                : 'bg-highlight text-text-primary hover:bg-border'
            }`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}