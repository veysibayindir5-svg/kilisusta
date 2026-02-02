import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-icon">🔧</span>
            <span><span style={{ fontWeight: 'normal', color: '#ffffff' }}>Kilis</span><span style={{ color: '#00d4ff', fontWeight: 'bold' }}>Usta</span></span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç/kapa"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
