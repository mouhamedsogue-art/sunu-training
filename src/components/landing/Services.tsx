import React from 'react';
import { 
  Briefcase, 
  Users, 
  Cpu, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  Database,
  BarChart3,
  Clock,
  Zap,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Recrutement",
      desc: "Algorithmes de matching IA pour connecter les talents aux besoins spécifiques des entreprises.",
      icon: Briefcase,
      color: "bg-blue-600",
      image: "/call-center-agent-tracking-shipments-office-looking-pc-screen.jpg",
      imagePosition: "object-top"
    },
    {
      title: "Intérim Digital",
      desc: "Solutions flexibles de placement temporaire pour répondre aux pics d'activité de nos partenaires.",
      icon: Clock,
      color: "bg-orange-500",
      image: "/WhatsApp Image 2026-05-06 at 4.10.24 PM.jpeg"
    },
    {
      title: "Gestion des Candidatures",
      desc: "Une plateforme centralisée pour suivre chaque étape du recrutement avec une transparence totale.",
      icon: Database,
      color: "bg-slate-900",
      image: "/paperwork.jpg"
    },
    {
      title: "Analyse Intelligente",
      desc: "Extraction sémantique et scoring de compatibilité pour identifier les meilleurs profils en 48h.",
      icon: Cpu,
      color: "bg-primary",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Formations Pro",
      desc: "Cursus certifiants en GRC et Soft Skills pour garantir une employabilité immédiate.",
      icon: GraduationCap,
      color: "bg-green-600",
      image: "/students-attending-university-class.jpg"
    },
    {
      title: "Accompagnement",
      desc: "Coaching de carrière personnalisé et préparation intensive aux entretiens d'embauche.",
      icon: Headphones,
      color: "bg-purple-600",
      image: "/joyful-successful-sales-agent-presenting-content-tablet.jpg"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-12 h-0.5 bg-primary" />
               <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">Expertise RH</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">Solutions Digitales &<br/><span className="italic text-primary">Accompagnement Elite</span></h2>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed italic">
            "Nous digitalisons l'ensemble du processus de recrutement pour garantir rapidité, précision et satisfaction totale."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="group bg-slate-50 rounded-[2.5rem] p-4 hover:bg-white hover:modern-shadow transition-all duration-500 border border-transparent hover:border-slate-100 flex flex-col h-full">
              <div className="relative h-60 rounded-[2rem] overflow-hidden mb-8 shadow-inner">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover ${service.imagePosition ?? 'object-center'} group-hover:scale-110 transition-transform duration-1000`}
                />
                <div className={`absolute top-6 left-6 ${service.color} text-white p-4 rounded-2xl shadow-2xl shadow-black/20 group-hover:rotate-6 transition-transform`}>
                  <service.icon size={24} />
                </div>
              </div>
              <div className="px-6 pb-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">{service.desc}</p>
                <div className="mt-auto">
                  <Button variant="link" className="p-0 text-primary font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
                    En savoir plus <ChevronRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Tech Banner */}
        <div className="mt-24 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/2 rounded-l-full" />
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 rounded-full mb-8 border border-white/10">
                 <Zap className="text-primary" size={16} />
                 <span className="text-[10px] font-black uppercase tracking-widest">Technologie Propriétaire</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight italic leading-tight">L'IA au service de votre croissance</h3>
              <p className="text-slate-400 text-xl mb-10 leading-relaxed font-medium italic">"SUNU Training Center n'est pas seulement un centre de formation. C'est un hub technologique qui utilise l'IA pour révolutionner la rencontre entre les talents et les entreprises."</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 text-sm font-black italic">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Profils vérifiés
                </div>
                <div className="flex items-center gap-3 text-sm font-black italic">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Analyse sémantique
                </div>
                <div className="flex items-center gap-3 text-sm font-black italic">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Matching 48h
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-20 px-16 rounded-3xl font-black text-lg shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1">
                Devenir Entreprise Partenaire
              </Button>
              <p className="text-center text-xs text-slate-500 font-bold uppercase tracking-widest">+25 entreprises déjà connectées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
