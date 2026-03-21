import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Shield, Users, Briefcase, Mail, Phone, Linkedin, MapPin, ArrowRight, FileText, ExternalLink, Activity, Zap, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Vision: React.FC = () => {
  const focusAreas = [
    { title: 'Athlete Advocacy', icon: Users, desc: 'Protecting the interests of those who give their lives to the game.' },
    { title: 'Sports Law', icon: Scale, desc: 'Navigating the complex legal landscape of modern athletics.' },
    { title: 'Contract Strategy', icon: FileText, desc: 'Precision in negotiation and clarity in representation agreements.' },
    { title: 'NIL & Branding', icon: Shield, desc: 'Building sustainable value at the intersection of sports and business.' }
  ];

  return (
    <section id="vision" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Trajectory</span>
              <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic leading-none pr-2">
                The Next <br />
                <span className="text-gradient">Chapter</span>
              </h2>
            </div>
            
            <p className="text-xl text-brand-white font-light leading-relaxed">
              Duquesne University Law School (Fall 2026) is the natural continuation of a career path 
              focused on advocacy, negotiation, and the business of representation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {focusAreas.map((area) => (
                <div key={area.title} className="space-y-2 group">
                  <div className="flex items-center space-x-3">
                    <area.icon className="w-4 h-4 text-brand-accent group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold uppercase tracking-tight">{area.title}</h4>
                  </div>
                  <p className="text-xs text-brand-white/40 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl blur-2xl"></div>
            <div className="relative glass p-12 rounded-2xl border-brand-accent/20 text-center space-y-8">
              <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto border border-brand-accent/20">
                <Scale className="w-10 h-10 text-brand-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-black uppercase tracking-tight leading-none">Duquesne Law</h3>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest">Juris Doctor Candidate</p>
              </div>
              <p className="text-brand-white/60 text-sm leading-relaxed italic">
                "Positioning for a career at the intersection of sports law, athlete representation, and strategic advocacy."
              </p>
              <div className="pt-8 flex justify-center">
                <div className="px-6 py-3 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-brand-white/40">
                  Fall 2026 Enrollment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Writing: React.FC = () => {
  const [activeArticle, setActiveArticle] = React.useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const articles = [
    { 
      title: 'The Culture of Winning: Why Coaching Beats Drafting', 
      source: 'Steeler Nation', 
      date: '2025',
      insight: 'Analyzing the 2025 paradigm shift where coaching hires like Vrabel, Johnson, Schottenheimer, and Coen proved that cultural transformation and offensive creativity drive wins faster than draft picks. The success of former #1 overall picks Caleb Williams and Trevor Lawrence under these new regimes highlights the critical role of leadership in maximizing elite talent.',
      annotation: 'Strategic Leadership: Evidence of how elite playcalling and player motivation revitalize franchises and maximize QB potential.',
      fullText: `The 2025 NFL season has officially marked the end of the 'Draft and Pray' era. For decades, NFL front offices operated under the assumption that a high draft pick was the only panacea for a losing culture. However, the recent success of franchises that prioritized elite coaching over raw draft capital has shattered this myth.\n\nThe paradigm shift is led by a new wave of strategic minds: Mike Vrabel, Ben Johnson, Brian Schottenheimer, and Liam Coen. These coaches didn't just inherit talent; they manufactured it through cultural transformation and offensive creativity.\n\nLook no further than the resurgence of Caleb Williams and Trevor Lawrence. Both were former #1 overall picks who were widely labeled as 'busts' or 'underperformers' under previous regimes. Yet, under the guidance of this new coaching class, they have transformed into the elite playmakers they were projected to be. This highlights a critical truth in modern sports: leadership is the ultimate force multiplier.\n\nIn the high-stakes world of professional football, a draft pick is a lottery ticket, but a world-class coach is an investment. The teams that understand this are the ones hoisting trophies while others are still 'rebuilding' with their next top-five pick.`
    },
    { 
      title: 'The Integrity Crisis: Betting’s Existential Threat', 
      source: 'Steeler Nation', 
      date: '2025',
      insight: 'Examining the existential threat posed by betting scandals like those involving Jontay Porter and Terry Rozier. As sports betting revenue grows by 25% annually, the \'impregnable wall\' between gambling and sports is eroding, threatening the core integrity of competitive athletics and the faith of fans.',
      annotation: 'Legal & Ethics: A critical look at the tension between revenue growth and the \'law of unintended consequences\' in the sports-betting juggernaut.',
      fullText: `Sports betting was supposed to be the golden goose for professional leagues—a multi-billion dollar revenue stream that would deepen fan engagement and modernize the viewing experience. Instead, it has become an existential threat to the very integrity of the games themselves.\n\nThe recent scandals involving Jontay Porter and Terry Rozier are not outliers; they are the inevitable result of a system that has allowed the 'impregnable wall' between gambling and sports to erode. As sports betting revenue grows at a staggering 25% annually, the financial incentives for athletes, officials, and staff to manipulate outcomes have reached a fever pitch.\n\nThe 'law of unintended consequences' is in full effect. By normalizing betting within the broadcast and the stadium, leagues have created a environment where the line between a fan and a gambler is non-existent. This threatens the core faith of the audience. If the public begins to believe that the outcomes are scripted or influenced by betting lines, the entire sports ecosystem collapses.\n\nLeagues must act now to rebuild the wall. This means stricter regulations, absolute transparency, and a decoupling of betting advertisements from the live game experience. Integrity is the only product sports truly sells; once it's gone, no amount of betting revenue can buy it back.`
    },
    { 
      title: 'The Evolution of the Modern Quarterback', 
      source: 'Steeler Nation', 
      date: '2024',
      insight: 'Analyzing how the shift toward mobile, dual-threat QBs impacts contract structures and injury risk mitigation in modern representation.',
      annotation: 'Strategic Analysis: Focuses on the intersection of performance metrics and long-term financial security for elite athletes.',
      fullText: `The modern NFL quarterback is no longer just a passer; they are a dual-threat weapon that requires a completely different approach to representation and contract structuring. As the league shifts toward mobile QBs like Lamar Jackson and Jalen Hurts, the traditional 'pocket passer' contract is becoming obsolete.\n\nFrom a representation standpoint, this shift introduces new variables: increased injury risk, shorter career longevity, and the need for creative incentive structures that reward rushing production without compromising long-term security. We are seeing a rise in 'guaranteed-heavy' deals that protect athletes against the physical toll of the dual-threat style.\n\nFurthermore, the marketing of these athletes has evolved. A mobile QB is often a more dynamic brand asset, allowing for partnerships that span beyond traditional sports categories. The agent of the future must be as adept at analyzing rushing metrics as they are at negotiating signing bonuses.`
    },
    { 
      title: 'NIL and the Future of Collegiate Athletics', 
      source: 'Steeler Nation', 
      date: '2024',
      insight: 'A deep dive into the regulatory landscape of NIL and how athletes can build sustainable brands while maintaining NCAA compliance.',
      annotation: 'Legal Perspective: Examines the emerging case law and state-level legislation governing athlete compensation.',
      fullText: `The Name, Image, and Likeness (NIL) era has fundamentally transformed collegiate athletics, turning student-athletes into professional entrepreneurs overnight. However, this 'Wild West' landscape is fraught with legal pitfalls and regulatory uncertainty.\n\nNavigating NIL requires a multi-faceted approach. Athletes must not only secure lucrative deals but also ensure they remain in compliance with a patchwork of state laws and ever-evolving NCAA guidelines. The role of the advisor has shifted from mere recruiter to a combination of legal counsel, brand manager, and financial planner.\n\nThe future of NIL likely involves a federal standard to provide consistency across the country. Until then, the most successful athletes will be those who build sustainable, long-term brands rather than chasing short-term cash grabs. Integrity and compliance are the foundations of a successful NIL portfolio.`
    },
    { 
      title: 'Strategic Preparation in High-Stakes Moments', 
      source: 'Steeler Nation', 
      date: '2024',
      insight: 'Translating the discipline of the film room into the precision of the boardroom during high-stakes negotiations.',
      annotation: 'Leadership Lens: Connects the mental preparation of a QB to the tactical execution of a sports agent.',
      fullText: `A quarterback's preparation for a Saturday afternoon game is remarkably similar to an agent's preparation for a high-stakes contract negotiation. Both require hours of 'film study'—analyzing the opponent's tendencies, identifying leverage points, and scripting the opening moves.\n\nIn the boardroom, the 'film' consists of market data, salary cap projections, and the other party's negotiation history. Just as a QB must recognize a blitz and adjust the protection, an agent must recognize a low-ball offer and pivot the strategy in real-time. Composure under pressure is the common thread.\n\nThe discipline of preparation is what separates the elite from the average. When the stakes are highest, you don't rise to the occasion; you sink to the level of your training. Whether it's a two-minute drill or a final offer deadline, outcomes are decided long before the clock starts.`
    },
    { 
      title: 'The Intersection of Media and Representation', 
      source: 'Steeler Nation', 
      date: '2024',
      insight: 'How narrative control and media fluency are becoming the most valuable assets in an athlete’s professional portfolio.',
      annotation: 'Branding Insight: Discusses the role of the agent as a strategic communications consultant.',
      fullText: `In the digital age, an athlete's narrative is as important as their performance on the field. Media fluency is no longer an optional skill; it is a core requirement for any professional athlete seeking to maximize their value.\n\nRepresentation today involves active narrative management. This means controlling the story before it controls you. Whether it's navigating a crisis or launching a new venture, the agent acts as a strategic communications consultant, ensuring the athlete's voice is heard clearly and authentically.\n\nSocial media has democratized the ability to build a brand, but it has also increased the risks. One misstep can derail years of brand building. The intersection of media and representation is where the most significant value is created in the modern sports industry. A well-managed brand is an insurance policy against the inevitable decline of athletic performance.`
    }
  ];

  return (
    <section id="writing" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">Game Tape</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic pr-8">
              Writing & <br />
              <span className="text-gradient">Insights</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-white/40 text-sm leading-relaxed">
            Published work at Steeler Nation, reframed through the lens of a future sports lawyer. 
            Every piece is a strategic analysis of the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article List */}
          <div className="lg:col-span-5 space-y-4">
            {articles.map((article, index) => (
              <button 
                key={article.title}
                onClick={() => setActiveArticle(index)}
                className={cn(
                  "w-full text-left glass p-6 rounded-xl group transition-all duration-500 relative overflow-hidden",
                  activeArticle === index ? "border-brand-accent/40 bg-white/10" : "hover:border-white/20"
                )}
              >
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-brand-accent">
                      <FileText className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{article.source}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-white/20">{article.date}</span>
                  </div>
                  <h3 className={cn(
                    "text-lg font-display font-bold uppercase tracking-tight transition-colors",
                    activeArticle === index ? "text-brand-accent" : "text-brand-white group-hover:text-brand-accent"
                  )}>
                    {article.title}
                  </h3>
                </div>
              </button>
            ))}
            
            <a 
              href="https://www.steelernation.com/author/Braeden" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 p-6 rounded-xl border border-dashed border-white/10 hover:border-brand-accent/40 text-[10px] font-bold uppercase tracking-widest text-brand-white/40 hover:text-brand-white transition-all"
            >
              <span>View Full Author Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Film Room / Breakdown */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeArticle !== null ? (
                <motion.div
                  key={activeArticle}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden min-h-[400px]"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <Activity className="w-32 h-32" />
                  </div>
                  
                  <div className="space-y-8 relative z-10">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-brand-accent">
                        <Zap className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Film Room Breakdown</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight leading-none italic pr-8">
                        {articles[activeArticle].title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-brand-white/40">The Insight</p>
                        <p className="text-lg text-brand-white font-light leading-relaxed">
                          {articles[activeArticle].insight}
                        </p>
                      </div>

                      <div className="p-6 bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl italic">
                        <p className="text-sm text-brand-accent leading-relaxed">
                          {articles[activeArticle].annotation}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 flex">
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center space-x-3 text-brand-white/60 hover:text-brand-accent transition-colors uppercase tracking-widest text-[10px] font-bold"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="glass p-12 rounded-2xl h-full flex flex-col items-center justify-center text-center space-y-6 border-dashed">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-brand-white/20" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-white/40">Select an article to enter the</p>
                    <p className="text-2xl font-display font-black uppercase tracking-tight italic">Film Room</p>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Article Modal */}
        <AnimatePresence>
          {isModalOpen && activeArticle !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-brand-black/90 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[80vh] glass rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3 text-brand-accent">
                      <FileText className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{articles[activeArticle].source} | {articles[activeArticle].date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight italic pr-8">
                      {articles[activeArticle].title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                  <div className="max-w-2xl mx-auto space-y-8">
                    <div className="p-6 bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-xl italic">
                      <p className="text-sm text-brand-accent leading-relaxed">
                        {articles[activeArticle].annotation}
                      </p>
                    </div>
                    
                    <div className="space-y-6 text-brand-white/80 text-lg font-light leading-relaxed whitespace-pre-line">
                      {articles[activeArticle].fullText}
                    </div>
                  </div>
                </div>

                <div className="p-8 border-t border-white/10 bg-white/5 flex justify-center">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="bg-brand-white text-brand-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* What I See That Others Miss */}
        <div className="mt-32 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Edge</span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic pr-8">
              What I See That <br />
              <span className="text-gradient">Others Miss</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'The Hidden Leverage', 
                desc: 'In NIL negotiations, the most valuable asset isn’t the follower count—it’s the alignment of values between the athlete’s brand and the corporate partner’s long-term objectives.' 
              },
              { 
                title: 'Contractual Nuance', 
                desc: 'A contract isn’t just a legal document; it’s a strategic roadmap. I look for the clauses that protect an athlete’s post-career transition as much as their current earnings.' 
              },
              { 
                title: 'The QB Lens', 
                desc: 'Reading a defense is identical to reading a negotiation table. You have to anticipate the blitz, recognize the coverage, and know exactly when to take the shot.' 
              }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-2xl space-y-4 group hover:border-brand-accent/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all">
                  <span className="font-display font-bold">0{i+1}</span>
                </div>
                <h4 className="text-xl font-display font-bold uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-brand-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass p-12 md:p-20 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <Scale className="w-64 h-64" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em]">The Connection</span>
                <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic leading-none pr-8">
                  Let's <br />
                  <span className="text-gradient">Connect</span>
                </h2>
              </div>
              
              <p className="text-xl text-brand-white font-light leading-relaxed">
                Ready to bring focus, discipline, and real-world sports representation experience 
                 to new professional opportunities.
              </p>

              <div className="space-y-6 pt-8">
                <a href="mailto:Braedenboyles1@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-white/40">Email</p>
                    <p className="text-lg font-display font-bold uppercase tracking-tight">Braedenboyles1@gmail.com</p>
                  </div>
                </a>
                <a href="tel:9495008929" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-white/40">Phone</p>
                    <p className="text-lg font-display font-bold uppercase tracking-tight">(949) 500-8929</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/Braeden-Boyles" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-500">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-white/40">LinkedIn</p>
                    <p className="text-lg font-display font-bold uppercase tracking-tight">linkedin.com/in/Braeden-Boyles</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass p-8 rounded-2xl space-y-6">
                <div className="flex items-center space-x-3 text-brand-accent">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">Huntington Beach, California</span>
                </div>
                <div className="h-[1px] w-full bg-white/10"></div>
                <p className="text-sm text-brand-white/60 leading-relaxed italic">
                  "As a quarterback, outcomes turned on the unseen film study and game planning. 
                  In law and representation, outcomes turn on the same discipline of preparation."
                </p>
              </div>

              <div className="text-center pt-8">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-white/20">
                  © 2026 Braeden Boyles. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
