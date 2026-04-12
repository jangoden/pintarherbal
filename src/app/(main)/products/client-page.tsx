'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/data/products';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import produkImage from '@/images/produk_images/produk.webp';

import { BannerCarousel } from '@/components/core/banner-carousel';

const allCategories = ['Semua Kategori', ...Array.from(new Set(products.map(p => p.category.split(' / ')[0])))];

export function ProductsClientPage() {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');

  const filteredProducts = activeCategory === 'Semua Kategori' 
    ? products 
    : products.filter(p => p.category.includes(activeCategory));

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background relative selection:bg-primary/20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Hero Section */}
      <section className="container px-4 md:px-6 mt-10 md:mt-14 mb-12 space-y-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            Katalog Produk
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tighter text-foreground mb-4">
            Pilihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Terbaik</span> Untuk Anda
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Diformulasikan dari bahan-bahan herbal pilihan berkualitas tinggi untuk mendukung gaya hidup sehat Anda setiap hari.
          </p>
        </motion.div>
      </section>

      {/* Filter Categories */}
      <section className="container px-4 md:px-6 mb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {allCategories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * idx }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === cat 
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' 
                : 'bg-card/50 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Products Grid - 5 columns */}
      <section className="container px-4 md:px-6">
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx % 10 * 0.03 }}
              >
                <Link href={`/products/${product.id}`}>
                  <Card className="h-full flex flex-col group overflow-hidden border-border/50 bg-card/40 backdrop-blur-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 rounded-2xl cursor-pointer">
                    {/* Product Image */}
                    <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                      <Image
                        src={produkImage}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>

                    <CardContent className="flex-1 p-3 md:p-4 flex flex-col gap-1.5">
                      <p className="text-[10px] font-bold tracking-widest text-primary/70 uppercase line-clamp-1">
                        {product.category.split(' / ')[1] || product.category.split(' / ')[0]}
                      </p>
                      <CardTitle className="text-sm font-headline font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm font-bold text-primary mt-auto">
                        {product.price}
                      </p>
                    </CardContent>

                    <CardFooter className="p-3 md:p-4 pt-0">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full rounded-xl border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 text-xs h-9"
                      >
                        <Eye className="w-3.5 h-3.5 mr-1.5" />
                        Lihat Produk
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
