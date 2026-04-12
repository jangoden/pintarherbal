'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/core/page-header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FADE_IN_UP_VARIANT } from '@/lib/animations';
import { cn } from '@/lib/utils';
import {
  Award,
  Check,
  Flame,
  Globe,
  Lightbulb,
  Sparkles,
  Target,
  ArrowRight,
  Briefcase,
  Users,
} from 'lucide-react';
import { LegalDocumentsSection } from '@/components/core/legal-documents';

// Komponen helper untuk list dengan ikon centang (ditingkatkan)
// Sekarang menangani status group-hover secara internal
const CheckListItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <li className={cn('flex items-start gap-3', className)}>
    <Check
      className={cn(
        'h-5 w-5 text-primary flex-shrink-0 mt-1',
        'transition-colors duration-300 ease-in-out',
        'group-hover:text-primary-foreground', // Menjadi putih saat card di-hover
      )}
    />
    <span
      className={cn(
        'text-base text-muted-foreground text-left', // Konsisten rata kiri
        'transition-colors duration-300 ease-in-out',
        'group-hover:text-primary-foreground/90', // Menjadi putih (agak transparan) saat card di-hover
      )}
    >
      {children}
    </span>
  </li>
);

// Komponen helper untuk badge keahlian founder (style sedikit diubah)
const SkillBadge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <Badge
    variant="secondary"
    className={cn(
        "bg-accent/10 text-accent text-xs font-semibold border border-accent/30 px-3 py-1",
        className // Memperbolehkan override, seperti pada kartu founder
    )}
  >
    {children}
  </Badge>
);

// Komponen Card Nilai Inti yang Ditingkatkan
const ValueCard = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <motion.div
    variants={FADE_IN_UP_VARIANT}
    className="flex flex-col items-center gap-3 text-center p-4 rounded-lg transition-all duration-300 hover:bg-primary/5" // Efek hover
  >
    <div className="p-4 bg-primary/10 rounded-full w-fit shadow-sm">
      <Icon className="h-7 w-7 text-primary" /> {/* Ukuran ikon disesuaikan */}
    </div>
    <span className="font-semibold text-lg text-foreground">
      {' '}
      {/* Font lebih besar */}
      {text}
    </span>
  </motion.div>
);

// [BARU] Komponen Kartu Pendiri untuk mengurangi duplikasi
const FounderCard = ({
  imageSrc,
  name,
  title,
  description,
  skills,
  icon: Icon,
}: {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  skills: string[];
  icon: React.ElementType;
}) => (
  <motion.div variants={FADE_IN_UP_VARIANT}>
    <Card className="p-8 h-full flex flex-col items-center shadow-xl bg-primary text-primary-foreground rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="relative mb-6 mt-4">
        <Image
          src={imageSrc}
          alt={name}
          width={150}
          height={150}
          className="rounded-full mx-auto shadow-lg border-4 border-primary-foreground ring-4 ring-primary-foreground/30 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 right-0 p-2 bg-primary-foreground text-primary rounded-full shadow-md">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold font-headline text-primary-foreground text-center">
        {name}
      </h3>
      <p className="mt-1 text-base font-semibold text-primary-foreground/80 tracking-wide">
        {title}
      </p>
      <p className="mt-5 text-primary-foreground/90 leading-relaxed flex-grow text-center">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill}
            className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            {skill}
          </SkillBadge>
        ))}
      </div>
    </Card>
  </motion.div>
);

