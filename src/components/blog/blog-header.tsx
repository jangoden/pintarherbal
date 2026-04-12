'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { id as idLocale } from 'date-fns/locale';
import { Post } from '@/lib/types/blog';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, BookOpen } from 'lucide-react';

function estimateReadTime(content: Record<string, unknown> | null): number {
  if (!content) return 3;
  const text = JSON.stringify(content);
  const wordCount = text.split(/\s+/).length;
  return Math.max(2, Math.ceil(wordCount / 200));
}

export function BlogHeader({ post }: { post: Post }) {
  const readTime = estimateReadTime(post.content);

  const formattedDate = (() => {
    try {
      return format(new Date(post.created_at), 'd MMMM yyyy', { locale: idLocale });
    } catch {
      return post.created_at;
    }
  })();

  return (
    <header className="mb-10 md:mb-14">
      {/* Category */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Badge
          variant="outline"
          className="mb-5 border-primary/20 text-primary bg-primary/5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em]"
        >
          {post.category}
        </Badge>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold font-headline tracking-tight text-foreground leading-[1.15] mb-8"
      >
        {post.title}
      </motion.h1>

      {/* Cover Image immediately after title */}
      {post.cover_image && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-10 shadow-2xl shadow-black/10 border border-white/10 md:-mx-12 lg:-mx-16"
        >
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            priority
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent" />
        </motion.div>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed mb-8 max-w-2xl"
        >
          {post.excerpt}
        </motion.p>
      )}

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="origin-left"
      >
        <div className="h-px bg-gradient-to-r from-border via-border/80 to-transparent mb-6" />
      </motion.div>

      {/* Meta info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="font-semibold text-foreground/90">{post.author}</span>
          </div>
        </div>

        <span className="text-border">•</span>

        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-primary/50" />
          <span>{formattedDate}</span>
        </div>

        <span className="text-border">•</span>

        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-primary/50" />
          <span>{readTime} min read</span>
        </div>
      </motion.div>
    </header>
  );
}
