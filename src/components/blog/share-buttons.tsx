'use client';

import React from 'react';
import { Share2, Link2, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = typeof window !== 'undefined'
    ? `${window.location.origin}/blog/${slug}`
    : `https://pintarherbal.com/blog/${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    // Could add a toast notification here
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
        Bagikan
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopyLink}
        className="w-9 h-9 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
        title="Copy link"
      >
        <Link2 className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={shareToTwitter}
        className="w-9 h-9 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
        title="Share ke Twitter"
      >
        <Twitter className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={shareToFacebook}
        className="w-9 h-9 p-0 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
        title="Share ke Facebook"
      >
        <Facebook className="w-4 h-4" />
      </Button>
    </div>
  );
}
