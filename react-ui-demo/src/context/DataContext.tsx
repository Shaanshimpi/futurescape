import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DATA_BUNDLE } from '../data';
import type { Artist, Artwork, Collection, BrandTestimonial, Taxonomies, SiteSettings } from '../data';

interface DataContextValue {
  artists: Artist[];
  artworks: Artwork[];
  collections: Collection[];
  testimonials: BrandTestimonial[];
  taxonomies: Taxonomies;
  site: SiteSettings;
  findArtworkBySlug: (slug: string) => Artwork | undefined;
  findArtistBySlug: (slug: string) => Artist | undefined;
  getArtworksByArtist: (artistId: string) => Artwork[];
  isReady: boolean;
}

const DataContext = createContext<DataContextValue | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  const value = useMemo<DataContextValue>(() => {
    const { artists, artworks, collections, testimonials, taxonomies, site } = DATA_BUNDLE;
    const artworkBySlug = new Map(artworks.map((artwork) => [artwork.slug, artwork]));
    const artistBySlug = new Map(artists.map((artist) => [artist.slug, artist]));
    const artworksByArtist = artworks.reduce<Record<string, Artwork[]>>((acc, artwork) => {
      if (!acc[artwork.artistId]) {
        acc[artwork.artistId] = [];
      }
      acc[artwork.artistId].push(artwork);
      return acc;
    }, {});

    return {
      artists,
      artworks,
      collections,
      testimonials,
      taxonomies,
      site,
      findArtworkBySlug: (slug) => artworkBySlug.get(slug),
      findArtistBySlug: (slug) => artistBySlug.get(slug),
      getArtworksByArtist: (artistId) => artworksByArtist[artistId] ?? [],
      isReady,
    };
  }, [isReady]);

  useEffect(() => {
    // TODO: replace timeout with real Payload fetch once backend is connected
    const tid = window.setTimeout(() => setIsReady(true), 350);
    return () => window.clearTimeout(tid);
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): DataContextValue => {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error('useData must be used within a DataProvider');
  }
  return ctx;
};

