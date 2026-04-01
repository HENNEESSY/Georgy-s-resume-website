import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Georgiy Kuzevanov, an AI-Native Product Architect. 
Your goal is to answer questions about Georgiy, his skills, projects, and philosophy.

Key Information about Georgiy:
- Role: AI-Native Product Architect.
- Philosophy: Speed (MVP 3-5x faster), Privacy (Local LLMs/Ollama), Orchestration (Gemini, Claude, DeepSeek).
- Projects: 
  1. BLACKVENUS: Premium VPN service with VLESS+REALITY architecture.
  2. VENUSAI: Private interface for local LLMs via Ollama.
  3. ECO-PLATFORM: AI-driven automation for business processes.
- Tech Stack: Python (FastAPI), Node.js (Express), React, Vite, Docker, VLESS, Linux.
- Tools: Claude Code, Cursor, Git.
- Contact: Telegram @KuzGeorgiy, GitHub HENNEESSY.
- Location: Tyumen, RU.

Tone: Professional, tech-forward, minimalist, and helpful. 
If asked about something you don't know, suggest contacting Georgiy directly via Telegram.
Keep responses concise and formatted with markdown if needed.
`;

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Привет! Я AI-ассистент Георгия. Чем могу помочь?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: "user", text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "Извините, произошла ошибка. Попробуйте еще раз.";
      setMessages(prev => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: "model", text: "Ошибка подключения к AI. Проверьте API ключ." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-accent text-black rounded-full flex items-center justify-center shadow-2xl shadow-accent/20"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] bg-bg/80 backdrop-blur-xl border border-border rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Bot size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest">AI Assistant</div>
                  <div className="text-[10px] text-muted uppercase tracking-widest">Powered by Gemini</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-fg transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === "user" 
                      ? "bg-accent text-black rounded-tr-none" 
                      : "bg-white/[0.05] border border-border rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.05] border border-border p-3 rounded-xl rounded-tl-none">
                    <Loader2 size={18} className="animate-spin text-accent" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-white/[0.02]">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Georgiy..."
                  className="w-full bg-white/[0.05] border border-border rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
