export const APP_NAME = 'Lio Go Store Ultra';

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'home', label: 'Home & Kitchen' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'toys', label: 'Toys' },
  { id: 'sports', label: 'Sports' }
] as const;

export const USER_ROLES = {
  USER: 'user',
  SELLER: 'seller',
  PUBLISHER: 'publisher',
  ADMIN: 'admin'
} as const;

export const API_ERROR_MESSAGES = {
  DEFAULT: 'An error occurred. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Please sign in to continue.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.'
} as const;

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/product/:id',
  CART: '/cart',
  CHECKOUT: '/checkout',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '/404',
  MAINTENANCE: '/maintenance'
} as const;