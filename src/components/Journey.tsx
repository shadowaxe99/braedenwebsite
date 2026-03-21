import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Calendar, MapPin, GraduationCap, Award, Heart, Trophy, Shield, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

const timelineEvents = [
  {
    id: 'youth',
    title: 'The Fullerton Field',
    period: '2010',
    icon: Heart,
    description: 'A ten-year-old quarterback loaded onto a gurney in a neck brace. The silence was deafening, but the fear was not of pain—it was of being unable to play the game I loved.',
    details: 'After receiving positive results, my first question was whether my jersey could be stitched back up for next weekend. I returned to the field with a freshly sewn jersey that barely resembled my number eight, but with the same tenacity.'
  },
  {
    id: 'benedictine',
    title: 'Benedictine Quarterback',
    period: '2021 - 2025',
    icon: Trophy,
    description: 'Earned a full scholarship to play at Benedictine College. Leadership as a Raven Way captain and academic excellence on the President’s List.',
    details: 'Played through games with broken bones and a dislocated shoulder, embodying the gritty mentality required to lead a team at the collegiate level.'
  },
  {
    id: 'injury',
    title: 'The Turning Point',
    period: '2022 - 2023',
    icon: Shield,
    description: 'A severe back injury forced a confrontation with identity. Despair turned into discovery as I began to research the legal profession.',
    details: 'During recovery, my search history shifted from fantasy football to Harvard Law Review articles. I began to see the legal field as a new arena for the same leadership and preparation that once defined my Saturdays.'
  },
  {
    id: 'steinberg',
    title: 'Steinberg Sports',
    period: '2025 - Present',
    icon: Briefcase,
    description: 'Director of Special Projects at Steinberg Sports & Entertainment. Immersed in the mechanics of athlete representation and contract strategy.',
    details: 'Promoted to Director within months. Researching client negotiations, creating negotiation decks, and managing brand presence for one of the industry’s most legendary agencies.'
  },
  {
    id: 'duquesne',
    title: 'Duquesne Law',
    period: 'Fall 2026',
    icon: GraduationCap,
    description: 'The next chapter. Positioning for a career in sports law, athlete advocacy, and the business of representation.',
    details: 'Duquesne University Law School marks the natural continuation of a trajectory focused on advocacy, negotiation, and high-stakes professional representation.'
  }
];

export const Journey: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState(timelineEvents[0]);

  return (
    <section id="journey" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Narrative</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic pr-8">
              From Quarterback <br />
              <span className="text-gradient">To Advocate</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-white/40 text-sm leading-relaxed">
            Every Saturday turned on the unseen film study and game planning. In law and representation, 
            outcomes turn on the same discipline of preparation long before the negotiation begins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {timelineEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event)}
                className={cn(
                  "w-full text-left p-6 rounded-xl border transition-all duration-500 group relative overflow-hidden",
                  activeEvent.id === event.id 
                    ? "bg-white/5 border-brand-accent/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]" 
                    : "bg-transparent border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      activeEvent.id === event.id ? "bg-brand-accent text-brand-black" : "bg-white/5 text-brand-white/40 group-hover:text-brand-white"
                    )}>
                      <event.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-white/40 mb-1">{event.period}</p>
                      <h3 className={cn(
                        "text-lg font-display font-bold uppercase tracking-tight",
                        activeEvent.id === event.id ? "text-brand-white" : "text-brand-white/60 group-hover:text-brand-white"
                      )}>
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className={cn(
                    "w-5 h-5 transition-all",
                    activeEvent.id === event.id ? "text-brand-accent translate-x-0" : "text-brand-white/10 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </div>
                {activeEvent.id === event.id && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent pointer-events-none"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Event Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass p-8 md:p-12 rounded-2xl space-y-8 min-h-[400px] flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-brand-accent">
                    <activeEvent.icon className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{activeEvent.period}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight italic leading-none pr-8">
                    {activeEvent.title}
                  </h3>
                </div>
                
                <p className="text-xl text-brand-white font-light leading-relaxed">
                  {activeEvent.description}
                </p>
                
                <div className="pt-8 border-t border-white/10">
                  <p className="text-brand-white/60 leading-relaxed italic">
                    "{activeEvent.details}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Identity</span>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic pr-8">
                More Than <br />
                <span className="text-gradient">A Resume</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-brand-white/60 text-lg font-light leading-relaxed">
              <p>
                Braeden Boyles brings an unusually strong combination of firsthand athletic experience, 
                leadership under pressure, and agency-side operational knowledge. 
              </p>
              <p>
                He understands athletes from the inside while mastering the business and legal structures 
                that shape their careers. He speaks the language of the locker room, the boardroom, and the courtroom.
              </p>
              <p>
                Based in Huntington Beach, CA, Braeden is a Benedictine College graduate (Marketing, 2025) 
                and an incoming Duquesne University Law student (Fall 2026).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">Education</p>
                <p className="text-sm font-bold uppercase tracking-tight">Benedictine College</p>
                <p className="text-xs text-brand-white/40">B.A. Marketing, May 2025</p>
                <p className="text-xs text-brand-white/40">GPA: 3.30 | Dean's & President's List</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">Next Chapter</p>
                <p className="text-sm font-bold uppercase tracking-tight">Duquesne Law School</p>
                <p className="text-xs text-brand-white/40">Juris Doctor Candidate</p>
                <p className="text-xs text-brand-white/40">Fall 2026 Enrollment</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl blur-2xl"></div>
            <div className="relative glass p-4 rounded-2xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/braeden-qb-action/1000/1200" 
                alt="Braeden Boyles Action Shot" 
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-12 right-12 flex flex-col items-end space-y-2">
                <div className="bg-brand-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest">Quarterback #8</p>
                </div>
                <div className="bg-brand-accent/90 backdrop-blur-md px-6 py-3 rounded-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-black italic">The Preparation Era</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
