import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative text-sm font-medium transition-all duration-200',
    'px-3 py-1 rounded-full',
    isActive
      ? 'text-white bg-white/10 shadow-[0_0_25px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/40 backdrop-blur'
      : 'text-slate-200/70 hover:text-white hover:bg-white/5 hover:shadow-[0_0_20px_rgba(129,140,248,0.25)]',
  ].join(' ');

export const Header: React.FC = () => {
  const { site } = useData();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-white/5 shadow-[0_20px_45px_-25px_rgba(76,29,149,0.55)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-full bg-white/5 px-3 py-1.5 text-white transition duration-200 hover:bg-white/10"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-[0_0_25px_rgba(129,140,248,0.45)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-100">Futurescape</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {site.navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClass} end>
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-2 rounded-full bg-gradient-to-r from-purple-500/50 to-indigo-500/50 px-2 py-0.5 text-[10px] text-white">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:border-purple-400/60 hover:text-white md:inline-flex"
          >
            <Sparkles className="h-3 w-3 text-purple-300" />
            Quick Search
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 text-white shadow-[0_5px_20px_rgba(79,70,229,0.35)] transition hover:border-purple-400/60 hover:text-white md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/85 shadow-[0_25px_45px_-25px_rgba(76,29,149,0.6)] backdrop-blur md:hidden">
          <nav className="space-y-1 px-4 py-4">
            {site.mobileNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200',
                    isActive
                      ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(167,139,250,0.25)]'
                      : 'text-slate-200/80 hover:bg-white/5 hover:text-white',
                  ].join(' ')
                }
                onClick={() => setMobileOpen(false)}
                end
              >
                <span>{item.label}</span>
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400" />
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

