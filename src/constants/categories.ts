import { CategoryStructure } from '../types';

export const CATEGORY_STRUCTURE: CategoryStructure[] = [
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    icon: '🏠',
    subcategories: [
      {
        id: 'home-kitchen-basics',
        name: 'Home & Kitchen',
        items: [
          'Bedsheets & Comforters',
          'Kitchen Storage',
          'Cutlery & Cookware',
          'Rugs & Mats',
          'Home Decor Accents'
        ]
      },
      {
        id: 'furniture',
        name: 'Furniture',
        items: [
          'Folding Tables & Chairs',
          'Shoe Racks',
          'Storage Cabinets',
          'Laptop Tables'
        ]
      },
      {
        id: 'lighting',
        name: 'Lighting',
        items: [
          'LED Strip Lights',
          'Desk Lamps',
          'Night Lights',
          'Motion Sensor Lights'
        ]
      },
      {
        id: 'storage-organization',
        name: 'Storage & Organization',
        items: [
          'Closet Organizers',
          'Drawer Dividers',
          'Wall Hooks & Shelves',
          'Under-bed Storage Bags'
        ]
      }
    ]
  },
  {
    id: 'baby-family',
    name: 'Baby & Family',
    icon: '👶',
    subcategories: [
      {
        id: 'baby-products',
        name: 'Baby Products',
        items: [
          'Baby Carriers',
          'Diaper Bags',
          'Feeding Bottles',
          'Baby Grooming Kits'
        ]
      },
      {
        id: 'toys-games',
        name: 'Toys & Games',
        items: [
          'Educational Toys',
          'Remote Control Cars',
          'Puzzles & Building Blocks',
          'Art & Craft Kits'
        ]
      },
      {
        id: 'kids-accessories',
        name: 'Kids\' Accessories',
        items: [
          'Kids\' Backpacks',
          'Water Bottles',
          'Kids\' Bedding Sets',
          'Night Lights for Kids'
        ]
      }
    ]
  },
  {
    id: 'fashion-travel',
    name: 'Fashion & Travel',
    icon: '👗',
    subcategories: [
      {
        id: 'clothing-shoes-jewelry',
        name: 'Clothing, Shoes & Jewelry',
        items: [
          'T-Shirts & Hoodies',
          'Sneakers & Sandals',
          'Earrings & Bracelets',
          'Belts & Wallets'
        ]
      },
      {
        id: 'watches-accessories',
        name: 'Watches & Fashion Accessories',
        items: [
          'Digital Watches',
          'Sunglasses',
          'Caps & Hats',
          'Hair Accessories'
        ]
      },
      {
        id: 'travel-gear',
        name: 'Travel Gear',
        items: [
          'Travel Backpacks',
          'Packing Cubes',
          'Travel Pillows',
          'TSA-Approved Bottles'
        ]
      }
    ]
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    icon: '🧴',
    subcategories: [
      {
        id: 'beauty-personal-care',
        name: 'Beauty & Personal Care',
        items: [
          'Face Wash & Moisturizers',
          'Makeup Tools',
          'Hair Dryers & Straighteners',
          'Nail Care Kits'
        ]
      },
      {
        id: 'health-household',
        name: 'Health & Household',
        items: [
          'Digital Thermometers',
          'Massagers & Heating Pads',
          'Reusable Water Bottles',
          'Air Purifiers'
        ]
      },
      {
        id: 'hygiene-essentials',
        name: 'Hygiene Essentials',
        items: [
          'Toothbrush & Toothpaste Kits',
          'Sanitary Pads & Menstrual Cups',
          'Face Masks',
          'Hand Sanitizers'
        ]
      }
    ]
  },
  {
    id: 'kitchen-food',
    name: 'Kitchen & Food',
    icon: '🍽️',
    subcategories: [
      {
        id: 'kitchen-dining',
        name: 'Kitchen & Dining',
        items: [
          'Lunch Boxes',
          'Electric Kettles',
          'Non-stick Pans',
          'Spice Racks'
        ]
      },
      {
        id: 'grocery-gourmet',
        name: 'Grocery & Gourmet Food',
        items: [
          'Herbal Teas',
          'Protein Bars',
          'Instant Coffee',
          'Cooking Sauces & Pastes'
        ]
      }
    ]
  },
  {
    id: 'tech-gadgets',
    name: 'Tech & Gadgets',
    icon: '🎮',
    subcategories: [
      {
        id: 'electronics-accessories',
        name: 'Electronics & Accessories',
        items: [
          'Wireless Earbuds',
          'Phone Holders & Chargers',
          'Smart Watches',
          'Bluetooth Speakers'
        ]
      },
      {
        id: 'smart-home',
        name: 'Smart Home Devices',
        items: [
          'Smart Plugs',
          'WiFi Bulbs',
          'Home Cameras'
        ]
      },
      {
        id: 'gaming',
        name: 'Gaming',
        items: [
          'Gaming Controllers',
          'Console Accessories',
          'Headsets',
          'Gaming Mouse & Pads'
        ]
      }
    ]
  },
  {
    id: 'pets-outdoors',
    name: 'Pets & Outdoors',
    icon: '🐾',
    subcategories: [
      {
        id: 'pet-supplies',
        name: 'Pet Supplies',
        items: [
          'Pet Beds',
          'Feeding Bowls',
          'Toys for Cats & Dogs',
          'Pet Grooming Brushes'
        ]
      },
      {
        id: 'garden-outdoor',
        name: 'Garden & Outdoor',
        items: [
          'Garden Tools',
          'Flower Pots',
          'Solar Garden Lights',
          'Barbecue Tools'
        ]
      },
      {
        id: 'camping-outdoor-fun',
        name: 'Camping & Outdoor Fun',
        items: [
          'Tents & Hammocks',
          'Water Bottles & Coolers',
          'Outdoor Blankets',
          'Insect Repellents'
        ]
      }
    ]
  },
  {
    id: 'auto-diy',
    name: 'Auto & DIY',
    icon: '🚗',
    subcategories: [
      {
        id: 'car-accessories',
        name: 'Car Accessories',
        items: [
          'Car Phone Holders',
          'Seat Covers',
          'Car Cleaning Kits',
          'Air Fresheners'
        ]
      },
      {
        id: 'diy-tools',
        name: 'DIY Tools',
        items: [
          'Screwdriver Sets',
          'Electric Drills',
          'Wall Fixing Kits',
          'Measuring Tools'
        ]
      }
    ]
  },
  {
    id: 'office-stationery',
    name: 'Office & Stationery',
    icon: '📓',
    subcategories: [
      {
        id: 'office-products',
        name: 'Office Products',
        items: [
          'Desk Organizers',
          'Notebooks & Journals',
          'Desk Lamps',
          'File Folders'
        ]
      },
      {
        id: 'stationery-crafts',
        name: 'Stationery & Crafts',
        items: [
          'Sketchbooks',
          'Color Pencils & Markers',
          'DIY Craft Kits',
          'Sticky Notes & Highlighters'
        ]
      }
    ]
  }
];

export const MAIN_CATEGORIES = [
  { id: 'all', label: 'All Products', icon: '🛍️' },
  { id: 'home-kitchen', label: 'Home & Kitchen', icon: '🏠' },
  { id: 'baby-family', label: 'Baby & Family', icon: '👶' },
  { id: 'fashion-travel', label: 'Fashion & Travel', icon: '👗' },
  { id: 'health-beauty', label: 'Health & Beauty', icon: '🧴' },
  { id: 'kitchen-food', label: 'Kitchen & Food', icon: '🍽️' },
  { id: 'tech-gadgets', label: 'Tech & Gadgets', icon: '🎮' },
  { id: 'pets-outdoors', label: 'Pets & Outdoors', icon: '🐾' },
  { id: 'auto-diy', label: 'Auto & DIY', icon: '🚗' },
  { id: 'office-stationery', label: 'Office & Stationery', icon: '📓' }
] as const;