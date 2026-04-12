'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '@/lib/types/blog';
import { ReadingProgress } from '@/components/blog/reading-progress';
import { BlogHeader } from '@/components/blog/blog-header';
import { TiptapRenderer } from '@/components/blog/tiptap-renderer';
import { ShareButtons } from '@/components/blog/share-buttons';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronUp } from 'lucide-react';

function ScrollToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 flex items-center justify-center hover:bg-primary transition-colors backdrop-blur-sm"
      title="Scroll ke atas"
    >
      <ChevronUp className="w-5 h-5" />
    </motion.button>
  );
}

export function BlogDetailClient({ post }: { post: Post }) {
  return (
    <>
      <ReadingProgress />
      <ScrollToTop />

      <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.04] via-transparent to-transparent" />
        </div>

        <article className="relative pt-28 md:pt-32 pb-20">
          {/* Back Navigation */}
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="gap-2 text-muted-foreground hover:text-primary rounded-full px-4 -ml-4 text-sm font-medium group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                  Kembali ke Blog
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Header (Now includes cover image) */}
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <BlogHeader post={post} />
          </div>

          {/* Content */}
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TiptapRenderer content={post.content} />
            </motion.div>

            {/* Bottom Divider */}
            <div className="mt-14 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </div>

            {/* Share & Footer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16"
            >
              <ShareButtons title={post.title} slug={post.slug} />

              <Link href="/blog">
                <Button
                  variant="outline"
                  className="rounded-full gap-2 text-sm border-border/60 hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Lihat Artikel Lainnya
                </Button>
              </Link>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/[0.06] via-primary/[0.03] to-transparent border border-primary/10 p-8 md:p-12 text-center">
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.04]" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/[0.03]" />

                <div className="relative z-10 max-w-lg mx-auto space-y-4">
                  <h3 className="text-2xl font-bold font-headline">
                    Tertarik dengan Produk Kami?
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    Lihat koleksi lengkap produk herbal pilihan Pintar Herbal untuk mendukung kesehatan Anda setiap hari.
                  </p>
                  <Link href="/products">
                    <Button className="rounded-full px-8 py-3 mt-2 font-semibold shadow-lg shadow-primary/15 bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
                      Lihat Produk
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </>
  );
}
