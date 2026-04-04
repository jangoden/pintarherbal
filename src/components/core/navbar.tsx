'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = { name: string; href: string };

const navLinks: NavItem[] = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Produk', href: '/products' },
  { name: 'Blog', href: '/blog' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div 
        className={cn(
          'container mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8 rounded-full transition-all duration-500',
          scrolled 
            ? 'h-16 bg-background/80 backdrop-blur-lg border border-border/50 shadow-sm' 
            : 'h-16 bg-transparent'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Homepage"
          className="flex shrink-0 items-center gap-2 group"
        >
          {/* Default Icon placeholder for Herbal (Can be hidden when real logo comes) */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </div>
          
          <span className={cn(
            "font-headline font-bold text-lg tracking-tight transition-colors",
            "text-foreground group-hover:text-primary"
          )}>
            Pintar Herbal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                'hover:bg-primary/10 hover:text-primary',
                isActive(link.href)
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
          >
            Hubungi Kami
          </Link>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'relative grid h-10 w-10 place-items-center rounded-full border border-border outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary/50 md:hidden',
              'bg-background/50 text-foreground hover:bg-accent/10 hover:text-primary transition-colors'
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden top-[72px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={cn(
                'absolute left-4 right-4 top-[80px] z-50 origin-top rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl p-4 md:hidden'
              )}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <nav className="flex flex-col gap-2" aria-label="Mobile Menu">
                {navLinks.map((link) => (
                  <Link
                    key={`m-${link.name}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px w-full bg-border/50 my-2" />
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Hubungi Kami
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
