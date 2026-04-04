'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP_VARIANT } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';

interface PageHeaderProps {
  badgeText?: string;
  title: string;
  description: string;
  backgroundImageUrl?: string; // Prop baru
}

export const PageHeader: React.FC<PageHeaderProps> = ({ badgeText, title, description, backgroundImageUrl }) => {
  // Fallback ke gambar default jika prop tidak disediakan
  const bgImage = backgroundImageUrl || '/images/bgabout.svg';

  return (
    <motion.section
      className="relative pt-36 pb-28 md:pt-48 md:pb-36 text-center isolate bg-cover bg-center"
      style={{ backgroundImage: `url("${bgImage}")` }} // Menggunakan variabel bgImage
      initial="hidden"
      animate="visible"
      variants={FADE_IN_UP_VARIANT}
    >
      {/* Overlay untuk keterbacaan teks */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {badgeText && (
          <Badge
            variant="outline"
            className="border-primary/50 text-primary bg-primary/10 text-sm font-semibold px-4 py-1 mb-4"
          >
            {badgeText}
          </Badge>
        )}
        <h1 className="mt-6 text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-primary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.section>
  );
};