'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '@/lib/data/blog';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const allCategories = ['Semua Kategori', ...Array.from(new Set(blogPosts.map(p => p.category)))];

export function BlogClientPage() {
  const [activeCategory, setActiveCategory] = useState('Semua Kategori');

  const filteredPosts = activeCategory === 'Semua Kategori' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

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
            Edukasi & Jurnal
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-headline tracking-tighter text-foreground mb-6">
            Kumpulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Artikel</span> Kesehatan
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dapatkan wawasan seputar kesehatan alami, khasiat herbal, dan tips gaya hidup sehat dari para ahli kami.
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

      {/* Blog Grid */}
      <section className="container px-4 md:px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx % 10 * 0.05 }}
              >
                <Card className="h-full flex flex-col group overflow-hidden border-border/50 bg-card/40 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 rounded-[2rem]">
                  {/* Image Placeholder Frame */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                    <BookOpen className="w-12 h-12 text-primary/20 group-hover:text-primary/40 transition-colors duration-500 group-hover:scale-110" />
                    
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                       <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border/50 font-semibold shadow-sm px-3 py-1">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="flex-1 p-6 flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary/70" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary/70" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <CardTitle className="text-xl leading-tight font-headline font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3">
                        <Link href={`#`} className="after:absolute after:inset-0">
                           {post.title}
                        </Link>
                      </CardTitle>
                      <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    {/* Read More Trigger (Visual only) */}
                    <div className="pt-4 mt-auto">
                      <div className="flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                         Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      
      {/* Newsletter Section */}
      <section className="container px-4 md:px-6 mt-20">
         <div className="relative overflow-hidden rounded-[2.5rem] bg-primary/5 border border-primary/20 p-8 md:p-12 text-center">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold font-headline">Tak Ketinggalan Info Kesehatan!</h3>
              <p className="text-muted-foreground">Berlangganan newsletter Pintar Herbal untuk mendapatkan tips seputar gaya hidup alami, informasi produk terbaru, dan diskon eksklusif.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative mt-6" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Alamat Email Anda" className="w-full sm:w-auto flex-1 rounded-full px-5 py-3.5 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" />
                <Button className="rounded-full h-auto px-8 py-3.5 font-bold shadow-md hover:scale-105 transition-transform bg-primary hover:bg-primary/90 text-primary-foreground">Langganan</Button>
              </form>
            </div>
         </div>
      </section>
    </div>
  );
}
