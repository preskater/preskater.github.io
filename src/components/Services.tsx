import React from 'react';
import { Code, Smartphone, Cloud, Database, Cog, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {

  const { t } = useTranslation();
  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      features: t('services.webDev.features', { returnObjects: true })
    },
    {
      icon: Smartphone,
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
      features: t('services.mobileDev.features', { returnObjects: true })
    },
    {
      icon: Cloud,
      title: t('services.cloudInfra.title'),
      description: t('services.cloudInfra.description'),
      features: t('services.cloudInfra.features', { returnObjects: true })
    },
    {
      icon: Database,
      title: t('services.dataSolutions.title'),
      description: t('services.dataSolutions.description'),
      features: t('services.dataSolutions.features', { returnObjects: true })
    },
    {
      icon: Cog,
      title: t('services.apiDev.title'),
      description: t('services.apiDev.description'),
      features: t('services.apiDev.features', { returnObjects: true })
    },
    {
      icon: BarChart3,
      title: t('services.digitalTransform.title'),
      description: t('services.digitalTransform.description'),
      features: t('services.digitalTransform.features', { returnObjects: true })
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            {t('services.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-teal-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto text-lg">
              {t('services.cta.subtitle')}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-teal-700 px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label={t('services.cta.button')}
            >
              {t('services.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;