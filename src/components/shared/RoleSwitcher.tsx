import React from 'react';
import { 
  Users, 
  Building2, 
  Search, 
  Filter, 
  ChevronRight, 
  Mail, 
  Video, 
  FileText,
  BadgeCheck,
  Zap,
  LayoutDashboard,
  ShieldCheck,
  CircleUser
} from 'lucide-react';
import { motion } from 'framer-motion';

const RoleSwitcher = ({ currentRole, setRole }: { currentRole: string, setRole: (role: any) => void }) => {
  const roles = [
    { id: 'visitor', label: 'Accueil', icon: LayoutDashboard },
    { id: 'candidate', label: 'Candidat', icon: CircleUser },
    { id: 'partner', label: 'Partenaire', icon: Building2 },
    { id: 'admin', label: 'Admin IA', icon: ShieldCheck }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-foreground/90 backdrop-blur-xl px-3 py-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex items-center gap-2">
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => setRole(role.id as any)}
          className={`relative px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-3 transition-all duration-500 overflow-hidden group ${
            currentRole === role.id 
              ? 'text-white' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {currentRole === role.id && (
            <motion.div 
              layoutId="role-bg"
              className="absolute inset-0 bg-primary -z-10 shadow-lg shadow-primary/30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <role.icon size={18} className={`transition-transform duration-500 ${currentRole === role.id ? 'scale-110' : 'group-hover:scale-110'}`} />
          <span className="hidden sm:inline-block relative">
            {role.label}
          </span>
          {role.id === 'admin' && (
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default RoleSwitcher;