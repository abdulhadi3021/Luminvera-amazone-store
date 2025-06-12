import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

export function DealsSection() {
  const deals = [
    {
      id: 1,
      title: "Deal of the Day",
      discount: "Up to 40% off",
      timeLeft: "23h 45m",
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
      originalPrice: 99.99,
      salePrice: 59.99,
      rating: 4.5,
      reviews: 1234
    },
    {
      id: 2,
      title: "Lightning Deal",
      discount: "Limited time",
      timeLeft: "2h 15m",
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      originalPrice: 199.99,
      salePrice: 149.99,
      rating: 4.3,
      reviews: 856
    },
    {
      id: 3,
      title: "Best Seller",
      discount: "25% off",
      timeLeft: "5h 30m",
      image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
      originalPrice: 79.99,
      salePrice: 59.99,
      rating: 4.7,
      reviews: 2341
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Today's Deals</h2>
          <Link to="/deals" className="text-blue-600 hover:text-orange-600 font-medium">
            See all deals
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  {deal.discount}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center text-red-600 text-sm mb-2">
                  <Clock size={16} className="mr-1" />
                  <span>{deal.timeLeft} left</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{deal.title}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{deal.rating}</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({deal.reviews})</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-lg font-bold text-red-600">${deal.salePrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}