import React from 'react';
import { motion } from 'motion/react';

const partners = [
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'McDonald\'s', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' },
];

export default function ProofLayer() {
  return (
    <section className="py-20 border-y border-border bg-card-bg/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/60">Brands I've Worked With</h4>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 group">
            {partners.map((partner) => (
              <motion.img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="h-6 md:h-8 w-auto object-contain opacity-40 grayscale transition-all duration-500 group-hover:opacity-20 hover:!opacity-100 hover:!grayscale-0"
                whileHover={{ scale: 1.1 }}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
