import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ChevronLeft, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { QuickViewModal } from '../components/QuickViewModal';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  const { addToCart } = useCart();
  
  // Find the product based on ID
  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
      
      // Find related products in the same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 6);
      setRelatedProducts(related);
    }
  }, [id]);
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg text-gray-600">Product not found.</p>
      </div>
    );
  }
  
  // Generate additional product images for demo purposes
  const productImages = [
    product.image,
    // Generate additional images from different sources for demo
    `https://images.pexels.com/photos/${parseInt(product.id) + 1000}/pexels-photo-${parseInt(product.id) + 1000}.jpeg`,
    `https://images.pexels.com/photos/${parseInt(product.id) + 2000}/pexels-photo-${parseInt(product.id) + 2000}.jpeg`
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/products" className="text-blue-500 hover:text-blue-700 flex items-center">
          <ChevronLeft size={16} className="mr-1" />
          Back to products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg overflow-hidden h-96">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex space-x-2">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`w-24 h-24 border-2 rounded-md overflow-hidden cursor-pointer ${
                  activeImage === img ? 'border-blue-500' : 'border-gray-200'
                }`}
                onClick={() => setActiveImage(img)}
              >
                <img src={img} alt={`${product.name} ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          {/* Price */}
          <div className="mb-4 flex items-center">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-lg text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.discount && (
              <span className="ml-2 text-sm font-medium bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                Save {product.discount}%
              </span>
            )}
          </div>
          
          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{product.rating} Rating</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Availability */}
          <div className="mb-6">
            <span className={`${
              product.inStock ? 'text-green-600' : 'text-red-600'
            } font-medium`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 border-t border-b border-gray-300 p-2 text-center"
              />
              <button
                onClick={incrementQuantity}
                className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 py-3 px-4 rounded-md flex items-center justify-center ${
                product.inStock
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
            <button className="flex-1 py-3 px-4 rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center">
              <Heart className="mr-2" size={20} />
              Add to Wishlist
            </button>
          </div>
          
          {/* Product Metadata */}
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Category:</span>
                <span className="ml-2 text-gray-800 capitalize">{product.category}</span>
              </div>
              <div>
                <span className="text-gray-500">SKU:</span>
                <span className="ml-2 text-gray-800">SKU-{product.id.padStart(4, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      )}
      
      {quickViewProduct && (
        <QuickViewModal 
          product={quickViewProduct} 
          onClose={() => setQuickViewProduct(null)} 
        />
      )}
    </div>
  );
}