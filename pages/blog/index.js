import Link from 'next/link';
import Layout from '../../components/Layout';
import posts from '../../data/posts.json';

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout title="Blog - GadgetPilih">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {sorted.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ animationDelay: `${i * 60}ms` }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 block
                       animate-fadeInUp transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mt-1">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
