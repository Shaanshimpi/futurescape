import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArtworkCard } from '../components/cards/ArtworkCard';
import { Skeleton } from '../components/shared/Skeleton';
import { SectionHeader } from '../components/shared/SectionHeader';
import { CTAButton } from '../components/shared/CTAButton';

export const ArtistDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { findArtistBySlug, getArtworksByArtist, testimonials, isReady } = useData();

  if (!isReady) {
    return (
      <div className="relative mx-auto max-w-6xl px-4 pb-16">
        <Skeleton className="h-64 w-full rounded-3xl border border-white/20 bg-slate-900/70" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-48 w-full rounded-3xl border border-white/15 bg-slate-900/70" />
          ))}
        </div>
      </div>
    );
  }

  const artist = slug ? findArtistBySlug(slug) : undefined;

  if (!artist) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-slate-300">
        <h1 className="text-3xl font-semibold text-slate-100">Artist not found</h1>
        <p className="mt-2 text-sm">Browse the roster to discover other artists aligned with your vision.</p>
        <Link to="/artists" className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-200">
          Back to artist roster
        </Link>
      </div>
    );
  }

  const artistArtworks = getArtworksByArtist(artist.id);
  const artistTestimonials = testimonials.filter((testimonial) => testimonial.artistId === artist.id);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-35%] h-[120%] w-[65%] rotate-12 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/12 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 left-[-35%] h-[120%] w-[60%] -rotate-12 bg-gradient-to-br from-cyan-500/12 via-indigo-500/12 to-transparent blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-slate-950/75 p-8 shadow-[0_45px_95px_-45px_rgba(129,140,248,0.75)] backdrop-blur-xl lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/18 via-indigo-500/12 to-transparent opacity-80" />

          {artist.coverImage ? (
            <div className="relative mb-8 h-56 w-full overflow-hidden rounded-3xl border border-white/12 shadow-[0_30px_70px_-40px_rgba(129,140,248,0.75)]">
              <img src={artist.coverImage} alt={`${artist.name} cover`} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
            </div>
          ) : null}
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <div className="h-32 w-32 overflow-hidden rounded-full border border-white/20 bg-slate-900/60 shadow-[0_25px_55px_-28px_rgba(167,139,250,0.75)]">
                {artist.avatar ? <img src={artist.avatar} alt={artist.name} className="h-full w-full object-cover" loading="lazy" /> : null}
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">Artist Spotlight</p>
                <h1 className="text-3xl font-semibold text-white md:text-4xl">{artist.name}</h1>
                <p className="text-sm text-white/80">{artist.headline}</p>
              </div>
            </div>
            <div className="flex-1 space-y-6 text-white">
              <p className="text-sm text-white/80">{artist.bio}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white/75">
                {artist.badges.map((badge) => (
                  <span
                    key={badge.id}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 uppercase tracking-[0.25em] text-purple-100/85"
                    title={badge.description}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-white/70">
                <span className="rounded-full border border-white/25 bg-slate-950/70 px-3 py-1">
                  {artist.location.city}, {artist.location.country}
                </span>
                <span className="rounded-full border border-white/25 bg-slate-950/70 px-3 py-1">{artist.experienceLevel}</span>
                <span className="rounded-full border border-white/25 bg-slate-950/70 px-3 py-1">
                  Speaks {artist.languages.join(', ')}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 ${
                    artist.availability === 'open'
                      ? 'border-emerald-400/60 bg-emerald-500/15 text-emerald-100'
                      : 'border-white/25 bg-slate-950/70 text-white/70'
                  }`}
                >
                  Availability: {artist.availability}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-purple-100/80">
                {artist.socialLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 uppercase tracking-[0.25em] text-white/85 transition hover:border-purple-300/40 hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <CTAButton
                  to="/gallery"
                  variant="secondary"
                  className="border-white/35 bg-slate-950/70 text-white hover:border-purple-300/60 hover:bg-slate-900/80"
                >
                  View full gallery
                </CTAButton>
                <CTAButton to="/collections#consult" variant="ghost" className="text-white/85 hover:text-white">
                  Request collaboration
                </CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 text-center text-xs text-white/75 lg:w-[22rem]">
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_20px_45px_-30px_rgba(129,140,248,0.6)]">
                <p className="text-lg font-semibold text-white">{artist.stats.collaborations}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">Collaborations</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_20px_45px_-30px_rgba(129,140,248,0.6)]">
                <p className="text-lg font-semibold text-white">{artist.stats.approvalRate}%</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">Approval</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_20px_45px_-30px_rgba(129,140,248,0.6)]">
                <p className="text-lg font-semibold text-white">{artist.stats.artworks}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">Artworks</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 p-4 shadow-[0_20px_45px_-30px_rgba(129,140,248,0.6)]">
                <p className="text-lg font-semibold text-white">{artist.stats.averageRating.toFixed(1)}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/65">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <SectionHeader eyebrow="Portfolio" title="Highlights from recent collaborations" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {artistArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        {artistArtworks.length === 0 && (
          <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 text-sm text-white/70 backdrop-blur-xl">
            This artist’s portfolio is being curated. Check back soon or explore other creators in the roster.
          </div>
        )}
      </section>

      {artistTestimonials.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-4 pb-20">
          <SectionHeader eyebrow="Brand Feedback" title="What collaborators are saying" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {artistTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 text-sm text-white/80 shadow-[0_35px_80px_-40px_rgba(129,140,248,0.7)] transition duration-300 hover:border-purple-400/50 hover:shadow-[0_45px_95px_-38px_rgba(167,139,250,0.75)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/12 via-indigo-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <p className="relative text-lg font-medium text-white">“{testimonial.quote}”</p>
                <div className="relative mt-6 flex items-center gap-4">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.authorName}
                    className="h-11 w-11 rounded-full border border-white/20 object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">{testimonial.authorName}</p>
                    <p className="text-xs uppercase tracking-[0.35em] text-purple-200/80">{testimonial.authorTitle}</p>
                    <p className="text-xs text-white/70">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

