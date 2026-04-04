"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// --- PERBAIKAN (Langkah 1): Impor 'Variants' ---
import { motion, Variants } from "framer-motion";
import {
  Phone,
  Users,
  ShoppingCart,
  ArrowRight,
  Instagram,
  MessageCircle, // Menggantikan ikon TikTok
  Facebook,
  // --- ICON BARU UNTUK PEMBAYARAN ---
  Landmark,
  Wallet,
  Clipboard,
  Info,
} from "lucide-react";

// --- PERBAIKAN (Langkah 2): Tambahkan tipe ': Variants' ---
const FADE_IN_UP_VARIANT: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};
// ---------------------------------------------------

// Data untuk metode pembayaran (dari gambar Anda)
const paymentMethods = [
  {
    name: "SeaBank",
    logo: Landmark, // Placeholder, ganti jika ada ikon SeaBank
    accountName: "A.N. Dila Soviah Ardiyanti",
    accountNumber: "901504228925",
  },
  {
    name: "BCA",
    logo: Landmark, // Placeholder, ganti jika ada ikon BCA
    accountName: "A.N. Dila Soviah Ardiyanti",
    accountNumber: "0670704271",
  },
  {
    name: "DANA",
    logo: Wallet, // Ikon untuk e-wallet
    accountName: "A.N. Dila Soviah Ardiyanti",
    accountNumber: "0858 3466 6837",
  },
];

