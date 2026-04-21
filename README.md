# DeepSense AI

DeepSense AI is a sophisticated, full-stack AI chat application that brings together the power of multiple AI providers into a single, elegant interface. Whether you're using OpenAI's GPT models, DeepSeek's specialized intelligence, OpenRouter's vast model library, or running local models with Ollama, DeepSense provides a seamless and secure experience.

![DeepSense AI](https://picsum.photos/seed/deepsense/1200/600)

## 🚀 Features

- **Multi-Provider Support**:
  - **OpenAI**: Access GPT-4o, GPT-4, and more.
  - **DeepSeek**: High-performance models for coding and reasoning.
  - **OpenRouter**: Unified API for hundreds of models (Claude, Llama, Gemini, etc.).
  - **Ollama**: Run private, local models directly on your machine.
- **Secure Key Management**: API keys are stored locally in your browser and never exposed to third parties.
- **Admin Protection**: Settings and API keys are protected by an admin password (`bhupi2026`).
- **Modern UI/UX**:
  - Dark mode by default for reduced eye strain.
  - Responsive design for desktop and mobile.
  - Real-time markdown rendering.
  - Smooth animations with Framer Motion.
- **Server Proxy**: Built-in Express server to handle API requests and avoid CORS issues.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express.
- **AI Integration**: Custom proxy for OpenAI, DeepSeek, and OpenRouter; direct local connection for Ollama.

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/deepsense-ai.git
   cd deepsense-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

1. Open the **Settings** modal in the sidebar.
2. Enter the admin password: `bhupi2026`.
3. Provide your API keys for the services you wish to use.
4. For **Ollama**, ensure the Ollama server is running locally (default: `http://localhost:11434`).

## 🛡️ Security

DeepSense AI is designed with privacy in mind. Your API keys are stored in your browser's `localStorage` and are only sent to the local Express server to proxy requests to the AI providers. No data is stored on external databases.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by **Bhupendra Saini**