export default function AboutPage() {
  // Nilai inti dari Hal 1 PDF
  const coreValues = [
    { icon: Award, text: 'Kualitas Premium' }, // Diubah ke Bahasa Indonesia
    { icon: Check, text: '100% Original' },
    { icon: Globe, text: 'Buatan Lokal' }, // Diubah ke Bahasa Indonesia
    { icon: Sparkles, text: 'Halal Indonesia' },
  ];

  return (
    <div className="relative bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden">
      {' '}
      <PageHeader
        backgroundImageUrl="/images/sosnackbg.svg"
        badgeText="Tentang Kami"
        title="Mewujudkan Gaya Baru Produk Lokal."
        description="So Snack lebih dari sekadar rasa. Kami adalah manifestasi semangat, kreativitas, dan bukti nyata bahwa camilan lokal dapat tampil modern, relevan, dan beresonansi dengan gaya hidup Gen Z."
      />
      {/* Trust Badges Ditingkatkan */}
      <motion.div
        className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }} // Animasi stagger
      >
        {coreValues.map((value) => (
          <ValueCard key={value.text} icon={value.icon} text={value.text} />
        ))}
      </motion.div>
      {/* ===== 2. Bagian Cerita Kami ===== */}
      <motion.section
        className="py-24 md:py-32 relative" // Tambah relative
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }} // Stagger lebih lambat
      >
        {/* Elemen Dekoratif */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3"
        >
          <Sparkles className="w-32 h-32 text-accent/10 animate-pulse" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {' '}
          {/* Tambah z-10 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {' '}
            {/* Gap ditambah */}
            {/* Gambar Ditingkatkan */}
            <motion.div
              variants={FADE_IN_UP_VARIANT}
              className="w-full aspect-square rounded-2xl shadow-2xl overflow-hidden group border-4 border-white/50" // Aspect ratio & border
            >
              <Image
                src="/images/tentang.svg"
                alt="Tim So Snack Ciamis"
                width={700}
                height={700}
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105" // Efek hover lebih halus
              />
            </motion.div>
            {/* Teks Cerita */}
            <motion.div variants={FADE_IN_UP_VARIANT} className="space-y-6">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary bg-primary/10 text-sm font-semibold px-4 py-1"
              >
                Cerita Kami
              </Badge>
              <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl text-primary leading-tight">
                Lahir dari <span className="text-purple-600">Ciamis</span>, untuk
                Indonesia.
              </h2>
              <div className="text-lg text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  So Snack lahir pada tahun 2020 dari semangat dua anak muda asal
                  Ciamis yang percaya bahwa camilan lokal bisa tampil lebih dari
                  sekadar enak. Kami ingin menciptakan produk yang bukan hanya
                  lezat, tapi juga punya <strong>gaya</strong>—relatable,
                  modern, dan dekat dengan keseharian anak muda, khususnya Gen
                  Z.
                </p>
                <p className="leading-relaxed mb-4">
                  Di tengah ketatnya persaingan industri makanan ringan dan
                  tantangan ekonomi yang tidak mudah, So Snack hadir sebagai{' '}
                  <strong>simbol semangat generasi muda</strong> untuk
                  menciptakan peluang sendiri. Kami melihat snack bukan hanya
                  sebagai produk konsumsi, tapi juga sebagai{' '}
                  <strong>medium ekspresi dan gaya hidup</strong>.
                </p>
                <p className="leading-relaxed">
                  Dengan memadukan cita rasa lokal khas Indonesia dan{' '}
                  <strong>sentuhan visual kekinian</strong>, So Snack
                  berkomitmen untuk terus menghadirkan camilan yang mampu
                  bersaing secara rasa, tampilan, dan nilai. Kami percaya,
                  produk lokal pun bisa tampil bangga, punya style, dan punya
                  masa depan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* ===== 3. Bagian Visi & Misi ===== */}
      <motion.section
        className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-transparent" // Gradient background halus
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={FADE_IN_UP_VARIANT}
            className="flex flex-col items-center gap-4 text-center mb-16" // Margin bottom
          >
            <Badge
              variant="outline"
              className="border-primary/50 text-primary bg-primary/10 text-sm font-semibold px-4 py-1"
            >
              Tujuan Kami
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl text-primary">
              Visi & Misi
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {' '}
            {/* Gap ditambah */}
            
            {/* [DIPERBAIKI] Kartu Visi */}
            <motion.div variants={FADE_IN_UP_VARIANT} className="h-full group">
              <Card
                className={cn(
                  'relative h-full flex flex-col p-6 md:p-8', // Hapus items-center text-center
                  'bg-card/70 backdrop-blur-lg border border-border/30 rounded-xl shadow-sm',
                  'transition-all duration-300 ease-in-out', // Transisi general
                  'group-hover:bg-primary group-hover:backdrop-blur-none',
                  'hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1',
                )}
              >
                {/* Wrapper untuk Header (Ikon + Judul) agar ter-center */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      'relative z-10 p-3 rounded-full mb-5 w-fit',
                      'bg-primary/10 text-primary',
                      'transition-colors duration-300 ease-in-out',
                      'group-hover:bg-white/20 group-hover:text-white',
                    )}
                  >
                    <Target className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3
                    className={cn(
                      'text-xl font-semibold font-headline text-foreground',
                      'transition-colors duration-300 ease-in-out',
                      'group-hover:text-primary-foreground',
                    )}
                  >
                    Visi
                  </h3>
                </div>

                {/* Konten (Paragraf) - sekarang akan rata kiri */}
                <div className="relative z-10 mt-4">
                  <p
                    className={cn(
                      'text-base text-muted-foreground text-left', // Diubah dari justify ke left
                      'transition-colors duration-300 ease-in-out',
                      'group-hover:text-primary-foreground/80',
                    )}
                  >
                    Menjadi brand terdepan dalam menghadirkan produk berkualitas
                    dengan identitas yang kuat, modern, dan relevan bagi generasi
                    muda Indonesia.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* [DIPERBAIKI] Kartu Misi */}
            <motion.div variants={FADE_IN_UP_VARIANT} className="h-full group">
              <Card
                className={cn(
                  'relative h-full flex flex-col p-6 md:p-8', // Hapus items-center text-center
                  'bg-card/70 backdrop-blur-lg border border-border/30 rounded-xl shadow-sm',
                  'transition-all duration-300 ease-in-out',
                  'group-hover:bg-primary group-hover:backdrop-blur-none',
                  'hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1',
                )}
              >
                {/* Wrapper untuk Header (Ikon + Judul) agar ter-center */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className={cn(
                      'relative z-10 p-3 rounded-full mb-5 w-fit',
                      'bg-primary/10 text-primary',
                      'transition-colors duration-300 ease-in-out',
                      'group-hover:bg-white/20 group-hover:text-white',
                    )}
                  >
                    <Flame className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3
                    className={cn(
                      'text-xl font-semibold font-headline text-foreground',
                      'transition-colors duration-300 ease-in-out',
                      'group-hover:text-primary-foreground',
                    )}
                  >
                    Misi
                  </h3>
                </div>

                {/* Konten (List) - Panggilan komponen disederhanakan */}
                <div className="relative z-10 mt-4">
                  <ul className="space-y-4">
                    {/* Hapus semua className={cn(...)} dari sini, ditangani oleh komponen */}
                    <CheckListItem>
                      Menyediakan cemilan berkualitas tinggi, halal, dengan harga
                      kompetitif yang terjangkau.
                    </CheckListItem>
                    <CheckListItem>
                      Membangun identitas brand yang kuat melalui pendekatan
                      visual dan komunikasi yang kekinian.
                    </CheckListItem>
                    <CheckListItem>
                      Mendukung dan menginspirasi semangat kewirausahaan anak
                      muda Indonesia.
                    </CheckListItem>
                    <CheckListItem>
                      Terus berinovasi dalam pengembangan produk, desain kemasan,
                      dan strategi pemasaran digital.
                    </CheckListItem>
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-5 md:py-5 relative" // Padding atas dikurangi lagi
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Amount disesuaikan
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Elemen Dekoratif */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-0 translate-x-1/3"
        >
          <Users className="w-40 h-40 text-primary/5 rotate-12" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {' '}
          {/* Tambah z-10 */}
          <motion.div
            variants={FADE_IN_UP_VARIANT}
            className="flex flex-col items-center gap-4 text-center mb-16"
          >
            <Badge
              variant="outline"
              className="border-primary/50 text-primary bg-primary/10 text-sm font-semibold px-4 py-1"
            >
              Tim Kami
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl text-primary">
              Para Pendiri
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Dua anak muda dengan semangat dan keahlian yang saling melengkapi
              untuk membangun brand lokal yang kuat dan berdaya saing.
            </p>
          </motion.div>

          {/* [DIREFAKTOR] Menggunakan Komponen FounderCard */}
          <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
            {' '}
            {/* Max-width ditambah */}
            <FounderCard
              imageSrc="/images/dila.svg"
              name="Dila Soviah Ardiyanti, S.Ab"
              title="Founder & CEO"
              description="Bertanggung jawab atas operasional, keuangan, dan kualitas produksi untuk memastikan So Snack selalu yang terbaik."
              skills={[
                'Manajemen Keuangan',
                'Operasional Produksi',
                'Hubungan Pelanggan',
              ]}
              icon={Briefcase}
            />
            <FounderCard
              imageSrc="/images/rio.svg"
              name="Rio Irfan Rabbani, S.Ab"
              title="Co-Founder & CMO"
              description="Memimpin strategi kreatif, pemasaran digital, dan desain untuk membangun identitas brand So Snack yang modern dan *relatable*."
              skills={[
                'Strategi Pemasaran',
                'Desain Grafis',
                'Pengembangan Bisnis',
              ]}
              icon={Lightbulb}
            />
          </div>
        </div>
      </motion.section>

      {/* ===== 4. Bagian Legalitas Usaha ===== */}
      <LegalDocumentsSection />

      {/* ===== 5. Bagian CTA Penutup ===== */}
      <motion.section
        className="py-24 md:py-32 bg-gradient-to-t from-primary/10 to-transparent" // Gradient lagi
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Amount lebih besar
        variants={FADE_IN_UP_VARIANT}
      >
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl text-primary leading-tight">
            {' '}
            {/* Ukuran & leading disesuaikan */}
            Sudah Kenal Kami? <br className="sm:hidden" /> Saatnya Coba Produk
            Kami! {/* Tambah line break mobile */}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Jelajahi koleksi camilan kalcer kami dan temukan rasa favoritmu.
            Dijamin bikin nagih! 😉
          </p>
          <Button
            asChild
            size="lg" // Ukuran tombol
            className="mt-10 font-bold text-lg px-8 py-3 rounded-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl group" // Style tombol CTA ditingkatkan
          >
            <Link href="/products">
              Lihat Semua Produk
              <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />{' '}
              {/* Ikon panah dengan animasi */}
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}