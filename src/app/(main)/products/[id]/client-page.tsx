'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Package, FlaskConical, Clock, Building2, Shield, ShoppingBag } from 'lucide-react';
import produkImage from '@/images/produk_images/produk.webp';

export function ProductDetailClient({ product }: { product: Product }) {
  const specs = [
    { icon: Package, label: 'Isi / Berat', value: product.specification.weight },
    { icon: FlaskConical, label: 'Komposisi', value: product.specification.ingredients },
    { icon: Clock, label: 'Aturan Pakai', value: product.specification.usage },
    { icon: Building2, label: 'Produsen', value: product.specification.producer },
    { icon: Shield, label: 'Legalitas', value: product.specification.legal },
  ].filter(s => s.value);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-background relative selection:bg-primary/20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link href="/products">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary rounded-xl">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Katalog
            </Button>
          </Link>
        </motion.div>

        {/* Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted border border-border/50 shadow-lg">
              <Image
                src={produkImage}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col"
          >
            {/* Category Badge */}
            <Badge variant="outline" className="w-fit mb-4 border-primary/20 text-primary bg-primary/5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              {product.category.split(' / ')[1] || product.category.split(' / ')[0]}
            </Badge>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-foreground mb-2">
              {product.name}
            </h1>

            {/* SKU */}
            <p className="text-sm text-muted-foreground mb-4">
              SKU: {product.sku}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {product.price}
              </span>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="w-full sm:w-auto rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 px-10 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 text-base mb-8"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </Button>

            {/* Benefits / Khasiat */}
            <div className="space-y-2 mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Khasiat & Manfaat
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {product.description.map((desc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-snug">{desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14"
        >
          <h2 className="text-2xl font-bold font-headline text-foreground mb-6">
            Spesifikasi Produk
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <spec.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {spec.label}
                  </p>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {spec.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
