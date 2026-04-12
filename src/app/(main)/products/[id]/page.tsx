import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data/products';
import { ProductDetailClient } from './client-page';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return { title: 'Produk Tidak Ditemukan - Pintar Herbal' };
  }

  return {
    title: `${product.name} - Pintar Herbal`,
    description: product.description.slice(0, 3).join('. '),
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
