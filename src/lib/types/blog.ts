export type Post = {
  id: string;
  title: string;
  slug: string;
  content: Record<string, unknown> | null;
  excerpt: string | null;
  cover_image: string | null;
  author: string;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type CreatePostInput = {
  title: string;
  slug: string;
  content?: Record<string, unknown> | null;
  excerpt?: string;
  cover_image?: string;
  author?: string;
  category?: string;
  published?: boolean;
};

export type UpdatePostInput = Partial<CreatePostInput>;
