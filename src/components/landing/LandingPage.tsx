import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import TrainingCatalog from '../candidate/TrainingCatalog';

interface LandingPageProps {
  onCandidateClick: () => void;
  onPartnerClick: () => void;
  onAdminClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onCandidateClick, onPartnerClick, onAdminClick }) => {
  return (
    <div className="relative">
      <Navbar onCandidateClick={onCandidateClick} onPartnerClick={onPartnerClick} onAdminClick={onAdminClick} />
      <main>
        <Hero onCandidateClick={onCandidateClick} onPartnerClick={onPartnerClick} />
        <Stats />
        <Services />
        
        {/* Featured Training Section */}
        <section id="training" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Formation Professionnelle</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">Accélérez votre employabilité</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Des cursus certifiants conçus par des experts du secteur pour répondre aux besoins réels des entreprises.
              </p>
            </div>
            <TrainingCatalog />
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Nos Partenaires Recruteurs</h2>
              <p className="text-muted-foreground">Ils recrutent leurs talents GRC et digitaux chez SUNU Training Center.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-4xl font-black tracking-tighter hover:text-primary cursor-default">ORANGE</div>
              <div className="text-4xl font-black tracking-tighter hover:text-primary cursor-default">SONATEL</div>
              <div className="text-4xl font-black tracking-tighter hover:text-primary cursor-default">FREE</div>
              <div className="text-4xl font-black tracking-tighter hover:text-primary cursor-default">SENELEC</div>
              <div className="text-4xl font-black tracking-tighter hover:text-primary cursor-default">WAVE</div>
              <div className="text-4xl font-black tracking-tighter hover:text-primary cursor-default">BAOBAB</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-foreground text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/10 -skew-x-12 -translate-x-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-widest mb-8">
                   Innovation RH
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">L'Intelligence Artificielle au service de votre carrière</h2>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  SUNU Training Center n'est pas seulement un centre de formation. C'est un hub technologique qui utilise l'analyse sémantique et le matching IA pour révolutionner la rencontre entre les talents et les entreprises. 
                  <br /><br />
                  Notre plateforme digitale automatise le tri des candidatures et identifie les compétences clés cachées pour garantir une réactivité de 48h aux entreprises partenaires.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
                    <h4 className="text-3xl font-black text-primary mb-1">85%</h4>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Taux de succès</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
                    <h4 className="text-3xl font-black text-primary mb-1">48h</h4>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Matching Garanti</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(65,105,225,0.4)] border-8 border-white/5">
                  <img 
                    src="/front-view-smiley-man-doing-presentation-meeting.jpg" 
                    alt="Career Coaching Excellence" 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-gray-50/50 rounded-[3.5rem] p-10 md:p-20 flex flex-col lg:flex-row gap-16 md:gap-24 border border-gray-100">
              <div className="lg:w-2/5">
                <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Contact</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">Une question ?<br />Contactez nos experts.</h3>
                <p className="text-muted-foreground mb-12 text-lg">Notre équipe de conseillers RH et pédagogiques est à votre écoute pour vous accompagner dans votre projet de recrutement ou de formation.</p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Email Direct</p>
                      <p className="font-bold text-lg">contact@sunutraining.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Ligne Professionnelle</p>
                      <p className="font-bold text-lg">+221 33 800 00 00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Siège Social</p>
                      <p className="font-bold text-lg">Dakar, SÉNÉGAL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-gray-200/50 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold ml-1">Nom Complet</label>
                    <input className="w-full h-14 px-6 rounded-2xl border-2 border-gray-100 bg-gray-50/30 focus:bg-white focus:border-primary outline-none transition-all font-medium" placeholder="Ex: Moussa Diop" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold ml-1">Email</label>
                    <input className="w-full h-14 px-6 rounded-2xl border-2 border-gray-100 bg-gray-50/30 focus:bg-white focus:border-primary outline-none transition-all font-medium" placeholder="Ex: moussa@mail.com" />
                  </div>
                </div>
                <div className="space-y-3 mb-10">
                  <label className="text-sm font-bold ml-1">Message</label>
                  <textarea className="w-full min-h-[180px] p-6 rounded-2xl border-2 border-gray-100 bg-gray-50/30 focus:bg-white focus:border-primary outline-none transition-all font-medium leading-relaxed" placeholder="Comment pouvons-nous vous aider aujourd'hui ?"></textarea>
                </div>
                <button className="bg-primary text-white font-black py-5 px-10 rounded-2xl w-full shadow-2xl shadow-primary/25 hover:-translate-y-1 transition-all text-lg">
                  Envoyer le Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex bg-white rounded-2xl px-4 py-3 shadow-lg shadow-primary/10">
                  <img
                    src="/logo.png"
                    alt="SUNU Training Center"
                    className="h-24 w-auto max-w-[320px] object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-10">
                L'excellence dans le recrutement digitalisé et la formation professionnelle. Nous bâtissons le pont entre les talents africains et les opportunités mondiales.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary transition-all cursor-pointer border border-white/5 hover:border-transparent group">
                    <div className="w-6 h-6 bg-white/20 rounded-lg group-hover:bg-white/40 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Plateforme</h4>
              <ul className="space-y-5 text-gray-400 font-bold text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Offres d'emploi</a></li>
                <li><a href="#training" className="hover:text-primary transition-colors">Catalogue Formations</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Espace Entreprise</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Déposer mon CV</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Informations</h4>
              <ul className="space-y-5 text-gray-400 font-bold text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">À propos de nous</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Nous contacter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Politique RGPD</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentions Légales</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-24 pt-10 text-center text-gray-500 text-sm font-bold uppercase tracking-widest">
            &copy; 2026 SUNU Training Center. Digitalisé avec passion.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
