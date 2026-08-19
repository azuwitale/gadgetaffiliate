import { useMarketplace } from './MarketplaceContext';

export default function MarketplaceToggle() {
  const { marketplace, setMarketplace } = useMarketplace();

  return (
    <div className="inline-flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 shadow-sm">
      <button
        onClick={() => setMarketplace('shopee')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
          marketplace === 'shopee'
            ? 'bg-shopee text-white shadow-sm scale-105'
            : 'text-gray-500 dark:text-gray-400 hover:text-shopee'
        }`}
      >
        Shopee
      </button>
      <button
        onClick={() => setMarketplace('tokopedia')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
          marketplace === 'tokopedia'
            ? 'bg-tokopedia text-white shadow-sm scale-105'
            : 'text-gray-500 dark:text-gray-400 hover:text-tokopedia'
        }`}
      >
        Tokopedia
      </button>
    </div>
  );
}
