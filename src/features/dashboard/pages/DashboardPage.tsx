import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { AppLayout } from '@/components/app-shell/AppLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, Image, Code, FileText, Mail, BookOpen, Clock } from 'lucide-react';

export const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);

  const tools = [
    { name: 'AI Chat', icon: Sparkles, color: 'text-blue-500' },
    { name: 'Image Gen', icon: Image, color: 'text-purple-500' },
    { name: 'Code Gen', icon: Code, color: 'text-emerald-500' },
    { name: 'Summarizer', icon: FileText, color: 'text-orange-500' },
    { name: 'Email Writer', icon: Mail, color: 'text-pink-500' },
    { name: 'Blog Writer', icon: BookOpen, color: 'text-indigo-500' },
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-charcoal">Welcome back, {user?.name}</h2>
            <p className="text-slate-600 mt-1">Ready to create something amazing today?</p>
          </div>
          <Button className="gap-2">
            <Sparkles className="h-4 w-4" /> New Generation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Generations Used</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold">12</div></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Remaining Quota</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold">88</div></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Saved Generations</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold">5</div></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Most Used Tool</CardTitle></CardHeader>
            <CardContent><div className="text-2xl font-bold">AI Chat</div></CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-slate-50">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Generated blog post about React</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">Open</Button>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <button key={tool.name} className="flex flex-col items-center justify-center p-4 rounded-lg border border-border hover:border-brand-500 hover:bg-brand-50/50 transition-colors gap-2">
                  <tool.icon className={`h-6 w-6 ${tool.color}`} />
                  <span className="text-xs font-medium">{tool.name}</span>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
