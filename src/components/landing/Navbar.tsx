import React, { useState } from 'react';
import {
  Menu, 
  X, 
  User,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onCandidateClick: () => void;
  onPartnerClick: () => void;
  onAdminClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCandidateClick, onPartnerClick, onAdminClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Offres', href: '#services' },
    { name: 'Formations', href: '#training' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-100 h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/logo.png"
              alt="SUNU Training Center"
              className="h-16 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black text-slate-400 hover:text-primary transition-all relative group uppercase tracking-widest"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="rounded-xl font-black text-[10px] px-5 h-10 hover:bg-slate-50 uppercase tracking-widest" onClick={onPartnerClick}>
              <Building2 className="mr-2 w-4 h-4 text-orange-500" /> Espace Partenaire
            </Button>
            <Button className="bg-primary hover:bg-primary/90 rounded-2xl font-black text-[10px] px-8 shadow-2xl shadow-primary/20 h-12 uppercase tracking-widest transition-all hover:-translate-y-0.5" onClick={onCandidateClick}>
              <User className="mr-2 w-4 h-4" /> Déposer mon CV
            </Button>
            <div className="w-px h-6 bg-slate-200 mx-3" />
            <button 
              onClick={onAdminClick}
              className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
              title="Administration"
            >
              <ShieldCheck size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-100 p-8 lg:hidden animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-black text-slate-900 uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-100" />
            <div className="flex flex-col gap-4">
              <Button className="w-full bg-primary rounded-2xl h-16 font-black uppercase tracking-widest text-xs" onClick={() => { onCandidateClick(); setIsOpen(false); }}>
                Déposer mon CV
              </Button>
              <Button variant="outline" className="w-full rounded-2xl h-16 font-black border-2 border-slate-200 uppercase tracking-widest text-xs" onClick={() => { onPartnerClick(); setIsOpen(false); }}>
                Espace Partenaire
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
