import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  Cpu, 
  BarChart3, 
  FileSearch, 
  LogOut,
  Bell,
  Search,
  Filter,
  Download,
  Mail,
  Video,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  Globe,
  Plus,
  ArrowUpRight,
  Zap,
  LayoutGrid,
  MonitorPlay,
  Settings,
  ShieldCheck,
  Languages,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminDashboardProps {
  onExit: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'candidates' | 'requests' | 'analytics'>('overview');

  const stats = [
    { label: 'CV Total Reçus', value: '1,245', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Entreprises Partenaires', value: '25', change: '+5%', icon: Building2, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Besoin Recrutement', value: '1,200', change: '+18%', icon: FileSearch, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Taux Satisfaction', value: '85%', change: '+2%', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const candidates = [
    { id: 1, name: 'Issa Diop', role: 'Expert GRC', score: 96, experience: '5 ans', languages: ['Français', 'Anglais'], status: 'Recommandé', country: 'Sénégal', diploma: 'Master CRM', skills: ['Salesforce', 'Vente', 'Leadership'] },
    { id: 2, name: 'Fatou Ndiaye', role: 'Conseiller Client', score: 89, experience: '2 ans', languages: ['Français', 'Wolof'], status: 'En cours', country: 'Sénégal', diploma: 'Licence Marketing', skills: ['Communication', 'Zendesk'] },
    { id: 3, name: 'Abdou Sall', role: 'Analyste Data RH', score: 92, experience: '3 ans', languages: ['Français', 'Anglais'], status: 'Recommandé', country: 'Mali', diploma: 'Ingénieur Info', skills: ['Python', 'SQL', 'Tableau'] },
    { id: 4, name: 'Awa Gueye', role: 'Manager CRM', score: 85, experience: '4 ans', languages: ['Français'], status: 'Vérifié', country: 'Sénégal', diploma: 'Master Management', skills: ['Team Management', 'Stratégie'] },
    { id: 5, name: 'Jean-Luc Koffi', role: 'Commercial Export', score: 94, experience: '6 ans', languages: ['Français', 'Anglais', 'Espagnol'], status: 'Recommandé', country: "Côte d'Ivoire", diploma: 'MBA Business', skills: ['Export', 'Négociation'] },
  ];

  const partnerRequests = [
    { company: 'Orange Sénégal', position: 'Conseiller GRC', count: 5, date: '12 Mars', status: 'Matching IA', matchCount: 12 },
    { company: 'Sonatel', position: 'Data Analyst', count: 2, date: '10 Mars', status: 'Entretien', matchCount: 8 },
    { company: 'TotalEnergies', position: 'Responsable QHSE', count: 1, date: '08 Mars', status: 'Terminé', matchCount: 3 },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col fixed h-full z-30 transition-all duration-300">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40">
              <span className="text-white font-black text-2xl italic">S</span>
            </div>
            <div>
              <p className="font-black text-xl leading-none tracking-tight">SUNU Admin</p>
              <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1.5">Intelligence Hub</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-5 space-y-3 mt-6">
          {[
            { id: 'overview', label: 'Dashboard IA', icon: BrainCircuit },
            { id: 'candidates', label: 'Vivier de Talents', icon: Users },
            { id: 'requests', label: 'Demandes B2B', icon: Building2 },
            { id: 'analytics', label: 'KPI & Analytics', icon: BarChart3 },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] text-sm font-black transition-all duration-300 ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-2xl shadow-primary/30 scale-[1.05]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={22} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 space-y-4">
          <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Système Live</span>
             </div>
             <p className="text-xs text-slate-400 font-medium leading-relaxed italic">"L'IA a détecté 24 nouveaux profils GRC correspondants ce matin."</p>
          </div>
          <button onClick={onExit} className="w-full flex items-center gap-4 px-6 py-4 rounded-[1.25rem] text-sm font-black text-red-400 hover:bg-red-500/10 transition-all">
            <LogOut size={22} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 min-h-screen">
        <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-12 sticky top-0 z-20">
          <div className="flex items-center gap-8">
            <div className="relative group hidden lg:block">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
               <input 
                  type="text" 
                  placeholder="Recherche multicritères (Compétences, Pays, Langue...)" 
                  className="h-12 w-[400px] bg-slate-100 border-none rounded-2xl pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
               />
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-primary/10 text-primary border-none font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Cpu size={14} className="animate-spin-slow" /> Moteur IA Actif
              </Badge>
              <Badge className="bg-green-50 text-green-700 border-none font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Globe size={14} /> Cloud Sécurisé
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
               <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl text-slate-500 hover:bg-slate-100"><MonitorPlay size={20} /></Button>
               <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl text-slate-500 hover:bg-slate-100 relative">
                 <Bell size={20} />
                 <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
               </Button>
            </div>
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-900 leading-none">Admin SUNU</p>
                <p className="text-[10px] text-primary font-black uppercase tracking-widest mt-1">Supervision 2024</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center font-black text-white shadow-xl shadow-slate-900/10">
                AD
              </div>
            </div>
          </div>
        </header>

        <div className="p-12">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-[2.5rem] modern-shadow border border-slate-100 group hover:-translate-y-1 transition-all"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-[1.25rem] flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <stat.icon size={28} />
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-none font-black rounded-lg py-1">{stat.change}</Badge>
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-10">
                {/* Candidates List with AI Matching */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] modern-shadow border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">Analyse & Matching IA</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                        <Zap size={14} className="text-primary" /> Classement intelligent par compatibilité
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-2xl h-12 font-black border-2"><Filter size={18} className="mr-2" /> Trier</Button>
                      <Button className="rounded-2xl h-12 font-black bg-slate-900"><Download size={18} className="mr-2" /> Export CSV</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {candidates.map((c, i) => (
                      <motion.div 
                        key={c.id} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col xl:flex-row xl:items-center justify-between p-6 rounded-[2rem] border border-slate-100 bg-slate-50/40 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                      >
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 flex items-center justify-center font-black text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm relative">
                            {c.name.split(' ').map(n => n[0]).join('')}
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                               <CheckCircle2 size={10} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-1.5">
                              <p className="font-black text-slate-900 text-lg leading-none">{c.name}</p>
                              <Badge className={c.status === 'Recommandé' ? 'bg-primary/10 text-primary border-none font-black text-[10px] uppercase tracking-tighter' : 'bg-slate-200 text-slate-600 border-none font-black text-[10px] uppercase tracking-tighter'}>
                                {c.status}
                              </Badge>
                            </div>
                            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-bold text-slate-500">
                               <span className="flex items-center gap-1.5"><Briefcase size={12} /> {c.role}</span>
                               <span className="flex items-center gap-1.5"><TrendingUp size={12} /> {c.experience}</span>
                               <span className="flex items-center gap-1.5"><Globe size={12} /> {c.country}</span>
                            </div>
                            <div className="flex gap-2 mt-3">
                              {c.skills.map(s => <span key={s} className="text-[9px] bg-slate-200/50 px-2 py-0.5 rounded-full font-black text-slate-400 uppercase tracking-widest">{s}</span>)}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 xl:mt-0 flex items-center gap-10">
                          <div className="text-right">
                            <p className="text-[10px] text-slate-400 uppercase font-black mb-2 tracking-widest">Score Matching</p>
                            <div className="flex items-center gap-3">
                              <div className="w-32 h-2.5 bg-slate-200/50 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${c.score}%` }}
                                  transition={{ duration: 1.5, ease: "easeOut" }}
                                  className={`h-full ${c.score > 90 ? 'bg-primary' : 'bg-indigo-400'}`} 
                                />
                              </div>
                              <span className="text-sm font-black text-slate-900 italic">{c.score}%</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className="h-12 w-12 rounded-2xl text-primary hover:bg-primary/5 shadow-sm bg-white" onClick={() => toast.info(`Contact ${c.name}`)}><Mail size={20} /></Button>
                            <Button size="icon" variant="ghost" className="h-12 w-12 rounded-2xl text-green-600 hover:bg-green-50 shadow-sm bg-white" onClick={() => toast.success(`Visioconférence planifiée`)}><Video size={20} /></Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI Insights Sidebar */}
                <div className="space-y-8">
                  <div className="bg-slate-900 text-white p-10 rounded-[3rem] modern-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-1000" />
                    <h3 className="font-black text-xl mb-8 flex items-center gap-3 relative z-10">
                      <Cpu size={24} className="text-primary animate-pulse" /> IA Insights Live
                    </h3>
                    <div className="space-y-6 relative z-10">
                      <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[10px] text-slate-400 mb-2 uppercase font-black tracking-[0.2em]">Compétence la + demandée</p>
                        <p className="font-black text-xl italic tracking-tight underline decoration-primary decoration-4 underline-offset-4">CRM Salesforce</p>
                      </div>
                      <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[10px] text-slate-400 mb-2 uppercase font-black tracking-[0.2em]">Tendance Recrutement</p>
                        <div className="flex items-center gap-3">
                          <p className="font-black text-2xl text-green-400">+15%</p>
                          <TrendingUp className="text-green-400" size={20} />
                        </div>
                        <p className="text-[10px] text-slate-500 mt-2">Secteur GRC & Services</p>
                      </div>
                      <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                        <p className="text-[10px] text-slate-400 mb-2 uppercase font-black tracking-[0.2em]">Langues recherchées</p>
                        <div className="flex items-center gap-2 mt-3">
                           <Badge className="bg-white/10 text-white border-none text-[10px] font-black uppercase">FR (100%)</Badge>
                           <Badge className="bg-white/10 text-white border-none text-[10px] font-black uppercase">EN (62%)</Badge>
                           <Badge className="bg-white/10 text-white border-none text-[10px] font-black uppercase">WO (45%)</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visioconférence Simulation Card */}
                  <div className="bg-white p-10 rounded-[3rem] modern-shadow border border-slate-100 text-center">
                    <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-100/50">
                      <MonitorPlay size={40} />
                    </div>
                    <h4 className="font-black text-xl text-slate-900 mb-3 tracking-tight">Outil de Visioconférence</h4>
                    <p className="text-xs text-slate-500 font-medium mb-8 leading-relaxed">Passez vos entretiens directement depuis la plateforme avec nos outils intégrés (Meet/Zoom/Webex).</p>
                    <Button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-black shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-1">
                      Lancer un Salon <ArrowUpRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className="bg-white p-20 rounded-[3.5rem] modern-shadow text-center py-40 animate-in zoom-in-95 duration-500 border border-slate-100">
              <Users className="w-24 h-24 text-primary mx-auto mb-10 opacity-10" />
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Moteur de Recherche Avancé</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                Utilisez nos filtres multicritères pour isoler les meilleurs profils par nationalité, langues, années d'expérience et diplômes spécifiques.
              </p>
              <div className="mt-12 flex justify-center gap-4">
                 <div className="flex -space-x-4">
                   {[1,2,3,4,5].map(i => <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 shadow-xl" />)}
                 </div>
              </div>
              <Button className="mt-12 h-16 px-12 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/25 hover:-translate-y-1 transition-all">
                Activer les filtres avancés
              </Button>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="space-y-10 animate-in fade-in duration-500">
               <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight italic">Demandes Partenaires</h2>
                  <p className="text-slate-500 font-medium mt-1">Gérez les besoins en recrutement des entreprises partenaires.</p>
                </div>
                <Button className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black shadow-xl"><Plus size={20} className="mr-2" /> Nouveau Besoin B2B</Button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {partnerRequests.map((req, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-[3rem] modern-shadow border border-slate-100 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-900 border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <Building2 size={32} />
                      </div>
                      <Badge className="bg-indigo-50 text-indigo-700 border-none font-black text-[10px] uppercase tracking-widest px-3 py-1.5">{req.status}</Badge>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-1 italic tracking-tight">{req.company}</h4>
                    <p className="text-sm font-bold text-slate-500 mb-8">{req.position}</p>
                    <div className="p-6 bg-slate-50 rounded-2xl mb-8 flex items-center justify-between">
                       <div>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Candidats Matchés</p>
                         <p className="text-xl font-black text-primary">{req.matchCount} profils</p>
                       </div>
                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                          <Zap size={20} />
                       </div>
                    </div>
                    <Button className="w-full h-14 rounded-2xl bg-slate-900 text-white font-black hover:bg-primary transition-all shadow-lg">Gérer le Matching</Button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'analytics' && (
            <div className="bg-slate-900 p-20 rounded-[3.5rem] modern-shadow text-center py-40 animate-in fade-in duration-500 text-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-0" />
               <BarChart3 className="w-24 h-24 text-primary mx-auto mb-10 opacity-30 relative z-10" />
               <h2 className="text-4xl font-black mb-6 tracking-tight relative z-10">RH & Data Analytics</h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed relative z-10">
                 Visualisez en temps réel les KPI de performance : temps de traitement (objectif 48h), volume de CV par pays et compétences les plus recherchées.
               </p>
               <Button className="mt-12 h-16 px-12 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all relative z-10">
                 Générer Rapport Stratégique
               </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;