import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

const ScrollReset: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

export const Layout: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/80 to-slate-900 text-slate-100">
      <ScrollReset />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.2),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-20%] h-[140%] w-[60%] rotate-12 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 left-[-25%] h-[120%] w-[55%] -rotate-12 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col backdrop-blur-[1px]">
        <Header />
        <main className="flex-1 pt-24 md:pt-28">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

