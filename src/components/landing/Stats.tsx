import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "CV reçus & analysés", value: "12,450", suffix: "+", color: "text-primary" },
  { label: "Entreprises partenaires", value: "350", suffix: "+", color: "text-orange-500" },
  { label: "Profils disponibles", value: "8,200", suffix: "", color: "text-slate-900" },
  { label: "Taux de satisfaction", value: "98", suffix: "%", color: "text-green-600" }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`text-4xl md:text-6xl font-black mb-4 tracking-tighter ${stat.color} group-hover:scale-110 transition-transform duration-500 flex items-baseline gap-1`}>
                <span className="tabular-nums italic">{stat.value}</span>
                <span className="text-2xl md:text-3xl font-black">{stat.suffix}</span>
              </div>
              <div className="h-1 w-10 bg-slate-100 mb-6 group-hover:w-20 group-hover:bg-primary transition-all duration-500 rounded-full" />
              <div className="text-[10px] md:text-xs text-slate-400 font-black uppercase tracking-[0.3em] max-w-[150px] leading-relaxed group-hover:text-slate-900 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;