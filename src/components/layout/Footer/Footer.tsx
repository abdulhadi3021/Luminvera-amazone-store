import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Facebook, Music, PlayCircle} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top */}
      <div 
        onClick={scrollToTop}
        className="bg-gray-700 hover:bg-gray-600 py-3 text-center cursor-pointer transition-colors"
      >
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main footer content */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Brand Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 px-3 py-2 rounded mr-3">
                  <span className="text-white font-bold text-xl">Luminvera</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Your trusted global store for everyday essentials.
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="font-bold text-white mb-3">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><Link to="/faqs" className="text-gray-300 hover:text-white">FAQs</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
              </ul>
            </div>

            {/* Shop Categories */}
            <div>
              <h3 className="font-bold text-white mb-4">Shop Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products/home-kitchen" className="text-gray-300 hover:text-white">Home & Kitchen</Link></li>
                <li><Link to="/products/tech-gadgets" className="text-gray-300 hover:text-white">Tech & Gadgets</Link></li>
                <li><Link to="/products/fashion-travel" className="text-gray-300 hover:text-white">Fashion & Travel</Link></li>
                <li><Link to="/products/baby-family" className="text-gray-300 hover:text-white">Baby & Family</Link></li>
                <li><Link to="/products/health-beauty" className="text-gray-300 hover:text-white">Health & Beauty</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-bold text-white mb-4">Follow Us</h3>
              <div className="space-y-3">

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our Instagram" 
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Instagram size={20} className="mr-2" />
                  Instagram
                </a>

                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Chat with us on WhatsApp" 
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </a>

                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our Facebook" 
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Facebook size={20} className="mr-2" />
                  Facebook
                </a>

                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our YouTube channel" 
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <PlayCircle size={20} className="mr-2" />
                  YouTube
                </a>

                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit our TikTok" 
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Music size={20} className="mr-2" />
                  TikTok
                </a>

                <a 
                  href="mailto:contact@luminvera.com" 
                  aria-label="Email us" 
                  className="flex items-center text-gray-300 hover:text-white"
                >
                  <Mail size={20} className="mr-2" />
                  contact@luminvera.com
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-400">
            © 2025 Luminvera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
