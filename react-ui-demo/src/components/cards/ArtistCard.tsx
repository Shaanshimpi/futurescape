import React from 'react';
import { Link } from 'react-router-dom';
import type { Artist } from '../../data';

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Link
      to={`/artist/${artist.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-6 shadow-[0_30px_55px_-34px_rgba(129,140,248,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/45 hover:shadow-[0_40px_70px_-32px_rgba(167,139,250,0.65)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent" />
      </div>
      <div className="relative flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-full border border-white/15 bg-slate-900/60 shadow-[0_15px_35px_-20px_rgba(124,58,237,0.65)]">
          {artist.avatar ? (
            <img src={artist.avatar} alt={artist.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
          ) : null}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-purple-200/80">Featured Artist</p>
          <h3 className="text-xl font-semibold text-white transition group-hover:text-purple-100">{artist.name}</h3>
          <p className="text-sm text-slate-200/70">{artist.headline}</p>
        </div>
      </div>
      <div className="relative mt-5 flex flex-wrap gap-2 text-xs text-purple-100/75">
        {artist.specialties.slice(0, 3).map((specialty) => (
          <span
            key={specialty}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 uppercase tracking-[0.25em] transition group-hover:border-purple-300/40 group-hover:bg-purple-500/15"
          >
            {specialty}
          </span>
        ))}
      </div>
      <div className="relative mt-6 grid grid-cols-3 gap-3 text-center text-xs text-slate-300/80">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_15px_35px_-28px_rgba(129,140,248,0.5)]">
          <p className="text-lg font-semibold text-white">{artist.stats.artworks}</p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-purple-200/70">Artworks</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_15px_35px_-28px_rgba(129,140,248,0.5)]">
          <p className="text-lg font-semibold text-white">{artist.stats.collaborations}</p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-purple-200/70">Collabs</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_15px_35px_-28px_rgba(129,140,248,0.5)]">
          <p className="text-lg font-semibold text-white">{artist.stats.approvalRate}%</p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-purple-200/70">Approval</p>
        </div>
      </div>
    </Link>
  );
};

