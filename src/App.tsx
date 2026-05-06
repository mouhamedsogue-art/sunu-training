import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import LandingPage from './components/landing/LandingPage';
import CandidatePortal from './components/candidate/CandidatePortal';
import PartnerDashboard from './components/partner/PartnerDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import RoleSwitcher from './components/shared/RoleSwitcher';
import CookieConsent from './components/shared/CookieConsent';

export type UserRole = 'visitor' | 'candidate' | 'partner' | 'admin';

function App() {
  const [role, setRole] = useState<UserRole>('visitor');

  const renderView = () => {
    switch (role) {
      case 'candidate':
        return <CandidatePortal onExit={() => setRole('visitor')} />;
      case 'partner':
        return <PartnerDashboard onExit={() => setRole('visitor')} />;
      case 'admin':
        return <AdminDashboard onExit={() => setRole('visitor')} />;
      default:
        return (
          <LandingPage 
            onCandidateClick={() => setRole('candidate')} 
            onPartnerClick={() => setRole('partner')} 
            onAdminClick={() => setRole('admin')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      {renderView()}
      <RoleSwitcher currentRole={role} setRole={setRole} />
      <Toaster position="top-right" richColors />
      <CookieConsent />
    </div>
  );
}

export default App;