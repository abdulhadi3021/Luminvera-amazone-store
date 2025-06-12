import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: 'Summer Collection 2025',
    description: 'Discover the latest trends in summer fashion with up to 50% off',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    link: '/products/summer-collection'
  },
  {
    id: 2,
    title: 'Tech Gadgets Sale',
    description: 'Latest gadgets at unbeatable prices. Save big on electronics!',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    link: '/products/electronics'
  },
  {
    id: 3,
    title: 'Home & Living',
    description: 'Transform your space with our exclusive home collection',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    link: '/products/home'
  }
];

export function HeroSlider() {
  return (
    <div className="relative h-[600px] bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <Link to={slide.link}>
                    <Button variant="primary" size="lg" icon={ArrowRight}>
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}