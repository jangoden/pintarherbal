const SUPABASE_URL = 'https://msqgsudcswjinhiwgeyl.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcWdzdWRjc3dqaW5oaXdnZXlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTk3NDMzOCwiZXhwIjoyMDkxNTUwMzM4fQ.9v3-OUKstDtnN9UTladByMtyrFhCT2qIF9tEgHixYSc';

const dummyPosts = [
  {
    title: 'Keajaiban Bawang Putih Hitam (Black Garlic) untuk Hipertensi & Kolesterol',
    slug: 'manfaat-bawang-putih-hitam',
    cover_image: 'https://images.unsplash.com/photo-1540148426945-87bd3badf8fb?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Black garlic memiliki kandungan antioksidan berkali-kali lipat lebih tinggi dari bawang putih biasa. Pelajari khasiatnya untuk menormalkan tekanan darah dan kolesterol Anda.',
    author: 'Tim Pintar Herbal',
    category: 'Jantung & Pembuluh Darah',
    published: true,
    content: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Bawang putih telah lama dikenal sebagai bumbu masakan sekaligus tanaman obat herbal yang ampuh. Namun, pernahkah Anda mendengar tentang " },
            { "type": "text", "marks": [{ "type": "bold" }], "text": "Bawang Putih Hitam (Black Garlic)" },
            { "type": "text", "text": "? Bawang putih hitam adalah bawang putih mentah segar yang telah mengalami proses fermentasi pada kelembapan dan panas yang dikontrol ketat selama beberapa minggu." }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Mengapa Black Garlic Lebih Unggul?" }]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Selama proses fermentasi, senyawa penyebab rasa tajam dan bau menyengat pada bawang putih (allicin) berubah menjadi senyawa kompleks yang kaya akan antioksidan, yaitu S-allylcysteine (SAC). Senyawa inilah yang memberikan khasiat luar biasa." }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    { "type": "text", "marks": [{ "type": "bold" }], "text": "Menormalkan Tekanan Darah:" },
                    { "type": "text", "text": " Membantu melebarkan pembuluh darah sehingga aliran darah menjadi lebih lancar." }
                  ]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    { "type": "text", "marks": [{ "type": "bold" }], "text": "Menurunkan Kolesterol Jahat (LDL):" },
                    { "type": "text", "text": " Terbukti efektif menghambat pembentukan plak kolesterol pada dinding arteri." }
                  ]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    { "type": "text", "marks": [{ "type": "bold" }], "text": "Tinggi Antioksidan:" },
                    { "type": "text", "text": " Kandungan antioksidannya mencapai dua kali lipat lebih banyak dari bawang putih mentah." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "blockquote",
          "content": [
            {
              "type": "paragraph",
              "content": [{ "type": "text", "text": "\"Kesehatan jantung dimulai dari pembuluh darah yang bersih. Black garlic adalah sapu pembersih alaminya.\"" }]
            }
          ]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Dapatkan khasiat Black Garlic dengan praktis melalui serangkaian produk bawang hitam asli yang diformulasi secara eksklusif oleh Pintar Herbal." }]
        }
      ]
    }
  },
  {
    title: 'Mengenal Squalene: Zat Aktif dari Minyak Hati Ikan Hiu yang Meningkatkan Kecerdasan & Imunitas',
    slug: 'mengenal-squalene-minyak-hiu',
    cover_image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Squalene bukan sekadar minyak ikan biasa. Kandungan Omega-3 dan zat aktifnya berperan penting menutrisi otak anak hingga orang dewasa.',
    author: 'Tim Pintar Herbal',
    category: 'Imunitas & Otak',
    published: true,
    content: {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Apa Itu Squalene?" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Squalene adalah hidrokarbon tak jenuh cair yang pertama kali ditemukan pada minyak hati ikan hiu (shark liver oil). Ikan hiu yang hidup di laut dalam memiliki hati besar yang kaya squalene untuk bertahan hidup di kedalaman laut dengan tekanan ekstrem dan miskin oksigen." }
          ]
        },
        {
          "type": "horizontalRule"
        },
        {
          "type": "heading",
          "attrs": { "level": 3 },
          "content": [{ "type": "text", "text": "Manfaat Utama Konsumsi Bio Squalene" }]
        },
        {
          "type": "orderedList",
          "content": [
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Meningkatkan suplai oksigen ke otak, membantu fokus, dan memelihara daya ingat anak maupun lansia." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Memperkuat fungsi hati (liver) sebagai penawar racun alamiah di dalam tubuh." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Meningkatkan stamina, mengatasi kelelahan (fatigue), dan memulihkan kondisi pasca sakit parah." }]
                }
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Suplemen Squalene Pintar Herbal diekstrak dengan Nano Technology, sehingga molekulnya sangat mudah diserap dan tidak meninggalkan bau amis yang tajam." }]
        }
      ]
    }
  },
  {
    title: '5 Cara Menjaga Kesehatan Tulang dan Sendi di Usia Lanjut',
    slug: 'menjaga-kesehatan-tulang-dan-sendi',
    cover_image: 'https://images.unsplash.com/photo-1549420063-de1f6ab00ea0?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Nyeri lutut dan radang sendi adalah keluhan umum di usia tua. Ketahui cara ampuh memelihara fleksibilitas sendi Anda sejak dini.',
    author: 'Tim Pintar Herbal',
    category: 'Tulang & Sendi',
    published: true,
    content: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Semakin bertambah usia, tulang kita mulai kehilangan kepadatan mineralnya. Begitu juga dengan bantalan sendi yang menipis sehingga menimbulkan rasa sakit dan kaku. Kondisi seperti Osteoarthritis dan Osteoporosis sering menghantui usia 50 tahun ke atas." }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Tips Memelihara Tulang dan Sendi" }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Rutin berjemur di bawah sinar matahari pagi (Vitamin D alami)." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Konsumsi makanan tinggi Kalsium." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Lakukan olahraga ringan tapi rutin, seperti berenang (sangat baik karena mengurangi beban pada sendi) atau yoga." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Konsumsi herbal yang bersifat kondroprotektif." }]
                }
              ]
            }
          ]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Pintar Herbal menghadirkan obat kuat sendi yang bersumber langsung dari alam, yang diformulasikan khusus dengan Daun Salam, Sambiloto dan Kayu Manis yang terbukti meredakan nyeri dan pembengkakan otot/sendi." }]
        }
      ]
    }
  },
  {
    title: 'Khasiat Daun Sirih & Kunyit untuk Kesehatan Organ Kewanitaan',
    slug: 'khasiat-daun-sirih-kunyit',
    cover_image: 'https://images.unsplash.com/photo-1615485458025-a130f146f414?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Rasa gatal, keputihan tidak normal, dan haid yang tidak teratur adalah musuh wanita. Ramuan tradisional rempah nusantara solusinya.',
    author: 'Tim Pintar Herbal',
    category: 'Kesehatan Wanita',
    published: true,
    content: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Menjaga kebersihan dan kesehatan area kewanitaan merupakan kewajiban setiap perempuan. Jamu dan ramuan herbal nusantara seperti Daun Sirih, Kunyit, Manjakani, dan Kayu Rapet sudah dikenal turun-temurun khasiatnya." }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Dua Jagoan Utama: Kunyit & Sirih" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "marks": [{ "type": "bold" }], "text": "Daun Sirih" },
            { "type": "text", "text": " terkenal akan sifat antiseptik dan antimikrobanya. Minyak atsirinya mencegah datangnya bakteri anaerob penyebab keputihan berbau tidak sedap dan gatal." }
          ]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "marks": [{ "type": "bold" }], "text": "Kunyit" },
            { "type": "text", "text": " banyak mengandung Kurkumin, suatu zat anti-peradangan alami yang sangat ampuh meredakan kram/nyeri saat PMS dan membersihkan rahim." }
          ]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Dengan produk kapsul Sehat Wanita dari Pintar Herbal, Anda tidak perlu lagi merebus jamu sendiri yang merepotkan dan rasanya sangat pahit." }]
        }
      ]
    }
  },
  {
    title: 'Propolis SM Brazil: Sensasi Cairan Lebah sebagai Antibiotik Alami',
    slug: 'propolis-sm-brazil-antibiotik',
    cover_image: 'https://images.unsplash.com/photo-1587049352847-ecb6e22a46e1?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Mengapa Propolis Brazil dianggap yang terbaik di dunia? Cari tahu perbedaan dan manfaat cairan lebah resin ini untuk atasi peradangan akut.',
    author: 'Tim Pintar Herbal',
    category: 'Suplemen',
    published: true,
    content: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Propolis adalah resin atau zat getah lengket yang dikumpulkan lebah madu dari pucuk daun dan kulit pohon. Lebah mencampurkannya dengan lilin lebah agar bisa dipakai untuk menyegel celah di sarang sekaligus mensterilkan sarang dari serangan virus dan bakteri luar." }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Apa Keistimewaan Propolis Brazil?" }]
        },
        {
          "type": "paragraph",
          "content": [{ "type": "text", "text": "Propolis dari Brazil diekstrak dari tanaman Baccharis dracunculifolia yang hanya tumbuh di negeri Samba. Warna propolis ini cenderung hijau gelap (Green Propolis) dan mempunyai persentase Flavonoid serta Artepillin-C yang tertinggi." }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Mengatasi infeksi luka luar (dioles)." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Menyembuhkan radang amandel, tenggorokan, flu berat." }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Mengobati masalah kulit akibat bakteri dan jamur." }]
                }
              ]
            }
          ]
        },
        {
          "type": "blockquote",
          "content": [
            {
              "type": "paragraph",
              "content": [{ "type": "text", "text": "\"Setetes Propolis setiap pagi, menunjang seribu aktivitas bugar sepanjang hari.\"" }]
            }
          ]
        }
      ]
    }
  }
];

async function seedData() {
  console.log('🌱 Planting 5 new dummy posts to Supabase...');
  
  let successCount = 0;
  
  for (const post of dummyPosts) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Prefer': 'return=representation,resolution=ignore-duplicates' // handle duplicate slug
      },
      body: JSON.stringify(post),
    });
    
    if (res.ok) {
      console.log(`✅ Success: ${post.title}`);
      successCount++;
    } else {
      const err = await res.text();
      console.log(`❌ Failed: ${post.title} -> ${err}`);
    }
  }
  
  console.log(`✨ Successfully migrated ${successCount} articles to database!`);
}

seedData();
