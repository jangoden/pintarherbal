'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/data/products';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allCategories = ['Semua Kategori', ...Array.from(new Set(products.map(p => p.category.split(' / ')[0])))];

export function ProductsClientPage() {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');

  const filteredProducts = activeCategory === 'Semua Kategori' 
    ? products 
    : products.filter(p => p.category.includes(activeCategory));

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative selection:bg-primary/20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      {/* Hero Section */}
      <section className="container px-4 md:px-6 mb-16 space-y-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            Katalog Produk
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-headline tracking-tighter text-foreground mb-6">
            Pilihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Terbaik</span> Untuk Anda
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Diformulasikan dari bahan-bahan herbal pilihan berkualitas tinggi untuk mendukung gaya hidup sehat Anda setiap hari.
          </p>
        </motion.div>
      </section>

      {/* Filter Categories */}
      <section className="container px-4 md:px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {allCategories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === cat 
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' 
                : 'bg-card/50 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 w-full sm:w-auto'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container px-4 md:px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx % 10 * 0.05 }}
              >
                <Card className="h-full flex flex-col group overflow-hidden border-border/50 bg-card/40 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 rounded-[2rem]">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                    <Leaf className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors duration-500 group-hover:scale-110" />
                    
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                       <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border/50 font-bold shadow-sm px-3 py-1">
                        {product.price}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="flex-1 p-6 md:p-8 flex flex-col gap-5 relative z-10">
                    <div className="space-y-2">
                      <p className="text-xs font-bold tracking-widest text-primary/80 uppercase">
                        {product.category.split(' / ')[1] || product.category.split(' / ')[0]}
                      </p>
                      <CardTitle className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </CardTitle>
                    </div>

                    <div className="space-y-3 mt-auto">
                      <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">Khasiat Utama:</h4>
                      {product.description.slice(0, 3).map((desc, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="leading-snug">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 md:p-8 pt-0 mt-auto">
                    <Button 
                      className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 text-base"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Pesan {product.name}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
