import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/authSchemas';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAuthStore } from '@/store/authStore';

export const LoginPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setError('');
      // Mock successful login for setup verification or connect to backend
      setAuth({ id: '1', name: 'Demo User', email: data.email, plan: 'free' }, 'mock-token');
      navigate('/app');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-light px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link to="/" className="inline-block mx-auto mb-4">
            <div className="h-10 w-10 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
          </Link>
          <CardTitle className="text-2xl font-bold">Welcome back to NOVA</CardTitle>
          <p className="text-sm text-slate-500 mt-1">Enter your credentials to access your workspace</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">{error}</div>}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="you@example.com" {...register('email')} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{String(errors.email.message)}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input type="password" placeholder="••••••••" {...register('password')} />
              {errors.password && <p className="text-xs text-red-500 mt-1">{String(errors.password.message)}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </Button>
            <div className="text-center mt-4 text-sm text-slate-500">
              Don't have an account? <Link to="/signup" className="text-brand-500 font-medium hover:underline">Sign up</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
