import { Link } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Image, Code, FileText, Mail, BookOpen, History, CreditCard, User, Settings, LogOut } from 'lucide-react';

export const AppSidebar = () => {
  return (
    <aside className="w-64 border-r border-border bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-border flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">
          N
        </div>
        <span className="text-xl font-bold tracking-tight text-charcoal">NOVA</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Workspace</div>
          <div className="space-y-1">
            <Link to="/app" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <LayoutDashboard className="h-4 w-4" /> Overview
            </Link>
            <Link to="/app/tools/chat" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <MessageSquare className="h-4 w-4" /> AI Chat
            </Link>
            <Link to="/app/tools/image" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <Image className="h-4 w-4" /> Image Generator
            </Link>
            <Link to="/app/tools/code" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <Code className="h-4 w-4" /> Code Generator
            </Link>
            <Link to="/app/tools/summarizer" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <FileText className="h-4 w-4" /> Summarizer
            </Link>
            <Link to="/app/tools/email" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <Mail className="h-4 w-4" /> Email Writer
            </Link>
            <Link to="/app/tools/blog" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <BookOpen className="h-4 w-4" /> Blog Writer
            </Link>
          </div>
        </div>

        <div>
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Manage</div>
          <div className="space-y-1">
            <Link to="/app/history" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <History className="h-4 w-4" /> History
            </Link>
            <Link to="/app/pricing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <CreditCard className="h-4 w-4" /> Pricing & Plans
            </Link>
          </div>
        </div>

        <div>
          <div className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Preferences</div>
          <div className="space-y-1">
            <Link to="/app/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <User className="h-4 w-4" /> Profile
            </Link>
            <Link to="/app/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100">
              <Settings className="h-4 w-4" /> Settings
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <Link to="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50">
          <LogOut className="h-4 w-4" /> Logout
        </Link>
      </div>
    </aside>
  );
};

export default AppSidebar;
