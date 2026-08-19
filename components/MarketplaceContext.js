import { createContext, useContext, useEffect, useState } from 'react';

const MarketplaceContext = createContext({
  marketplace: 'shopee',
  setMarketplace: () => {},
});

export function MarketplaceProvider({ children }) {
  const [marketplace, setMarketplace] = useState('shopee');

  // simpan pilihan user di memori sesi browser (bukan localStorage, biar simpel & konsisten antar reload)
  useEffect(() => {
    const saved = window.sessionStorage?.getItem('marketplace');
    if (saved === 'shopee' || saved === 'tokopedia') {
      setMarketplace(saved);
    }
  }, []);

  const updateMarketplace = (value) => {
    setMarketplace(value);
    window.sessionStorage?.setItem('marketplace', value);
  };

  return (
    <MarketplaceContext.Provider value={{ marketplace, setMarketplace: updateMarketplace }}>
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  return useContext(MarketplaceContext);
}
