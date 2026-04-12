import { Metadata } from 'next';
import { BlogClientPage } from './client-page';

export const metadata: Metadata = {
  title: 'Blog & Edukasi - Pintar Herbal',
  description: 'Artikel, tips kesehatan, dan informasi herbal terbaik langsung dari para ahli di Pintar Herbal.',
};

export default function BlogPage() {
  return <BlogClientPage />;
}
