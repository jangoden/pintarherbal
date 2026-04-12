'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Plus, Archive, MoreHorizontal, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function AdminProdukPlaceholder() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-headline tracking-tight text-foreground flex items-center gap-2">
            <ShoppingBag className="w-7 h-7 text-primary" />
            Katalog Produk
          </h1>
          <p className="text-muted-foreground mt-1">
            Kelola produk, stok, dan etalase toko Anda.
          </p>
        </div>
        <Button className="rounded-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 gap-2 shrink-0">
          <Plus className="w-4 h-4" /> Tambah Produk
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Cari produk..." 
            className="pl-9 h-11 rounded-xl bg-card border-border/50 focus-visible:ring-primary/20 shadow-sm"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-11 rounded-xl bg-card border-border/50">
            Kategori
          </Button>
          <Button variant="outline" className="h-11 rounded-xl bg-card border-border/50">
            Terbaru
          </Button>
        </div>
      </div>

      {/* Coming Soon Alert / Empty State */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-primary/[0.04] border border-primary/20 border-dashed rounded-3xl p-10 md:p-16 flex flex-col items-center justify-center text-center mt-4"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner border border-primary/20">
          <Archive className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold font-headline mb-2">Segera Hadir</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Fitur manajemen produk (CRUD) saat ini sedang dalam tahap pengembangan. Tampilan ini adalah *placeholder* (sementara).
        </p>
        <Button variant="outline" className="rounded-xl border-primary/30 text-primary hover:bg-primary/5">
          <FileText className="w-4 h-4 mr-2" /> Baca Dokumentasi
        </Button>
      </motion.div>

      {/* Dummy Table UI */}
      <Card className="rounded-2xl border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/40 text-muted-foreground uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4 rounded-tl-2xl">Produk</th>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Harga</th>
                  <th className="px-6 py-4">Stok</th>
                  <th className="px-6 py-4 text-right rounded-tr-2xl">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  { name: 'Albucare Kapsul', category: 'Herbal Ekstrak', price: 'Rp 145.000', stock: 120 },
                  { name: 'Propolis SM Brazil', category: 'Cair / Tetes', price: 'Rp 85.000', stock: 45 },
                  { name: 'Minyak Sapu Jagat', category: 'Obat Luar', price: 'Rp 110.000', stock: 80 }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors opacity-60">
                    <td className="px-6 py-4 font-medium flex items-center gap-3">
                      <div className="w-10 h-10 rounded border border-border/50 bg-muted flex items-center justify-center text-muted-foreground/40 text-xs">IMG</div>
                      {item.name}
                    </td>
                    <td className="px-6 py-4"><span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{item.category}</span></td>
                    <td className="px-6 py-4 font-semibold text-foreground/80">{item.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.stock < 50 ? 'bg-amber-500' : 'bg-green-500'}`} />
                        {item.stock}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
