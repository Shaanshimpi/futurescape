import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const Footer: React.FC = () => {
  const { site } = useData();

  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12 text-slate-300">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-[0_0_25px_rgba(129,140,248,0.45)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white">Futurescape</span>
            </div>
            <p className="text-sm text-slate-300/80">
              Curated collaborations between visionary brands and AI artists. Built for rapid campaign launches and cinematic storytelling.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-purple-200">
                Experience the Future
              </span>
              <span className="rounded-full border border-purple-400/30 bg-purple-500/20 px-3 py-1 text-[11px] uppercase tracking-wide text-purple-100">
                Crafted with AI
              </span>
            </div>
          </div>
          {site.footer.columns.map((column) => (
            <div key={column.heading} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">{column.heading}</p>
              <ul className="space-y-2 text-sm text-slate-300/80">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 transition duration-200 hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-purple-400 transition group-hover:scale-150" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-400/80">
            © {new Date().getFullYear()} Futurescape Studios. Mock experience for MVP planning.
          </p>
          <div className="flex items-center gap-4">
            {site.footer.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 transition hover:border-purple-400/50 hover:bg-white/10 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

