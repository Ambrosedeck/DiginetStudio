"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, ArrowRight, Calendar, Bot, ChevronRight, MessageSquare } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/agency";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  actionText?: string;
  actionType?: "appointment" | "contact";
}

interface DiginetAiWidgetProps {
  onOpenAppointment: () => void;
}

export function DiginetAiWidget({ onOpenAppointment }: DiginetAiWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const initialMessage: Message = {
    id: "welcome-1",
    sender: "ai",
    text: "Hi! I'm Diginet AI 👋\nI can help you explore our services, website packages, SEO solutions and AI automation options.",
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const suggestedQuestions = [
    "How much does a website cost?",
    "What services do you offer?",
    "I need a website",
    "How can you help my business grow?",
  ];

  const handleSendQuery = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponseText = "";
      let actionText: string | undefined;
      let actionType: "appointment" | "contact" | undefined;

      const lower = text.toLowerCase();

      if (lower.includes("cost") || lower.includes("price") || lower.includes("package") || lower.includes("how much")) {
        aiResponseText =
          "Our website packages start from ₹7,999+ (Starter up to 5 pages). Our most popular tier is Basic at ₹15,999+ (up to 8 pages with custom UI/UX), and Premium starts at ₹19,999+ (up to 12 pages with advanced features).";
        actionText = "View Package Details & Book";
        actionType = "appointment";
      } else if (lower.includes("service") || lower.includes("offer") || lower.includes("do you do")) {
        aiResponseText =
          "Diginet Studio offers 3 core solutions:\n• Website Development (Custom, fast, responsive sites)\n• SEO & Google Optimisation (Local SEO & rank improvement)\n• AI Automation & CRM (WhatsApp lead capture & workflows).";
        actionText = "Explore Our Services";
      } else if (lower.includes("need a website") || lower.includes("build") || lower.includes("create")) {
        aiResponseText =
          "We'd love to build your new website! Every project is tailored around your business goals, target audience, and modern design standards. Would you like to schedule a quick strategy call?";
        actionText = "Book an Appointment";
        actionType = "appointment";
      } else if (lower.includes("grow") || lower.includes("help") || lower.includes("online presence")) {
        aiResponseText =
          "We combine high-converting modern UI/UX design, search engine optimization (SEO), and automated lead management to turn your website into a 24/7 engine for customer enquiries.";
        actionText = "Book an Appointment";
        actionType = "appointment";
      } else {
        aiResponseText =
          "Thanks for reaching out! I can assist you with website development packages (from ₹7,999+), SEO rank optimization, and AI automation. Feel free to ask a question or book an appointment directly.";
        actionText = "Book Strategy Call";
        actionType = "appointment";
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiResponseText,
        actionText,
        actionType,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Expanded AI Chat Panel */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[380px] max-h-[82vh] sm:max-h-[520px] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-[#0A0A0A] text-white p-4 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-sky-400 text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-none text-white">Diginet AI</h4>
                <p className="text-[11px] text-gray-400 font-medium mt-0.5">Your digital growth assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-gradient-to-b from-white to-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#0A0A0A] text-white rounded-br-xs font-medium"
                      : "bg-[#F7F7F8] border border-gray-200/80 text-gray-800 rounded-bl-xs font-normal"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {msg.actionText && (
                  <button
                    onClick={() => {
                      if (msg.actionType === "appointment") {
                        setIsOpen(false);
                        onOpenAppointment();
                      } else {
                        const el = document.getElementById("services");
                        el?.scrollIntoView({ behavior: "smooth" });
                        setIsOpen(false);
                      }
                    }}
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100/80 border border-purple-200/80 text-purple-700 text-[11px] font-semibold transition-colors"
                  >
                    <span>{msg.actionText}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-gray-100 rounded-lg w-16 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce delay-200" />
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Suggested Quick Questions */}
          {messages.length < 5 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 space-y-1.5">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Suggested Questions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendQuery(q)}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 hover:text-purple-600 hover:border-purple-200 transition-colors font-medium text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputQuery);
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask Diginet AI..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-purple-600"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="p-2 rounded-lg bg-[#0A0A0A] hover:bg-gray-800 disabled:opacity-40 text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Pill Button — Diginet AI */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Diginet AI assistant"
        className="group flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-white border border-gray-200/90 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 text-xs font-semibold text-gray-800"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-600 to-sky-400 text-white flex items-center justify-center shadow-xs shrink-0">
          <Sparkles className="w-3 h-3 text-white" />
        </div>

        <span className="transition-all duration-200">
          {isHovered ? "Ask Diginet AI" : "Diginet AI"}
        </span>
      </button>
    </div>
  );
}
