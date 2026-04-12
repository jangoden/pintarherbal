import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { id as idLocale } from 'date-fns/locale';
import { createClient } from '@supabase/supabase-js';
import { ArrowRight, Leaf, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function LatestBlogSection() {
  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Fetch 3 latest published posts
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, cover_image, excerpt, created_at, category')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(3);

  if (error || !posts || posts.length === 0) {
    return null; // Don't show the section if there are no posts or error
  }

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto position-relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold uppercase tracking-[0.15em] text-sm">
                Blog & Edukasi
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-foreground tracking-tight leading-[1.15]">
              Artikel Kesehatan Terbaru <br className="hidden md:block" />
              dari Pakar Kami
            </h2>
          </div>
          
          <Link href="/blog" className="shrink-0">
            <Button variant="outline" className="rounded-full gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 group">
              Lihat Semua Artikel
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
             const formattedDate = (() => {
              try {
                return format(new Date(post.created_at), 'd MMMM yyyy', { locale: idLocale });
              } catch {
                return post.created_at;
              }
            })();

            return (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col h-full rounded-2xl md:rounded-3xl hover:bg-muted/30 p-2 md:p-3 transition-colors duration-300">
                
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full rounded-xl md:rounded-2xl overflow-hidden mb-6 shadow-sm shadow-black/5 bg-muted/50">
                  {post.cover_image ? (
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <Leaf className="w-12 h-12 opacity-20" />
                    </div>
                  )}
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-2 pb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formattedDate}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-[1.35rem] font-bold font-headline leading-snug mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  
                  {post.excerpt && (
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More button pushed to bottom */}
                  <div className="mt-auto flex items-center text-primary font-semibold text-sm group-hover:underline underline-offset-4 decoration-primary/30">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </Link>
            )
          })}
        </div>

      </div>
    </section>
  );
}
