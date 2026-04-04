"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react"; // Menambahkan MessageCircle untuk TikTok
import { cn } from "@/lib/utils";

// Komponen helper link (hover diubah ke warna primer)
function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-slate-400 transition-colors duration-200 hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}

// Komponen helper MarketLink (hover diubah ke warna primer)
function MarketLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 transition-colors duration-200 hover:text-primary"
    >
      {children}
    </Link>
  );
}

// Komponen helper baru untuk Ikon Sosial Media
function SocialIconLink({
  href,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full",
        "bg-slate-800/60 text-slate-400", // Latar belakang tombol yang soft
        "transition-colors duration-200 hover:bg-primary hover:text-white" // Hover dengan warna brand
      )}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const socials = {
    whatsapp: "https://wa.me/6282124269410",
    instagram: "https://www.instagram.com/so.snack_",
    facebook:
      "https://web.facebook.com/profile.php?id=61568569775669&_rdc=1&_rdr#",
    tiktok: "https://www.tiktok.com/@sosnackid",
  };

  const marketplaces = {
    shopee: "https://shopee.co.id/sosnack",
    tokopedia: "https://www.tokopedia.com/sosnack",
    lazada: "https://www.lazada.co.id/shop/sosnack",
    tiktok: "https://www.tiktok.com/@sosnackid/shop",
  };

  return (
    // Latar belakang lebih gelap, border lebih halus
    <footer className="relative border-t border-primary/20 bg-slate-950 text-slate-300">
      {/* Noise texture (tetap dipertahankan) */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-full -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>")',
        }}
      />
      {/* Padding ditambah untuk 'breathing room' */}
      <div className="container py-16 md:py-24">
        {/* Grid 12 kolom untuk layout yang lebih seimbang */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Kolom 1: Brand, Deskripsi, & Sosial Media (5 kolom dari 12) */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="SoSnack Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
               </Link>
            <p className="mt-4 text-base text-slate-400 max-w-md">
              Camilan lokal Ciamis dengan cita rasa otentik dan kemasan modern.
              #SnackBiru #anytimeanywhere
            </p>
            {/* Ikon Sosial Media dipindah ke sini dengan style baru */}
            <div className="mt-6 flex items-center gap-3">
              <SocialIconLink
                href={socials.whatsapp}
                aria-label="WhatsApp SoSnack"
              >
                <Phone className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink
                href={socials.instagram}
                aria-label="Instagram SoSnack"
              >
                <Instagram className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink
                href={socials.facebook}
                aria-label="Facebook SoSnack"
              >
                <Facebook className="h-5 w-5" />
              </SocialIconLink>
              <SocialIconLink
                href={socials.tiktok}
                aria-label="TikTok SoSnack"
              >
                <MessageCircle className="h-5 w-5" />
              </SocialIconLink>
            </div>
          </div>

          {/* Kolom 2: Daftar Link (7 kolom dari 12) */}
          <div className="lg:col-span-7">
            {/* Grid bersarang untuk 3 daftar link */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {/* Daftar 1: Jelajahi */}
              <div className="space-y-4">
                <h3 className="font-semibold text-base text-slate-100">
                  Jelajahi
                </h3>
                <nav className="flex flex-col space-y-2.5">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/about">Tentang Kami</FooterLink>
                  <FooterLink href="/products">Produk</FooterLink>
                  <FooterLink href="/contact">Kontak</FooterLink>
                </nav>
              </div>

              {/* Daftar 2: Kemitraan */}
              <div className="space-y-4">
                <h3 className="font-semibold text-base text-slate-100">
                  Kemitraan
                </h3>
                <nav className="flex flex-col space-y-2.5">
                  <FooterLink href="/partnership">Partnership</FooterLink>
                  <FooterLink href="/partnership#reseller-flow">
                    Reseller
                  </FooterLink>
                  <FooterLink href="/partnership">Distributor</FooterLink>
                  <FooterLink href="/partnership">Dropshipper</FooterLink>
                </nav>
              </div>

              {/* Daftar 3: Belanja Online */}
              <div className="space-y-4">
                <h3 className="font-semibold text-base text-slate-100">
                  Belanja Online
                </h3>
                <nav className="flex flex-col space-y-2.5">
                  <MarketLink href={marketplaces.shopee}>Shopee</MarketLink>
                  <MarketLink href={marketplaces.tokopedia}>
                    Tokopedia
                  </MarketLink>
                  <MarketLink href={marketplaces.lazada}>Lazada</MarketLink>
                  <MarketLink href={marketplaces.tiktok}>
                    TikTok Shop
                  </MarketLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Sub-Footer (Bagian Bawah) --- */}
      <div className="border-t border-primary/30">
        <div className="container flex h-20 flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SoSnack Indonesia. All rights
            reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}