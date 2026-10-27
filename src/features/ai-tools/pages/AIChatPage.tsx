import { useState } from 'react';
import { AppLayout } from '@/components/app-shell/AppLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Send, User, Sparkles } from 'lucide-react';

export const AIChatPage = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your NOVA AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: `This is a simulated response to: "${userMsg}". Connect your AI API key on the backend to enable live model responses.` }]);
    }, 1000);
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-charcoal">AI Chat Assistant</h2>
          <p className="text-slate-600 text-sm">Natural conversations with advanced intelligence.</p>
        </div>

        <Card className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-brand-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {m.role === 'user' ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                </div>
                <div className={`max-w-[70%] rounded-xl p-4 text-sm ${m.role === 'user' ? 'bg-brand-500 text-white' : 'bg-slate-100 text-charcoal'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border bg-white">
            <form onSubmit={handleSend} className="flex gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your prompt here..." className="flex-1" />
              <Button type="submit"><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AIChatPage;
