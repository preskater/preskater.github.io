import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t('portfolio.projects.dashboard.title'),
      category: t('portfolio.projects.dashboard.category'),
      description: t('portfolio.projects.dashboard.description'),
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: t('portfolio.projects.dashboard.results', { returnObjects: true })
    },
    {
      title: t('portfolio.projects.ecommerce.title'),
      category: t('portfolio.projects.ecommerce.category'),
      description: t('portfolio.projects.ecommerce.description'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
      results: t('portfolio.projects.ecommerce.results', { returnObjects: true })
    },
    {
      title: t('portfolio.projects.restaurant.title'),
      category: t('portfolio.projects.restaurant.category'),
      description: t('portfolio.projects.restaurant.description'),
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React', 'Firebase', 'Stripe', 'Google Maps API'],
      results: t('portfolio.projects.restaurant.results', { returnObjects: true })
    },
    {
      title: t('portfolio.projects.fitness.title'),
      category: t('portfolio.projects.fitness.category'),
      description: t('portfolio.projects.fitness.description'),
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['React Native', 'SQLite', 'Chart.js', 'Push Notifications'],
      results: t('portfolio.projects.fitness.results', { returnObjects: true })
    },
    {
      title: t('portfolio.projects.crm.title'),
      category: t('portfolio.projects.crm.category'),
      description: t('portfolio.projects.crm.description'),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'Email Integration'],
      results: t('portfolio.projects.crm.results', { returnObjects: true })
    },
    {
      title: t('portfolio.projects.portfolio.title'),
      category: t('portfolio.projects.portfolio.category'),
      description: t('portfolio.projects.portfolio.description'),
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      technologies: ['HTML/CSS', 'JavaScript', 'Lightbox', 'Contact Forms'],
      results: t('portfolio.projects.portfolio.results', { returnObjects: true })
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            {t('portfolio.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors group">
                    <span>
                      {t('portfolio.viewCase')}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('portfolio.cta.title')}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            {t('portfolio.cta.subtitle')}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('portfolio.cta.button')}
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;