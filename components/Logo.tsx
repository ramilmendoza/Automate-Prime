import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Apply default height 'h-28' (double of previous h-14) only if no height class is provided
  const heightClass = className.includes('h-') ? '' : 'h-28';
  const logoUrl = "https://raw.githubusercontent.com/ramilmendoza/Images/main/AutomatePrimeLogo.png";
  
  return (
    <div className={`select-none inline-flex items-center justify-center ${heightClass} ${className}`}>
      <img 
        src={logoUrl} 
        alt="Automate Prime" 
        className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(0,168,232,0.4)]"
      />
    </div>
  );
};