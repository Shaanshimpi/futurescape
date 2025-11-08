import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ArtworkCard } from '../components/cards/ArtworkCard';
import { Skeleton } from '../components/shared/Skeleton';

export const ArtworkDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { findArtworkBySlug, artists, artworks, isReady } = useData();

  useEffect(() => {
    if (isReady && slug) {
      console.info('[Artwork] view', slug);
    }
  }, [isReady, slug]);

  if (!isReady) {
    return (
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <Skeleton className="h-72 w-full rounded-3xl" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-48 w-full rounded-3xl" />
          ))}
        </div>
      </div>
    );
  }

  const artwork = slug ? findArtworkBySlug(slug) : undefined;

  if (!artwork) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-20 text-center text-slate-300">
        <h1 className="text-3xl font-semibold text-slate-100">Artwork not found</h1>
        <p className="mt-2 text-sm">Return to the gallery to continue exploring concepts.</p>
        <Link to="/gallery" className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-200">
          Back to gallery
        </Link>
      </div>
    );
  }

  const artist = artists.find((candidate) => candidate.id === artwork.artistId);
  const related = artworks.filter((item) => artwork.relatedIds.includes(item.id));

  return (
    <article className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="aspect-video w-full overflow-hidden rounded-3xl bg-slate-800/60">
            {artwork.hero || artwork.media[0]?.src ? (
              <img
                src={artwork.hero ?? artwork.media[0]?.src}
                alt={artwork.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">Campaign concept</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-100">{artwork.title}</h1>
            <p className="mt-4 text-sm text-slate-300">{artwork.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-400 md:grid-cols-4">
              <span className="rounded-full border border-slate-700 px-3 py-1">{artwork.availability}</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">{artwork.priceRange}</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">{artwork.mediums.join(', ')}</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">{artwork.styles.join(', ')}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
              {artwork.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {artwork.collaborationHighlight ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">Collaboration highlight</p>
              <p className="mt-2 text-slate-200">{artwork.collaborationHighlight.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-6 text-xs text-slate-400">
                {artwork.collaborationHighlight.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Brand: {artwork.collaborationHighlight.brand} · Turnaround: {artwork.collaborationHighlight.turnaroundWeeks} weeks
              </p>
            </div>
          ) : null}
        </div>
        <aside className="space-y-6">
          {artist && (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">Artist</p>
              <Link to={`/artist/${artist.slug}`} className="mt-2 block text-lg font-semibold text-slate-100 hover:text-indigo-200">
                {artist.name}
              </Link>
              <p className="mt-1 text-sm text-slate-400">{artist.headline}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div>
                  <p className="text-lg font-semibold text-slate-100">{artist.stats.collaborations}</p>
                  <p className="uppercase tracking-wide text-slate-500">collabs</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-100">{artist.stats.averageRating.toFixed(1)}</p>
                  <p className="uppercase tracking-wide text-slate-500">rating</p>
                </div>
              </div>
            </div>
          )}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">Metrics</p>
            <ul className="mt-3 space-y-2 text-slate-200">
              <li>Views: {artwork.stats.views.toLocaleString()}</li>
              <li>Likes: {artwork.stats.likes.toLocaleString()}</li>
              <li>Saves: {artwork.stats.saves.toLocaleString()}</li>
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-indigo-300">AI tooling</p>
            <p className="mt-1 text-sm text-slate-300">{artwork.aiTools.join(', ')}</p>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">Related concepts</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArtworkCard key={item.id} artwork={item} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

