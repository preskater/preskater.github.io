import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { number: '150+', label: t("about.stats.projects"), icon: CheckCircle },
    { number: '50+', label: t("about.stats.clients"), icon: Users },
    { number: '5+', label: t("about.stats.experience"), icon: Award },
    { number: '99%', label: t("about.stats.satisfaction"), icon: Clock }
  ];

  const values = [
    {
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description")
    },
    {
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description")
    },
    {
      title: t("about.values.partnership.title"),
      description: t("about.values.partnership.description")
    },
    {
      title: t("about.values.scalability.title"),
      description: t("about.values.scalability.description")
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            {t('about.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('about.expertise.title')}
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t('about.expertise.description1')}
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t('about.expertise.description2')}
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {t('about.expertise.points', { returnObjects: true })
              .map((point, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;