import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, ExternalLink } from 'lucide-react';
import { BOT_KNOWLEDGE, DEFAULT_FALLBACK_REPLY } from '../../constants/botKnowledge';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  link?: { label: string; url: string };
  time: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TravelChatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am your One Place AI Travel Assistant. How can I assist you with flights, 5G eSIMs, attraction tickets, visa guidelines, or promo codes today?',
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Query Knowledge Matching
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const matched = BOT_KNOWLEDGE.find((item) =>
        item.keywords.some((kw) => lowerQuery.includes(kw))
      );

      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: matched ? matched.response : DEFAULT_FALLBACK_REPLY,
        link: matched?.quickLink,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botReply]);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[92vw] sm:w-[400px] h-[560px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-black text-sm tracking-tight">One Place Assistant</h3>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-[10px] text-blue-100 font-medium">Instant 24/7 AI Guidance</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition cursor-pointer"
          aria-label="Close Chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-xs ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-none'
              }`}
            >
              <p>{m.text}</p>
              {m.link && (
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <Link
                    to={m.link.url}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>{m.link.label}</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
            <span className="text-[9px] text-slate-400 mt-1 px-1">{m.time}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* English Quick Action Chips */}
      <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px]">
        <button
          onClick={() => handleSend('How does Airalo eSIM work?')}
          className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 font-bold whitespace-nowrap transition cursor-pointer"
        >
          📶 eSIM Setup
        </button>
        <button
          onClick={() => handleSend('How to find secret cheap flight fares?')}
          className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 font-bold whitespace-nowrap transition cursor-pointer"
        >
          ✈️ Secret Fares
        </button>
        <button
          onClick={() => handleSend('What are the active promo codes?')}
          className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 font-bold whitespace-nowrap transition cursor-pointer"
        >
          🎟️ Promo Codes
        </button>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about flights, eSIM, visas, promos..."
          className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none focus:border-blue-600 focus:bg-white transition"
        />
        <button
          type="submit"
          className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm cursor-pointer"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};
