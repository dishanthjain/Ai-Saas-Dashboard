import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-surface-light py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-600">
              YOUR AI WORKSPACE
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              One workspace. Every idea, moving forward.
            </h1>
            <p className="mb-8 text-lg text-slate-600 lg:text-xl">
              NOVA is your unified command center for intelligence. Write, generate, summarize, and create with the most advanced AI tools integrated into one premium interface.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-12 gap-2">
                Start creating <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12">
                Explore the workspace
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Free plan available. No credit card required to start.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-white p-2 shadow-modal">
              <div className="rounded-xl border border-border bg-slate-50 p-4">
                <div className="mb-4 h-4 w-32 rounded bg-slate-200" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-32 rounded-lg bg-white shadow-sm" />
                    <div className="h-40 rounded-lg bg-white shadow-sm" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 rounded-lg bg-white shadow-sm" />
                    <div className="h-24 rounded-lg bg-white shadow-sm" />
                    <div className="h-24 rounded-lg bg-white shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract decorative element - kept minimal as requested */}
            <div className="absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full bg-brand-100 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
