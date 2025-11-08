import React from 'react';
import { Link } from 'react-router-dom';
import type { Collection } from '../../data';

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 shadow-[0_35px_65px_-35px_rgba(129,140,248,0.55)] backdrop-blur-xl transition duration-300 hover:border-purple-400/45 hover:shadow-[0_45px_85px_-38px_rgba(167,139,250,0.65)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/18 via-indigo-500/12 to-transparent" />
      </div>
      {collection.heroImage ? (
        <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl border border-white/12 bg-slate-900/50 shadow-[0_25px_55px_-30px_rgba(124,58,237,0.55)]">
          <img
            src={collection.heroImage}
            alt={collection.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-white shadow-[0_15px_40px_-25px_rgba(17,24,39,0.65)]">
            Moodboard
          </div>
        </div>
      ) : null}
      <p className="relative text-[11px] uppercase tracking-[0.35em] text-purple-200/80">Curated by {collection.curator.name}</p>
      <h3 className="relative mt-3 text-2xl font-semibold text-white">{collection.title}</h3>
      <p className="relative mt-3 text-sm text-slate-200/80">{collection.subtitle}</p>
      <p className="relative mt-4 text-sm text-slate-200/70 line-clamp-3">{collection.description}</p>
      <div className="relative mt-5 flex flex-wrap gap-2 text-xs text-purple-100/75">
        {collection.themes.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 uppercase tracking-[0.3em] transition group-hover:border-purple-300/40 group-hover:bg-purple-500/15"
          >
            {theme}
          </span>
        ))}
      </div>
      <Link
        to={`/gallery?collection=${collection.slug}`}
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-purple-200 transition hover:text-white"
      >
        View artworks
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/20 text-[11px] text-white">
          →
        </span>
      </Link>
    </div>
  );
};

