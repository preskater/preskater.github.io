import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg backdrop-blur-sm text-white/90 transition-colors border ${isScrolled ? "border-gray-700 bg-gray-50 hover:bg-gray-100" : "border-white/20 bg-white/10 hover:bg-white/20"}`}
      title={i18n.language === 'en' ? 'Switch to English' : 'Passer au Français'}
    >
      <Globe className={`w-4 h-4 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`} />
      <span className={`text-sm font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;