import Link from 'next/link';
import Layout from '../../components/Layout';
import posts from '../../data/posts.json';

export default function BlogPost({ post }) {
  return (
    <Layout title={`${post.title} - GadgetPilih`}>
      <article className="max-w-2xl mx-auto animate-fadeInUp">
        <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1">{post.title}</h1>

        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-10 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center transition-colors duration-300">
          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Lihat rekomendasi produk {post.category} pilihan kami
          </p>
          <Link
            href={`/kategori/${post.category}`}
            className="inline-block bg-shopee text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
          >
            Lihat Produk
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}
