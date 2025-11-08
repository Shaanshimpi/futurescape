import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { FilterChip } from '../components/shared/FilterChip';
import { Skeleton } from '../components/shared/Skeleton';
import { useFilterState } from '../hooks/useFilterState';
import { usePagination } from '../hooks/usePagination';

export const GalleryPage: React.FC = () => {
  const { artworks, taxonomies, collections, isReady } = useData();
  const [params, setParams] = useSearchParams();
  const topRef = useRef<HTMLDivElement | null>(null);
  const initialCollection = params.get('collection');
  const styleFilter = useFilterState<string>('All');
  const sortFilter = useFilterState<'trending' | 'newest'>('trending');

  const filtered = useMemo(() => {
    let result = artworks;

    if (initialCollection) {
      const collection = collections.find((col) => col.slug === initialCollection);
      if (collection) {
        result = result.filter((artwork) => collection.artworkIds.includes(artwork.id));
      }
    }

    if (styleFilter.value !== 'All') {
      result = result.filter((artwork) => artwork.styles.includes(styleFilter.value as string));
    }

    if (sortFilter.value === 'trending') {
      result = [...result].sort((a, b) => b.stats.views - a.stats.views);
    } else {
      result = [...result].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    }

    return result;
  }, [artworks, styleFilter.value, sortFilter.value, initialCollection, collections]);

  const pagination = usePagination({ total: filtered.length, perPage: 20 });
  const paginated = pagination.slice(filtered);

  const resetPagination = () => {
    pagination.reset();
  };

  const handleStyleClick = (style: string) => {
    styleFilter.select(style);
    resetPagination();
    params.delete('collection');
    setParams(params, { replace: true });
    console.info('[Gallery] style filter applied', style);
  };

  const handleCollectionPill = (slug: string) => {
    params.set('collection', slug);
    setParams(params, { replace: true });
    styleFilter.reset();
    resetPagination();
    console.info('[Gallery] collection filter applied', slug);
  };

  useEffect(() => {
    if (isReady) {
      console.info('[Gallery] page view', {
        page: pagination.page,
        totalPages: pagination.totalPages,
        style: styleFilter.value,
        collection: initialCollection ?? 'All',
        sort: sortFilter.value,
      });
    }
  }, [isReady, pagination.page, pagination.totalPages, styleFilter.value, initialCollection, sortFilter.value]);

  return (
    <div ref={topRef} className="mx-auto max-w-6xl px-4 pb-12">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">Gallery</p>
        <h1 className="text-3xl font-semibold text-slate-100">Explore campaign-ready concepts</h1>
        <p className="text-sm text-slate-400">
          Use the mock filters to experience how brands will shortlist AI artwork once this connects to Payload.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
        <span className="font-semibold text-slate-400">Styles:</span>
        {['All', ...taxonomies.styles].map((style) => (
          <FilterChip key={style} label={style} active={styleFilter.isActive(style)} onClick={() => handleStyleClick(style)} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="font-semibold text-slate-400">Collections:</span>
        {collections.slice(0, 5).map((collection) => (
          <FilterChip
            key={collection.id}
            label={collection.title}
            active={initialCollection === collection.slug}
            onClick={() => handleCollectionPill(collection.slug)}
          />
        ))}
        {initialCollection && !collections.some((c) => c.slug === initialCollection) ? (
          <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-500">Unknown collection</span>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border border-slate-800 bg-slate-900/70 px-4 py-3 text-xs text-slate-300">
        <div>
          Showing <span className="font-semibold text-slate-200">{filtered.length}</span> mock artworks
        </div>
        <div className="flex items-center gap-2">
          <span>Sort by</span>
          <FilterChip label="Trending" active={sortFilter.isActive('trending')} onClick={() => sortFilter.select('trending')} />
          <FilterChip label="Newest" active={sortFilter.isActive('newest')} onClick={() => sortFilter.select('newest')} />
        </div>
      </div>

      <section className="mt-8">
        {isReady ? (
          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {paginated.map((artwork) => {
              const hero = artwork.hero ?? artwork.media[0]?.src;
              return (
                <Link
                  key={artwork.id}
                  to={`/artwork/${artwork.slug}`}
                  className="group relative mb-6 block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-[0_35px_75px_-35px_rgba(129,140,248,0.6)] transition duration-300 hover:border-purple-400/45 hover:shadow-[0_45px_90px_-38px_rgba(167,139,250,0.7)] break-inside-avoid"
                >
                  {hero ? (
                    <img src={hero} alt={artwork.title} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-80 w-full bg-slate-800" />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/20 to-slate-950/80 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-purple-200/80">{artwork.aiTools.join(' · ')}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{artwork.title}</h3>
                    </div>
                    <p className="text-sm text-white/80 line-clamp-3">{artwork.description}</p>
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                      <span>{artwork.styles.join(' • ')}</span>
                      <span className="rounded-full border border-white/30 bg-white/10 px-2 py-1 text-[11px]">{artwork.priceRange}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="columns-1 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="mb-6 h-72 w-full rounded-3xl border border-white/15" />
            ))}
          </div>
        )}
      </section>

      <div className="mt-10 flex items-center justify-between text-sm text-slate-400">
        <button
          type="button"
          disabled={pagination.page === 1}
          className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-slate-500 disabled:opacity-40"
          onClick={pagination.previous}
        >
          Previous
        </button>
        <span>
          Page {pagination.page} of {pagination.totalPages}
        </span>
        <button
          type="button"
          disabled={pagination.page === pagination.totalPages}
          className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-slate-500 disabled:opacity-40"
          onClick={pagination.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

