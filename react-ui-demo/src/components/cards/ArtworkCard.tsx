import React from 'react';
import { Link } from 'react-router-dom';
import type { Artwork } from '../../data';

interface ArtworkCardProps {
  artwork: Artwork;
  layout?: 'vertical' | 'horizontal';
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, layout = 'vertical' }) => {
  const heroSrc = artwork.hero ?? artwork.media[0]?.src;

  if (layout === 'horizontal') {
    return (
      <Link
        to={`/artwork/${artwork.slug}`}
        className="group relative flex gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_25px_45px_-30px_rgba(129,140,248,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_30px_55px_-28px_rgba(165,180,252,0.55)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-fuchsia-500/10 to-transparent" />
        </div>
        <div className="relative aspect-video w-40 flex-none overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
          {heroSrc ? (
            <img src={heroSrc} alt={artwork.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
          ) : null}
        </div>
        <div className="relative space-y-2">
          <p className="text-[11px] uppercase tracking-[0.35em] text-purple-200">{artwork.aiTools.join(' · ')}</p>
          <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-100">{artwork.title}</h3>
          <p className="text-sm text-slate-200/70 line-clamp-2">{artwork.description}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/artwork/${artwork.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_55px_-32px_rgba(129,140,248,0.55)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_40px_70px_-35px_rgba(165,180,252,0.6)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-transparent" />
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
        {heroSrc ? (
          <img src={heroSrc} alt={artwork.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        ) : null}
      </div>
      <div className="relative mt-4 flex-1 space-y-2">
        <p className="text-[11px] uppercase tracking-[0.35em] text-purple-200">{artwork.aiTools.join(' · ')}</p>
        <h3 className="text-xl font-semibold text-white transition group-hover:text-purple-100">{artwork.title}</h3>
        <p className="text-sm text-slate-200/75 line-clamp-3">{artwork.description}</p>
      </div>
      <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs uppercase tracking-widest text-slate-300/70">
        <span>{artwork.styles.join(' • ')}</span>
        <span className="rounded-full border border-purple-400/30 bg-purple-500/15 px-2 py-1 text-[11px] text-purple-100">{artwork.priceRange}</span>
      </div>
    </Link>
  );
};

