import React, { useState, useCallback } from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Code, 
  Upload, 
  FileText, 
  FileCheck,
  X, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Trash2,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const CVForm = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const [formData, setFormData] = useState({
    nom: '', prenom: '', sexe: '', age: '', nationalite: '', telephone: '', email: '', adresse: '',
    niveauEtude: '', domaineEtude: '', diplomes: '',
    langues: '', niveauAnglais: '', competences: '', experiences: '', disponibilite: '',
    acceptRGPD: false
  });

  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      simulateUpload(selectedFile);
    }
  };

  const simulateUpload = (selectedFile: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsAnalyzing(true);
          
          // Simulation d'analyse IA
          setTimeout(() => {
            setIsAnalyzing(false);
            setFile(selectedFile);
            toast.success("CV importé et analysé par notre IA ! Les compétences ont été détectées.");
          }, 2000);
          
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
    setIsAnalyzing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptRGPD) {
      toast.error("Veuillez accepter le traitement de vos données personnelles.");
      return;
    }
    toast.success("Candidature envoyée ! Vous recevrez un mail de confirmation.");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <User size={20} />
              </div>
              <h3 className="text-2xl font-bold">Informations Personnelles</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Nom</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Diop"
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Prénom</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Moussa"
                  value={formData.prenom}
                  onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Sexe</Label>
                <select 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                  value={formData.sexe}
                  onChange={(e) => setFormData({...formData, sexe: e.target.value})}
                >
                  <option value="">Sélectionner</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Âge</Label>
                <input 
                  type="number"
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: 25"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Nationalité</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Sénégalaise"
                  value={formData.nationalite}
                  onChange={(e) => setFormData({...formData, nationalite: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Téléphone</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: +221 77 000 00 00"
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
                <input 
                  type="email"
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: moussa.diop@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Adresse complète</Label>
                <textarea 
                  className="w-full min-h-[100px] p-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium leading-relaxed" 
                  placeholder="Ex: Sacré-Cœur 3, Dakar, Sénégal"
                  value={formData.adresse}
                  onChange={(e) => setFormData({...formData, adresse: e.target.value})}
                />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold">Informations Académiques</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Niveau d'étude</Label>
                <select 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                  value={formData.niveauEtude}
                  onChange={(e) => setFormData({...formData, niveauEtude: e.target.value})}
                >
                  <option value="">Sélectionner votre niveau</option>
                  <option value="Bac">Baccalauréat</option>
                  <option value="Bac+2">Bac +2 (BTS, DUT)</option>
                  <option value="Bac+3">Bac +3 (Licence)</option>
                  <option value="Bac+5">Bac +5 (Master, MBA, Ingénieur)</option>
                  <option value="Doctorat">Doctorat</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Domaine d'étude</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Marketing Digital, Finance, Informatique..."
                  value={formData.domaineEtude}
                  onChange={(e) => setFormData({...formData, domaineEtude: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Dernier diplôme obtenu</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Master en Gestion de la Relation Client"
                  value={formData.diplomes}
                  onChange={(e) => setFormData({...formData, diplomes: e.target.value})}
                />
              </div>
            </div>
            
            <div className="p-6 bg-blue-50/50 rounded-[1.5rem] border border-blue-100/50 flex gap-4 mt-8">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                <Zap className="text-primary animate-pulse" size={20} />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">
                Conseil : Indiquez précisément vos diplômes pour permettre à notre IA de mieux cibler les offres correspondant à votre rang académique.
              </p>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-bold">Compétences & Expérience</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Langues parlées</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Français, Anglais, Wolof"
                  value={formData.langues}
                  onChange={(e) => setFormData({...formData, langues: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Niveau d'anglais</Label>
                <select 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                  value={formData.niveauAnglais}
                  onChange={(e) => setFormData({...formData, niveauAnglais: e.target.value})}
                >
                  <option value="">Sélectionner un niveau</option>
                  <option value="A1">Débutant (A1)</option>
                  <option value="A2">Élémentaire (A2)</option>
                  <option value="B1">Intermédiaire (B1)</option>
                  <option value="B2">Intermédiaire avancé (B2)</option>
                  <option value="C1">Avancé (C1)</option>
                  <option value="C2">Bilingue (C2)</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Compétences techniques (Hard Skills)</Label>
                <input 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium" 
                  placeholder="Ex: Salesforce, CRM, Excel, SEO, Vente, Communication"
                  value={formData.competences}
                  onChange={(e) => setFormData({...formData, competences: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Expériences professionnelles (Résumé)</Label>
                <textarea 
                  className="w-full min-h-[120px] p-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium leading-relaxed" 
                  placeholder="Décrivez brièvement vos postes précédents et vos principales responsabilités..."
                  value={formData.experiences}
                  onChange={(e) => setFormData({...formData, experiences: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Disponibilité pour nouveau poste</Label>
                <select 
                  className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                  value={formData.disponibilite}
                  onChange={(e) => setFormData({...formData, disponibilite: e.target.value})}
                >
                  <option value="">Sélectionner</option>
                  <option value="Immédiate">Immédiate</option>
                  <option value="15 jours">Sous 15 jours</option>
                  <option value="1 mois">1 mois (Préavis)</option>
                  <option value="3 mois">3 mois (Préavis)</option>
                  <option value="Flexible">À convenir</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Upload size={20} />
              </div>
              <h3 className="text-2xl font-bold">Dépôt de CV & IA Analysis</h3>
            </div>
            
            <div className="space-y-4">
              <Label className="font-bold text-sm text-foreground">Téléchargez votre CV (Format PDF ou DOCX uniquement)</Label>
              <div 
                className={`border-4 border-dashed rounded-[2.5rem] p-12 flex flex-col items-center justify-center transition-all duration-300 relative overflow-hidden ${
                  file ? 'border-green-500 bg-green-50/30' : 
                  isAnalyzing ? 'border-primary bg-primary/5' :
                  'border-gray-200 bg-gray-50/50 hover:border-primary/40 hover:bg-white'
                }`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files[0]) simulateUpload(e.dataTransfer.files[0]);
                }}
              >
                {!file && !isUploading && !isAnalyzing && (
                  <>
                    <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-6 shadow-inner">
                      <Upload size={36} />
                    </div>
                    <p className="text-lg font-black text-foreground mb-1">Glissez-déposez votre CV ici</p>
                    <p className="text-sm text-muted-foreground mb-8">ou cliquez pour sélectionner un fichier</p>
                    <input 
                      type="file" 
                      id="cv-upload-final" 
                      className="hidden" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                    />
                    <Button onClick={() => document.getElementById('cv-upload-final')?.click()} variant="outline" className="rounded-2xl h-12 px-8 font-bold border-2 hover:bg-primary hover:text-white transition-all">
                      Parcourir les dossiers
                    </Button>
                  </>
                )}

                {isUploading && (
                  <div className="w-full max-w-sm space-y-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload size={32} className="text-primary animate-bounce" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-primary mb-3">
                        <span>Transfert en cours...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-3 bg-gray-100" />
                    </div>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="w-full max-w-sm space-y-6 text-center py-4">
                    <div className="w-24 h-24 relative mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-primary/10"></div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-primary">
                        <Zap size={32} className="animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-primary uppercase tracking-[0.2em] text-xs mb-2">Analyse par IA</p>
                      <p className="text-sm text-muted-foreground">Extraction des compétences et structuration des données...</p>
                    </div>
                  </div>
                )}

                {file && !isAnalyzing && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-6 w-full max-w-xl bg-white p-6 rounded-[2rem] border-2 border-green-100 shadow-xl shadow-green-900/5"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shadow-inner">
                      <FileCheck size={32} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-black text-foreground truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">{(file.size / 1024).toFixed(1)} KB • CV ANALYSÉ ✓</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="h-12 w-12 rounded-2xl text-red-500 hover:bg-red-50" onClick={removeFile}>
                        <Trash2 size={20} />
                      </Button>
                      <div className="h-12 w-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                        <CheckCircle2 size={24} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="bg-blue-50/40 p-6 rounded-[2rem] flex gap-5 items-start border border-blue-100/50">
              <Checkbox 
                id="rgpd-final" 
                className="mt-1 h-5 w-5 rounded-md" 
                checked={formData.acceptRGPD}
                onCheckedChange={(checked) => setFormData({...formData, acceptRGPD: checked as boolean})}
              />
              <label htmlFor="rgpd-final" className="text-xs text-muted-foreground leading-relaxed cursor-pointer font-medium">
                J'autorise explicitement SUNU Training Center à traiter mes données personnelles et mon CV via ses algorithmes d'intelligence artificielle dans le but de me proposer des opportunités professionnelles correspondant à mon profil, conformément au Règlement Général sur la Protection des Données (RGPD).
              </label>
            </div>

            <Button 
              className="w-full h-16 text-lg font-black rounded-[1.25rem] shadow-2xl shadow-primary/30 bg-primary group" 
              onClick={handleSubmit}
              disabled={!file}
            >
              Envoyer ma candidature <Zap className="ml-2 group-hover:scale-125 transition-transform" size={20} />
            </Button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-6 pb-20">
      <div className="bg-white rounded-[3rem] modern-shadow border border-white overflow-hidden flex flex-col lg:flex-row">
        {/* Step Progress Sidebar */}
        <div className="lg:w-80 bg-gray-50/50 p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="flex items-center gap-3 mb-12">
            <img
              src="/logo.png"
              alt="SUNU Training Center"
              className="h-11 w-auto max-w-[140px] object-contain"
            />
            <h2 className="font-extrabold text-xl tracking-tight">Ma Candidature</h2>
          </div>
          
          <div className="space-y-10 relative">
            {/* Connection line */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200 -z-0" />
            
            {[
              { step: 1, label: 'Personnelle', icon: User, desc: 'Identité & Contact' },
              { step: 2, label: 'Académique', icon: GraduationCap, desc: 'Études & Diplômes' },
              { step: 3, label: 'Compétences', icon: Briefcase, desc: 'Expérience & Skills' },
              { step: 4, label: 'Dépôt CV', icon: Upload, desc: 'Analyse IA' }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5 relative z-10">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500 shrink-0 shadow-lg ${
                  step === item.step ? 'bg-primary text-white scale-110 shadow-primary/20' : 
                  step > item.step ? 'bg-green-500 text-white shadow-green-500/10' : 'bg-white text-gray-400 border border-gray-100'
                }`}>
                  {step > item.step ? <CheckCircle2 size={20} /> : item.step}
                </div>
                <div>
                  <span className={`text-sm font-black block leading-none mb-1 transition-colors ${step === item.step ? 'text-primary' : 'text-gray-400'}`}>
                    {item.label}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="text-primary" size={16} />
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Sécurité IA</p>
            </div>
            <p className="text-[11px] text-muted-foreground font-semibold leading-relaxed">
              Vos données sont cryptées et analysées uniquement par nos serveurs sécurisés. Aucune donnée n'est revendue à des tiers.
            </p>
          </div>
        </div>

        {/* Form Content Area */}
        <div className="flex-1 p-8 md:p-16">
          <AnimatePresence mode="wait">
            <div key={step} className="min-h-[450px]">
              {renderStep()}
            </div>
          </AnimatePresence>
          
          <div className="flex justify-between items-center mt-16 pt-10 border-t border-gray-50">
            <Button 
              variant="ghost" 
              onClick={prevStep} 
              disabled={step === 1}
              className="rounded-xl h-12 px-8 font-bold text-muted-foreground hover:text-foreground transition-all flex items-center gap-2"
            >
              <ChevronLeft size={20} /> Précédent
            </Button>
            
            {step < totalSteps && (
              <Button 
                onClick={nextStep} 
                className="rounded-2xl h-14 px-10 font-black shadow-xl shadow-primary/20 flex items-center gap-2"
              >
                Continuer <ChevronRight size={22} />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Platform Info Footer */}
      <div className="mt-10 flex flex-wrap justify-center gap-10 text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em]">
        <span className="flex items-center gap-2"><ShieldCheck size={14} /> Cloud SÉCURISÉ</span>
        <span className="flex items-center gap-2"><Zap size={14} /> Analyse TEMPS RÉEL</span>
        <span className="flex items-center gap-2"><FileText size={14} /> Conforme RGPD</span>
      </div>
    </div>
  );
};

export default CVForm;
