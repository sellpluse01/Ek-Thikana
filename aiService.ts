import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getSearchSuggestions(query: string) {
  if (!query || query.length < 2) return [];

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a shopping assistant for a multi-vendor marketplace in Bangladesh called "Ek-Thikana". 
      The query is: "${query}". 
      Provide 5 relevant product search suggestions in a list format. 
      Example query: "fish" -> suggestions: ["Deshi Fish", "Sea Fish", "Dried Fish", "Hilsha", "Shrimp"].
      Only return the items as a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
      }
    });

    const suggestions = JSON.parse(response.text || "[]");
    return suggestions;
  } catch (error) {
    console.error("AI Search Error:", error);
    return [];
  }
}
