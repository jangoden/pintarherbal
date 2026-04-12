'use client';

import Image from 'next/image';
import {
  Card,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import albucareImg from '@/images/produk_images/albucare.webp';
import sendifitImg from '@/images/produk_images/sendifit.webp';
import kslImg from '@/images/produk_images/kapsul_sehat_lambungku.webp';

// [DIUBAH] Daftar produk baru yang akan ditampilkan menggunakan static import
const bestSellerProducts = [
  {
    id: 'product-albucare',
    title: 'ALBUCARE',
    imageUrl: albucareImg,
  },
  {
    id: 'product-sendifit',
    title: 'SENDIFIT',
    imageUrl: sendifitImg,
  },
  {
    id: 'product-ksl',
    title: 'KAPSUL SEHAT LAMBUNGKU',
    imageUrl: kslImg,
  },
];

const FADE_IN_UP_VARIANT: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export function ProductShowcase() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-blue-50/30 to-background overflow-hidden">
      {/* Noise texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />
      {/* Blob shape background */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-20 opacity-30">
        <div className="absolute left-1/4 top-0 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        {/* Judul Bagian */}
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_UP_VARIANT}
        >
          <div className="space-y-4">
            <Badge
              variant="default"
              className="bg-primary text-sm font-semibold text-primary-foreground shadow-md"
            >
              Produk Unggulan
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-gray-900">
              Pilihan Terbaik Konsumen
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg lg:text-base xl:text-lg">
              Temukan herbal terbaik yang diproduksi khusus untuk menjaga kesehatan optimal Anda dan keluarga setiap harinya.
            </p>
          </div>
        </motion.div>

        {/* [DIUBAH] Grid Produk menggunakan data baru */}
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {bestSellerProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={FADE_IN_UP_VARIANT}
              className="group"
            >
              <Link href="/products" className="block">
                <Card
                  className={cn(
                    "overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-md",
                    "transition-all duration-300 ease-in-out",
                    "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
                  )}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <CardTitle className="text-lg font-semibold font-headline text-foreground group-hover:text-primary transition-colors duration-200">
                      {product.title}
                    </CardTitle>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol CTA di Bawah */}
        <motion.div
          className="flex justify-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_UP_VARIANT}
        >
          <Button
            asChild
            size="lg"
            className="font-bold text-base transition-all duration-300 hover:scale-105 group bg-primary hover:bg-primary/90"
          >
            <Link href="/products">
              Lihat Semua Varian
              <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}