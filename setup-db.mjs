// Setup database using Supabase Management API
// This uses the service role key to interact with the database via PostgREST

const SUPABASE_URL = 'https://msqgsudcswjinhiwgeyl.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdzdWRjc3dqaW5oaXdnZXlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTk3NDMzOCwiZXhwIjoyMDkxNTUwMzM4fQ.9v3-OUKstDtnN9UTladByMtyrFhCT2qIF9tEgHixYSc';

const headers = {
  'Content-Type': 'application/json',
  'apikey': SERVICE_ROLE_KEY,
  'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
  'Prefer': 'return=representation',
};

async function checkTableExists() {
  // Try to query the posts table
  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?select=count&limit=0`, {
    headers,
  });
  return res.ok;
}

async function insertSamplePost() {
  const samplePost = {
    title: 'Manfaat Luar Biasa Ekstrak Ikan Gabus untuk Penyembuhan Luka',
    slug: 'manfaat-ikan-gabus',
    content: {
      type: 'doc',
      content: [
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Apa itu Ekstrak Ikan Gabus?' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Ikan gabus (Channa striata) adalah salah satu jenis ikan air tawar yang banyak ditemukan di wilayah Asia Tenggara. Ikan ini dikenal kaya akan albumin, yaitu jenis protein penting yang berperan vital dalam proses penyembuhan luka dan regenerasi sel.',
            },
          ],
        },
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Manfaat Albumin dari Ikan Gabus' }],
        },
        {
          type: 'bulletList',
          content: [
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    { type: 'text', marks: [{ type: 'bold' }], text: 'Mempercepat penyembuhan luka' },
                    { type: 'text', text: ' - Albumin membantu memperbaiki jaringan sel yang rusak.' },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    { type: 'text', marks: [{ type: 'bold' }], text: 'Meningkatkan daya tahan tubuh' },
                    { type: 'text', text: ' - Protein tinggi memperkuat sistem imun.' },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    { type: 'text', marks: [{ type: 'bold' }], text: 'Mengurangi pembengkakan' },
                    { type: 'text', text: ' - Sifat anti-inflamasi alami dari ekstrak ikan gabus.' },
                  ],
                },
              ],
            },
            {
              type: 'listItem',
              content: [
                {
                  type: 'paragraph',
                  content: [
                    { type: 'text', marks: [{ type: 'bold' }], text: 'Cocok untuk pasca operasi' },
                    { type: 'text', text: ' - Sangat direkomendasikan untuk masa pemulihan.' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'heading',
          attrs: { level: 2 },
          content: [{ type: 'text', text: 'Cara Konsumsi yang Tepat' }],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Untuk mendapatkan manfaat optimal, konsumsi suplemen ekstrak ikan gabus secara rutin sesuai dosis yang dianjurkan. Pastikan memilih produk yang berasal dari sumber terpercaya dan telah memiliki izin BPOM.',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Pintar Herbal menyediakan produk Albucare yang mengandung ekstrak ikan gabus berkualitas tinggi. Formulasi modern dalam kapsul praktis memudahkan Anda mendapatkan manfaat albumin setiap hari.',
            },
          ],
        },
      ],
    },
    excerpt: 'Ikan gabus kaya akan albumin, protein penting yang mempercepat pemulihan jaringan sel yang rusak dan sangat baik untuk pasca operasi.',
    author: 'Tim Pintar Herbal',
    category: 'Kesehatan',
    published: true,
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
    method: 'POST',
    headers: { ...headers, 'Prefer': 'return=representation,resolution=ignore-duplicates' },
    body: JSON.stringify(samplePost),
  });

  return { ok: res.ok, status: res.status, body: await res.text() };
}

async function main() {
  console.log('🚀 Checking Supabase database...\n');

  const tableExists = await checkTableExists();

  if (tableExists) {
    console.log('✅ Table "posts" already exists!');

    // Check existing posts
    const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?select=id,title,slug,published`, { headers });
    const posts = await res.json();
    
    if (Array.isArray(posts) && posts.length > 0) {
      console.log(`📝 Found ${posts.length} post(s):`);
      posts.forEach(p => console.log(`   - [${p.published ? '✅ Published' : '📝 Draft'}] ${p.title}`));
      console.log('\n✨ Database is ready!');
    } else {
      console.log('📭 No posts found. Inserting sample post...');
      const result = await insertSamplePost();
      if (result.ok) {
        console.log('✅ Sample post inserted!');
      } else {
        console.log(`⚠️  Insert failed: ${result.status} - ${result.body}`);
      }
    }
  } else {
    console.log('❌ Table "posts" does NOT exist yet.');
    console.log('');
    console.log('═══════════════════════════════════════════════════════');
    console.log('  Anda perlu membuat tabel di Supabase Dashboard:');
    console.log('  1. Buka: https://supabase.com/dashboard/project/msqgsudcswjinhiwgeyl/sql/new');
    console.log('  2. Copy-paste isi file: docs/database-schema.sql');
    console.log('  3. Klik "Run" untuk execute');
    console.log('═══════════════════════════════════════════════════════');
    console.log('');
    console.log('Setelah tabel dibuat, jalankan script ini lagi untuk insert sample data.');
  }
}

main();
