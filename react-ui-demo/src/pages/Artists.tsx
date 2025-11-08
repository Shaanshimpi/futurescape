import React, { useEffect, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { ArtistCard } from '../components/cards/ArtistCard';
import { FilterChip } from '../components/shared/FilterChip';
import { Skeleton } from '../components/shared/Skeleton';
import { useFilterState } from '../hooks/useFilterState';

export const ArtistsPage: React.FC = () => {
  const { artists, taxonomies, isReady } = useData();
  const experienceFilter = useFilterState<string>('All');
  const availabilityFilter = useFilterState<'All' | 'open' | 'waitlist' | 'booked'>('All');

  const filtered = useMemo(() => {
    return artists.filter((artist) => {
      if (experienceFilter.value !== 'All' && artist.experienceLevel !== experienceFilter.value) {
        return false;
      }
      if (availabilityFilter.value !== 'All' && artist.availability !== availabilityFilter.value) {
        return false;
      }
      return true;
    });
  }, [artists, experienceFilter.value, availabilityFilter.value]);

  useEffect(() => {
    if (isReady) {
      console.info('[Artists] filters', {
        experience: experienceFilter.value,
        availability: availabilityFilter.value,
        results: filtered.length,
      });
    }
  }, [isReady, experienceFilter.value, availabilityFilter.value, filtered.length]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">Artists</p>
        <h1 className="text-3xl font-semibold text-slate-100">Meet the mock roster of AI collaborators</h1>
        <p className="text-sm text-slate-400">
          Toggle filters to simulate roster curation. In production these will query Payload for matching artists.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="font-semibold text-slate-400">Experience:</span>
        {['All', ...taxonomies.experienceLevels].map((level) => (
          <FilterChip key={level} label={level} active={experienceFilter.isActive(level)} onClick={() => experienceFilter.select(level)} />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="font-semibold text-slate-400">Availability:</span>
        {['All', 'open', 'waitlist', 'booked'].map((state) => (
          <FilterChip
            key={state}
            label={state === 'All' ? 'All' : state.charAt(0).toUpperCase() + state.slice(1)}
            active={availabilityFilter.isActive(state as 'All' | 'open' | 'waitlist' | 'booked')}
            onClick={() => availabilityFilter.select(state as 'All' | 'open' | 'waitlist' | 'booked')}
          />
        ))}
      </div>

      <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isReady
          ? filtered.map((artist) => <ArtistCard key={artist.id} artist={artist} />)
          : Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="h-44 w-full rounded-3xl" />)}
      </section>
    </div>
  );
};

