import { Metadata } from 'next';
import { ProductsClientPage } from './client-page';

export const metadata: Metadata = {
  title: 'Katalog Produk - Pintar Herbal',
  description: 'Temukan berbagai produk herbal pilihan berkualitas dari Pintar Herbal untuk kesehatan Anda.',
};

export default function ProductsPage() {
  return <ProductsClientPage />;
}
