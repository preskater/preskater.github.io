import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'services', label: t('nav.services') },
    { key: 'about', label: t('nav.about') },
    { key: 'portfolio', label: t('nav.portfolio') },
    { key: 'team', label: t('nav.team') },
    { key: 'contact', label: t('nav.contact') }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center mr-3">
              <img src="/logo2.svg" alt="Logo" className="w-6 h-6 lg:w-14 lg:h-14 text-white " />
            </div>
            <span className={`font-bold text-xl lg:text-2xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              preskater
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`font-medium transition-colors hover:text-teal-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <span className="font-medium">{t('nav.getStarted')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-600 text-sm">Language / Langue</span>
                  <LanguageToggle />
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all flex items-center justify-center space-x-2"
                >
                  <span className="font-medium">{t('nav.getStarted')}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;