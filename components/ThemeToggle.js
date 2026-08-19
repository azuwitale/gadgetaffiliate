import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Ganti tema terang/gelap"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700
                 bg-white dark:bg-gray-800 hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      {isDark ? (
        // icon matahari
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm8 4a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM6 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm11.66 5.66a1 1 0 0 1-1.41 0l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41ZM7.46 7.46a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 1 1 6.75 5.34l.71.71a1 1 0 0 1 0 1.41Zm10.2-1.41a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0ZM6.75 18.66a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71ZM12 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" />
        </svg>
      ) : (
        // icon bulan
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  );
}
