'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TiptapEditor } from '@/components/admin/tiptap-editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { generateSlug } from '@/lib/utils/slug';
import { Post } from '@/lib/types/blog';
import { ArrowLeft, Save, Loader2, ImageIcon } from 'lucide-react';

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [published, setPublished] = useState(false);
  const [content, setContent] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/admin/posts/${postId}`);
        if (res.status === 401) { router.push('/admin/login'); return; }
        if (!res.ok) { setError('Artikel tidak ditemukan'); return; }

        const { post } = await res.json() as { post: Post };
        setTitle(post.title);
        setSlug(post.slug);
        setExcerpt(post.excerpt || '');
        setCategory(post.category);
        setAuthor(post.author);
        setCoverImage(post.cover_image || '');
        setPublished(post.published);
        setContent(post.content);
      } catch {
        setError('Gagal memuat artikel');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, router]);

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const { url } = await res.json();
        setCoverImage(url);
      }
    } catch {
      setError('Upload cover gagal');
    }
  };

  const handleSave = async () => {
    if (!title.trim()) { setError('Judul harus diisi'); return; }
    if (!slug.trim()) { setError('Slug harus diisi'); return; }

    setSaving(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          excerpt: excerpt.trim(),
          category,
          author,
          cover_image: coverImage || null,
          content,
          published,
        }),
      });

      if (res.ok) {
        router.push('/admin/blog');
      } else {
        const data = await res.json();
        setError(data.error || 'Gagal menyimpan perubahan');
      }
    } catch {
      setError('Terjadi kesalahan');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/admin/blog">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <ArrowLeft className="w-4 h-4" /> Kembali
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Switch id="published" checked={published} onCheckedChange={setPublished} />
              <Label htmlFor="published" className="text-sm font-medium cursor-pointer">
                {published ? 'Published' : 'Draft'}
              </Label>
            </div>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="gap-2 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold font-headline">Edit Artikel</h2>

          {error && (
            <div className="bg-destructive/10 text-destructive border border-destructive/20 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="font-semibold">Judul Artikel</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul artikel"
              className="h-12 rounded-xl text-lg"
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug" className="font-semibold">Slug (URL)</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="auto-generated-slug"
              className="h-10 rounded-xl text-sm font-mono"
            />
            <p className="text-xs text-muted-foreground">URL: /blog/{slug || '...'}</p>
          </div>

          {/* Meta: Category & Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category" className="font-semibold">Kategori</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Kesehatan"
                className="h-10 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author" className="font-semibold">Penulis</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Tim Pintar Herbal"
                className="h-10 rounded-xl"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <Label htmlFor="excerpt" className="font-semibold">Ringkasan / Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Ringkasan singkat..."
              className="rounded-xl min-h-[80px]"
            />
          </div>

          {/* Cover Image */}
          <div className="space-y-2">
            <Label className="font-semibold">Cover Image</Label>
            {coverImage ? (
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[2/1]">
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-3 right-3 rounded-xl"
                  onClick={() => setCoverImage('')}
                >
                  Hapus
                </Button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-border rounded-2xl cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-colors">
                <ImageIcon className="w-8 h-8 text-muted-foreground/40 mb-2" />
                <span className="text-sm text-muted-foreground">Klik untuk upload cover image</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
              </label>
            )}
          </div>

          {/* Tiptap Editor */}
          <div className="space-y-2">
            <Label className="font-semibold">Konten Artikel</Label>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
