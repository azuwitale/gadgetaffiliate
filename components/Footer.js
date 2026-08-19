export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} GadgetPilih. Sebagian link di website ini adalah link affiliate.
          
        </p>
      </div>
    </footer>
  );
}
