import React, { useMemo, useState } from 'react';
import { ArrowLeft, Building2, LockKeyhole, LogIn, Mail, ShieldCheck, User, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { UserRole } from '@/App';

type AuthMode = 'login' | 'register';
type AuthRole = Exclude<UserRole, 'visitor'>;

interface AuthPageProps {
  mode: AuthMode;
  defaultRole?: AuthRole;
  onBack: () => void;
  onModeChange: (mode: AuthMode, defaultRole?: AuthRole) => void;
  onAuthenticated: (role: AuthRole, email: string) => void;
}

const DEMO_USERS: Record<string, { password: string; role: AuthRole; label: string }> = {
  'admin@admin.com': { password: 'test123', role: 'admin', label: 'Administrateur' },
  'candidat@candidat.com': { password: 'test123', role: 'candidate', label: 'Candidat' },
  'entreprise@entreprise.com': { password: 'test123', role: 'partner', label: 'Entreprise' },
};

const roleOptions: Array<{ value: AuthRole; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { value: 'candidate', label: 'Candidat', icon: User },
  { value: 'partner', label: 'Entreprise', icon: Building2 },
];

const AuthPage: React.FC<AuthPageProps> = ({
  mode,
  defaultRole = 'candidate',
  onBack,
  onModeChange,
  onAuthenticated,
}) => {
  const [email, setEmail] = useState(mode === 'login' ? '' : defaultRole === 'partner' ? 'entreprise@entreprise.com' : 'candidat@candidat.com');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedRole, setSelectedRole] = useState<AuthRole>(defaultRole);

  const isLogin = mode === 'login';

  const selectedRoleMeta = useMemo(
    () => roleOptions.find((role) => role.value === selectedRole) ?? roleOptions[0],
    [selectedRole],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (isLogin) {
      const demoUser = DEMO_USERS[normalizedEmail];

      if (!demoUser || demoUser.password !== password) {
        toast.error('Email ou mot de passe incorrect.');
        return;
      }

      toast.success(`Bienvenue dans votre espace ${demoUser.label}.`);
      onAuthenticated(demoUser.role, normalizedEmail);
      return;
    }

    if (!fullName.trim()) {
      toast.error('Veuillez renseigner votre nom complet.');
      return;
    }

    if (!normalizedEmail || !password) {
      toast.error('Veuillez renseigner votre email et votre mot de passe.');
      return;
    }

    if (password.length < 6) {
      toast.error('Le mot de passe doit contenir au moins 6 caracteres.');
      return;
    }

    toast.success('Compte cree avec succes.');
    onAuthenticated(selectedRole, normalizedEmail);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative hidden overflow-hidden lg:block">
          <img
            src="/manager-women-working-hiring-application-discussing-curriculum-vitae-with-remote-recruiter-online-videocall-meeting-conference-startup-office-teleconference-call-computer-screen.jpg"
            alt="Equipe recrutement SUNU Training Center"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-x-0 bottom-0 p-12">
            <div className="mb-8 inline-flex rounded-2xl bg-white px-4 py-3 shadow-2xl">
              <img src="/logo.png" alt="SUNU Training Center" className="h-20 w-auto max-w-[280px] object-contain" />
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight">
              Un acces clair pour chaque profil.
            </h1>
            <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed text-white/75">
              Les candidats, entreprises et administrateurs arrivent chacun dans l'espace qui leur correspond.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-10 sm:px-8">
          <div className="w-full max-w-xl">
            <Button
              type="button"
              variant="ghost"
              className="mb-8 h-11 rounded-xl px-3 text-white hover:bg-white/10 hover:text-white"
              onClick={onBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour a l'accueil
            </Button>

            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl sm:p-8">
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                    {isLogin ? 'Connexion' : 'Inscription'}
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    {isLogin ? 'Connectez-vous' : 'Creez votre compte'}
                  </h2>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  {isLogin ? <LogIn className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
                </div>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="font-bold">Nom complet</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="h-13 rounded-xl border-slate-200 bg-slate-50 px-4 font-medium"
                      placeholder="Ex: Moussa Diop"
                    />
                  </div>
                )}

                {!isLogin && (
                  <div className="space-y-2">
                    <Label className="font-bold">Type de compte</Label>
                    <Select value={selectedRole} onValueChange={(value) => setSelectedRole(value as AuthRole)}>
                      <SelectTrigger className="h-13 w-full rounded-xl border-slate-200 bg-slate-50 px-4 font-bold">
                        <SelectValue placeholder="Choisir un espace" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleOptions.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            <role.icon className="h-4 w-4" />
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-13 rounded-xl border-slate-200 bg-slate-50 pl-11 pr-4 font-medium"
                      placeholder={isLogin ? 'admin@admin.com' : 'votre@email.com'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="font-bold">Mot de passe</Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="h-13 rounded-xl border-slate-200 bg-slate-50 pl-11 pr-4 font-medium"
                      placeholder="test123"
                    />
                  </div>
                </div>

                <Button type="submit" className="h-14 w-full rounded-2xl text-sm font-black uppercase tracking-widest">
                  {isLogin ? 'Se connecter' : `Continuer comme ${selectedRoleMeta.label}`}
                </Button>
              </form>

              {isLogin && (
                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                    <ShieldCheck className="h-4 w-4" />
                    Comptes de test
                  </div>
                  <div className="grid gap-2 text-sm font-semibold text-slate-600">
                    <span>admin@admin.com / test123</span>
                    <span>candidat@candidat.com / test123</span>
                    <span>entreprise@entreprise.com / test123</span>
                  </div>
                </div>
              )}

              <div className="mt-7 text-center text-sm font-semibold text-slate-500">
                {isLogin ? 'Pas encore de compte ?' : 'Vous avez deja un compte ?'}{' '}
                <button
                  type="button"
                  className="font-black text-slate-950 underline underline-offset-4"
                  onClick={() => onModeChange(isLogin ? 'register' : 'login', selectedRole)}
                >
                  {isLogin ? 'Inscription' : 'Connexion'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthPage;
