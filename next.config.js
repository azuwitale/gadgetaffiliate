/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // build jadi static HTML, cocok buat Cloudflare Pages / Netlify / GitHub Pages
  images: {
    unoptimized: true,    // wajib true kalau output 'export', karena Next Image Optimization butuh server
  },
  trailingSlash: true,    // biar URL rapi: /kategori/keyboard/ bukan /kategori/keyboard
};

module.exports = nextConfig;
