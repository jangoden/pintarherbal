import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto">
          <FileQuestion className="w-10 h-10 text-primary/50" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-headline">Artikel Tidak Ditemukan</h1>
          <p className="text-muted-foreground leading-relaxed">
            Maaf, artikel yang Anda cari tidak ada atau sudah dihapus.
          </p>
        </div>
        <Link href="/blog">
          <Button className="rounded-full gap-2 px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/15">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
