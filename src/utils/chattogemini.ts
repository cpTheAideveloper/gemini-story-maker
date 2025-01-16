// File: src/utils/chattogemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { StoryRequest } from "@/types";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are a professional storyteller that writes engaging stories.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  responseMimeType: "text/plain",
};

export async function chattogemini(request: StoryRequest): Promise<string> {
  const { genre, narrativeStyle, audience, additionalIdeas } = request;
  const userMessage = `Based on the following inputs:\nGenre: ${genre}\nNarrative Style: ${narrativeStyle}\nAudience: ${audience}\nAdditional Ideas: ${additionalIdeas || 'None'}\nCan you generate a story?`;

  const chatSession = model.startChat({
    generationConfig,
  });

  try {
    const prompt = `Based on the following ${JSON.stringify(request)} can you generate a story?`;
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error during model interaction:", error);
    throw error;
  }
}