import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = 'GadgetPilih - Rekomendasi Gadget & Aksesoris' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Review dan rekomendasi gadget & aksesoris kerja, bandingkan harga Shopee dan Tokopedia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#030712" media="(prefers-color-scheme: dark)" />
      </Head>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6 md:py-8 min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
}
