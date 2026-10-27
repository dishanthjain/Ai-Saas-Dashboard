import MarketingNavbar from '@/components/marketing/MarketingNavbar';
import HeroSection from '@/components/marketing/HeroSection';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNavbar />
      <main className="flex-grow">
        <HeroSection />

        {/* Features Preview Placeholder */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Powerful Tools for Modern Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'AI Chat', desc: 'Natural conversations with advanced intelligence.' },
                { title: 'Image Generation', desc: 'Transform text into stunning visuals.' },
                { title: 'Code Assistant', desc: 'Generate high-quality code in seconds.' },
                { title: 'Summarizer', desc: 'Condense long documents into key insights.' },
                { title: 'Email Writer', desc: 'Draft professional emails for any audience.' },
                { title: 'Blog Generator', desc: 'Create structured content with ease.' },
              ].map((tool, i) => (
                <div key={i} className="p-6 rounded-xl border border-border hover:border-brand-500 transition-colors text-left">
                  <div className="h-10 w-10 bg-brand-50 rounded-lg mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{tool.title}</h3>
                  <p className="text-slate-600">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-12 bg-surface-light">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>© {new Date().getFullYear()} NOVA AI Workspace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
