import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Newspaper, Award, Link as LinkIcon, Trophy } from 'lucide-react';

const pressItems = [
  {
    title: 'Newport Beach Fire Chief Jeff Boyles and son have battles to win',
    publication: 'LA Times (Daily Pilot)',
    date: 'April 8, 2021',
    url: 'https://www.latimes.com/socal/daily-pilot/sports/story/2021-04-08/newport-beach-fire-chief-jeff-boyles-and-son-have-battles-to-win',
    icon: Newspaper,
    type: 'Feature Story'
  },
  {
    title: 'Edison beats Corona del Mar in 6-OT football thriller',
    publication: 'OC Register',
    date: 'April 9, 2021',
    url: 'https://www.ocregister.com/2021/04/09/edison-beats-corona-del-mar-in-6-ot-football-thriller/',
    icon: Award,
    type: 'Game Coverage'
  },
  {
    title: 'High School Football Player of the Week: Edison\'s Braeden Boyles',
    publication: 'LA Times (Daily Pilot)',
    date: 'November 14, 2019',
    url: 'https://www.latimes.com/socal/daily-pilot/sports/story/2019-11-14/high-school-football-player-of-the-week-edisons-braeden-boyles-sticks-to-winning-game-plan',
    icon: Trophy,
    type: 'Award'
  }
];

const profileLinks = [
  {
    title: 'LinkedIn Profile',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/braeden-boyles/',
    icon: LinkIcon
  },
  {
    title: 'Benedictine College Roster',
    platform: 'Raven Athletics',
    url: 'https://ravenathletics.com/sports/football/roster/braeden-boyles/9218',
    icon: LinkIcon
  },
  {
    title: 'Author Profile',
    platform: 'Steeler Nation',
    url: 'https://www.steelernation.com/author/Braeden',
    icon: LinkIcon
  },
  {
    title: 'Athlete Profile',
    platform: 'MaxPreps',
    url: 'https://www.maxpreps.com/ca/huntington-beach/edison-chargers/athletes/braeden-boyles/?careerid=elb40frg1q9cc',
    icon: LinkIcon
  },
  {
    title: 'High School Roster',
    platform: 'MaxPreps',
    url: 'https://www.maxpreps.com/ca/huntington-beach/edison-chargers/football/19-20/roster/',
    icon: LinkIcon
  }
];

export const Press: React.FC = () => {
  return (
    <section id="press" className="py-24 bg-brand-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-8">
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Media & Profiles</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic leading-none">
              In The <br />
              <span className="text-gradient">Press</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-white/40 text-sm leading-relaxed">
            A collection of notable features, game coverage, and official profiles documenting the journey from the field to the boardroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Press Articles */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-brand-white/80 mb-8 border-b border-white/10 pb-4">Notable Coverage</h3>
            {pressItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass p-6 rounded-2xl border border-white/5 hover:border-brand-accent/40 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">{item.publication}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-white/40">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-bold leading-snug group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-brand-white/40 text-xs">
                      <item.icon className="w-3 h-3" />
                      <span>{item.type}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-brand-white/40 group-hover:text-brand-accent transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Official Profiles */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-brand-white/80 mb-8 border-b border-white/10 pb-4">Official Profiles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileLinks.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between glass p-5 rounded-xl border border-white/5 hover:border-brand-accent/40 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">{profile.platform}</p>
                    <p className="text-sm font-bold text-brand-white/80 group-hover:text-brand-white transition-colors">{profile.title}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-brand-white/20 group-hover:text-brand-accent transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
