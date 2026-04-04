
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { FADE_IN_UP_VARIANT } from '@/lib/animations';
import { ShieldCheck } from 'lucide-react';

// Komponen untuk satu kartu dokumen
const DocumentCard = ({
  imageSrc,
  title,
  alt,
}: {
  imageSrc: string;
  title: string;
  alt: string;
}) => (
  <motion.div variants={FADE_IN_UP_VARIANT} className="w-full">
    <Card className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/50">
      <CardContent className="p-4 sm:p-6">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg border border-muted/50">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-center text-lg font-semibold text-foreground">
          {title}
        </h3>
      </CardContent>
    </Card>
  </motion.div>
);

// Komponen utama untuk seksi legalitas
export const LegalDocumentsSection = () => {
  const documents = [
    {
      imageSrc: '/images/sertifhalal.svg',
      title: 'Sertifikat Halal',
      alt: 'Sertifikat Halal So Snack',
    },
    {
      imageSrc: '/images/nib.svg',
      title: 'Nomor Induk Berusaha (NIB)',
      alt: 'Dokumen NIB So Snack',
    },
  ];

  return (
    <motion.section
      className="py-24 md:py-32 bg-gradient-to-b from-background via-blue-50/20 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={FADE_IN_UP_VARIANT}
          className="flex flex-col items-center gap-4 text-center mb-16"
        >
          <Badge
            variant="outline"
            className="border-primary/50 text-primary bg-primary/10 text-sm font-semibold px-4 py-1"
          >
            <ShieldCheck className="w-4 h-4 mr-2" />
            Legalitas Usaha
          </Badge>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl text-primary">
            Dokumen Resmi Kami
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Komitmen kami terhadap kualitas dan kepercayaan dibuktikan melalui
            legalitas yang sah dan terverifikasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
          {documents.map((doc) => (
            <DocumentCard
              key={doc.title}
              imageSrc={doc.imageSrc}
              title={doc.title}
              alt={doc.alt}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
