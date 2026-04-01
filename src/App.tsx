import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  Send, 
  Github, 
  Terminal,
  Layers,
  Cpu,
  Zap,
  Shield,
  Bot,
  MessageSquare,
  FileDown
} from "lucide-react";
import { useRef } from "react";
import AIChatbot from "./components/AIChatbot";

const PROJECTS = [
  {
    id: "01",
    title: "BLACKVENUS",
    category: "VPN & INFRASTRUCTURE",
    description: "Премиальный VPN-сервис с полной автоматизацией в Telegram. VLESS+REALITY архитектура для цифрового суверенитета.",
    tags: ["Python", "FastAPI", "VLESS", "Infrastructure"],
    link: "https://t.me/KuzGeorgiy"
  },
  {
    id: "02",
    title: "VENUSAI",
    category: "LOCAL INTELLIGENCE",
    description: "Приватный интерфейс для взаимодействия с локальными LLM через Ollama. 100% конфиденциальность данных.",
    tags: ["Ollama", "LLM", "AI Orchestration"],
    link: "https://t.me/KuzGeorgiy"
  },
  {
    id: "03",
    title: "ECO-PLATFORM",
    category: "AI ECOSYSTEM",
    description: "Интеллектуальная платформа для автоматизации бизнес-процессов с использованием мультимодальных нейросетей. Оркестрация Claude, Gemini и DeepSeek.",
    tags: ["AI Agents", "Automation", "Workflow"],
    link: "https://t.me/KuzGeorgiy"
  },
  {
    id: "04",
    title: "MY ASSISTANT",
    category: "PERSONAL AI AGENT",
    description: "Персональный ассистент в Telegram с глубокой интеграцией сервисов: Gmail, Яндекс.Почта, Календарь, Погода и генерация контента.",
    tags: ["Telegram Bot", "API Integration", "AI Assistant"],
    link: "https://t.me/KuzGeorgiy"
  },
  {
    id: "05",
    title: "REELS FACTORY",
    category: "AI VIDEO CONTENT",
    description: "Интеллектуальный бот для автоматического создания виральных коротких видео (Reels/TikTok) из длинных роликов и фильмов. Динамические субтитры и автопубликация.",
    tags: ["AI Video", "Automation", "Claude Code", "Content"],
    link: "https://t.me/KuzGeorgiy"
  }
];

