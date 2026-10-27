import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const MarketingNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-charcoal">NOVA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-500">Product</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-500">Features</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-500">Pricing</Link>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-500">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MarketingNavbar;
