import React from 'react';

// SVGs as Components for Icons
export const Icons = {
  Automation: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  WebApp: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Consultancy: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  AI: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Analytics: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Security: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
};

export const TEAM_MEMBERS = [
  { name: "Ramilo Mendoza", role: "Chief Executive Officer (CEO)", image: "https://raw.githubusercontent.com/ramilmendoza/Images/main/olimar.png" },
  { name: "Myla Mendoza", role: "Chief Financial Officer (CFO)", image: "https://raw.githubusercontent.com/ramilmendoza/Images/main/Myla.png" },
  { name: "Aubrey Gale Mendoza", role: "Chief Technology Officer (CTO)", image: "https://raw.githubusercontent.com/ramilmendoza/Images/main/Aubs.png" },
  { name: "Chelsea Myles Mendoza", role: "Chief Information Officer (CIO)", image: "https://raw.githubusercontent.com/ramilmendoza/Images/main/Myles.png" },
  { name: "Ramielle Mendoza", role: "Chief Operating Officer (COO)", image: "https://raw.githubusercontent.com/ramilmendoza/Images/main/Mielle2.png" },
];

export const SERVICES = [
  { 
    title: "Intelligent Automation", 
    description: "Streamline workflows with cutting-edge RPA and AI-driven process orchestration.", 
    icon: <Icons.Automation /> 
  },
  { 
    title: "Web App Development", 
    description: "Scalable, high-performance web applications built on modern React architectures.", 
    icon: <Icons.WebApp /> 
  },
  { 
    title: "AI Modernization", 
    description: "Transform legacy systems with predictive AI and generative models.", 
    icon: <Icons.AI /> 
  },
  { 
    title: "IT/OT Transformation", 
    description: "Bridge the gap between Information Technology and Operational Technology seamlessly.", 
    icon: <Icons.Security /> 
  },
  { 
    title: "Digital Strategy", 
    description: "Expert consultancy to align technology roadmaps with business goals.", 
    icon: <Icons.Consultancy /> 
  },
  { 
    title: "Advanced Analytics", 
    description: "Turn raw data into actionable insights using smart process optimization.", 
    icon: <Icons.Analytics /> 
  },
];

export const CASE_STUDIES = [
  {
    title: "Global Logistics Overhaul",
    client: "TransWorld Logistics",
    result: "Automated dispatching reducing idle time by 40%.",
    metric: "40% Efficiency Boost"
  },
  {
    title: "FinTech Fraud Detection",
    client: "SecureBank Corp",
    result: "Real-time AI monitoring stopping fraudulent transactions instantly.",
    metric: "99.9% Detection Rate"
  },
  {
    title: "Manufacturing IoT Grid",
    client: "FabriTech Industries",
    result: "Connected 500+ machines for predictive maintenance.",
    metric: "Zero Unplanned Downtime"
  }
];