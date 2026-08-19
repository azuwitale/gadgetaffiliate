import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // urutan prioritas: pilihan manual user (localStorage) -> preferensi sistem HP/laptop -> default light
    const saved = window.localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }

    // kalau user ganti setting dark mode di HP/OS-nya secara langsung, ikutin otomatis
    // (hanya kalau dia belum pernah pilih manual di website ini)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!window.localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  function applyTheme(value) {
    setTheme(value);
    document.documentElement.classList.toggle('dark', value === 'dark');
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    window.localStorage.setItem('theme', next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
