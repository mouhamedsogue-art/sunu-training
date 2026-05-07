import React from 'react';
import { 
  Calendar, 
  Users, 
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  MessageCircle,
  PhoneCall,
  LayoutGrid,
  Sparkles,
  MapPin,
  Clock,
  LayoutTemplate
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const TrainingCatalog = () => {
  const courses = [
    {
      id: 1,
      title: "Gestion de la Relation Client (GRC)",
      desc: "Devenez un expert des outils CRM et maîtrisez les stratégies de fidélisation client les plus avancées.",
      type: "Présentiel",
      duration: "40 heures",
      places: 12,
      date: "15 Avril 2026",
      image: "/students-paying-attention-class.jpg",
      icon: MessageCircle,
      accent: "bg-blue-500"
    },
    {
      id: 2,
      title: "Développement Personnel & Leadership",
      desc: "Boostez votre confiance en vous et apprenez à gérer des équipes avec charisme et efficacité.",
      type: "Présentiel",
      duration: "24 heures",
      places: 20,
      date: "22 Avril 2026",
      image: "/students-attending-university-class.jpg",
      icon: TrendingUp,
      accent: "bg-purple-500"
    },
    {
      id: 3,
      title: "Lean Startup & Innovation Digitale",
      desc: "Maîtrisez les méthodologies agiles pour lancer des produits innovants sur le marché africain.",
      type: "Hybride",
      duration: "30 heures",
      places: 15,
      date: "02 Mai 2026",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
      icon: BrainCircuit,
      accent: "bg-accent"
    },
    {
      id: 4,
      title: "Travail en Ligne & Outils Collaboratifs",
      desc: "Devenez performant en télétravail avec Slack, Zoom, Trello et les outils de gestion de projet à distance.",
      type: "En ligne",
      duration: "15 heures",
      places: 50,
      date: "En continu",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      icon: Clock,
      accent: "bg-green-600"
    },
    {
      id: 5,
      title: "Communication Professionnelle d'Impact",
      desc: "L'art de convaincre par mail, téléphone et lors de présentations à fort enjeu stratégique.",
      type: "Présentiel",
      duration: "20 heures",
      places: 18,
      date: "10 Mai 2026",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      icon: MessageCircle,
      accent: "bg-indigo-500"
    },
    {
      id: 6,
      title: "Techniques d'Appel & Télévente",
      desc: "Vendez par téléphone comme un pro : gestion des objections, closing et psychologie de l'acheteur.",
      type: "Présentiel",
      duration: "32 heures",
      places: 10,
      date: "18 Mai 2026",
      image: "/account-management-team-coworkers-office-bonding-with-clients.jpg",
      icon: PhoneCall,
      accent: "bg-orange-500"
    },
    {
      id: 7,
      title: "Préparation Intensive aux Entretiens",
      desc: "Simulations réelles avec nos RH, optimisation de votre pitch personnel et correction de CV.",
      type: "Présentiel",
      duration: "12 heures",
      places: 8,
      date: "Tous les samedis",
      image: "/study-group-african-people.jpg",
      icon: Users,
      accent: "bg-pink-500"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 bg-white p-12 rounded-[3.5rem] border border-slate-100 modern-shadow overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-primary animate-pulse" size={24} />
            <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">Excellence Pédagogique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">Catalogue des Formations</h2>
          <p className="text-slate-500 mt-2 text-xl font-medium leading-relaxed italic">"Formez-vous aux métiers de demain avec des experts du terrain."</p>
        </div>
        <div className="flex flex-wrap gap-4 relative z-10">
          <Button variant="outline" className="rounded-2xl h-16 px-10 border-2 font-black hover:bg-slate-50 transition-all">
            <LayoutGrid size={22} className="mr-2" /> Tous les filtres
          </Button>
          <Button className="rounded-2xl h-16 px-10 bg-slate-900 text-white font-black shadow-2xl shadow-slate-900/20 transition-all hover:-translate-y-1">
            <Calendar size={22} className="mr-2" /> Planning 2026
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {courses.map((course, idx) => (
          <motion.div 
            key={course.id} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[3rem] overflow-hidden modern-shadow border border-slate-100 group flex flex-col h-full hover:-translate-y-3 transition-all duration-500"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-6 right-6">
                <Badge className={`rounded-xl py-2 px-5 border-none font-black text-[10px] uppercase tracking-widest shadow-xl shadow-black/20 ${
                  course.type === 'Présentiel' ? 'bg-primary text-white' : 
                  course.type === 'Hybride' ? 'bg-orange-500 text-white' : 'bg-green-600 text-white'
                }`}>
                  {course.type}
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6 text-white flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl">
                 <Clock size={16} className="text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
              </div>
            </div>
            
            <div className="p-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-black mb-5 leading-tight group-hover:text-primary transition-colors tracking-tight italic">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-10 leading-relaxed font-medium line-clamp-2">{course.desc}</p>
              
              <div className="mt-auto space-y-8 pt-8 border-t border-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Prochaine session</span>
                    <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                      <Calendar size={18} className="text-primary" /> {course.date}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">Disponibilité</span>
                    <div className="flex items-center gap-2 text-sm font-black text-orange-600">
                      <Users size={18} /> {course.places} places
                    </div>
                  </div>
                </div>
                
                <Button className="w-full rounded-2xl h-16 font-black text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1" onClick={() => toast.success(`Inscription enregistrée pour: ${course.title}`)}>
                  S'inscrire maintenant
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Featured Banner */}
      <div className="bg-slate-900 rounded-[3.5rem] p-16 text-white flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-0" />
        <div className="flex-1 relative z-10">
          <Badge className="bg-primary text-white border-none mb-8 px-6 py-2 font-black uppercase tracking-[0.3em] text-[10px]">Coaching de Carrière</Badge>
          <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight italic leading-tight">Besoin d'un parcours sur-mesure ?</h3>
          <p className="text-slate-400 text-xl mb-10 leading-relaxed max-w-2xl font-medium">Nos conseillers pédagogiques analysent votre profil pour vous orienter vers les formations les plus demandées par nos entreprises partenaires.</p>
          <Button
            className="bg-white text-slate-900 hover:bg-slate-100 rounded-[1.25rem] h-16 px-12 font-black text-lg shadow-2xl shadow-white/5 transition-all hover:-translate-y-1"
            onClick={() => { window.location.hash = '#contact'; toast.success('Redirection vers le formulaire de contact'); }}
          >
            Prendre rendez-vous (Gratuit)
          </Button>
        </div>
        <div className="hidden lg:flex flex-col items-center relative z-10 shrink-0 bg-white/5 p-12 rounded-[3.5rem] border border-white/5 backdrop-blur-xl">
          <div className="flex -space-x-5 mb-8">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden shadow-2xl">
                <img src={`https://i.pravatar.cc/100?u=sunu-${i}`} alt="apprenant" />
              </div>
            ))}
            <div className="w-16 h-16 rounded-full border-4 border-slate-900 bg-primary flex items-center justify-center text-xs font-black shadow-2xl text-white">
              +200
            </div>
          </div>
          <p className="text-sm font-black text-center leading-relaxed tracking-tight">Rejoignez une communauté de<br/><span className="text-primary text-xl italic font-black">+200 apprenants</span> déjà formés</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCatalog;
