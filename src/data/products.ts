import { Product } from '../types';

export const products: Product[] = [
  // Home & Kitchen
  {
    id: '1',
    name: 'Premium Cotton Bedsheet Set',
    price: 29.99,
    originalPrice: 59.99,
    description: 'Soft and breathable cotton bedsheet set with pillowcases. Perfect for a comfortable night\'s sleep.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    category: 'home-kitchen',
    subcategory: 'home-kitchen-basics',
    rating: 4.5,
    inStock: true,
    isFeatured: true,
    discount: 50
  },
  {
    id: '2',
    name: 'LED Desk Lamp with USB Charging',
    price: 24.99,
    originalPrice: 49.99,
    description: 'Adjustable LED desk lamp with multiple brightness levels and USB charging port.',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'home-kitchen',
    subcategory: 'lighting',
    rating: 4.3,
    inStock: true,
    isNew: true,
    discount: 50
  },
  {
    id: '3',
    name: 'Folding Laptop Table',
    price: 19.99,
    originalPrice: 39.99,
    description: 'Portable and adjustable laptop table perfect for working from bed or couch.',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'home-kitchen',
    subcategory: 'furniture',
    rating: 4.2,
    inStock: true,
    discount: 50
  },

  // Baby & Family
  {
    id: '4',
    name: 'Educational Building Blocks Set',
    price: 15.99,
    originalPrice: 29.99,
    description: 'Colorful building blocks set that helps develop creativity and motor skills.',
    image: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg',
    category: 'baby-family',
    subcategory: 'toys-games',
    rating: 4.7,
    inStock: true,
    isFeatured: true,
    discount: 47
  },
  {
    id: '5',
    name: 'Kids Water Bottle with Straw',
    price: 8.99,
    originalPrice: 16.99,
    description: 'BPA-free water bottle with fun designs and easy-to-use straw for kids.',
    image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg',
    category: 'baby-family',
    subcategory: 'kids-accessories',
    rating: 4.4,
    inStock: true,
    discount: 47
  },

  // Fashion & Travel
  {
    id: '6',
    name: 'Casual Cotton T-Shirt',
    price: 12.99,
    originalPrice: 24.99,
    description: 'Comfortable cotton t-shirt available in multiple colors and sizes.',
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    category: 'fashion-travel',
    subcategory: 'clothing-shoes-jewelry',
    rating: 4.1,
    inStock: true,
    discount: 48
  },
  {
    id: '7',
    name: 'Travel Backpack with USB Port',
    price: 34.99,
    originalPrice: 69.99,
    description: 'Durable travel backpack with built-in USB charging port and multiple compartments.',
    image: 'https://ik.imagekit.io/123e/download%20(1).jpg?updatedAt=1749461277936',
    category: 'fashion-travel',
    subcategory: 'travel-gear',
    rating: 4.6,
    inStock: true,
    isFeatured: true,
    discount: 50
  },
  {
    id: '8',
    name: 'Digital Sports Watch',
    price: 22.99,
    originalPrice: 45.99,
    description: 'Water-resistant digital watch with multiple functions and comfortable strap.',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'fashion-travel',
    subcategory: 'watches-accessories',
    rating: 4.3,
    inStock: true,
    discount: 50
  },

  // Health & Beauty
  {
    id: '9',
    name: 'Gentle Face Cleanser',
    price: 14.99,
    originalPrice: 28.99,
    description: 'Gentle facial cleanser suitable for all skin types. Removes dirt and makeup effectively.',
    image: 'https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg',
    category: 'health-beauty',
    subcategory: 'beauty-personal-care',
    rating: 4.5,
    inStock: true,
    isNew: true,
    discount: 48
  },
  {
    id: '10',
    name: 'Digital Thermometer',
    price: 9.99,
    originalPrice: 19.99,
    description: 'Fast and accurate digital thermometer with fever alarm and memory function.',
    image: 'https://images.pexels.com/photos/4498555/pexels-photo-4498555.jpeg',
    category: 'health-beauty',
    subcategory: 'health-household',
    rating: 4.2,
    inStock: true,
    discount: 50
  },

  // Kitchen & Food
  {
    id: '11',
    name: 'Electric Kettle 1.7L',
    price: 18.99,
    originalPrice: 35.99,
    description: 'Fast-boiling electric kettle with auto shut-off and boil-dry protection.',
    image: 'https://ik.imagekit.io/123e/download%20(2).jpg?updatedAt=1749468981834',
    category: 'kitchen-food',
    subcategory: 'kitchen-dining',
    rating: 4.4,
    inStock: true,
    isFeatured: true,
    discount: 47
  },
  {
    id: '12',
    name: 'Lunch Box Set with Compartments',
    price: 13.99,
    originalPrice: 26.99,
    description: 'BPA-free lunch box with multiple compartments and leak-proof design.',
    image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
    category: 'kitchen-food',
    subcategory: 'kitchen-dining',
    rating: 4.3,
    inStock: true,
    discount: 48
  },

  // Tech & Gadgets
  {
    id: '13',
    name: 'Wireless Bluetooth Earbuds',
    price: 24.99,
    originalPrice: 49.99,
    description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
    category: 'tech-gadgets',
    subcategory: 'electronics-accessories',
    rating: 4.6,
    inStock: true,
    isFeatured: true,
    discount: 50
  },
  {
    id: '14',
    name: 'Smart WiFi Bulb',
    price: 11.99,
    originalPrice: 22.99,
    description: 'Color-changing smart bulb controllable via smartphone app.',
    image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg',
    category: 'tech-gadgets',
    subcategory: 'smart-home',
    rating: 4.1,
    inStock: true,
    isNew: true,
    discount: 48
  },
  {
    id: '15',
    name: 'Gaming Mouse Pad',
    price: 7.99,
    originalPrice: 15.99,
    description: 'Large gaming mouse pad with smooth surface and non-slip base.',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
    category: 'tech-gadgets',
    subcategory: 'gaming',
    rating: 4.0,
    inStock: true,
    discount: 50
  },

  // Pets & Outdoors
  {
    id: '16',
    name: 'Pet Feeding Bowl Set',
    price: 16.99,
    originalPrice: 32.99,
    description: 'Stainless steel pet feeding bowls with non-slip base and easy cleaning.',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'pets-outdoors',
    subcategory: 'pet-supplies',
    rating: 4.5,
    inStock: true,
    discount: 48
  },
  {
    id: '17',
    name: 'Solar Garden Lights Set',
    price: 21.99,
    originalPrice: 43.99,
    description: 'Set of 6 solar-powered garden lights with automatic on/off function.',
    image: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg',
    category: 'pets-outdoors',
    subcategory: 'garden-outdoor',
    rating: 4.2,
    inStock: true,
    discount: 50
  },

  // Auto & DIY
  {
    id: '18',
    name: 'Car Phone Holder',
    price: 9.99,
    originalPrice: 19.99,
    description: 'Universal car phone holder with 360-degree rotation and secure grip.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    category: 'auto-diy',
    subcategory: 'car-accessories',
    rating: 4.3,
    inStock: true,
    discount: 50
  },
  {
    id: '19',
    name: 'Screwdriver Set 32-Piece',
    price: 17.99,
    originalPrice: 34.99,
    description: 'Complete screwdriver set with magnetic tips and comfortable grip handles.',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg',
    category: 'auto-diy',
    subcategory: 'diy-tools',
    rating: 4.4,
    inStock: true,
    isFeatured: true,
    discount: 49
  },

  // Office & Stationery
  {
    id: '20',
    name: 'Desk Organizer with Drawers',
    price: 19.99,
    originalPrice: 38.99,
    description: 'Multi-compartment desk organizer with drawers for efficient workspace organization.',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    category: 'office-stationery',
    subcategory: 'office-products',
    rating: 4.1,
    inStock: true,
    discount: 49
  },
  {
    id: '21',
    name: 'Color Pencil Set 48-Piece',
    price: 12.99,
    originalPrice: 24.99,
    description: 'Professional color pencil set with vibrant colors and smooth application.',
    image: 'https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg',
    category: 'office-stationery',
    subcategory: 'stationery-crafts',
    rating: 4.6,
    inStock: true,
    isNew: true,
    discount: 48
  }
];