const fs = require('fs');

const content = fs.readFileSync('katalog.md', 'utf-8');
const lines = content.split('\n');

const products = [];
let currentProduct = null;

for (let line of lines) {
  line = line.trim();
  if (!line) continue;
  
  if (line.match(/^\d+\.\s/)) {
    if (currentProduct) {
      products.push(currentProduct);
    }
    const nameMatch = line.match(/^\d+\.\s+(.*)/);
    currentProduct = {
      id: nameMatch[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: nameMatch[1],
      sku: '',
      price: '',
      category: '',
      description: [],
      specification: {},
    };
  } else if (currentProduct) {
    if (line.startsWith('SKU / Kode Produk:')) {
      currentProduct.sku = line.replace('SKU / Kode Produk:', '').trim();
    } else if (line.startsWith('Harga:')) {
      currentProduct.price = line.replace('Harga:', '').trim();
    } else if (line.startsWith('Kategori:')) {
      currentProduct.category = line.replace('Kategori:', '').trim();
    } else if (line.startsWith('Nama Produk:')) {
      // currentProduct.name = line.replace('Nama Produk:', '').trim();
    } else if (line.startsWith('Isi / Berat:')) {
      currentProduct.specification.weight = line.replace('Isi / Berat:', '').trim();
    } else if (line.startsWith('Kandungan:')) {
      currentProduct.specification.ingredients = line.replace('Kandungan:', '').trim();
    } else if (line.startsWith('Aturan Minum / Pakai:') || line.startsWith('Aturan Pakai:')) {
      currentProduct.specification.usage = line.replace(/Aturan (Minum \/ )?Pakai:/, '').trim();
    } else if (line.startsWith('Produsen:')) {
      currentProduct.specification.producer = line.replace('Produsen:', '').trim();
    } else if (line.startsWith('Legalitas:')) {
      currentProduct.specification.legal = line.replace('Legalitas:', '').trim();
    } else if (
      !line.startsWith('Metadata Produk:') && 
      !line.startsWith('Deskripsi') && 
      !line.startsWith('Spesifikasi Produk:') && 
      !line.startsWith('Bahan Tambahan:') && 
      !line.startsWith('Kandungan Utama:') &&
      !line.startsWith('DATA KATALOG') &&
      !line.startsWith('(Khasiat sama dengan')
    ) {
      currentProduct.description.push(line);
    }
  }
}
if (currentProduct) products.push(currentProduct);

fs.writeFileSync('src/lib/data/products.ts', `export type Product = {
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

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`);

console.log('Done generating ' + products.length + ' products');
