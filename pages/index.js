import Link from 'next/link';
import Layout from '../components/Layout';
import products from '../data/products.json';
import posts from '../data/posts.json';

export default function Home() {
  // ambil daftar kategori unik dari data produk
  const categories = [...new Map(products.map((p) => [p.category, p])).values()];
  const latestPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <Layout>
      <section className="text-center py-10 md:py-12 animate-fadeInUp">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Rekomendasi Gadget & Aksesoris Kerja
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Review jujur, bandingkan harga Shopee vs Tokopedia, dan pilih yang paling cocok buat kebutuhan kamu.
        </p>
      </section>

      <section>
        <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-white">Kategori</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.category}
              href={`/kategori/${cat.category}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6
                         text-center font-semibold text-gray-800 dark:text-gray-200 animate-fadeInUp
                         transition-all duration-200 hover:shadow-md hover:border-shopee hover:-translate-y-0.5"
            >
              {cat.categoryLabel}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 md:mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Artikel Terbaru</h2>
          <Link href="/blog" className="text-sm text-shopee font-semibold hover:underline">
            Lihat semua
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {latestPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ animationDelay: `${i * 60}ms` }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 block
                         animate-fadeInUp transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-3">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
