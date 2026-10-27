import React from 'react';
import AppSidebar from '@/components/app-shell/AppSidebar';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-surface-light">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-white px-8 flex items-center justify-between sticky top-0 z-40">
          <h1 className="text-lg font-semibold text-charcoal">Workspace</h1>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-semibold text-sm">
              DU
            </div>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
