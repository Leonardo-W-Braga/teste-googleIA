import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: NextRequest) {
  try {
    const { history, subjects } = await req.json();
    const prompt = `
      Você é um assistente de IA em um ambiente Cyberpunk Sleek focado em otimização de estudos.
      Matérias: ${subjects.join(', ')}.
      Histórico: ${JSON.stringify(history)}.
      Dê uma dica curta (máx 80 chars) em tom técnico e motivador.
    `;
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        systemInstruction: "Aja como um sistema de IA avançado de 2077. Seja curto, grosso e futurista.",
        temperature: 0.8,
      }
    });

    return NextResponse.json({ text: response.text || "Sincronização Neural Estável." });
  } catch (error) {
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
