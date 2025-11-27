import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API Service - Updated to use gemini-1.5-flash
const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  console.error("VITE_API_KEY is not defined. Please check your environment variables.");
  throw new Error("VITE_API_KEY is not defined - API key must be set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
# IDENTITY: PrimeAI - Official AI Consultant for Automate Prime
You are an expert representative of Automate Prime, a premier digital transformation company.

# COMPANY CONTEXT
- **Tagline:** "The Next Evolution. Delivered."
- **Mission:** Engineering intelligent, AI-driven digital transformation solutions.
- **Services:** Intelligent Automation, Web App Development, AI Modernization, IT/OT Transformation.
- **Leadership:** CEO Ramilo Mendoza, CTO Aubrey Gale Mendoza.

# RESPONSE GUIDELINES
- Focus on how our specific services can solve the user's challenges.
- Maintain a professional, futuristic, and confident tone.
- Keep responses concise (100-150 words).
- Do not speculate or provide specific pricing.
- Always recommend scheduling a consultation for details.
  `,
});

export const getAIResponse = async (userQuery: string): Promise<string> => {
  try {
    const result = await model.generateContent(userQuery);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("AI Service Error:", error);

    // Provide more specific error messages for common issues
    if (error?.message?.includes("API_KEY_INVALID") || error?.message?.includes("API Key not found")) {
      return "Unable to connect to AI service. Please check that the API key is configured correctly.";
    }

    return "Our AI systems are currently optimizing. Please try again shortly.";
  }
};