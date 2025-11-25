interface ImportMeta {
  readonly env: {
    readonly VITE_GEMINI_API_KEY: string;
  };
}

import { GoogleGenerativeAI } from "@google/genai";

const ai = new GoogleGenerativeAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBoNcthbyW1AO7Hie7VGejwCC7PuMQAZOg"
});

export const getAIResponse = async (userQuery: string): Promise<string> => {
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    return "🔧 AI service is currently being configured. Please contact our team directly at automateprimeservices@gmail.com for immediate assistance, or try again shortly.";
  }

  try {
    const model = "gemini-2.0-flash-exp";
    
    const systemInstruction = `
# IDENTITY: PrimeAI - Official AI Consultant for Automate Prime
You are an expert representative of Automate Prime, a premier digital transformation company.

# COMPANY CONTEXT
## About Automate Prime
Our tagline is "The Next Evolution. Delivered."
Our mission is engineering intelligent, AI-driven digital transformation solutions.

## Core Services
• Intelligent Automation
• Web Application Development  
• AI Modernization
• IT/OT Digital Transformation

## Leadership Team
• CEO: Ramilo Mendoza
• CFO: Myla Mendoza  
• CTO: Aubrey Gale Mendoza
• CIO: Chelsea Myles Mendoza
• COO: Ramielle Mendoza

Keep responses professional, concise, and focused on solving business challenges.
`;

    const response = await ai.models.generateContent({
      model: model,
      contents: [{ role: "user", parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 300,
        topK: 40,
        topP: 0.95,
      }
    });

    let cleanResponse = response.text || "I apologize, my neural link is experiencing interference. Please contact our human team directly for immediate assistance.";
    
    cleanResponse = cleanResponse
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/_(.*?)_/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    return cleanResponse;
    
  } catch (error: any) { // Using ': any' for quick fix
    console.error("AI Service Error:", error);
    
    // Now we can safely access error.message
    if (error.message?.includes('API_KEY') || error.message?.includes('API key')) {
      return "We're currently enhancing our AI authentication systems. Please contact our team directly for immediate support while we complete this upgrade.";
    }
    
    if (error.message?.includes('quota') || error.message?.includes('rate limit')) {
      return "Our AI systems are currently handling high demand. Please try again in a few moments or contact our team directly for priority assistance.";
    }
    
    if (error.message?.includes('model') || error.message?.includes('not found')) {
      return "Our AI model is currently being optimized. Please try again shortly or contact our team directly for assistance.";
    }
    
    return "Our AI systems are currently optimizing for better performance. Please try again shortly or contact our team directly at Automate Prime for immediate support.";
  }
};