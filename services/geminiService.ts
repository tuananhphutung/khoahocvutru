
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getCosmicFact(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: `Provide a short, fascinating, and mind-blowing fact about ${topic} in Vietnamese. Keep it under 2 sentences. Include an emoji.`,
      });
      return response.text || "Vũ trụ bao la chứa đựng muôn vàn bí ẩn chưa được giải đáp.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Dữ liệu thiên văn đang bị nhiễu sóng, vui lòng thử lại sau.";
    }
  }
}

export const geminiService = new GeminiService();
