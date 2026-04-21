import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Proxy for AI Services to avoid CORS and keep keys secure
  app.post("/api/chat", async (req, res) => {
    const { provider, messages, settings } = req.body;

    try {
      if (provider === 'openai') {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.openaiKey}`
          },
          body: JSON.stringify({
            model: settings.selectedModel || 'gpt-4o',
            messages: messages,
            stream: false
          })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || response.statusText);
        return res.json(data);
      }

      if (provider === 'deepseek') {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.deepseekKey}`
          },
          body: JSON.stringify({
            model: settings.selectedModel || 'deepseek-chat',
            messages: messages,
            stream: false
          })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || response.statusText);
        return res.json(data);
      }

      if (provider === 'openrouter') {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${settings.openrouterKey}`,
            'HTTP-Referer': process.env.APP_URL || 'https://ais-dev-wbo66xveallfmahkfm5ynj-403983571350.asia-southeast1.run.app',
            'X-Title': 'DeepSense AI'
          },
          body: JSON.stringify({
            model: settings.selectedModel || 'openai/gpt-3.5-turbo',
            messages: messages,
            stream: false
          })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || response.statusText);
        return res.json(data);
      }

      res.status(400).json({ error: 'Invalid provider' });
    } catch (error: any) {
      console.error('Proxy Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Serve index.html for all routes (SPA fallback)
  app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
