'use client';

import Link from 'next/link';
import Image from 'next/image';
import aktorImg from '@/images/aktor.png';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroText = () => (
  <motion.div
    className="flex flex-col justify-center text-center lg:text-left z-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.1 } },
      hidden: {},
    }}
  >
    <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex justify-center gap-3 lg:justify-start">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md shadow-sm">
        <Sparkles className="h-4 w-4" />
        #SehatAlami
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md shadow-sm">
        #PintarHerbal
      </span>
    </motion.div>

    <motion.h1
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="mt-8 font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.1]"
    >
      <span className="block">Kesehatan Alami</span>
      <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2 mt-2">
        Masa Depan Anda
      </span>
    </motion.h1>

    <motion.p
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 sm:text-lg"
    >
      Pintar Herbal menyediakan solusi kesehatan alami dengan produk-produk herbal pilihan yang berkualitas. Dari ekstrak ikan gabus hingga propolis premium, kami berkomitmen menjaga Anda dan keluarga secara aman dan terpercaya.
    </motion.p>

    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
    >
      <Link
        href="/products"
        className="group relative inline-flex h-12 md:h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/30 w-full sm:w-auto"
      >
        <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        <span className="relative">Jelajahi Produk</span>
        <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      <Link
        href="/contact"
        className="group inline-flex h-12 md:h-14 items-center justify-center gap-2 rounded-full border-2 border-border bg-background px-8 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5 w-full sm:w-auto shadow-sm"
      >
        Konsultasi Gratis
      </Link>
    </motion.div>
  </motion.div>
);

const HeroImage = () => (
  <motion.div
    className="relative mx-auto mt-16 flex w-full max-w-lg items-center justify-center lg:mt-0 lg:max-w-none z-10"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {/* Animated Glowing Blobs Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 flex items-center justify-center pointer-events-none">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 md:w-80 md:h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -ml-24 mt-24"
      />
    </div>

    {/* Floating Image element */}
    <motion.div
      className="relative z-10 w-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src={aktorImg}
        alt="Pintar Herbal Hero Image"
        width={700}
        height={700}
        className="object-contain drop-shadow-2xl"
        priority
      />
    </motion.div>
  </motion.div>
);

const gridPattern = `
  linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
`;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate w-full overflow-hidden bg-background min-h-[100dvh] flex items-center pt-24"
    >
      {/* Dynamic Grid Background with Radial Mask */}
      <div
        className="absolute inset-0 -z-30 opacity-80"
        style={{
          backgroundImage: gridPattern,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 xl:gap-16">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
