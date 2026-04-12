import { Metadata } from 'next';

import { BrandOverview } from "@/components/core/brand-overview";
import { HeroSection } from "@/components/core/hero-section";
import { LogoCarousel } from "@/components/core/logo-carousel";
import { ProductShowcase } from "@/components/core/product-showcase";
import { LatestBlogSection } from "@/components/core/latest-blog-section";
import { YouTubeVideoSection } from "@/components/core/youtube-video-section";

export const metadata: Metadata = {
  title: 'Beranda - Pintar Herbal | Produk Herbal Pilihan',
  description: 'Selamat datang di Pintar Herbal! Temukan aneka produk herbal pilihan untuk kesehatan Anda. Dibuat dari bahan-bahan alami terbaik yang berkualitas.',
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <BrandOverview />
      <LogoCarousel />
      <ProductShowcase />
      <LatestBlogSection />
      <YouTubeVideoSection videoId="OIJZ1slHgAM" />
      {/* You can add other sections for the home page here */}
    </>
  );
}