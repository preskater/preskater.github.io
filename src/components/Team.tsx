import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Lead Architect',
      bio: 'Full-stack developer with 10+ years of experience in enterprise software development and team leadership.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      skills: ['System Architecture', 'Team Leadership', 'Strategic Planning']
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Frontend Developer',
      bio: 'UI/UX specialist passionate about creating intuitive user experiences with modern web technologies.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      skills: ['React/Vue.js', 'UI/UX Design', 'Performance Optimization']
    },
    {
      name: 'Michael Johnson',
      role: 'Backend Engineer',
      bio: 'Backend specialist focused on scalable architectures, database optimization, and API development.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      skills: ['Node.js/Python', 'Database Design', 'Cloud Infrastructure']
    },
    {
      name: 'Emily Davis',
      role: 'DevOps Engineer',
      bio: 'Cloud infrastructure expert specializing in CI/CD pipelines, containerization, and system reliability.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      skills: ['AWS/Azure', 'Docker/Kubernetes', 'Automation']
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      bio: 'Cross-platform mobile development expert with a focus on performance and user experience.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      skills: ['React Native', 'iOS/Android', 'Mobile UI/UX']
    },
    {
      name: 'Lisa Thompson',
      role: 'Project Manager',
      bio: 'Agile project management specialist ensuring timely delivery and seamless client communication.',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      skills: ['Agile/Scrum', 'Client Relations', 'Quality Assurance']
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            {t('team.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('team.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {[Linkedin, Twitter, Github].map((Icon, iconIndex) => (
                  <button
                    key={iconIndex}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-teal-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '25+', label: t('team.stats.teamMembers') },
              { number: '8+', label: t('team.stats.avgExperience') },
              { number: '15+', label: t('team.stats.technologies') },
              { number: '100%', label: t('team.stats.remote') }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('team.joinTeam.title')}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            {t('team.joinTeam.subtitle')}
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            {t('team.joinTeam.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;