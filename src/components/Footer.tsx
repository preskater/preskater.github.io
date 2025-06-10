import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://www.twitter.com' },
    { name: 'GitHub', icon: Github, url: 'https://www.github.com/preskater' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
              <img src="/logo.svg" alt="Logo" className="w-6 h-6 lg:w-14 lg:h-14 text-white " />
              </div>
              <span className="font-bold text-2xl">preskater</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {links.map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-colors"
                  onClick={() => window.open(Icon.url, '_blank')}
                >
                  <Icon.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
              {(t('footer.services.items', { returnObjects: true }) as Array<string>)
              .map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
              {(t('footer.company.items', { returnObjects: true }) as Array<{ section: string, text: string }>)
              .map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-300 hover:text-teal-400 transition-colors cursor-pointer"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">{t('footer.contactInfo.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{t('footer.contactInfo.email.value')}</p>
                  <p className="text-gray-400 text-sm">{t('footer.contactInfo.email.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{t('footer.contactInfo.phone.value')}</p>
                  <p className="text-gray-400 text-sm">{t('footer.contactInfo.phone.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{t('footer.contactInfo.location.value')}</p>
                  <p className="text-gray-400 text-sm">{t('footer.contactInfo.location.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold text-lg text-white mb-2">{t('footer.newsletter.title')}</h4>
              <p className="text-gray-300">{t('footer.newsletter.description')}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all font-medium">
                {t('footer.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              © {year} {t('footer.bottom.copyright')}
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                {t('footer.bottom.privacy')}
              </button>
              <button className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                {t('footer.bottom.terms')}
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-gray-400 hover:text-teal-400 text-sm transition-colors group"
              >
                <span>{t('footer.bottom.backToTop')}</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;