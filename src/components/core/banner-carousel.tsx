'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const bannerImages = [
  '/images/banner1.webp',
  '/images/banner2.webp',
  '/images/banner3.webp',
  '/images/banner4.webp',
  '/images/banner5.webp',
  '/images/banner6.webp',
  '/images/banner7.webp',
  '/images/banner8.webp',
  '/images/banner9.webp',
  '/images/preview.webp',
];

import { FADE_IN_VARIANT } from '@/lib/animations';

export const BannerCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  };

  return (
    <motion.section 
      className="py-12 md:py-16 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={FADE_IN_VARIANT}
    >
      <div className="container px-4 md:px-6">
        <Slider {...settings}>
          {bannerImages.map((src, index) => (
            <div key={index} className="relative w-full h-auto aspect-video rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                priority={index === 0} // Prioritize loading the first banner
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};