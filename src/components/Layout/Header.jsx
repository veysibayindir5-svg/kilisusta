import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Anasayfa' },
    { to: '/kategoriler', label: 'Kategoriler' },
    { to: '/mahalleler', label: 'Mahalleler' },
    { to: '/usta-ol', label: 'Usta Ol' },
    { to: '/blog', label: 'Blog' },
    { to: '/iletisim', label: 'İletişim' },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isMenuOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050b14]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <span>🔧</span>
            <span>
              <span className="text-white font-normal">Kilis</span>
              <span className="text-cyan-400 font-bold">Usta</span>
            </span>
          </Link>

          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-white ${
                  isActive(link.to) ? 'text-cyan-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.nav
              className="fixed top-0 left-0 h-full w-[85%] max-w-xs bg-[#050b14] z-50 p-4 flex flex-col gap-4"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
            >
              <button
                className="text-white text-2xl self-end"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg ${
                    isActive(link.to)
                      ? 'text-cyan-400'
                      : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
