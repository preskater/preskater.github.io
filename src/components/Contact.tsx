import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Forklift, Ban } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const isFormDown = true;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: t('contact.info.email.details'),
      description: t('contact.info.email.description')
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: t('contact.info.phone.details'),
      description: t('contact.info.phone.description')
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      details: t('contact.info.location.details'),
      description: t('contact.info.location.description')
    },
    {
      icon: Clock,
      title: t('contact.info.response.title'),
      details: t('contact.info.response.details'),
      description: t('contact.info.response.description')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            {t('contact.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">{t('contact.faq.title')}</h4>
                <div className="space-y-3 text-sm">
                  {
                    t('contact.faq.items', { returnObjects: true }).map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.success.title')}</h3>
                  <p className="text-gray-600">
                    {t('contact.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.placeholders.name')}
                        disabled={isFormDown}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} {t('contact.form.required')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder= {t('contact.form.placeholders.email')}
                        disabled={isFormDown}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder={t('contact.form.placeholders.company')}
                        disabled={isFormDown}
                      />
                    </div>
                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.project')} {t('contact.form.required')}
                      </label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        disabled={isFormDown}
                      >
                        <option value="">{t('contact.form.projectTypes.select')}</option>
                        <option value="web-app">{t('contact.form.projectTypes.webApp')}</option>
                        <option value="mobile-app">{t('contact.form.projectTypes.mobileApp')}</option>
                        <option value="enterprise">{t('contact.form.projectTypes.enterprise')}</option>
                        <option value="ecommerce">{t('contact.form.projectTypes.ecommerce')}</option>
                        <option value="api">{t('contact.form.projectTypes.api')}</option>
                        <option value="consultation">{t('contact.form.projectTypes.consultation')}</option>
                        <option value="other">{t('contact.form.projectTypes.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        disabled={isFormDown}
                    >
                      <option value="">{t('contact.form.budgetRanges.select')}</option>
                      <option value="not-sure">{t('contact.form.budgetRanges.notSure')}</option>
                      <option value="under-2k">{t('contact.form.budgetRanges.under2k')}</option>
                      <option value="2k-5k">{t('contact.form.budgetRanges.2k5k')}</option>
                      <option value="5k-10k">{t('contact.form.budgetRanges.5k10k')}</option>
                      <option value="10k-20k">{t('contact.form.budgetRanges.10k20k')}</option>
                      <option value="over-20k">{t('contact.form.budgetRanges.over20k')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} {t('contact.form.required')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                      placeholder={t('contact.form.placeholders.message')}
                      disabled={isFormDown}
                    ></textarea>
                  </div>

                  {isFormDown ? <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all font-semibold text-lg shadow-lg transform flex items-center justify-center space-x-2"
                    disabled={isFormDown}
                  >
                    <Ban className="w-10 h-10" />
                    <span>{t('contact.form.sendDisabled')}</span>
                    <Ban className="w-10 h-10" />
                  </button> : 
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-8 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('contact.form.send')}</span>
                  </button> }
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;