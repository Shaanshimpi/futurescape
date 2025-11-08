import { artists } from './mocks/artists.ts';
import { artworks } from './mocks/artworks.ts';
import { collections } from './mocks/collections.ts';
import { testimonials } from './mocks/testimonials.ts';
import { TAXONOMIES } from './taxonomies';
import { SITE_SETTINGS } from './site';
import type { DataBundle } from './types';

export const DATA_BUNDLE: DataBundle = {
  taxonomies: TAXONOMIES,
  artists,
  artworks,
  collections,
  testimonials,
  site: SITE_SETTINGS,
};

export type { Artist, Artwork, Collection, BrandTestimonial, SiteSettings, Taxonomies } from './types';

