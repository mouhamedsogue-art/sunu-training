import React, { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import LandingPage from './components/landing/LandingPage';
import CandidatePortal from './components/candidate/CandidatePortal';
import PartnerDashboard from './components/partner/PartnerDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import CookieConsent from './components/shared/CookieConsent';
import AuthPage from './components/auth/AuthPage';

export type UserRole = 'visitor' | 'candidate' | 'partner' | 'admin';
type AuthMode = 'login' | 'register';
type AuthRole = Exclude<UserRole, 'visitor'>;
type AppView = 'landing' | AuthMode;

interface StoredSession {
  email: string;
  role: AuthRole;
}

const SESSION_KEY = 'sunu-auth-session';

function App() {
  const [role, setRole] = useState<UserRole>('visitor');
  const [view, setView] = useState<AppView>('landing');
  const [authDefaultRole, setAuthDefaultRole] = useState<AuthRole>('candidate');

  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_KEY);

    if (!storedSession) {
      setRole('visitor');
      setView('landing');
      return;
    }

    try {
      const session = JSON.parse(storedSession) as StoredSession;

      if (session.role === 'admin' || session.role === 'candidate' || session.role === 'partner') {
        setRole(session.role);
        setView('landing');
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
      setRole('visitor');
      setView('landing');
    }
  }, []);

  const openAuth = (mode: AuthMode, defaultRole: AuthRole = 'candidate') => {
    setAuthDefaultRole(defaultRole);
    setView(mode);
    setRole('visitor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthenticated = (nextRole: AuthRole, email: string) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email, role: nextRole }));
    setRole(nextRole);
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setRole('visitor');
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    if (view === 'login' || view === 'register') {
      return (
        <AuthPage
          mode={view}
          defaultRole={authDefaultRole}
          onBack={() => setView('landing')}
          onModeChange={openAuth}
          onAuthenticated={handleAuthenticated}
        />
      );
    }

    switch (role) {
      case 'candidate':
        return <CandidatePortal onExit={handleLogout} />;
      case 'partner':
        return <PartnerDashboard onExit={handleLogout} />;
      case 'admin':
        return <AdminDashboard onExit={handleLogout} />;
      default:
        return (
          <LandingPage 
            onLoginClick={() => openAuth('login')}
            onRegisterClick={(defaultRole) => openAuth('register', defaultRole)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {renderView()}
      <Toaster position="top-right" richColors />
      <CookieConsent />
    </div>
  );
}

export default App;
