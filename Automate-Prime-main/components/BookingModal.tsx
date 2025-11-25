import React, { useState, useEffect, useRef } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Intelligent Automation',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct Email Body
    const subject = encodeURIComponent(`Strategy Session Request: ${formData.company || formData.name}`);
    const body = encodeURIComponent(`
New Strategy Session Request for Automate Prime

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service}
Preferred Date/Time: ${formData.date}

Message:
${formData.message}
    `);

    // Trigger Mailto
    window.location.href = `mailto:automateprimeservices@gmail.com?subject=${subject}&body=${body}`;

    // Simulate success state briefly before closing
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Intelligent Automation',
        date: '',
        message: ''
      });
      alert("Thank you! Your email client has been opened with the request details.");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Content */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-gray-900 border border-prime-blue/50 rounded-2xl shadow-[0_0_50px_rgba(0,168,232,0.2)] overflow-hidden animate-fade-in-up"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-prime-dark to-prime-blue/20 p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white">Book Strategy Session</h2>
            <p className="text-prime-light font-tech text-sm uppercase tracking-wider">Secure Your Digital Future</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-tech uppercase">Full Name</label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded p-3 text-white focus:border-prime-light focus:ring-1 focus:ring-prime-light outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-tech uppercase">Email Address</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded p-3 text-white focus:border-prime-light focus:ring-1 focus:ring-prime-light outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-tech uppercase">Company Name</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded p-3 text-white focus:border-prime-light focus:ring-1 focus:ring-prime-light outline-none transition-all"
                placeholder="Tech Corp Inc."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-tech uppercase">Preferred Date/Time</label>
              <input 
                type="text" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded p-3 text-white focus:border-prime-light focus:ring-1 focus:ring-prime-light outline-none transition-all"
                placeholder="Next Tuesday, 2 PM EST"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-tech uppercase">Area of Interest</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-black/40 border border-gray-700 rounded p-3 text-white focus:border-prime-light focus:ring-1 focus:ring-prime-light outline-none transition-all appearance-none"
            >
              <option>Intelligent Automation</option>
              <option>Web App Development</option>
              <option>AI Modernization</option>
              <option>IT/OT Transformation</option>
              <option>Digital Strategy Consulting</option>
              <option>Advanced Analytics</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-tech uppercase">Project Details / Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/40 border border-gray-700 rounded p-3 text-white focus:border-prime-light focus:ring-1 focus:ring-prime-light outline-none transition-all"
              placeholder="Tell us briefly about your goals..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-prime-accent hover:bg-red-600 text-white font-bold font-tech tracking-wider py-4 rounded transition-all hover:shadow-[0_0_20px_rgba(215,38,61,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PREPARING REQUEST...
              </>
            ) : (
              'CONFIRM BOOKING REQUEST'
            )}
          </button>
          <p className="text-center text-xs text-gray-500">
            This will open your default email client to send the request to automateprimeservices@gmail.com
          </p>
        </form>
      </div>
    </div>
  );
};