// Komponen helper untuk link kontak/sosial
function ContactLink({
  href,
  icon: Icon,
  text,
}: {
  href: string;
  icon: React.ElementType;
  text: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground group"
    >
      <Icon className="h-5 w-5 text-primary" />
      <span className="font-medium">{text}</span>
      <ArrowRight className="h-4 w-4 ml-auto opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

export default function ContactPage() {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* Noise Texture Konsisten */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>")',
        }}
      />

      {/* ===== 1. Bagian Hero ===== */}
      <motion.section
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
      >
        {/* Gradien Latar Belakang Halus */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[60vw] max-w-[1000px] max-h-[600px]
                       bg-primary/5 rounded-full blur-3xl opacity-50"
          />
        </div>

        <div className="container px-4 md:px-6">
          <Badge
            variant="secondary"
            className="bg-secondary text-sm font-medium"
          >
            Kontak Kami
          </Badge>
          <h1 className="mt-6 text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Kami Siap Mendengar dari Anda.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Punya pertanyaan, kritik, saran, atau ingin bermitra? Jangan ragu
            untuk menghubungi kami melalui salah satu saluran di bawah ini.
          </p>
        </div>
      </motion.section>

      {/* ===== 2. Bagian Saluran Kontak (Info dari PDF) ===== */}
      <motion.section
        id="contact-channels"
        className="py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kartu 1: Layanan Pelanggan (WhatsApp) */}
            <motion.div
              variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
              className="lg:col-span-1"
            >
              <Card className="p-6 md:p-8 h-full flex flex-col shadow-lg bg-card/80 backdrop-blur-sm border border-border/50">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-2xl font-bold font-headline text-primary">
                  Layanan Pelanggan
                </h3>
                <p className="mt-3 text-base text-muted-foreground flex-grow">
                  Untuk pertanyaan umum, status pesanan, keluhan, atau
                  pendaftaran reseller.
                </p>
                <Button asChild size="lg" className="mt-6 font-bold w-full">
                  <Link
                    href="https://wa.me/6282124269410"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat via WhatsApp
                  </Link>
                </Button>
              </Card>
            </motion.div>

            {/* Kartu 2: Media Sosial */}
            <motion.div
              variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
              className="lg:col-span-1"
            >
              <Card className="p-6 md:p-8 h-full shadow-lg bg-card/80 backdrop-blur-sm border border-border/50">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-2xl font-bold font-headline text-primary">
                  Media Sosial
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  Ikuti kami untuk update terbaru, promo, dan konten seru.
                </p>
                <div className="mt-6 space-y-2">
                  <ContactLink
                    href="https://www.instagram.com/so.snack_"
                    icon={Instagram}
                    text="@so.snack_"
                  />
                  <ContactLink
                    href="https://www.tiktok.com/@sosnackid?_t=zs-8wtno8iytgk&_r=1"
                    icon={MessageCircle} // Placeholder untuk TikTok
                    text="@sosnackid"
                  />
                  <ContactLink
                    href="https://www.facebook.com/SoSnack" // Asumsi dari PDF
                    icon={Facebook}
                    text="So Snack"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Kartu 3: Belanja Online */}
            <motion.div
              variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
              className="lg:col-span-1"
            >
              <Card className="p-6 md:p-8 h-full shadow-lg bg-card/80 backdrop-blur-sm border border-border/50">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <ShoppingCart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-2xl font-bold font-headline text-primary">
                  Belanja Online
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  Temukan kami di marketplace favorit Anda.
                </p>
                <div className="mt-6 space-y-2">
                  <ContactLink
                    href="https://shopee.co.id/sosnack" // Ganti dengan URL Anda
                    icon={ShoppingCart}
                    text="Shopee"
                  />
                  <ContactLink
                    href="https://www.tokopedia.com/sosnack" // Ganti dengan URL Anda
                    icon={ShoppingCart}
                    text="Tokopedia"
                  />
                  <ContactLink
                    href="https://www.lazada.co.id/shop/sosnack" // Ganti dengan URL Anda
                    icon={ShoppingCart}
                    text="Lazada"
                  />
                  <ContactLink
                    href="https://www.tiktok.com/@sosnackid?_t=zs-8wtno8iytgk&_r=1" // Ganti dengan URL Anda
                    icon={ShoppingCart}
                    text="TikTok Shop"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== 3. Bagian Payment (SECTION BARU) ===== */}
      <motion.section
        id="payment"
        className="py-24 md:py-32 bg-muted/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="container px-4 md:px-6">
          {/* Judul Section */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16"
            variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
          >
            <Badge
              variant="secondary"
              className="bg-secondary text-sm font-medium"
            >
              Pembayaran
            </Badge>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Metode Pembayaran Resmi
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Lakukan pembayaran hanya ke rekening resmi kami di bawah ini.
              Setelah transfer, harap{" "}
              <Link
                href="https://wa.me/6282124269410"
                target="_blank"
                className="font-medium text-primary hover:underline"
              >
                konfirmasi ke Admin
              </Link>
              .
            </p>
          </motion.div>

          {/* Grid Kartu Pembayaran */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
          >
            {paymentMethods.map((method) => (
              <Card
                key={method.name}
                className="p-6 flex flex-col shadow-lg bg-card/80 backdrop-blur-sm border border-border/50"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <method.logo className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-headline">
                  {method.name}
                </h3>
                <p className="text-base text-muted-foreground mt-1">
                  {method.accountName}
                </p>
                <p className="text-2xl font-bold text-primary mt-4 tracking-wider">
                  {method.accountNumber}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-5 w-full"
                  onClick={() =>
                    navigator.clipboard.writeText(method.accountNumber)
                  }
                >
                  <Clipboard className="h-4 w-4 mr-2" />
                  Salin Nomor
                </Button>
              </Card>
            ))}
          </motion.div>

          {/* Kotak Disclaimer (Peringatan) */}
          <motion.div
            className="max-w-3xl mx-auto mt-12"
            variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
          >
            <Card className="bg-primary/10 border-primary/20 p-5 sm:p-6 flex items-start gap-4">
              <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-primary">Informasi Penting</h4>
                <p className="text-sm text-primary/90 mt-1">
                  Rekening kami hanya yang tercantum di atas ya, kami tidak
                  menggunakan rekening lain untuk pembayaran. Pastikan
                  transaksi Anda aman dengan transfer hanya ke rekening
                  tersebut.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== 4. Bagian QR Code (Linktree dari PDF) ===== */}
      <motion.section
        id="linktree-qr"
        className="py-24 md:py-32" // Saya hilangkan bg-muted/40 agar beda dari section payment
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={FADE_IN_UP_VARIANT} // Error akan hilang di sini
      >
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Teks */}
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-secondary text-sm font-medium"
              >
                Semua Dalam Satu
              </Badge>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">
                Semua Link, Satu Tempat
              </h2>
              <p className="text-lg text-muted-foreground">
                Scan QR code di samping atau klik tombol di bawah untuk
                mengakses semua link kami—WhatsApp, Marketplace, dan Sosial
                Media—melalui Linktree.
              </p>
              <Button
                asChild
                size="lg"
                className="font-bold text-base transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="https://linktr.ee/sosnack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buka Linktree <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            {/* Gambar QR Code */}
            <div className="flex items-center justify-center">
              <div className="p-6 bg-white rounded-xl shadow-2xl w-fit">
                <Image
                  // Ganti dengan URL QR Code Anda yang sebenarnya
                  src="/images/barcode.webp"
                  alt="QR Code Linktree So Snack"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}