export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  subcategory?: string;
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = 
  | 'all'
  | 'home-kitchen'
  | 'baby-family'
  | 'fashion-travel'
  | 'health-beauty'
  | 'kitchen-food'
  | 'tech-gadgets'
  | 'pets-outdoors'
  | 'auto-diy'
  | 'office-stationery';

export interface CategoryStructure {
  id: string;
  name: string;
  icon: string;
  subcategories: {
    id: string;
    name: string;
    items: string[];
  }[];
}