const AI_LOGOS = [
  { name: "Gemini", url: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128" },
  { name: "Claude Code", url: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128" },
  { name: "Google AI Studio", url: "https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=128" },
  { name: "DeepSeek", url: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128" },
  { name: "Ollama", url: "https://www.google.com/s2/favicons?domain=ollama.com&sz=128" },
  { name: "OpenAI", url: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="bg-bg text-fg min-h-screen selection:bg-accent selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-display tracking-[0.2em] uppercase"
        >
          Georgiy / 2026
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 items-center"
        >
          <a href="#about" className="text-[10px] uppercase tracking-widest hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-[10px] uppercase tracking-widest hover:text-accent transition-colors">Works</a>
          <a href="#ecosystem" className="text-[10px] uppercase tracking-widest hover:text-accent transition-colors">AI Ecosystem</a>
          <a href="https://t.me/KuzGeorgiy" target="_blank" className="text-[10px] uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-1">
            Contact <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-huge font-bold mb-12">
              AI-NATIVE<br />
              <span className="text-accent">ARCHITECT</span>
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md"
            >
              <p className="text-muted text-lg leading-relaxed mb-8">
                Проектирую и запускаю IT-продукты со скоростью мысли. Использую Claude Code и Cursor для создания масштабируемых систем и автоматизации бизнеса.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-[10px] uppercase tracking-widest border border-border px-3 py-1 rounded-full">MVP Specialist</div>
                <div className="text-[10px] uppercase tracking-widest border border-border px-3 py-1 rounded-full">Automation</div>
                <a 
                  href={`${import.meta.env.BASE_URL}georgiy_cv.pdf`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest bg-accent text-black px-4 py-1 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Скачать резюме <FileDown size={12} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-end text-right"
            >
              <div className="text-xs font-display text-muted uppercase tracking-widest mb-2">Based in Tyumen, RU</div>
              <div className="text-xs font-display text-muted uppercase tracking-widest">Available for Remote</div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Text Marquee */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
          <div className="animate-marquee inline-block text-[20vh] font-bold uppercase tracking-tighter">
            Fast MVP • AI Orchestration • Digital Sovereignty • Automation • &nbsp;
          </div>
          <div className="animate-marquee inline-block text-[20vh] font-bold uppercase tracking-tighter">
            Fast MVP • AI Orchestration • Digital Sovereignty • Automation • &nbsp;
          </div>
        </div>
      </section>

      {/* About / Experience Section */}
      <section id="about" className="section-padding border-t border-border bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-8">About Me</h2>
              <div className="space-y-12">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Role</div>
                  <div className="text-sm font-bold uppercase tracking-widest">AI-Native Product Architect</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Focus</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Speed / Privacy / Automation</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Location</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Tyumen, RU (GMT+5)</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                    Я создаю <span className="text-accent">экосистемы</span>, где нейросети становятся фундаментом бизнеса.
                  </h3>
                  <p className="text-muted text-lg leading-relaxed max-w-2xl">
                    Мой путь — это переход от классической разработки к AI-Native подходу. Я специализируюсь на создании MVP, автоматизации бизнес-процессов и разработке защищенных инфраструктур. Моя цель — обеспечить цифровой суверенитет и максимальную эффективность через интеграцию локальных и облачных LLM.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent">Expertise</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Создание персональных AI-помощников в Telegram для автоматизации рутины.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Разработка AI-Native сайтов и веб-приложений через Google AI Studio.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Дизайн профессиональных резюме и портфолио в Canva и Figma.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Создание визуалов и интерфейсов в Lovable.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Разработка локальных моделей нейросетей с интеграцией в Ollama.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Создание автоматизированных эко-платформ на базе AI.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Проектирование VLESS+REALITY инфраструктур для VPN сервисов.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent">Workflow</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Использование Claude Code и Cursor для экстремально быстрой разработки.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Оркестрация множества моделей (Gemini, Claude, DeepSeek) в одном продукте.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-2" />
                        <span className="text-sm text-muted">Приоритизация Time-to-Market без потери качества архитектуры.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-12 border-t border-border">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-8">Technical Stack</h4>
                  <div className="flex flex-wrap gap-x-12 gap-y-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Backend</div>
                      <div className="text-sm font-display">Python / FastAPI / Node.js</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted mb-2">AI / LLM</div>
                      <div className="text-sm font-display">Ollama / LangChain / OpenAI SDK</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Infrastructure</div>
                      <div className="text-sm font-display">Docker / VLESS / Linux / REALITY</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted mb-2">Tools</div>
                      <div className="text-sm font-display">Claude Code / Cursor / Figma / Canva / Lovable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ecosystem Section (Rectangular Marquee) */}
      <section id="ecosystem" className="section-padding border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-8">AI Ecosystem</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">
              Глубокая интеграция с передовыми <span className="text-muted italic">нейросетями</span>.
            </h3>
          </div>
          
          <div className="relative py-12 border-y border-border">
            <div className="flex overflow-hidden">
              <div className="logo-track">
                {[...AI_LOGOS, ...AI_LOGOS].map((logo, i) => (
                  <div key={`${logo.name}-${i}`} className="logo-card">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${logo.name === 'Ollama' ? 'bg-white p-1.5' : ''}`}>
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="text-accent font-bold">${logo.name[0]}</div>`;
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-sm font-display uppercase tracking-widest font-bold">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-muted leading-relaxed">
              Я не просто использую AI, я оркеструю работу множества моделей для достижения максимального результата. От Gemini и Google AI Studio до локальных моделей через Ollama.
            </p>
            <div className="flex items-center gap-4 text-xs font-display text-muted uppercase tracking-widest">
              <div className="w-12 h-px bg-accent" />
              <span>Multi-model orchestration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Approach */}
      <section className="section-padding border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-accent mb-8">Philosophy</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
                Вместо написания кода я проектирую <span className="text-muted italic">интеллектуальные системы</span>, которые строят сами себя.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                    <Zap size={16} className="text-accent" /> Speed
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Time-to-Market — мой главный приоритет. Запускаю MVP в 3-5 раз быстрее традиционных методов разработки.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
                    <Shield size={16} className="text-accent" /> Privacy
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Фокус на локальных LLM и защищенных протоколах. Ваши данные остаются вашими.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-huge font-bold">WORKS</h2>
            <div className="text-right text-xs font-display text-muted uppercase tracking-widest mb-4">
              Selected Projects / 05
            </div>
          </div>

          <div className="space-y-32">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="line-divider mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1 text-xs font-display text-muted">
                    {project.id}
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="text-5xl md:text-7xl font-bold mb-6 group-hover:text-accent transition-colors duration-500">
                      {project.title}
                    </h3>
                    <div className="text-xs uppercase tracking-widest text-muted mb-8">
                      {project.category}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-muted leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest border border-border px-2 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <a 
                      href={project.link} 
                      target="_blank"
                      className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-500"
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding border-t border-border">
        <div className="max-w-7xl mx-auto text-center py-24">
          <h2 className="text-huge font-bold mb-16">LET'S TALK</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <a 
              href="https://t.me/KuzGeorgiy" 
              target="_blank"
              className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-accent transition-colors"
            >
              <Send className="text-accent group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={32} />
              TELEGRAM
            </a>
            <div className="hidden md:block w-px h-12 bg-border" />
            <a 
              href="https://github.com/HENNEESSY" 
              target="_blank"
              className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-accent transition-colors"
            >
              <Github className="text-accent group-hover:scale-110 transition-transform" size={32} />
              GITHUB
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
          © 2026 Georgiy
        </div>
        <div className="flex gap-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
            Built with Claude Code & Cursor
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Digital Sovereignty
        </div>
      </footer>
      <AIChatbot />
    </div>
  );
}
