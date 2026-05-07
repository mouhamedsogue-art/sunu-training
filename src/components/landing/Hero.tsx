import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight, Cpu, LogIn, Search } from 'lucide-react';
import type { UserRole } from '@/App';

interface HeroProps {
  onLoginClick: () => void;
  onRegisterClick: (defaultRole?: Exclude<UserRole, 'visitor'>) => void;
}

const Hero: React.FC<HeroProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-accent/5 -z-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              IA & Digitalisation RH
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8 text-slate-900 tracking-tight">
              Connecter les <span className="text-primary italic">talents</span> aux meilleures opportunites professionnelles
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Plateforme digitale de recrutement permettant aux candidats de deposer leurs CV et aux entreprises de trouver rapidement des profils qualifies.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-black rounded-2xl shadow-2xl shadow-primary/30 bg-primary hover:bg-primary/90 transition-all hover:-translate-y-1"
                onClick={() => onRegisterClick('candidate')}
              >
                Inscription candidat <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 text-lg font-black rounded-2xl border-2 border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-1"
                onClick={() => onRegisterClick('partner')}
              >
                <Search className="mr-2 w-5 h-5" /> Inscription entreprise
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-16 px-8 text-lg font-black rounded-2xl hover:bg-slate-50 transition-all hover:-translate-y-1"
                onClick={onLoginClick}
              >
                <LogIn className="mr-2 w-5 h-5" /> Connexion
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <img
                src="/close-up-students-studying-together.jpg"
                alt="SUNU AI Recruitment"
                className="w-full h-auto object-cover min-h-[400px]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-4 bg-white p-6 rounded-[2rem] shadow-2xl z-20 hidden xl:flex items-center gap-4 border border-slate-50"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <CheckCircle size={28} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-1">Matching IA</p>
                <p className="text-lg font-black text-slate-900 leading-none">80% Match</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-10 -left-4 bg-slate-900 p-6 rounded-[2rem] shadow-2xl z-20 hidden xl:flex items-center gap-4 text-white"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                <Cpu size={28} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-primary font-black uppercase tracking-wider mb-1">Analyse semantique</p>
                <p className="text-lg font-black leading-none italic">Analyse en cours...</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
