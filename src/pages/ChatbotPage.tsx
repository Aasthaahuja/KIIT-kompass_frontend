import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, RefreshCw } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
  time: string;
};

const suggestions = [
  "What are the exam dates for Sem 5?",
  "How do I apply for KIIT hostel?",
  "What's the grading system at KIIT?",
  "Tell me about KIITEE eligibility",
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "👋 Hi! I'm **Kompass AI**, your campus assistant. Ask me anything about academics, admission, exams, hostels, or campus life at KIIT University!",
    time: "Now",
  },
];

const botReplies: Record<string, string> = {
  default: "I'm a demo chatbot. In production, I'd be connected to a real AI model to answer all your KIIT-related queries accurately!",
  "exam dates": "📅 End Semester exams for Sem 5 are scheduled from **December 10–20, 2024**. Mid-sem exams were held in October. Check the official KIIT academic calendar for exact paper timings.",
  "hostel": "🏠 KIIT has separate hostels for boys and girls. To apply, log into the **student portal (ERP)** > Apply for Hostel. Fees vary by room type — ₹75,000–₹1,10,000/year. Apply early as seats fill fast!",
  "grading": "📊 KIIT follows a **10-point CGPA** grading system. O grade = 10 pts, A+ = 9, A = 8, B+ = 7, B = 6, and so on. Minimum passing SGPA is 5.0 per semester.",
  "kiitee": "📝 KIITEE eligibility: Minimum **60% in 10+2** with PCM/PCB. Age limit: Under 21 years. The exam is conducted online in 130+ cities. Applications open Nov–Dec every year.",
};

function getBotReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const key of Object.keys(botReplies)) {
    if (key !== "default" && lower.includes(key)) return botReplies[key];
  }
  return botReplies.default;
}

function formatTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: text.trim(), time: formatTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: getBotReply(text),
        time: formatTime(),
      };
      setMessages((prev) => [...prev, reply]);
      setLoading(false);
    }, 900 + Math.random() * 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto animate-fade-in h-full flex flex-col">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <p className="text-sm text-muted-foreground font-inter mb-1">AI Assistant</p>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground">
            Kompass <span className="text-gradient">AI Chat</span>
          </h1>
          <button
            onClick={() => setMessages(initialMessages)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all border border-border"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>
      </div>

      {/* Suggestion pills */}
      <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => sendMessage(s)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-inter font-medium bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-accent transition-all"
          >
            <Sparkles className="w-3 h-3" /> {s}
          </button>
        ))}
      </div>

      {/* Chat window */}
      <div className="flex-1 card-base p-3 md:p-5 overflow-y-auto flex flex-col gap-4" style={{ minHeight: "280px", maxHeight: "calc(100vh - 320px)" }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 animate-fade-in ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "assistant" ? "gradient-primary" : "bg-secondary"
              }`}
            >
              {msg.role === "assistant" ? (
                <Bot className="w-4 h-4 text-primary-foreground" />
              ) : (
                <User className="w-4 h-4 text-secondary-foreground" />
              )}
            </div>

            {/* Bubble */}
            <div className={`max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
              <div
                className={`px-4 py-3 rounded-2xl text-sm font-inter leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-muted text-foreground rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-muted-foreground px-1">{msg.time}</span>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="flex gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="px-4 py-3 bg-muted rounded-2xl rounded-tl-sm">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-soft"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-3">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about exams, hostels, admission..."
            rows={1}
            className="w-full px-4 py-3 pr-12 rounded-xl border border-border bg-card text-sm font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-card resize-none"
          />
        </div>
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="w-12 h-12 flex items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-card hover:shadow-glow transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[11px] text-muted-foreground font-inter text-center mt-2">Press Enter to send · Shift+Enter for new line</p>
    </div>
  );
}
