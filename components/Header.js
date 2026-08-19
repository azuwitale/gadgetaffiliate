import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
          Gadget<span className="text-shopee">Pilih</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-5">
          <nav className="flex gap-4 md:gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Link href="/" className="hover:text-shopee transition-colors">Beranda</Link>
            <Link href="/blog" className="hover:text-shopee transition-colors">Blog</Link>
            <Link href="/kategori/keyboard" className="hidden sm:inline hover:text-shopee transition-colors">Kategori</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
