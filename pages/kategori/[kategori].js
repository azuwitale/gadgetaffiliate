import Layout from '../../components/Layout';
import MarketplaceToggle from '../../components/MarketplaceToggle';
import ProductCard from '../../components/ProductCard';
import products from '../../data/products.json';

export default function KategoriPage({ kategori, categoryLabel, items }) {
  return (
    <Layout title={`${categoryLabel} Terbaik - GadgetPilih`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{categoryLabel}</h1>
        <MarketplaceToggle />
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Belum ada produk di kategori ini.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const categories = [...new Set(products.map((p) => p.category))];
  return {
    paths: categories.map((kategori) => ({ params: { kategori } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const items = products.filter((p) => p.category === params.kategori);
  const categoryLabel = items[0]?.categoryLabel || params.kategori;

  return {
    props: {
      kategori: params.kategori,
      categoryLabel,
      items,
    },
  };
}
