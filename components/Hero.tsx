import React, { useEffect, useState } from 'react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [scrollY, setScrollY] = useState(0);
  
  // Typing animation state
  const fullText = "DIGITAL FUTURE";
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Typing logic
    let index = 0;
    // Start typing after a slight delay to allow fade-in of first line to start
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      }, 100); // Speed of typing
      
      return () => clearInterval(typingInterval);
    }, 800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-prime-dark z-0">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-20"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prime-blue rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-prime-accent rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="mb-8 inline-block px-4 py-1 border border-prime-light/30 rounded-full bg-prime-blue/20 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-prime-light font-tech tracking-widest text-sm uppercase">Next-Gen Digital Transformation</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight tracking-tight drop-shadow-2xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            ACCELERATE YOUR
          </span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-prime-light to-prime-accent min-h-[1.2em]">
             {displayText}
             <span className={`${isTypingComplete ? 'animate-pulse' : 'animate-blink'} text-prime-accent ml-1 inline-block w-1 md:w-2 h-10 md:h-16 align-middle bg-prime-accent`}></span>
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
          Empowering enterprises with intelligent automation, AI-driven modernization, and custom web solutions. We build the systems of tomorrow, today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '2.8s', animationFillMode: 'forwards' }}>
          <button 
            onClick={onBookClick}
            className="px-8 py-4 border border-prime-light/50 text-prime-light font-bold font-tech tracking-wider uppercase rounded hover:bg-prime-light/10 transition-all backdrop-blur-sm hover:border-prime-light"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Decorative Circuit Lines */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-0 opacity-30 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 L20 80 L40 80 L60 40 L100 40" stroke="#00A8E8" strokeWidth="0.2" fill="none" />
           <path d="M10 100 L30 90 L50 90 L80 20 L100 10" stroke="#D7263D" strokeWidth="0.2" fill="none" />
         </svg>
      </div>
    </section>
  );
};