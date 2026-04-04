export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'manfaat-ikan-gabus',
    title: 'Manfaat Luar Biasa Ekstrak Ikan Gabus untuk Penyembuhan Luka',
    excerpt: 'Ikan gabus kaya akan albumin, protein penting yang mempercepat pemulihan jaringan sel yang rusak dan sangat baik untuk pasca operasi.',
    date: '10 April 2026',
    category: 'Kesehatan',
    author: 'Tim Pintar Herbal',
    readTime: '4 min read',
  },
  {
    id: 'khasiat-bawang-hitam',
    title: 'Mengapa Bawang Hitam (Black Garlic) Begitu Populer?',
    excerpt: 'Hasil fermentasi dari bawang putih ini ternyata memiliki antioksidan berlipat ganda, sangat baik untuk menormalkan kolesterol dan gula darah.',
    date: '05 April 2026',
    category: 'Nutrisi',
    author: 'Tim Pintar Herbal',
    readTime: '3 min read',
  },
  {
    id: 'kupas-tuntas-minyak-hiu',
    title: 'Keajaiban Squalene: Rahasia Stamina dari Minyak Hati Ikan Hiu',
    excerpt: 'Squalene memiliki fungsi unik mengikat oksigen dalam tubuh. Pahami bagaimana squalene dapat meningkatkan kinerja organ dan mencegah penyakit kronis.',
    date: '28 Maret 2026',
    category: 'Suplemen',
    author: 'Tim Pintar Herbal',
    readTime: '5 min read',
  },
  {
    id: 'pentingnya-kesehatan-sendi',
    title: 'Tips Menjaga Tulang dan Sendi Tetap Kuat di Usia Senja',
    excerpt: 'Cegah pengeroposan tulang dan radang sendi dengan merutinkan konsumsi nutrisi sendi alami setiap hari. Kenali pemicu utama asam urat.',
    date: '15 Maret 2026',
    category: 'Kesehatan',
    author: 'Tim Pintar Herbal',
    readTime: '6 min read',
  },
  {
    id: 'daun-kelor-superfood',
    title: 'Superfood Daun Kelor: Anti-Penuaan dan Penjaga Berat Badan',
    excerpt: 'Kaya akan kalsium, vitamin, dan mineral. Simak ulasan kesehatan seputar daun kelor yang sering dijuluki "Pohon Kehidupan".',
    date: '02 Maret 2026',
    category: 'Herbal Populer',
    author: 'Tim Pintar Herbal',
    readTime: '4 min read',
  },
];
