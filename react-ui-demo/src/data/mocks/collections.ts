import type { Collection } from '../types';
import { artists } from './artists';
import { artworks } from './artworks';

const collectionThemes = [
  {
    id: 'collection-cyber-dreams',
    title: 'Cyber Dreams',
    subtitle: 'Iridescent visions for future cities',
    description: 'A curated sequence of neon-driven campaign visuals exploring cybernetic couture and immersive retail experiences.',
    theme: ['Cyberpunk', 'Cinematic'],
  },
  {
    id: 'collection-botanical-futures',
    title: 'Botanical Futures',
    subtitle: 'Regenerative flora for wellness brands',
    description: 'Organic environments sculpted with AI-enhanced botanics, perfect for wellness retreats and eco-forward hospitality.',
    theme: ['Organic Abstraction', 'Wellness'],
  },
  {
    id: 'collection-stellar-mythos',
    title: 'Stellar Mythos',
    subtitle: 'Afrofuturist legends for streaming anthologies',
    description: 'Powerful visual stories weaving ancestral symbolism with cosmic futurism.',
    theme: ['Surrealism', 'Narrative'],
  },
  {
    id: 'collection-minimal-serenity',
    title: 'Minimal Serenity',
    subtitle: 'Mindful architectural experiences',
    description: 'Calming environments for luxury retreats, focusing on light, texture, and sensory balance.',
    theme: ['Minimalism', 'Architectural'],
  },
  {
    id: 'collection-motion-frequency',
    title: 'Motion Frequency',
    subtitle: 'Audio-reactive motion ecosystems',
    description: 'Dynamic visual systems tuned to live performances and immersive installations.',
    theme: ['Motion Graphics', 'Stage Design'],
  },
  {
    id: 'collection-couture-chronicles',
    title: 'Couture Chronicles',
    subtitle: 'High-fashion narratives for editorial spreads',
    description: 'Fashion-forward collages and AI-guided lookbooks ready for global campaigns.',
    theme: ['Fashion Illustration', 'Editorial'],
  },
];

const pickArtworks = (start: number, count: number) =>
  artworks.slice(start, start + count).map((artwork) => artwork.id);

export const collections: Collection[] = collectionThemes.map((theme, index) => {
  const curator = artists[index % artists.length];
  const artworkIds = pickArtworks(index * 6 % artworks.length, 8);

  const heroImage = `${artworks[(index * 3) % artworks.length].hero}`;

  return {
    id: theme.id,
    slug: theme.id.replace('collection-', ''),
    title: theme.title,
    subtitle: theme.subtitle,
    description: theme.description,
    curator: { type: 'artist', id: curator.id, name: curator.name },
    heroImage,
    artworkIds,
    themes: theme.theme,
    tags: theme.theme.map((item) => item.toLowerCase()),
    spotlight: `${theme.title} features ${artworkIds.length} visuals ready for immediate curation.`,
  } satisfies Collection;
});

const artworkMap = new Map(artworks.map((artwork) => [artwork.id, artwork]));
const artistMap = new Map(artists.map((artist) => [artist.id, artist]));
collections.forEach((collection) => {
  collection.artworkIds.forEach((artworkId) => {
    const artwork = artworkMap.get(artworkId);
    if (artwork) {
      if (!artwork.collectionIds.includes(collection.id)) {
        artwork.collectionIds.push(collection.id);
      }
      const artist = artistMap.get(artwork.artistId);
      if (artist && !artist.featuredCollections.includes(collection.id)) {
        artist.featuredCollections.push(collection.id);
      }
    }
  });
});
