import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: t('team.members.clement.name'),
      role: t('team.members.clement.role'),
      bio: t('team.members.clement.bio'),
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFYOTZC6mMQqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711000282872?e=1755129600&v=beta&t=Z5Jx0mfQ_i7CQuE7via_k-5ITgflX9W_CyES_AkTEnA',
      skills: t('team.members.clement.skills', { returnObjects: true }) as string[],
      socials: [
        {
          url: 'https://github.com/clement-antoine-xavier',
          icon: Github
        },
        {
          url: 'https://www.linkedin.com/in/xavierclementantoine/',
          icon: Linkedin
        },
      ]
    },
    {
      name: t('team.members.hugo.name'),
      role: t('team.members.hugo.role'),
      bio: t('team.members.hugo.bio'),
      image: 'https://avatars.githubusercontent.com/u/114651846?v=4',
      skills: t('team.members.hugo.skills', { returnObjects: true }) as string[],
      socials: [
        {
          url: 'https://github.com/CarolinHugo',
          icon: Github
        },
        {
          url: 'https://www.linkedin.com/in/hugo-carolin-627628256/',
          icon: Linkedin
        },
      ]
    },
    {
      name: t('team.members.julien.name'),
      role: t('team.members.julien.role'),
      bio: t('team.members.julien.bio'),
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQG0KPKF_k8kyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695709998447?e=1755129600&v=beta&t=VROH4PrF3v5F5PQoTFzr-6wtr9JEmkSDdZpXsGX_udo',
      skills: t('team.members.julien.skills', { returnObjects: true }) as string[],
      socials: [
        {
          url: 'https://github.com/ju-lit-hein',
          icon: Github
        },
        {
          url: 'https://www.linkedin.com/in/julienferdinand/',
          icon: Linkedin
        },
      ]
    },
    {
      name: t('team.members.leo.name'),
      role: t('team.members.leo.role'),
      bio: t('team.members.leo.bio'),
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHXM0z5BRfFpA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689669494179?e=1755129600&v=beta&t=9r9ShqCJb_6jfQB0-k3uLbxjAZvFdKCvIqc2LtJC-00',
      skills: t('team.members.leo.skills', { returnObjects: true }) as string[],
      socials: [
        {
          url: 'https://github.com/ElPepitaux',
          icon: Github
        },
        {
          url: 'https://www.linkedin.com/in/leosautron/',
          icon: Linkedin
        },
      ]
    },
    {
      name: t('team.members.luan.name'),
      role: t('team.members.luan.role'),
      bio: t('team.members.luan.bio'),
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEkGNto9y0ZaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699973764611?e=1755129600&v=beta&t=nJTKnDH3IMJrSo1ggnfYMywq0O-uf0Be8XDpScDyuCE',
      skills: t('team.members.luan.skills', { returnObjects: true }) as string[],
      socials: [
        {
          url: 'https://github.com/ZerA-One',
          icon: Github
        },
        {
          url: 'https://www.linkedin.com/in/luan-sautron/',
          icon: Linkedin
        },
      ]
    },
    {
      name: t('team.members.nathan.name'),
      role: t('team.members.nathan.role'),
      bio: t('team.members.nathan.bio'),
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHaM1H4lUSV1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668523204687?e=1755129600&v=beta&t=RzH1zFtDV3dExpfrfZ-tY-2tqaup8rvoCQ04sKCPIvw',
      skills: t('team.members.nathan.skills', { returnObjects: true }) as string[],
      socials: [
        {
          url: 'https://github.com/MAILLOTNathan',
          icon: Github
        },
        {
          url: 'https://www.linkedin.com/in/nathan-maillot/',
          icon: Linkedin
        },
      ]
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
                {member.socials.map((social, iconIndex) => (
                  <button
                    key={iconIndex}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-colors"
                    onClick={() => window.open(social.url, '_blank')}
                    aria-label={`Open ${social.icon.name} profile`}
                  >
                    <social.icon className="w-5 h-5" />
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
              { number: '6', label: t('team.stats.teamMembers') },
              { number: '4+', label: t('team.stats.avgExperience') },
              { number: '20+', label: t('team.stats.technologies') },
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
        {/* <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('team.joinTeam.title')}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            {t('team.joinTeam.subtitle')}
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105" aria-label={t('team.joinTeam.button')}>
            {t('team.joinTeam.button')}
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Team;