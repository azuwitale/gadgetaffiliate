import '../styles/globals.css';
import { MarketplaceProvider } from '../components/MarketplaceContext';
import { ThemeProvider } from '../components/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MarketplaceProvider>
        <Component {...pageProps} />
      </MarketplaceProvider>
    </ThemeProvider>
  );
}
