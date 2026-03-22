'use client';

import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/siteConfig';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold text-primary">
          {siteConfig.name}
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.map((item) => (
            <Link 
              key={item.id} 
              href={item.path} 
              className="text-sm font-medium hover:text-cta transition-colors"
            >
              {t(`nav.${item.id}`)}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Globe className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleLanguage} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <Globe className="w-5 h-5 text-slate-600" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 space-y-4 shadow-xl">
          {siteConfig.navigation.map((item) => (
            <Link 
              key={item.id} 
              href={item.path} 
              className="block text-lg font-medium hover:text-cta transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t(`nav.${item.id}`)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
