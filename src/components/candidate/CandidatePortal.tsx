import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  BookOpen, 
  Bell, 
  Settings, 
  LogOut, 
  LayoutDashboard,
  Calendar,
  CheckCircle2,
  Clock,
  ChevronRight,
  Target,
  Sparkles,
  Zap,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CVForm from './CVForm';
import TrainingCatalog from './TrainingCatalog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface CandidatePortalProps {
  onExit: () => void;
}

const CandidatePortal: React.FC<CandidatePortalProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'cv' | 'training'>('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'cv', label: 'Déposer mon CV', icon: FileText },
    { id: 'training', label: 'Catalogue Formations', icon: BookOpen },
  ];

  const stats = [
    { label: 'Candidatures envoyées', value: '3', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Formations suivies', value: '1', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Entretiens planifiés', value: '2', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden md:flex flex-col fixed h-full z-20">
        <div className="p-8 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl italic">S</span>
            </div>
            <div>
              <span className="font-bold text-lg block leading-none">SUNU Candidate</span>
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">Espace Talents</span>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'text-muted-foreground hover:bg-gray-50 hover:text-foreground'
              }`}
            >
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-primary/60'}`} />
              {item.label}
            </button>
          ))}
          <div className="pt-8 pb-4 px-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Personnel</div>
          <button className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold text-muted-foreground hover:bg-gray-50 transition-all">
            <Settings className="w-5 h-5 text-gray-400" /> Profil & Paramètres
          </button>
        </nav>

        <div className="p-6 border-t border-gray-50">
          <div className="bg-primary/5 rounded-[1.5rem] p-5 mb-6 border border-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500" />
            <p className="text-[10px] font-black text-primary mb-2 uppercase tracking-widest relative z-10">Matching IA</p>
            <p className="text-[11px] text-muted-foreground font-medium mb-4 leading-relaxed relative z-10">Optimisez votre CV pour augmenter vos chances de recrutement de 45%.</p>
            <Button size="sm" className="w-full rounded-xl text-[10px] font-bold h-9 bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-sm" onClick={() => setActiveTab('cv')}>Améliorer mon profil</Button>
          </div>
          <button 
            onClick={onExit}
            className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 min-h-screen">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-extrabold text-xl tracking-tight text-foreground">
            {menuItems.find(i => i.id === activeTab)?.label}
          </h2>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10">
              <Sparkles size={14} className="animate-pulse" /> IA : Profil Complété à 50%
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm" />
              </Button>
              <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-foreground leading-none mb-1">Jean Dupont</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Candidat Junior GRC</p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-black text-lg shadow-lg shadow-primary/20 cursor-pointer hover:scale-105 transition-transform">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-10 animate-in fade-in duration-700">
              <div className="bg-foreground rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-1">
                    <Badge className="bg-primary/20 text-primary border-none mb-6 px-4 py-1.5 font-black uppercase tracking-widest text-[10px]">Boostez votre carrière</Badge>
                    <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Bienvenue sur SUNU Center, Jean ! 👋</h1>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">Votre profil est en cours d'analyse par notre IA. Complétez vos expériences pour attirer les meilleures opportunités en GRC.</p>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-black h-14 px-10 rounded-2xl shadow-xl shadow-primary/30 transition-all hover:-translate-y-1" onClick={() => setActiveTab('cv')}>
                      Compléter mon profil IA <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                  <div className="hidden lg:flex flex-col items-center bg-white/5 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full border-4 border-primary p-1.5 mb-4 shadow-2xl shadow-primary/20">
                      <div className="w-full h-full rounded-full border-4 border-primary/20 flex items-center justify-center font-black text-2xl">
                        50%
                      </div>
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Score de Complétude</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-7 rounded-[2rem] modern-shadow flex items-center gap-6 border border-white hover:border-primary/10 transition-all group">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${stat.bg} ${stat.color}`}>
                      <stat.icon size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground mb-1 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-[2.5rem] modern-shadow border border-white">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight">Candidatures Récentes</h3>
                      <p className="text-xs text-muted-foreground mt-1">Suivi de vos demandes en temps réel.</p>
                    </div>
                    <Button variant="link" className="text-primary font-bold text-xs p-0" onClick={() => setActiveTab('dashboard')}>Voir tout l'historique</Button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { company: 'Orange Sénégal', role: 'Conseiller Client GRC', status: 'En cours', date: '12 Mars', icon: 'O' },
                      { company: 'Sonatel', role: 'Chargé de Relation Client', status: 'Entretien', date: '05 Mars', icon: 'S' },
                      { company: 'Tigo', role: 'Commercial Junior', status: 'Refusé', date: '28 Fév', icon: 'T' },
                    ].map((app, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-gray-50 bg-gray-50/30 hover:bg-white hover:border-primary/20 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                            {app.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-foreground">{app.role}</p>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">{app.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest border-none ${
                            app.status === 'En cours' ? 'bg-blue-50 text-blue-600' : 
                            app.status === 'Entretien' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {app.status}
                          </Badge>
                          <p className="text-[10px] text-muted-foreground font-bold mt-2">{app.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] modern-shadow border border-white">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight">Recommandations IA</h3>
                      <p className="text-xs text-muted-foreground mt-1">Formations basées sur votre profil.</p>
                    </div>
                    <Button variant="link" className="text-primary font-bold text-xs p-0" onClick={() => setActiveTab('training')}>Explorer le catalogue</Button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: 'Gestion Relation Client Expert', duration: '40h', type: 'Présentiel', score: 98 },
                      { title: 'Leadership & Management', duration: '24h', type: 'Hybride', score: 85 },
                    ].map((course, i) => (
                      <div key={i} className="flex gap-5 p-5 rounded-2xl border border-gray-50 bg-gray-50/30 hover:bg-white hover:border-primary/20 transition-all">
                        <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 relative overflow-hidden">
                          <BookOpen className="w-10 h-10" />
                          <div className="absolute bottom-0 left-0 right-0 bg-primary/10 py-0.5 text-center">
                            <span className="text-[8px] font-black uppercase tracking-tighter">Top Match</span>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex justify-between items-start mb-1">
                            <p className="text-sm font-bold text-foreground leading-tight">{course.title}</p>
                            <span className="text-[10px] font-black text-green-600">{course.score}% Match</span>
                          </div>
                          <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
                            <span className="flex items-center gap-1"><Clock size={12} className="text-primary" /> {course.duration}</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-primary" /> {course.type}</span>
                          </div>
                          <div className="mt-3 flex gap-2">
                             <Button size="sm" className="h-9 px-4 text-[10px] font-black uppercase tracking-widest bg-primary rounded-xl" onClick={() => setActiveTab('training')}>S'inscrire</Button>
                             <Button size="sm" variant="ghost" className="h-9 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground rounded-xl">Détails</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-5 bg-orange-50/50 rounded-2xl border border-orange-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm shrink-0">
                      <Target size={20} />
                    </div>
                    <p className="text-xs font-bold text-orange-800 leading-tight">Prochaine session GRC : <span className="font-black">15 Avril 2026</span>. Inscrivez-vous avant qu'il ne soit trop tard !</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cv' && <CVForm />}
          {activeTab === 'training' && <TrainingCatalog />}
        </div>
      </main>
    </div>
  );
};

export default CandidatePortal;
