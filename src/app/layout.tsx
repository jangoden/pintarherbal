import type { Metadata } from 'next';
import { Fira_Sans_Condensed } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

const firaCondensed = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fira-condensed',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pintarherbal.com'),
  title: {
    template: '%s | Pintar Herbal',
    default: 'Pintar Herbal - Produk Herbal Pilihan, Hidup Sehat Alami',
  },
  description: 'Pintar Herbal menyediakan berbagai produk herbal pilihan berkualitas tinggi. Solusi sehat alami dengan kemasan modern dan praktis untuk kebutuhan sehari-hari Anda.',
  keywords: ['herbal', 'kesehatan', 'alami', 'pintar herbal', 'obatherbal', 'suplemen', 'sehat', 'modern'],
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'msapplication-TileColor': '#2d6a4f',
  },
  openGraph: {
    title: 'Pintar Herbal - Produk Herbal Pilihan, Hidup Sehat Alami',
    description: 'Pintar Herbal menyediakan berbagai produk herbal pilihan berkualitas tinggi.',
    url: 'https://pintarherbal.com',
    siteName: 'Pintar Herbal',
    images: [
      {
        url: '/images/preview.webp',
        width: 1200,
        height: 630,
        alt: 'Promotional Banner for Pintar Herbal',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pintar Herbal - Produk Herbal Pilihan',
    description: 'Pintar Herbal menyediakan berbagai produk herbal pilihan berkualitas tinggi.',
    images: ['/images/preview.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-pt-[var(--header-h)] scroll-smooth">
      <body className={`${firaCondensed.variable} ${firaCondensed.className} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pintar Herbal",
            "url": "https://pintarherbal.com",
            "logo": "https://pintarherbal.com/images/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+62-800-0000-0000",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/PintarHerbal",
              "https://www.instagram.com/pintar.herbal",
              "https://www.tiktok.com/@pintarherbal"
            ]
          }) }}
        />
        {children}
      </body>
    </html>
  );
}
