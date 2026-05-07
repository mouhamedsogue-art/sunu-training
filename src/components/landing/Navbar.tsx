import React, { useState } from 'react';
import { LogIn, Menu, UserPlus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { UserRole } from '@/App';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: (defaultRole?: Exclude<UserRole, 'visitor'>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Offres', href: '#services' },
    { name: 'Formations', href: '#training' },
    { name: 'A propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-100 h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/logo.png"
              alt="SUNU Training Center"
              className="h-20 w-auto max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

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

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="rounded-xl font-black text-[10px] px-5 h-10 hover:bg-slate-50 uppercase tracking-widest"
              onClick={onLoginClick}
            >
              <LogIn className="mr-2 w-4 h-4 text-slate-500" />
              Connexion
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 rounded-2xl font-black text-[10px] px-8 shadow-2xl shadow-primary/20 h-12 uppercase tracking-widest transition-all hover:-translate-y-0.5"
              onClick={() => onRegisterClick('candidate')}
            >
              <UserPlus className="mr-2 w-4 h-4" />
              Inscription
            </Button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

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
              <Button
                className="w-full bg-primary rounded-2xl h-16 font-black uppercase tracking-widest text-xs"
                onClick={() => {
                  onRegisterClick('candidate');
                  setIsOpen(false);
                }}
              >
                Inscription
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-2xl h-16 font-black border-2 border-slate-200 uppercase tracking-widest text-xs"
                onClick={() => {
                  onLoginClick();
                  setIsOpen(false);
                }}
              >
                Connexion
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
