import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { AIModal } from './components/AIModal';
import { BookingModal } from './components/BookingModal';
import { SERVICES, TEAM_MEMBERS, CASE_STUDIES, Icons } from './constants';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  const openBooking = () => setIsBookingModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-prime-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Logo className="scale-75 md:scale-100 origin-left" />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-tech tracking-wider text-sm">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-prime-light transition-colors cursor-pointer">SERVICES</a>
            <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="hover:text-prime-light transition-colors cursor-pointer">WHY US</a>
            <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="hover:text-prime-light transition-colors cursor-pointer">TEAM</a>
            <button 
              onClick={() => setIsAIModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-prime-light text-prime-light rounded hover:bg-prime-light hover:text-black transition-all"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              ASK AI
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isNavOpen && (
          <div className="md:hidden bg-prime-dark border-b border-gray-800 px-6 py-4 space-y-4 font-tech">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block hover:text-prime-light cursor-pointer">SERVICES</a>
            <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="block hover:text-prime-light cursor-pointer">WHY US</a>
            <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="block hover:text-prime-light cursor-pointer">TEAM</a>
            <button 
              onClick={() => { setIsAIModalOpen(true); setIsNavOpen(false); }}
              className="w-full text-left text-prime-light"
            >
              AI CONSULTANT
            </button>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Hero onBookClick={openBooking} />

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-900 relative scroll-mt-24">
           {/* Diagonal divider */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-prime-light to-transparent opacity-50"></div>
          
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Our Expertise</h2>
              <div className="w-24 h-1 bg-prime-accent mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <div key={index} className="group p-8 bg-gray-800/50 border border-gray-700 hover:border-prime-light/50 rounded-xl transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,168,232,0.1)]">
                  <div className="mb-6 text-prime-light group-hover:text-prime-accent transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-tech font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 font-body text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Automate Prime */}
        <section id="why-us" className="py-24 bg-prime-dark relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-heading font-bold mb-6">Why Choose <span className="text-prime-light">Automate Prime</span>?</h2>
                <p className="text-gray-300 mb-8 font-body leading-relaxed text-lg">
                  We don't just update your software; we revolutionize your business model. Using a proprietary blend of OT/IT convergence strategies and generative AI, we unlock value that traditional consultancies miss.
                </p>
                <ul className="space-y-4">
                  {[
                    "End-to-End Digital Sovereignty",
                    "Rapid Prototyping & Deployment",
                    "Enterprise-Grade Security First",
                    "24/7 AI-Assisted Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-tech text-xl">
                      <svg className="w-6 h-6 text-prime-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                 {/* Case Studies Cards Mini */}
                 {CASE_STUDIES.map((study, idx) => (
                   <div key={idx} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-prime-accent shadow-lg">
                     <div className="flex justify-between items-start">
                       <h4 className="font-bold text-white">{study.client}</h4>
                       <span className="text-xs bg-prime-blue/50 px-2 py-1 rounded text-prime-light">{study.metric}</span>
                     </div>
                     <p className="text-gray-400 text-sm mt-2">{study.result}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section id="team" className="py-24 bg-gray-900 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Visionary Leadership</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Meet the minds engineering the future.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="w-64 bg-prime-dark border border-gray-800 rounded-lg overflow-hidden group hover:border-prime-light transition-all duration-500">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-prime-dark to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-prime-accent font-tech tracking-widest text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-prime-blue to-prime-dark text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
             </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Ready to Automate Your Success?</h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">Join the digital revolution. Schedule a consultation with our experts today.</p>
            <button 
              onClick={openBooking}
              className="bg-white text-prime-blue px-10 py-4 rounded font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
            >
              Book Your Strategy Session
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <Logo className="scale-75 origin-left" />
             <p className="text-gray-500 text-sm mt-4 max-w-xs">
               Pioneering the future of industry through intelligence, automation, and strategic innovation.
             </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 text-sm text-gray-400 font-tech tracking-wide">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Careers</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-12 font-body">
          &copy; {new Date().getFullYear()} Automate Prime. All rights reserved.
        </div>
      </footer>

      {/* Modals */}
      <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      
      {/* Floating AI Trigger (if modal closed) */}
      {!isAIModalOpen && (
        <button 
          onClick={() => setIsAIModalOpen(true)}
          className="fixed bottom-8 right-8 bg-prime-accent hover:bg-red-600 text-white p-4 rounded-full shadow-2xl z-40 transition-all hover:scale-110 group"
          aria-label="Open AI Assistant"
        >
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
          <Icons.AI />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask AI
          </span>
        </button>
      )}
    </div>
  );
}