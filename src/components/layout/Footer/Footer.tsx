import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Facebook, Music, PlayCircle, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Back to top */}
      <div 
        onClick={scrollToTop}
        className="bg-gray-100 hover:bg-gray-200 py-4 text-center cursor-pointer transition-colors border-b border-gray-200"
      >
        <div className="flex items-center justify-center text-gray-600 hover:text-gray-800">
          <ChevronUp size={16} className="mr-1" />
          <span className="text-sm font-medium">Back to top</span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 px-3 py-2 rounded mr-3">
                  <span className="text-white font-bold text-xl">Luminvera</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Your trusted global store for everyday essentials.
              </p>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors text-white text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</Link></li>
                <li><Link to="/faqs" className="text-gray-600 hover:text-orange-600 transition-colors">FAQs</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/refund" className="text-gray-600 hover:text-orange-600 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>

            {/* Shop Categories */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Shop Categories</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products/home-kitchen" className="text-gray-600 hover:text-orange-600 transition-colors">🏠 Home & Kitchen</Link></li>
                <li><Link to="/products/tech-gadgets" className="text-gray-600 hover:text-orange-600 transition-colors">🎮 Gadgets & Tech</Link></li>
                <li><Link to="/products/fashion-travel" className="text-gray-600 hover:text-orange-600 transition-colors">👗 Fashion & Travel</Link></li>
                <li><Link to="/products/baby-family" className="text-gray-600 hover:text-orange-600 transition-colors">👶 Baby & Kids</Link></li>
                <li><Link to="/products/health-beauty" className="text-gray-600 hover:text-orange-600 transition-colors">🧴 Health & Beauty</Link></li>
              </ul>
            </div>

            {/* Follow Us / Contact */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="space-y-3">

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our Instagram" 
                  className="flex items-center text-gray-600 hover:text-pink-600 transition-colors text-sm"
                >
                  <Instagram size={18} className="mr-3" />
                  Instagram
                </a>

                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our TikTok" 
                  className="flex items-center text-gray-600 hover:text-black transition-colors text-sm"
                >
                  <Music size={18} className="mr-3" />
                  TikTok
                </a>

                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Chat with us on WhatsApp" 
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm"
                >
                  <MessageCircle size={18} className="mr-3" />
                  WhatsApp
                </a>

                <a 
                  href="mailto:contact@luminvera.com" 
                  aria-label="Email us" 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  <Mail size={18} className="mr-3" />
                  contact@luminvera.com
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Luminvera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}