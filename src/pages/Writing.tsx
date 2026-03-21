import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { writing, workingNotes, tracking } from '../lib/data';
import Collapsible from '../components/Collapsible';
import { Book, BookOpen, Sun, Moon, Type } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Writing() {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [isReadMode, setIsReadMode] = useState(false);
  const [isExecutiveMode, setIsExecutiveMode] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'standard' | 'large'>('standard');
  
  const allArticles = [...writing, ...workingNotes, ...tracking.map(t => ({ ...t, title: t.topic }))];
  const article = allArticles.find(w => w.id === id);
  
  // Get all unique tags
  const allTags = Array.from(new Set(writing.flatMap(post => post.tags || [])));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id && isExecutiveMode) {
      setIsReadMode(true);
    } else if (!id) {
      setIsReadMode(false);
    }
  }, [id, isExecutiveMode]);

  const isLightMode = isReadMode || (isExecutiveMode && !id);

  const filteredWriting = activeTag 
    ? writing.filter(post => post.tags?.includes(activeTag))
    : writing;

  return (
    <main className={cn(
      "min-h-screen transition-colors duration-700",
      isLightMode ? "bg-[#fcfaf7] text-[#1a1a1a]" : "bg-bg text-text-primary"
    )}>
      <Navbar />
      
      <section className={cn(
        "pt-40 pb-24 px-6 mx-auto transition-all duration-700",
        (isReadMode || isExecutiveMode) ? "max-w-4xl" : "max-w-5xl"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {!id ? (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-20"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <h4 className={cn(
                      "text-[10px] font-mono uppercase tracking-[0.4em] mb-4 transition-colors",
                      isLightMode ? "text-[#C6A85B]" : "text-accent"
                    )}>Intellectual Capital</h4>
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">Writing</h1>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsExecutiveMode(!isExecutiveMode)}
                      className={cn(
                        "flex items-center gap-3 px-6 py-3 rounded-full border transition-all text-[10px] font-mono uppercase tracking-widest",
                        isExecutiveMode 
                          ? "bg-text-primary text-bg border-text-primary shadow-xl" 
                          : "bg-text-primary/5 text-text-primary border-border hover:border-accent"
                      )}
                    >
                      {isExecutiveMode ? <Sun size={12} /> : <Book size={12} />}
                      {isExecutiveMode ? 'Standard View' : 'Executive Mode'}
                    </button>
                  </div>
                </div>

                {/* Tags Filter */}
                {!isExecutiveMode && (
                  <div className="flex flex-wrap gap-3 border-b border-border pb-8">
                    <button
                      onClick={() => setActiveTag(null)}
                      className={cn(
                        "px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                        !activeTag 
                          ? "bg-accent text-bg" 
                          : "bg-text-primary/5 text-text-secondary hover:text-text-primary border border-text-primary/10"
                      )}
                    >
                      All
                    </button>
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={cn(
                          "px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                          activeTag === tag 
                            ? "bg-accent text-bg" 
                            : "bg-text-primary/5 text-text-secondary hover:text-text-primary border border-text-primary/10"
                        )}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
                
                <div className={cn(
                  "grid gap-12 transition-all",
                  isExecutiveMode ? "grid-cols-1 md:grid-cols-2 gap-6" : "grid-cols-1"
                )}>
                  {filteredWriting.map((post) => (
                    <div key={post.id} className={cn(
                      "group block transition-all duration-500 border relative overflow-hidden",
                      isExecutiveMode ? "p-6 rounded-lg" : "p-10 rounded-sm",
                      isLightMode 
                        ? "bg-white border-[#e5e5e5] hover:border-[#C6A85B]/40 hover:shadow-2xl hover:shadow-[#C6A85B]/5" 
                        : "bg-card-bg/30 border-border hover:border-accent/40 hover:bg-accent/5",
                      post.featured && !isExecutiveMode && "border-accent/30 bg-accent/[0.02]"
                    )}>
                      {post.featured && !isExecutiveMode && (
                        <div className="absolute top-0 right-0 bg-accent text-bg text-[8px] font-mono uppercase tracking-[0.3em] px-3 py-1">
                          Featured
                        </div>
                      )}
                      
                      <Link to={`/writing/${post.id}`} className="space-y-6 block">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <span className={cn(
                              "text-[10px] font-mono uppercase tracking-[0.3em] transition-colors",
                              isLightMode ? "text-[#C6A85B]" : "text-accent"
                            )}>{post.category}</span>
                            {post.tags?.map(tag => (
                              <span key={tag} className="text-[8px] font-mono uppercase tracking-widest text-text-secondary/50">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <h2 className={cn(
                            "font-serif transition-colors leading-tight",
                            isExecutiveMode ? "text-2xl group-hover:text-[#C6A85B]" : "text-4xl md:text-5xl group-hover:text-accent",
                            isLightMode && "text-[#1a1a1a]"
                          )}>{post.title}</h2>
                        </div>
                        
                        {!isExecutiveMode && (
                          <p className={cn(
                            "leading-relaxed font-light text-xl transition-colors line-clamp-3",
                            isLightMode ? "text-[#4a4a4a]" : "text-text-secondary"
                          )}>
                            {post.excerpt}
                          </p>
                        )}

                        <div className={cn(
                          "flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors",
                          isLightMode ? "text-[#C6A85B] hover:text-black" : "text-accent hover:text-text-primary"
                        )}>
                          {isExecutiveMode ? 'Read Brief' : 'Read Full Analysis'} <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className={cn("pt-32 mt-32 border-t transition-colors", isLightMode ? "border-[#e5e5e5]" : "border-border")}>
                  <div className="flex items-center justify-between mb-16">
                    <h3 className={cn(
                      "text-[10px] font-mono uppercase tracking-[0.4em] transition-colors",
                      isLightMode ? "text-[#C6A85B]" : "text-accent"
                    )}>Working Notes (Memoranda)</h3>
                    <div className="h-[1px] flex-1 mx-8 bg-border/50" />
                  </div>
                  
                  <div className={cn("grid gap-6", isExecutiveMode ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
                    {workingNotes.map((note) => (
                      <Link 
                        key={note.id} 
                        to={`/writing/${note.id}`}
                        className={cn(
                          "group flex flex-col justify-between p-8 border transition-all duration-500 rounded-lg",
                          isLightMode 
                            ? "border-[#e5e5e5] bg-white hover:border-[#C6A85B]/30 hover:shadow-xl" 
                            : "border-border bg-card-bg/30 hover:border-accent/30 hover:bg-accent/5"
                        )}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className={cn(
                              "text-[9px] font-mono uppercase tracking-widest transition-colors",
                              isLightMode ? "text-[#888888]" : "text-text-secondary"
                            )}>{note.date}</span>
                            <span className="text-[8px] font-mono uppercase tracking-widest text-accent/50">Internal Memo</span>
                          </div>
                          <h4 className={cn(
                            "font-serif transition-colors text-2xl",
                            isLightMode ? "group-hover:text-[#C6A85B]" : "group-hover:text-accent"
                          )}>{note.title}</h4>
                          {!isExecutiveMode && (
                            <p className="text-sm text-text-secondary line-clamp-2 font-light">{note.excerpt}</p>
                          )}
                        </div>
                        <div className={cn(
                          "mt-6 text-[10px] font-mono uppercase tracking-widest group-hover:translate-x-1 transition-transform transition-colors",
                          isLightMode ? "text-[#C6A85B]" : "text-accent"
                        )}>View Memo →</div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={cn("pt-32 mt-32 border-t transition-colors", isLightMode ? "border-[#e5e5e5]" : "border-border")}>
                  <div className="flex items-center justify-between mb-16">
                    <h3 className={cn(
                      "text-[10px] font-mono uppercase tracking-[0.4em] transition-colors",
                      isLightMode ? "text-[#C6A85B]" : "text-accent"
                    )}>Strategic Tracking</h3>
                    <div className="h-[1px] flex-1 mx-8 bg-border/50" />
                  </div>
                  
                  <div className={cn(
                    "grid gap-8 transition-all",
                    isExecutiveMode ? "grid-cols-1 md:grid-cols-3 gap-4" : "md:grid-cols-2"
                  )}>
                    {tracking.map((item, i) => (
                      <div key={item.id || i} className={cn(
                        "group transition-all duration-500 rounded-lg p-8 border",
                        isLightMode 
                          ? "border-[#e5e5e5] bg-white hover:border-[#C6A85B]/30 hover:shadow-xl" 
                          : "border-border bg-card-bg/30 hover:border-accent/30 hover:bg-accent/5"
                      )}>
                        <Link to={`/writing/${item.id}`} className="space-y-4 block">
                          <div className="flex items-center justify-between">
                            <span className={cn(
                              "text-[9px] font-mono uppercase tracking-widest transition-colors",
                              isLightMode ? "text-[#C6A85B]/70" : "text-accent/70"
                            )}>{item.status}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          </div>
                          <h4 className={cn(
                            "font-serif transition-colors text-2xl",
                            isLightMode ? "group-hover:text-[#C6A85B]" : "group-hover:text-accent"
                          )}>{item.topic}</h4>
                          
                          {!isExecutiveMode && (
                            <p className={cn(
                              "text-sm leading-relaxed font-light transition-colors line-clamp-3",
                              isLightMode ? "text-[#4a4a4a]" : "text-text-secondary"
                            )}>{item.excerpt}</p>
                          )}
                          
                          <div className={cn(
                            "inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest transition-colors",
                            isLightMode ? "text-[#C6A85B] hover:text-black" : "text-accent hover:text-text-primary"
                          )}>
                            Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="article"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex justify-between items-center mb-16">
                  <button 
                    onClick={() => navigate('/writing')}
                    className={cn(
                      "transition-colors flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em]",
                      isReadMode ? "text-[#888888] hover:text-[#C6A85B]" : "text-text-secondary hover:text-accent"
                    )}
                  >
                    ← Back to Writing
                  </button>

                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setFontSize(fontSize === 'standard' ? 'large' : 'standard')}
                      className={cn(
                        "p-2 rounded-full transition-all",
                        isReadMode ? "hover:bg-black/5 text-[#888888]" : "hover:bg-text-primary/5 text-text-secondary"
                      )}
                      title="Toggle Font Size"
                    >
                      <Type size={16} className={fontSize === 'large' ? 'text-accent' : ''} />
                    </button>
                    <button
                      onClick={() => setIsReadMode(!isReadMode)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded-full border transition-all text-[10px] font-mono uppercase tracking-widest",
                        isReadMode 
                          ? "bg-text-primary text-bg border-text-primary" 
                          : "bg-text-primary/5 text-text-primary border-border hover:border-accent"
                      )}
                    >
                      {isReadMode ? <Moon size={12} /> : <BookOpen size={12} />}
                      {isReadMode ? 'Dark Mode' : 'Read Mode'}
                    </button>
                  </div>
                </div>
                
                <div className={cn(
                  "flex justify-between items-center mb-16 border-b pb-12 transition-colors",
                  isReadMode ? "border-[#e5e5e5]" : "border-border"
                )}>
                  <div className="space-y-2">
                    <span className={cn(
                      "text-[10px] font-mono uppercase tracking-[0.4em] transition-colors",
                      isReadMode ? "text-[#C6A85B]" : "text-accent"
                    )}>
                      {article?.category || (workingNotes.find(n => n.id === id) ? 'Memorandum' : 'Research Note')}
                    </span>
                    <div className={cn(
                      "text-[10px] font-mono uppercase tracking-widest transition-colors",
                      isReadMode ? "text-[#888888]" : "text-text-secondary/60"
                    )}>
                      Ref: {id?.toUpperCase()} // {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                  <div className={cn(
                    "text-[10px] font-mono uppercase tracking-widest text-right transition-colors",
                    isReadMode ? "text-[#888888]" : "text-text-secondary/60"
                  )}>
                    Michael Gruen<br/>Strategic Advisor
                  </div>
                </div>

                <h1 className={cn(
                  "font-serif mt-4 mb-20 leading-[1.1] tracking-tight transition-all",
                  fontSize === 'large' ? "text-5xl md:text-8xl" : "text-4xl md:text-7xl"
                )}>
                  {article?.title || `Article not found`}
                </h1>
                
                {article?.excerpt && (
                  <div className={cn(
                    "mb-20 p-10 border-l italic font-serif leading-relaxed transition-all",
                    isReadMode 
                      ? "border-[#C6A85B] bg-[#C6A85B]/5 text-[#1a1a1a] text-3xl" 
                      : "border-accent bg-accent/5 text-text-primary/90 text-2xl"
                  )}>
                    {article.excerpt}
                  </div>
                )}
                
                <div className="max-w-none">
                  {article ? (
                    article.content?.split(/\n\s*\n/).filter(p => p.trim()).map((paragraph, i) => (
                      <p 
                        key={i} 
                        className={cn(
                          "leading-relaxed mb-12 font-light transition-all",
                          fontSize === 'large' ? "text-2xl" : "text-xl",
                          isReadMode ? "text-[#2a2a2a]" : "text-text-primary/90"
                        )}
                      >
                        {paragraph.trim()}
                      </p>
                    ))
                  ) : (
                    <div className={cn("p-12 border text-center transition-colors", isReadMode ? "border-[#e5e5e5]" : "border-border")}>
                      <p className={cn(
                        "font-mono uppercase tracking-widest transition-colors",
                        isReadMode ? "text-[#888888]" : "text-text-secondary"
                      )}>Article not found</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
