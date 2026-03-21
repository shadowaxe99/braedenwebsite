import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Search, FileText, Users, Globe, BarChart3, Shield, Scale, Trophy, Heart, Zap, Activity, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const workExperience = [
  {
    company: 'Steinberg Sports & Entertainment',
    role: 'Director of Special Projects',
    location: 'Newport Beach, California',
    period: 'September 2025 – Current',
    promoted: 'Promoted to Director December 2025',
    icon: Briefcase,
    highlights: [
      'Research and compile comprehensive interview preparation materials for client negotiations',
      'Create negotiation decks for players represented by Mr. Steinberg',
      'Review contracts and Standard Representation Agreements',
      'Helped host 39th annual Super Bowl party and agent academy',
      'Assisted in coordinating book tour logistics and network TV pitch presentations',
      'Manage all social media platforms for the company and Mr. Steinberg’s personal accounts'
    ]
  },
  {
    company: 'Show Me Sportz',
    role: 'Summer Intern',
    location: 'Los Angeles, California',
    period: 'June 2025 – August 2025',
    icon: Search,
    highlights: [
      'Participated in weekly one-on-one strategy meetings with the CEO',
      'Built and maintained the company website throughout the internship',
      'Helped a newly certified NFLPA agent build his brand',
      'Scouted high school and college football players to identify potential NIL/draft prospects'
    ]
  },
  {
    company: 'Steeler Nation',
    role: 'Staff Writer',
    location: 'Pittsburgh, Pennsylvania (Remote)',
    period: 'April 2024 – September 2024',
    icon: FileText,
    highlights: [
      'Wrote over 50 articles published on the company website and social platforms',
      'Communicated and collaborated daily with staff writers and editors',
      'Implemented various SEO tactics to improve visibility and traffic'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Evidence</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic pr-8">
              Professional <br />
              <span className="text-gradient">Exposure</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-white/40 text-sm leading-relaxed">
            Hands-on experience at the intersection of sports representation, branding, and media. 
            Direct exposure to the mechanics of athlete advocacy.
          </p>
        </div>

        <div className="space-y-12">
          {workExperience.map((exp, index) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-8 md:p-12 rounded-2xl group hover:border-brand-accent/40 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-500">
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{exp.company}</h3>
                      <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-brand-white/40 text-xs uppercase tracking-widest font-bold">
                      <Globe className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-brand-white/40 text-xs uppercase tracking-widest font-bold">
                      <Briefcase className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.promoted && (
                    <div className="inline-block px-4 py-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest italic">
                      {exp.promoted}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex space-x-4 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent/40 group-hover/item:bg-brand-accent transition-colors shrink-0"></div>
                        <p className="text-brand-white/60 text-sm leading-relaxed group-hover/item:text-brand-white transition-colors">
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LensGrid: React.FC = () => {
  const lenses = [
    { title: 'Athlete Perspective', icon: Heart, desc: 'Understanding the locker room culture and the physical/emotional demands of the game.' },
    { title: 'Contract Awareness', icon: FileText, desc: 'Reviewing SRAs and standard contracts with an eye for detail and strategic alignment.' },
    { title: 'Negotiation Support', icon: BarChart3, desc: 'Compiling data-driven materials and decks to strengthen client positioning.' },
    { title: 'Media Fluency', icon: Globe, desc: 'Leveraging SEO and strategic communication to build and protect athlete brands.' },
    { title: 'Leadership', icon: Shield, desc: 'The discipline of a quarterback applied to professional advocacy and team management.' },
    { title: 'Resilience', icon: Trophy, desc: 'The ability to adapt, recover, and pivot with focus after high-stakes setbacks.' }
  ];

  return (
    <section className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-20">
          <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Value</span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic pr-8">
            Braeden's <br />
            <span className="text-gradient">Lens</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenses.map((lens, index) => (
            <motion.div 
              key={lens.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-brand-accent/40 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <lens.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight">{lens.title}</h3>
                <p className="text-sm text-brand-white/40 leading-relaxed">{lens.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const QBMindModule: React.FC = () => {
  const [activeScenario, setActiveScenario] = React.useState(0);

  const scenarios = [
    {
      title: 'The Blitz',
      qbAction: 'Recognize the extra rusher, adjust the protection, and find the hot route.',
      agentAction: 'Identify the leverage point in a negotiation, pivot the strategy, and secure the client’s interests.',
      icon: Zap
    },
    {
      title: 'The Two-Minute Drill',
      qbAction: 'Manage the clock, maintain composure, and execute the scripted plays with precision.',
      agentAction: 'Navigate high-pressure deadlines, maintain professional poise, and deliver on strategic objectives.',
      icon: Activity
    },
    {
      title: 'The Film Room',
      qbAction: 'Analyzing defensive tendencies and coverage patterns long before the snap.',
      agentAction: 'Researching legal precedents and market data long before the negotiation begins.',
      icon: Search
    }
  ];

  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass p-12 md:p-20 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <Trophy className="w-64 h-64" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Mental Game</span>
                <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic leading-none pr-8">
                  Inside the <br />
                  <span className="text-gradient">QB Mind</span>
                </h2>
              </div>
              
              <p className="text-xl text-brand-white font-light leading-relaxed">
                The decision-making process of a quarterback is the ultimate training ground for 
                high-stakes representation and legal advocacy.
              </p>

              <div className="space-y-4">
                {scenarios.map((scenario, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScenario(index)}
                    className={cn(
                      "w-full text-left p-6 rounded-xl border transition-all duration-500 flex items-center justify-between group",
                      activeScenario === index ? "bg-white/5 border-brand-accent/40" : "bg-transparent border-white/5 hover:border-white/20"
                    )}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                        activeScenario === index ? "bg-brand-accent text-brand-black" : "bg-white/5 text-brand-white/40 group-hover:text-brand-white"
                      )}>
                        <scenario.icon className="w-5 h-5" />
                      </div>
                      <h4 className={cn(
                        "text-lg font-display font-bold uppercase tracking-tight",
                        activeScenario === index ? "text-brand-white" : "text-brand-white/60 group-hover:text-brand-white"
                      )}>
                        {scenario.title}
                      </h4>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-all",
                      activeScenario === index ? "text-brand-accent translate-x-0" : "text-brand-white/10 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    )} />
                  </button>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScenario}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  transition={{ duration: 0.5 }}
                  className="glass p-8 md:p-12 rounded-2xl space-y-8 w-full shadow-2xl border-brand-accent/20"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">On the Field</p>
                      <p className="text-lg text-brand-white font-light leading-relaxed italic">
                        "{scenarios[activeScenario].qbAction}"
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">In the Agency</p>
                      <p className="text-lg text-brand-white font-light leading-relaxed italic">
                        "{scenarios[activeScenario].agentAction}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
