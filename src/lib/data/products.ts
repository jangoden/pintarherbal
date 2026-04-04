export type Product = {
  id: string;
  name: string;
  sku: string;
  price: string;
  category: string;
  description: string[];
  specification: {
    weight?: string;
    ingredients?: string;
    usage?: string;
    producer?: string;
    legal?: string;
  };
};

export const products: Product[] = [
  {
    "id": "albucare",
    "name": "ALBUCARE",
    "sku": "ALB",
    "price": "Rp 199.000",
    "category": "Suplemen & Herbal / Ekstrak Ikan Gabus",
    "description": [
      "Mengobati penyakit typus.",
      "Membantu membersihkan darah kotor.",
      "Mengobati penyakit jantung koroner.",
      "Baik untuk pertumbuhan tulang dan gigi.",
      "Mengobati penyakit hepatitis B, C & Kronis.",
      "Membantu memperbaiki gizi buruk pada anak.",
      "Membantu mengobati berbagai penyakit ginjal.",
      "Membantu mencegah datangnya kanker & tumor.",
      "Membantu mempercepat penyembuhan luka.",
      "Membersihkan darah, lemak darah, dan kolesterol tinggi."
    ],
    "specification": {
      "weight": "100 Kapsul",
      "ingredients": "Ekstrak Ikan Gabus (Kalori, Protein, Lemak, Zat Besi, Kalsium, Fosfor, Vit A, Vit B1, Air, BDD).",
      "usage": "2 x 2 Kapsul Sehari",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "BPOM TR 233063621 & Halal MUI"
    }
  },
  {
    "id": "bio-squalene",
    "name": "BIO SQUALENE",
    "sku": "SQU",
    "price": "Rp 123.000",
    "category": "Suplemen & Herbal / Minyak Hati Ikan Hiu",
    "description": [
      "Meningkatkan kinerja organ dalam.",
      "Mencegah dan mengobati penyakit stroke.",
      "Mempercepat penyembuhan luka.",
      "Menghambat pertumbuhan sel kanker.",
      "Mencegah dan mengobati diabetes.",
      "Sebagai anti inflamasi (peradangan).",
      "Sebagai sumber antioksidan.",
      "Memelihara kesehatan jantung.",
      "Mencegah dan membunuh virus dalam tubuh.",
      "Mengeluarkan racun dari dalam tubuh.",
      "Mampu menstabilkan kadar gula darah dalam tubuh."
    ],
    "specification": {
      "weight": "30 Kapsul (Softgel)",
      "ingredients": "100% Minyak Hati Ikan Hiu.",
      "usage": "1 x 1 Softgel Sehari",
      "producer": "PT GOLDEN CORAL CORPORINDO",
      "legal": "POM SD 212334131 & Halal MUI"
    }
  },
  {
    "id": "garlic",
    "name": "GARLIC",
    "sku": "GRC",
    "price": "Rp 163.000",
    "category": "Suplemen & Herbal / Ekstrak Bawang Hitam",
    "description": [
      "Sangat baik dalam memperbaiki sel-sel hati.",
      "Menurunkan kadar kolesterol.",
      "Menurunkan tekanan darah tinggi.",
      "Menurunkan resiko penyakit kanker & tumor.",
      "Menormalkan kadar gula darah di dalam tubuh.",
      "Memiliki efek anti penuaan yang kuat.",
      "Meningkatkan metabolisme zat besi.",
      "Mengatasi penyakit stroke serta serangan jantung.",
      "Mencegah & mengatasi masalah kesehatan paru-paru.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "100 Kapsul",
      "ingredients": "100% Ekstrak Bawang Hitam Asli.",
      "usage": "2 x 2 Kapsul Sehari",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 233069131 & Halal MUI"
    }
  },
  {
    "id": "sendifit",
    "name": "SENDIFIT",
    "sku": "IFI",
    "price": "Rp 129.500",
    "category": "Suplemen & Herbal / Kesehatan Sendi & Tulang",
    "description": [
      "Membantu menyembuhkan nyeri sendi, asam urat & rematik.",
      "Mengempiskan bengkak akibat asam urat.",
      "Mencegah pengapuran sendi.",
      "Mencegah pengeroposan tulang.",
      "Sebagai nutrisi sendi.",
      "Mempercepat penyembuhan cedera pada sendi.",
      "Mengatasi radang sendi.",
      "Mencegah terjadinya penyakit sendi.",
      "Memberi nutrisi optimal pada sendi.",
      "Dan masih banyak lagi khasiat lainnya."
    ],
    "specification": {
      "weight": "50 Kapsul",
      "ingredients": "Daun Salam, Sambiloto, Jahe Merah, Kayu Manis, Biji Buah Pinang.",
      "usage": "2 x 2 Kapsul Sehari (setelah makan)",
      "producer": "CV MITRA HERBAL NUSANTARA",
      "legal": "POM TR 233084841 & Halal MUI"
    }
  },
  {
    "id": "kapsul-gamat-emas",
    "name": "KAPSUL GAMAT EMAS",
    "sku": "KGE",
    "price": "Rp 149.000",
    "category": "Suplemen & Herbal / Ekstrak Teripang Emas",
    "description": [
      "Membantu mengobati asam lambung, maag & gerd.",
      "Membantu menurunkan kadar kolesterol tinggi.",
      "Meningkatkan kesehatan jantung.",
      "Membantu mengobati stroke.",
      "Membantu mengobati hepatitis.",
      "Membantu mengobati infeksi pada saluran reproduksi.",
      "Membantu mengobati hernia.",
      "Membantu perawatan bagi penderita sinusitis.",
      "Membantu dan mengobati tipes.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "50 Kapsul",
      "ingredients": "100% Ekstrak Gamat Emas Asli.",
      "usage": "3 x 2 Kapsul Sehari (setelah makan)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 233061561 & Halal MUI"
    }
  },
  {
    "id": "kapsul-oilfit",
    "name": "KAPSUL OILFIT",
    "sku": "OIL",
    "price": "Rp 125.000",
    "category": "Suplemen & Herbal / Ekstrak Buah Merah",
    "description": [
      "Membantu menjaga kesehatan jantung.",
      "Membantu menurunkan darah tinggi.",
      "Membantu menjaga kesehatan mata.",
      "Menurunkan Kadar Kolesterol Tinggi.",
      "Memiliki sifat antivirus dan antimikroba.",
      "Membantu mengobati kista.",
      "Membantu mengobati saraf kejepit.",
      "Membantu mengobati benjolan / lipoma.",
      "Membantu mengobati kanker / tumor.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "50 Kapsul",
      "ingredients": "100% Ekstrak Buah Merah Papua Asli.",
      "usage": "2 x 2 Kapsul Sehari (setelah makan)",
      "producer": "CV MITRA HERBAL NUSANTARA",
      "legal": "POM TR 233086041 & Halal MUI"
    }
  },
  {
    "id": "propolis-sm-brazil",
    "name": "PROPOLIS SM BRAZIL",
    "sku": "PSM",
    "price": "Rp 106.000",
    "category": "Suplemen & Herbal / Propolis Cair",
    "description": [
      "Meningkatkan kekebalan tubuh.",
      "Membantu menurunkan kadar kolesterol.",
      "Membantu mengontrol kadar gula darah.",
      "Mencegah & mengatasi bentuk peradangan (infeksi).",
      "Membantu melancarkan sistem pencernaan.",
      "Mempercepat penyembuhan luka luar.",
      "Memperbaiki sel-sel jaringan tubuh yang rusak.",
      "Membantu melegakan pernapasan.",
      "Membantu mengeluarkan racun dalam tubuh.",
      "Membantu mengatasi penyakit TBC."
    ],
    "specification": {
      "weight": "6 ml / botol (1 box isi 7 botol)",
      "ingredients": "100% Propolis Brazil Asli Kualitas Premium.",
      "usage": "3-5 tetes setiap hari (Pagi & Sore)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 246023521 & Halal MUI"
    }
  },
  {
    "id": "proskin",
    "name": "PROSKIN",
    "sku": "SKIN",
    "price": "Rp 129.000",
    "category": "Suplemen & Herbal / Kesehatan Kulit",
    "description": [
      "Mengobati berbagai penyakit kulit.",
      "Mengobati alergi / gatal-hatal.",
      "Mempercepat penyembuhan luka.",
      "Membantu menghilangkan jerawat.",
      "Mengobati ruam pada kulit.",
      "Merawat bagian terdalam jaringan kulit.",
      "Mengobati eksim (dermatitis).",
      "Menghilangkan panas & terbakar pada kulit.",
      "Mengobati panu, kurap, cacar air.",
      "Mengobati kudis, melasma, psoriasis.",
      "Bermanfaat buat kecantikan kulit."
    ],
    "specification": {
      "weight": "60 Kapsul",
      "ingredients": "100% Ekstrak Daun Binahong.",
      "usage": "2 x 2 Kapsul Sehari (setelah makan)",
      "producer": "CV ARDHI JAYA",
      "legal": "POM TR 213310581 & Halal MUI"
    }
  },
  {
    "id": "keloreena-50-kapsul",
    "name": "KELOREENA 50 KAPSUL",
    "sku": "KLRN",
    "price": "Rp 97.500",
    "category": "Suplemen & Herbal / Ekstrak Daun Kelor",
    "description": [
      "Membantu menjaga berat badan.",
      "Membantu menjaga kesehatan mata.",
      "Sebagai anti-penuaan.",
      "Membantu menyehatkan sistem pencerna.",
      "Mengurangi peradangan.",
      "Membantu menyehatkan tulang.",
      "Membantu mengobati asma.",
      "Mencegah gangguan ginjal.",
      "Membantu mengobati masalah edema.",
      "Meningkatkan libido.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "50 Kapsul",
      "ingredients": "100% Ekstrak Daun Kelor Asli.",
      "usage": "2 x 2 Kapsul Sehari (setelah makan)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 243009491 & Halal MUI"
    }
  },
  {
    "id": "keloreena-100-kapsul",
    "name": "KELOREENA 100 KAPSUL",
    "sku": "KLR",
    "price": "Rp 172.000",
    "category": "Suplemen & Herbal / Ekstrak Daun Kelor",
    "description": [
      "Membantu menjaga berat badan.",
      "Membantu menjaga kesehatan mata.",
      "Sebagai anti-penuaan.",
      "Membantu menyehatkan sistem pencerna.",
      "Mengurangi peradangan.",
      "Membantu menyehatkan tulang.",
      "Membantu mengobati asma.",
      "Mencegah gangguan ginjal.",
      "Membantu mengobati masalah edema.",
      "Meningkatkan libido.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "100 Kapsul",
      "ingredients": "100% Ekstrak Daun Kelor Asli.",
      "usage": "2 x 2 Kapsul Sehari (setelah makan)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 243009491 & Halal MUI"
    }
  },
  {
    "id": "sehat-wanita-50-kapsul",
    "name": "SEHAT WANITA 50 KAPSUL",
    "sku": "WNT",
    "price": "Rp 129.500",
    "category": "Suplemen & Herbal / Kesehatan Kewanitaan",
    "description": [
      "Mencegah dan menyembuhkan kista endometrios, miom, kista ovarium, kista rahim, dll.",
      "Mengatasi nyeri haid, haid tidak teratur dan menyembuhkan keputihan.",
      "Efektif bagi wanita yang ingin mempunyai anak (dalam program hamil).",
      "Mencegah kemandulan.",
      "Mencegah menopause dini dan meningkatkan hormon.",
      "Membantu mengobati radang saluran kemih.",
      "Membantu mengatasi keputihan.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "50 Kapsul",
      "ingredients": "Ekstrak Daun Sirih, Ekstrak Kayu Manis, Ekstrak Temu Mangga, Ekstrak Temulawak.",
      "usage": "2 x 4 Kapsul Sehari (setelah makan)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 243016761 & Halal MUI"
    }
  },
  {
    "id": "sehat-wanita-100-kapsul",
    "name": "SEHAT WANITA 100 KAPSUL",
    "sku": "WBW",
    "price": "Rp 199.000",
    "category": "Suplemen & Herbal / Kesehatan Kewanitaan",
    "description": [
      "Mencegah dan menyembuhkan kista endometrios, miom, kista ovarium, kista rahim, dll.",
      "Mengatasi nyeri haid, haid tidak teratur dan menyembuhkan keputihan.",
      "Efektif bagi wanita yang ingin mempunyai anak (dalam program hamil).",
      "Mencegah kemandulan.",
      "Mencegah menopause dini dan meningkatkan hormon.",
      "Membantu mengobati radang saluran kemih.",
      "Membantu mengatasi keputihan.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "100 Kapsul",
      "ingredients": "Ekstrak Daun Sirih, Ekstrak Kayu Manis, Ekstrak Temu Mangga, Ekstrak Temulawak.",
      "usage": "2 x 4 Kapsul Sehari (setelah makan)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 243016761 & Halal MUI"
    }
  },
  {
    "id": "hexabumin",
    "name": "HEXABUMIN",
    "sku": "HEX",
    "price": "Rp 95.000",
    "category": "Suplemen & Herbal / Nutrisi Anak",
    "description": [
      "Meningkatkan nafsu makan.",
      "Meningkatkan daya tahan tubuh.",
      "Menambah berat badan anak.",
      "Nutrisi tambahan untuk anak.",
      "Menstimulasi pertumbuhan otak dan konsentrasi anak.",
      "Pengobatan panas dingin anak, demam, flu dan batuk.",
      "Dan masih banyak lagi khasiat lainnya."
    ],
    "specification": {
      "weight": "130 ml",
      "ingredients": "100% Madu Asli & Ekstrak Ikan Gabus.",
      "usage": "Diminum Pagi & Sore (2 Sendok Makan)",
      "producer": "CV JOGJA NATURAL HERBAL",
      "legal": "POM TR 183615831 & Halal MUI"
    }
  },
  {
    "id": "kurmaqu",
    "name": "KURMAQU",
    "sku": "AQU",
    "price": "Rp 67.000",
    "category": "Suplemen & Herbal / Sari Kurma & Madu",
    "description": [
      "Melancarkan peredaran darah.",
      "Meningkatkan fungsi ginjal.",
      "Meningkatkan kadar metabolisme.",
      "Mengatasi gangguan pernapasan.",
      "Menurunkan kadar kolesterol.",
      "Membantu mengobati penyakit jantung.",
      "Menghambat sel kanker dan tumor.",
      "Memperbaiki cidera pada tubuh.",
      "Meredakan gangguan sakit asam lambung.",
      "Meningkatkan sistem kekebalan tubuh.",
      "Dan masih banyak lagi khasiat lainnya."
    ],
    "specification": {
      "weight": "350 gr",
      "ingredients": "Sari Kurma & Madu Murni.",
      "usage": "2 x 2 Sendok Makan Sehari",
      "producer": "CV. PRIMA DAIRY MUBAROK",
      "legal": "BPOM RI MD 866612001100 & Halal MUI"
    }
  },
  {
    "id": "madu-herbal-lambung-sehat",
    "name": "MADU HERBAL LAMBUNG SEHAT",
    "sku": "MHL",
    "price": "Rp 135.000",
    "category": "Suplemen & Herbal / Kesehatan Pencernaan & Lambung",
    "description": [
      "Melancarkan peredaran darah.",
      "Meningkatkan fungsi ginjal.",
      "Meningkatkan kadar metabolisme.",
      "Mengatasi gangguan pernapasan.",
      "Menurunkan kadar kolesterol.",
      "Membantu mengobati penyakit jantung.",
      "Menghambat sel kanker dan tumor.",
      "Memperbaiki cidera pada tubuh.",
      "Meredakan gangguan sakit maag/asam lambung.",
      "Meningkatkan sistem kekebalan tubuh.",
      "Dan masih banyak lagi khasiat lainnya."
    ],
    "specification": {
      "weight": "250 gram",
      "ingredients": "Madu, ekstrak kurma, Biji gandum, Propolis Habbatusauda / Jintan Hitam, Kunyit, Temulawak, Kayu Manis.",
      "usage": "3 x 1 Sendok Makan Sehari",
      "producer": "CV HANIF HERBAL",
      "legal": "POM TR 213611811 & Halal MUI"
    }
  },
  {
    "id": "minyak-sapu-jagat",
    "name": "MINYAK SAPU JAGAT",
    "sku": "SPJ",
    "price": "Rp 137.000",
    "category": "Minyak Esensial / Minyak Gosok Herbal",
    "description": [
      "Menjaga sistem kekebalan tubuh.",
      "Meredakan nyeri otot, pegal linu.",
      "Menghilangkan radang sendi, nyeri sendi.",
      "Mengatasi gejala masuk angin.",
      "Menghangatkan tubuh.",
      "Sebagai minyak terapi.",
      "Mengatasi gatal-gatal ditubuh.",
      "Meredakan tulang keseleo, rematik atau nyeri tulang.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "110 gr",
      "usage": "Oleskan ke bagian tubuh yang diperlukan",
      "producer": "CV HERBAL INDO UTAMA",
      "legal": "POM QD 153613221 & Halal MUI"
    }
  },
  {
    "id": "qnc-jelly-gamat",
    "name": "QNC JELLY GAMAT",
    "sku": "QNC",
    "price": "Rp 199.000",
    "category": "Suplemen & Herbal / Ekstrak Teripang Emas Cair",
    "description": [
      "Melancarkan peredaran darah.",
      "Meningkatkan fungsi ginjal.",
      "Meningkatkan kadar metabolisme.",
      "Mengatasi gangguan pernapasan.",
      "Menurunkan kadar kolesterol.",
      "Membantu mengobati penyakit jantung.",
      "Menghambat sel kanker dan tumor.",
      "Memperbaiki cidera pada tubuh.",
      "Meredakan gangguan sakit asam lambung.",
      "Meningkatkan sistem kekebalan tubuh.",
      "Dan masih banyak lagi khasiat lainnya."
    ],
    "specification": {
      "weight": "300 ml",
      "ingredients": "Colagen, Protein, Mukopolisakarida, Gamapeptida, Cell Growth Factor, Saponin, Omega 3,6,9, Mineral, Glucasaminoglycans (GAGS), Lektin, Asam Amino dan Antiseptik Ilmiah.",
      "usage": "2 x 3 Sendok Sehari",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 236052391 & Halal MUI"
    }
  },
  {
    "id": "susu-etaku",
    "name": "SUSU ETAKU",
    "sku": "KAM",
    "price": "Rp 80.000",
    "category": "Suplemen & Nutrisi / Susu Kambing Herbal",
    "description": [
      "Mencegah kesehatan tulang dan gigi.",
      "Mencegah penyakit osteoporosis.",
      "Membantu mengobati anemia.",
      "Mencegah penyakit diabetes.",
      "Baik untuk sistem pencernaan.",
      "Meningkatkan produksi ASI.",
      "Baik untuk menjaga kesehatan ibu hamil.",
      "Meningkatkan kekebalan tubuh.",
      "Menurunkan kolesterol tinggi.",
      "Sebagai kalsium peninggi badan.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "200 gram",
      "ingredients": "Susu kambing 50%, Albumin 20%, Kedelai 29%, Pegagan 1%.",
      "usage": "2x Perhari (8 sendok takar)",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 242016791 & Halal MUI"
    }
  },
  {
    "id": "radimax",
    "name": "RADIMAX",
    "sku": "RAD",
    "price": "Rp 150.000",
    "category": "Suplemen & Herbal / Stamina Pria",
    "description": [
      "Meningkatkan libido.",
      "Mengatasi ejakulasi dini.",
      "Meningkatkan gairah seksual.",
      "Mengatasi disfungsi seksual.",
      "Meningkatkan hormon testosteron.",
      "Meningkatkan stamina dan vitalitas pria.",
      "Mengatasi disfungsi ereksi / lemah syahwat.",
      "Mengatasi kesuburan & meningkatkan kesuburan.",
      "Meningkatkan kualitas sperma.",
      "Dan masih banyak khasiat lainnya."
    ],
    "specification": {
      "weight": "10 Sachet (25 gr / sachet)",
      "ingredients": "Goat Milk Powder, Biji Kacang Kedelai, Ekstrak Akar Pasak Bumi, Ekstrak Jahe Merah.",
      "usage": "2 x 1 Sachet Sehari",
      "producer": "CV. MITRA HERBAL NUSANTARA",
      "legal": "POM TR 242020021 & Halal MUI"
    }
  }
];
