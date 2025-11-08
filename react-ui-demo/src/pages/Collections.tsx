import React from 'react';
import { useData } from '../context/DataContext';
import { CollectionCard } from '../components/cards/CollectionCard';
import { Skeleton } from '../components/shared/Skeleton';

export const CollectionsPage: React.FC = () => {
  const { collections, isReady } = useData();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">Collections</p>
        <h1 className="text-3xl font-semibold text-slate-100">Curated narratives for campaign inspiration</h1>
        <p className="text-sm text-slate-400">
          Each collection aggregates artworks around a shared theme. Future phases will allow deep dives and shareable moodboards.
        </p>
      </header>
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {isReady
          ? collections.map((collection) => <CollectionCard key={collection.id} collection={collection} />)
          : Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-48 w-full rounded-3xl" />)}
      </section>
    </div>
  );
};

