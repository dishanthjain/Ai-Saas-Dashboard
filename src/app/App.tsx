import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './providers';
import LandingPage from '../features/marketing/LandingPage';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { SignupPage } from '../features/auth/pages/SignupPage';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';
import { AIChatPage } from '../features/ai-tools/pages/AIChatPage';
import { useAuthStore } from '../store/authStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/app" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/app/tools/chat" element={
            <ProtectedRoute>
              <AIChatPage />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
