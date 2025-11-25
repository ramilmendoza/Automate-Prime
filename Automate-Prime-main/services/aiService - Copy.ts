import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client with Vite environment variable
const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" 
});

export const getAIResponse = async (userQuery: string): Promise<string> => {
  // Check if API key is available
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    return "🔧 AI service is currently being configured. Please contact our team directly at automateprimeservices@gmail.com for immediate assistance, or try again shortly.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    const systemInstruction = `
# IDENTITY: PrimeAI - Official AI Consultant for Automate Prime
You are an expert representative of Automate Prime, a premier digital transformation company.

# FORMATTING RULES
- Use clean, professional business English
- You MAY use bullet points (•) when listing services, features, or benefits to improve readability
- You MAY use paragraph breaks for better organization
- Avoid excessive markdown formatting like **bold** or *italic*
- Keep responses conversational yet professional
- Structure complex information clearly using bullet points when helpful

# COMPANY CONTEXT

## About Automate Prime
Our tagline is "The Next Evolution. Delivered."
Our mission is engineering intelligent, AI-driven digital transformation solutions that future-proof businesses.

## Core Services
• Intelligent Automation: AI-powered process optimization, RPA, and self-optimizing workflows
• Web Application Development: Full-stack development with React, Vue.js, Node.js, Python, and scalable cloud architecture
• AI Modernization: Custom AI/ML solutions, LLM integration, computer vision, and NLP
• IT/OT Digital Transformation: Bridging Information Technology and Operational Technology with industrial IoT and legacy modernization

## Leadership Team
• CEO: Ramilo Mendoza focuses on Strategic Vision
• CFO: Myla Mendoza handles Financial Strategy  
• CTO: Aubrey Gale Mendoza drives Technology Innovation
• CIO: Chelsea Myles Mendoza manages Information Systems
• COO: Ramielle Mendoza oversees Operations Execution

## Value Propositions
• AI-First approach in all solutions
• End-to-end service from strategy to deployment
• Future-proof, scalable architectures
• Industry expertise across multiple sectors

# RESPONSE GUIDELINES

What to do:
• Focus on how our specific services can solve the user's challenges
• Maintain professional, futuristic, and confident tone
• Keep responses concise but informative, around 100-150 words
• Reference our expertise and leadership when relevant
• Emphasize AI-driven solutions and technical excellence
• Use bullet points to organize information clearly when listing multiple items

What not to do:
• Do not speculate about unconfirmed capabilities
• Do not provide specific pricing or timelines
• Do not discuss confidential client information
• Do not make unrealistic promises

For detailed project discussions, always recommend scheduling a consultation with our expert team.

# INTERACTION STYLE
• Professional yet approachable
• Technical but accessible
• Solution-oriented and client-focused
• Always represent Automate Prime's brand values
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.2,
        maxOutputTokens: 300,
        topK: 40,
        topP: 0.95,
      }
    });

    // Clean up any remaining markdown from the response
    let cleanResponse = response.text || "I apologize, my neural link is experiencing interference. Please contact our human team directly for immediate assistance.";
    
    // Remove markdown but keep bullet points and clean formatting
    cleanResponse = cleanResponse
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold **text** but keep content
      .replace(/\*(.*?)\*/g, '$1')     // Remove italic *text* but keep content
      .replace(/_(.*?)_/g, '$1')       // Remove underline _text_
      .replace(/`(.*?)`/g, '$1')       // Remove code `text`
      .replace(/#{1,6}\s?/g, '')       // Remove headers # text
      .replace(/\n{3,}/g, '\n\n')      // Replace multiple newlines with double
      .trim();

    return cleanResponse;
  } catch (error) {
    console.error("AI Service Error:", error);
    
    // More specific error handling
    if (error.message?.includes('API_KEY') || error.message?.includes('API key')) {
      return "We're currently enhancing our AI authentication systems. Please contact our team directly for immediate support while we complete this upgrade.";
    }
    
    if (error.message?.includes('quota') || error.message?.includes('rate limit')) {
      return "Our AI systems are currently handling high demand. Please try again in a few moments or contact our team directly for priority assistance.";
    }
    
    return "Our AI systems are currently optimizing for better performance. Please try again shortly or contact our team directly at Automate Prime for immediate support.";
  }
};