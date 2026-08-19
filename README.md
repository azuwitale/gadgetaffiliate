# GadgetPilih - Starter Website Affiliate

Website affiliate gadget/aksesoris kerja dengan toggle Shopee vs Tokopedia, dibangun pakai Next.js + Tailwind. Sudah dikonfigurasi buat static export supaya bisa deploy gratis ke Cloudflare Pages.

## Struktur Project

```
pages/
  index.js              -> Homepage
  blog/index.js          -> List semua artikel
  blog/[slug].js          -> Halaman detail artikel
  kategori/[kategori].js -> Halaman katalog produk per kategori (ada toggle Shopee/Tokopedia)
components/
  Header.js, Footer.js, Layout.js
  MarketplaceContext.js  -> Nyimpen pilihan marketplace user (shopee/tokopedia)
  MarketplaceToggle.js   -> Tombol toggle
  ProductCard.js          -> Kartu produk, link-nya otomatis ganti sesuai marketplace terpilih
data/
  products.json          -> Data produk kamu (nama, harga, gambar, link affiliate)
  posts.json             -> Data artikel blog kamu
```

## Cara Jalanin di Lokal

1. Install Node.js (versi 18 ke atas) kalau belum ada.
2. Buka folder ini di terminal, lalu:
   ```
   npm install
   npm run dev
   ```
3. Buka `http://localhost:3000` di browser.

## Cara Nambah/Edit Produk

Edit file `data/products.json`. Setiap produk formatnya:

```json
{
  "id": "id-unik-produk",
  "name": "Nama Produk",
  "category": "keyboard",           // slug kategori, dipakai buat URL /kategori/keyboard
  "categoryLabel": "Keyboard",       // nama kategori yang ditampilkan
  "price": "Rp 249.000",
  "image": "https://url-gambar-produk.jpg",
  "description": "Deskripsi singkat produk",
  "shopeeLink": "https://shope.ee/xxxxx",       // link affiliate Shopee kamu
  "tokopediaLink": "https://tokopedia.link/xxxxx" // link affiliate Tokopedia kamu
}
```

Kategori baru otomatis muncul di homepage dan bisa diakses lewat `/kategori/nama-kategori`, tidak perlu edit kode lain.

## Cara Nambah Artikel Blog

Edit file `data/posts.json`, format:

```json
{
  "slug": "url-artikel-kamu",
  "title": "Judul Artikel",
  "excerpt": "Ringkasan singkat buat ditampilkan di list blog",
  "category": "keyboard",   // dipakai buat tombol "Lihat Produk" di akhir artikel
  "date": "2026-08-20",
  "content": "Isi artikel di sini. Pakai \\n\\n buat ganti paragraf."
}
```

**PENTING:** file `content` di sini masih format teks polos. Kalau nanti artikel kamu makin banyak dan butuh format lebih kaya (heading, gambar inline, list), pertimbangkan migrasi ke Markdown files atau headless CMS gratis (misal Sanity.io atau Notion API) daripada terus nambah manual di satu file JSON besar.

## Dark Mode

Website ini otomatis ngikutin preferensi tema HP/laptop user (kalau HP-nya di-set dark mode, website ini juga otomatis gelap). User juga bisa toggle manual lewat ikon matahari/bulan di pojok kanan atas header, dan pilihannya akan diingat untuk kunjungan berikutnya.

Kalau mau ubah warna dark mode, cari class `dark:` di komponen-komponen (misal `dark:bg-gray-800`, `dark:text-white`) dan sesuaikan sesuai selera.

## Cara Deploy ke Cloudflare Pages (Gratis)

1. Push project ini ke repository GitHub kamu.
2. Buka [dash.cloudflare.com](https://dash.cloudflare.com) -> Workers & Pages -> Create -> Pages -> Connect to Git.
3. Pilih repo project ini.
4. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Klik Deploy. Setelah selesai, kamu dapat URL gratis `namaproject.pages.dev`.
6. Kalau sudah beli domain sendiri, tinggal connect di menu "Custom domains" di project Cloudflare Pages kamu.

## Checklist Sebelum Go-Live

- [ ] Ganti semua `shopeeLink` dan `tokopediaLink` di `data/products.json` dengan link affiliate asli kamu
- [ ] Ganti gambar placeholder dengan foto produk asli (upload ke `public/` atau pakai URL gambar dari marketplace)
- [ ] Cek disclosure affiliate di Footer sudah sesuai (wajib ada, ini soal transparansi ke pengunjung)
- [ ] Test toggle Shopee/Tokopedia jalan dengan benar di halaman kategori
- [ ] Submit sitemap ke Google Search Console setelah live (biar mulai keindex)

## Next Steps yang Bisa Ditambahin

- Sitemap.xml otomatis (pakai `next-sitemap`)
- Search/filter produk di halaman kategori
- Rating/review manual di tiap produk card
- Migrasi data produk dari JSON ke Google Sheets/Airtable biar gampang update tanpa buka kode
