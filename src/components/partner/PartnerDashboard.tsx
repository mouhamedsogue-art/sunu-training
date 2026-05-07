import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Plus, 
  LogOut, 
  LayoutDashboard, 
  Clock, 
  History, 
  ArrowUpRight,
  Briefcase,
  Mail,
  Phone,
  Search,
  CheckCircle2,
  Calendar,
  Zap,
  ChevronRight,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface PartnerDashboardProps {
  onExit: () => void;
}

const PartnerDashboard: React.FC<PartnerDashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'new-request' | 'history'>('dashboard');

  const stats = [
    { label: 'Postes ouverts', value: '4', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Candidats trouvés', value: '18', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Demandes en cours', value: '2', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const requests = [
    { id: 'REQ-001', role: 'Conseiller GRC', count: 5, status: 'Matching IA', date: "Aujourd'hui, 10:45", progress: 65 },
    { id: 'REQ-002', role: 'Manager CRM', count: 1, status: 'Terminé', date: '05 Mars 2026', progress: 100 },
    { id: 'REQ-003', role: 'Télévendeur', count: 10, status: 'En attente', date: '14 Mars 2026', progress: 20 },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col fixed h-full z-20 shadow-2xl">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Building2 className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg leading-none tracking-tight">SUNU B2B</span>
              <span className="text-[10px] text-orange-400 font-black uppercase tracking-widest mt-1">Entreprise</span>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 mt-6">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-black transition-all ${
              activeTab === 'dashboard' ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20 scale-[1.02]' : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('new-request')} 
            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-black transition-all ${
              activeTab === 'new-request' ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20 scale-[1.02]' : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Plus size={20} /> Nouveau Recrutement
          </button>
          <button 
            onClick={() => setActiveTab('history')} 
            className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-black transition-all ${
              activeTab === 'history' ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20 scale-[1.02]' : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <History size={20} /> Historique
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={onExit} className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-black text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut size={20} /> Déconnexion
          </button>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 min-h-screen">
        <header className="h-20 bg-white border-b border-slate-200/60 flex items-center justify-between px-10 sticky top-0 z-10 backdrop-blur-md bg-white/80">
          <div>
            <h2 className="font-black text-xl text-slate-900 tracking-tight">Orange Sénégal</h2>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secteur Télécoms</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-2">
              <p className="text-sm font-black">Mme. Ndour</p>
              <p className="text-[10px] text-orange-500 font-bold uppercase">Responsable RH</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-black shadow-sm border border-orange-200">
              OS
            </div>
          </div>
        </header>

        <div className="p-10">
          {activeTab === 'dashboard' && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] modern-shadow border border-slate-100 group hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <stat.icon size={28} />
                    </div>
                    <p className="text-sm font-bold text-slate-500 mb-1">{stat.label}</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-[2.5rem] modern-shadow border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                  <h3 className="font-black text-lg tracking-tight flex items-center gap-2">
                    <Zap size={20} className="text-orange-500" /> Suivi des demandes
                  </h3>
                  <Button variant="outline" className="rounded-xl font-bold h-10 border-2">Voir tout l'historique</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-white text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                      <tr>
                        <th className="px-8 py-5">Poste recherché</th>
                        <th className="px-8 py-5">Candidats</th>
                        <th className="px-8 py-5">Date dépôt</th>
                        <th className="px-8 py-5">Statut Matching IA</th>
                        <th className="px-8 py-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {requests.map((req) => (
                        <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-6">
                            <div className="font-black text-slate-900">{req.role}</div>
                            <div className="text-[10px] font-bold text-slate-400">{req.id}</div>
                          </td>
                          <td className="px-8 py-6 font-bold text-slate-700">{req.count} profils</td>
                          <td className="px-8 py-6 text-sm font-medium text-slate-500">{req.date}</td>
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-slate-100 rounded-full max-w-[100px] overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${req.progress}%` }} />
                              </div>
                              <Badge className={`border-none font-bold py-1 px-3 ${req.status === 'Terminé' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                                {req.status}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <Button size="icon" variant="ghost" className="rounded-xl hover:bg-orange-50 hover:text-orange-500"><ArrowUpRight size={18} /></Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'new-request' && (
             <div className="max-w-5xl mx-auto bg-white rounded-[3rem] modern-shadow border border-slate-100 p-12 animate-in slide-in-from-bottom-4 duration-500">
                <div className="mb-10 text-center">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Formulaire de recrutement B2B</h3>
                  <p className="text-slate-500 font-medium">Définissez vos besoins et laissez notre IA trouver vos futurs talents.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   {/* Section 1: Entreprise */}
                   <div className="space-y-6">
                     <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest border-b pb-2">Informations Entreprise</h4>
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <Label className="font-bold text-slate-700">Nom entreprise</Label>
                           <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: Orange Sénégal" />
                        </div>
                        <div className="space-y-2">
                           <Label className="font-bold text-slate-700">Secteur d’activité</Label>
                           <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: Télécommunications" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="font-bold text-slate-700">Responsable RH</Label>
                            <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Nom complet" />
                          </div>
                          <div className="space-y-2">
                            <Label className="font-bold text-slate-700">Téléphone</Label>
                            <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="+221..." />
                          </div>
                        </div>
                        <div className="space-y-2">
                           <Label className="font-bold text-slate-700">Email professionnel</Label>
                           <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="rh@entreprise.com" />
                        </div>
                     </div>
                   </div>

                   {/* Section 2: Besoin */}
                   <div className="space-y-6">
                     <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest border-b pb-2">Détails du Poste</h4>
                     <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="font-bold text-slate-700">Poste recherché</Label>
                            <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: Conseiller GRC" />
                          </div>
                          <div className="space-y-2">
                            <Label className="font-bold text-slate-700">Nombre de candidats</Label>
                            <Input type="number" className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: 5" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="font-bold text-slate-700">Niveau d’étude</Label>
                            <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: Bac+3" />
                          </div>
                          <div className="space-y-2">
                            <Label className="font-bold text-slate-700">Expérience (ans)</Label>
                            <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: 2 ans" />
                          </div>
                        </div>
                        <div className="space-y-2">
                           <Label className="font-bold text-slate-700">Langues & Compétences exigées</Label>
                           <Input className="h-12 rounded-xl bg-slate-50/50 border-slate-200" placeholder="Ex: Français, Anglais, CRM Salesforce" />
                        </div>
                     </div>
                   </div>

                   <div className="md:col-span-2 space-y-4">
                      <Label className="font-bold text-slate-700">Description détaillée du besoin</Label>
                      <Textarea className="min-h-[150px] rounded-[1.5rem] bg-slate-50/50 border-slate-200 p-6" placeholder="Décrivez les missions, le contexte et les soft-skills attendus..." />
                   </div>
                </div>

                <div className="mt-12 flex items-center justify-between gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium max-w-md">En envoyant cette demande, nos algorithmes IA commenceront immédiatement à scanner notre base de +12k profils pour vous proposer les meilleurs matchs sous 48h.</p>
                  <Button className="bg-orange-500 hover:bg-orange-600 h-16 px-12 rounded-2xl text-white font-black shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-1" onClick={() => { toast.success("Demande de recrutement transmise avec succès !"); setActiveTab('dashboard'); }}>
                    Lancer le recrutement
                  </Button>
                </div>
             </div>
          )}

          {activeTab === 'history' && (
            <div className="bg-white p-20 rounded-[3rem] modern-shadow border border-slate-100 text-center py-32 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mx-auto mb-8 border border-slate-100">
                <History size={48} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Historique des recrutements</h2>
              <p className="text-slate-500 max-w-lg mx-auto text-lg font-medium">Consultez ici tous vos anciens recrutements et les profils que vous avez déjà validés.</p>
              <Button variant="outline" className="mt-10 h-14 px-10 rounded-2xl border-2 font-black">Retour au Dashboard</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PartnerDashboard;
