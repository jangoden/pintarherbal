'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card'; // Kita gunakan Card bawaan
import { motion } from 'framer-motion'; // Tambahkan Variants di sini
import { Leaf, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { cn } from '@/lib/utils'; // Import cn
import { FADE_IN_UP_VARIANT } from '@/lib/animations'; // Import FADE_IN_UP_VARIANT

// Fitur tetap sama
const features = [
  {
    icon: Leaf,
    title: '100% Alami',
    description: 'Dibuat dari ekstrak bahan herbal murni pilihan tanpa bahan kimia berbahaya.',
  },
  {
    icon: Sparkles,
    title: 'Multi Khasiat',
    description: 'Efektif membantu mencegah dan mengatasi berbagai macam masalah kesehatan.',
  },
  {
    icon: ShieldCheck,
    title: 'Aman & Teruji',
    description: 'Keamanan terjamin dengan nomor registrasi resmi dari BPOM.',
  },
  {
    icon: Award,
    title: 'Halal & Terpercaya',
    description: 'Sudah tersertifikasi Halal MUI, memberikan ketenangan tanpa ragu.',
  },
];

export function BrandOverview() {
  return (
    // Background section tetap sama
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-background to-blue-50/30 overflow-hidden">
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
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-20 opacity-30">
        <div className="absolute left-[calc(50%+14rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-radial from-accent/30 to-transparent blur-3xl"/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Judul (Tetap sama) */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_UP_VARIANT}
        >
          <Badge
            variant="secondary"
            className="bg-secondary text-sm font-medium"
          >
            Kenapa Pintar Herbal?
          </Badge>
          <h2 className="mt-4 text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Lebih dari Sekadar Suplemen.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Kami memadukan bahan alami terbaik dengan standar produksi modern. Inilah alasan mengapa Pintar Herbal adalah pilihan tepat.
          </p>
        </motion.div>

        {/* Grid Fitur (Kartu dengan Animasi Warna Baru) */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={FADE_IN_UP_VARIANT}
              className="h-full group" // Tambahkan 'group' di sini
            >
              {/*
                PERUBAHAN UTAMA ADA DI className Card INI:
                - Tambah: transition-colors duration-300 group-hover:bg-primary
                - Ubah warna teks saat hover: group-hover:text-primary-foreground
                - Ubah warna deskripsi saat hover: group-hover:text-primary-foreground/80
                - Hapus backdrop-blur saat hover (opsional, agar warna solid)
              */}
              <Card
                className={cn(
                  "relative h-full flex flex-col items-center text-center p-6 md:p-8",
                  "bg-card/70 backdrop-blur-lg border border-border/30 rounded-xl shadow-sm",
                  "transition-colors duration-300 ease-in-out", // Transisi warna
                  "group-hover:bg-primary group-hover:backdrop-blur-none", // Warna background jadi primary saat hover
                  "hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1" // Efek hover lainnya
                )}
              >
                {/* Ikon: Ubah warna background dan ikon saat hover */}
                <div className={cn(
                  "relative z-10 p-3 rounded-full mb-5 w-fit",
                  "bg-primary/10 text-primary", // Warna default
                  "transition-colors duration-300 ease-in-out",
                  "group-hover:bg-white/20 group-hover:text-white" // Warna saat card hover
                )}>
                  <feature.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>
                {/* Teks: Ubah warna teks saat hover */}
                <div className="relative z-10">
                  <h3 className={cn(
                    "text-xl font-semibold font-headline text-foreground",
                    "transition-colors duration-300 ease-in-out",
                    "group-hover:text-primary-foreground" // Warna judul saat card hover
                  )}>
                    {feature.title}
                  </h3>
                  <p className={cn(
                    "mt-2 text-base text-muted-foreground",
                    "transition-colors duration-300 ease-in-out",
                    "group-hover:text-primary-foreground/80" // Warna deskripsi saat card hover
                  )}>
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}