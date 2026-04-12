'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, FileText, ShoppingBag, LogOut, LayoutDashboard, Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Artikel Blog', href: '/admin/blog', icon: FileText },
    { name: 'Katalog Produk', href: '/admin/produk', icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-[hsl(220,30%,97%)] flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50 px-4 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold font-headline">Admin Panel</span>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -mr-2">
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Sidebar - Desktop & Mobile */}
      <AnimatePresence>
        {(mobileMenuOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className={`fixed md:sticky top-16 md:top-0 left-0 z-40 w-64 md:h-screen h-[calc(100vh-4rem)] bg-card border-r border-border/50 shadow-xl shadow-primary/5 p-4 flex flex-col transition-transform md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
          >
            {/* Logo Desktop only */}
            <div className="hidden md:flex items-center gap-3 px-2 py-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-bold text-lg font-headline leading-tight">Pintar Herbal</h1>
                <p className="text-xs text-muted-foreground font-medium">Administrator Panel</p>
              </div>
            </div>

            <nav className="flex-1 space-y-1 mt-4 md:mt-0">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link href={item.href} key={item.name} onClick={() => setMobileMenuOpen(false)}>
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-primary/10 text-primary font-semibold shadow-sm shadow-primary/5'
                          : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground font-medium'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground/70'}`} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-2 pt-4 border-t border-border/50">
              <Link href="/" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 h-11">
                  <ExternalLink className="w-5 h-5" /> Lihat Website
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full justify-start gap-3 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-11"
              >
                <LogOut className="w-5 h-5" /> Keluar
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 bg-[hsl(220,30%,97%)] selection:bg-primary/20 relative w-full overflow-x-hidden md:max-w-[calc(100vw-16rem)]">
        {children}
      </main>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
