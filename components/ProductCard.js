import { useMarketplace } from './MarketplaceContext';

export default function ProductCard({ product }) {
  const { marketplace } = useMarketplace();

  const link = marketplace === 'shopee' ? product.shopeeLink : product.tokopediaLink;
  const btnColor = marketplace === 'shopee' ? 'bg-shopee' : 'bg-tokopedia';
  const btnLabel = marketplace === 'shopee' ? 'Beli di Shopee' : 'Beli di Tokopedia';

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden
                 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                 animate-fadeInUp"
    >
      <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-3 font-bold text-gray-900 dark:text-white">{product.price}</div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`mt-4 text-center text-white font-semibold py-2 rounded-lg ${btnColor} transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95`}
        >
          {btnLabel}
        </a>
      </div>
    </div>
  );
}
