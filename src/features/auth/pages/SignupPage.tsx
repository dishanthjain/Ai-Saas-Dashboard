import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../schemas/authSchemas';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAuthStore } from '@/store/authStore';

export const SignupPage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setError('');
      setAuth({ id: '1', name: data.name, email: data.email, plan: 'free' }, 'mock-token');
      navigate('/app');
    } catch (err: any) {
      setError(err.message || 'Failed to sign up');
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
          <CardTitle className="text-2xl font-bold">Create your NOVA account</CardTitle>
          <p className="text-sm text-slate-500 mt-1">Start your journey with unified AI intelligence</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">{error}</div>}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input type="text" placeholder="John Doe" {...register('name')} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{String(errors.name.message)}</p>}
            </div>
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
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <Input type="password" placeholder="••••••••" {...register('confirmPassword')} />
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{String(errors.confirmPassword.message)}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </Button>
            <div className="text-center mt-4 text-sm text-slate-500">
              Already have an account? <Link to="/login" className="text-brand-500 font-medium hover:underline">Sign in</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
