import { createServerSupabaseClient } from '@/lib/supabase/server';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';
import type { Post, CreatePostInput, UpdatePostInput } from '@/lib/types/blog';

// ── Public Functions ──────────────────────────────────────────

export async function getAllPosts(options?: {
  page?: number;
  limit?: number;
  category?: string;
}): Promise<{ posts: Post[]; count: number }> {
  const supabase = createServerSupabaseClient();
  const page = options?.page ?? 1;
  const limit = options?.limit ?? 12;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .eq('published', true)
    .order('created_at', { ascending: false })
    .range(from, to);

  if (options?.category && options.category !== 'Semua Kategori') {
    query = query.eq('category', options.category);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching posts:', error.message);
    return { posts: [], count: 0 };
  }

  return { posts: (data as Post[]) ?? [], count: count ?? 0 };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching post:', error.message);
    return null;
  }

  return data as Post;
}

// ── Admin Functions ───────────────────────────────────────────

export async function getAllPostsAdmin(): Promise<Post[]> {
  const supabase = createAdminSupabaseClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching admin posts:', error.message);
    return [];
  }

  return (data as Post[]) ?? [];
}

export async function getPostById(id: string): Promise<Post | null> {
  const supabase = createAdminSupabaseClient();

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching post by id:', error.message);
    return null;
  }

  return data as Post;
}

export async function createPost(input: CreatePostInput): Promise<Post | null> {
  const supabase = createAdminSupabaseClient();

  const { data, error } = await supabase
    .from('posts')
    .insert([input])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error.message);
    throw new Error(error.message);
  }

  return data as Post;
}

export async function updatePost(id: string, input: UpdatePostInput): Promise<Post | null> {
  const supabase = createAdminSupabaseClient();

  const { data, error } = await supabase
    .from('posts')
    .update(input)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating post:', error.message);
    throw new Error(error.message);
  }

  return data as Post;
}

export async function deletePost(id: string): Promise<boolean> {
  const supabase = createAdminSupabaseClient();

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error.message);
    throw new Error(error.message);
  }

  return true;
}
