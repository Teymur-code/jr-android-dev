import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// 1. API: Custom Day Expander / Lesson Generator
app.post("/api/mentor/explain", async (req, res) => {
  try {
    const { dayId, dayTitle, focus, theory, practice, homework, miniChallenge } = req.body;
    
    if (!aiClient) {
      return res.status(500).json({ 
        error: "Gemini API key is not configured. Please add your GEMINI_API_KEY inside the Secrets panel under Settings." 
      });
    }

    const prompt = `
      You are a world-class Senior Android Engineer, Tech Lead, and Android Mentor with over 15 years of experience.
      Generate an EXTREMELY DETAILED, production-grade guide for Day ${dayId} of this Android Developer Bootcamp.

      Day Details:
      - Title: ${dayTitle}
      - Focus: ${focus}
      - Overview: ${theory}
      - In-Class Practice: ${practice}
      - Mini Challenge: ${miniChallenge}
      - Homework Assignment: ${homework}

      Provide your response in beautifully formatted Markdown, including:
      1. **Deep-Dive Tech Theory**: Explain the core concept with thorough technical accuracy, avoiding fluff.
      2. **Interactive Code Walkthrough**: Provide a pristine, clean, copyable Kotlin (or Jetpack Compose) code snippet with proper variable naming, formatting, and inline comments illustrating the concept.
      3. **Step-by-Step Exercise Solutions**: Show exactly how to solve the "Practice" and "Mini Challenge" tasks with explanations.
      4. **Homework Guidance & Tips**: Offer professional advice, clean-code tips (referencing DRY, KISS, or SOLID where applicable), and potential pitfalls or common debugging errors to watch out for.

      Keep your tone highly encouraging, professional, and mentoring. Make sure to present realistic, modern Android conventions (Jetpack Compose, Kotlin modern standards).
    `;

    const response = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a Senior Android Mentor guiding a beginner to junior level. Your advice is clean, idiomatic, and highly technical.",
      },
    });

    res.json({ content: response.text });
  } catch (error: any) {
    console.error("Error generating explanation:", error);
    res.status(500).json({ error: error?.message || "Failed to generate lesson explanation." });
  }
});

// 2. API: Interactive Mentor Chat
app.post("/api/mentor/chat", async (req, res) => {
  try {
    const { messages } = req.body; // Array of { role: 'user' | 'model', text: string }
    
    if (!aiClient) {
      return res.status(500).json({ 
        error: "Gemini API key is not configured. Please add your GEMINI_API_KEY inside the Secrets panel under Settings." 
      });
    }

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages parameter." });
    }

    // Convert messages to Gemini API format
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text }],
    }));

    const response = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: "You are a 15+ years experience Senior Android Tech Lead and Mentor. You provide practical, clean-code feedback, review user submissions, suggest optimizations (DRY, KISS, SOLID), and help students solve debugging problems step-by-step. Keep answers focused, clear, and highly professional.",
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Error in mentor chat:", error);
    res.status(500).json({ error: error?.message || "Failed to contact your AI Mentor." });
  }
});

// Setup Vite Dev server or static asset serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
