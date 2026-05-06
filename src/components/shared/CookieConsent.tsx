import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Cookie, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sunu-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sunu-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center md:justify-end p-6 md:p-10 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="w-full max-w-[440px] bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-10 pointer-events-auto border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                  <Cookie size={32} />
                </div>
                <button 
                  onClick={() => setIsVisible(false)} 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              
              <h4 className="text-2xl font-black mb-4 tracking-tight italic">Confidentialité & Cookies</h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-10 font-medium">
                SUNU Training Center utilise des cookies pour optimiser votre expérience, analyser les flux et garantir le bon fonctionnement de notre <span className="text-primary font-black uppercase tracking-tighter">Intelligence Artificielle</span> de recrutement.
              </p>
              
              <div className="flex flex-col gap-3">
                <Button className="h-14 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-black text-sm transition-all group" onClick={handleAccept}>
                  Accepter tout <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="h-12 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl font-bold text-xs uppercase tracking-widest" onClick={() => setIsVisible(false)}>
                  Personnaliser les choix
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3">
                 <ShieldCheck className="text-primary" size={16} />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Conforme RGPD 2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;