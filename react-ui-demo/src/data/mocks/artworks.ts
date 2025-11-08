import type { Artwork } from '../types';
import { artists } from './artists';

const imagePool = [
  "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyfHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwzfHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHw0fHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHw1fHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHw2fHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHw3fHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1577084381380-3b9ea4153664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHw4fHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579541513287-3f17a5d8d62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHw5fHxhcnR8ZW58MXwxfHx8MTc2MjU5MzY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1578301978162-7aae4d755744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxMHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxMXx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxMnx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1599894019794-50339c9ad89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxM3x8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxNHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1548081087-a8a3bc4ff088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxNXx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxNnx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxN3x8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1577084381314-cae9920e6871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxOHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwxOXx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyMHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyMXx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579762715459-5a068c289fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyMnx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1549289524-06cf8837ace5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyM3x8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1602464729960-f95937746b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyNHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyNXx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyNnx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyN3x8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1575995872537-3793d29d972c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyOHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwyOXx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1569759276108-31b8e7e43e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc4ODl8MHwxfHNlYXJjaHwzMHx8YXJ0fGVufDF8MXx8fDE3NjI1OTM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

const stylePool = ['Neo-Futurism', 'Surrealism', 'Organic Abstraction', 'Minimalism', 'Cyberpunk', 'Editorial', 'Concept Art', 'Stage Design'];
const mediumPool = ['Digital Painting', '3D Render', 'Vector Illustration', 'Procedural Art', 'Photobashing'];
const aiToolsPool = ['Midjourney', 'Stable Diffusion', 'Runway Gen-2', 'Adobe Firefly', 'TouchDesigner'];
const priceRanges = ['<$500', '$500–$1.5k', '$1.5k–$3k', '$3k–$7.5k', '$7.5k+'];

const titleFragments = ['Prism', 'Halo', 'Synthesis', 'Echo', 'Nebula', 'Chronicle', 'Pulse', 'Remix', 'Genesis', 'Axis'];
const titlePrefixes = ['Quantum', 'Aurora', 'Celestial', 'Hybrid', 'Luminous', 'Afterglow', 'Drift', 'Spectral', 'Radiant', 'Future'];

const generateDescription = (style: string, tool: string) =>
  `A ${style.toLowerCase()} composition exploring new visual languages through ${tool} workflows.`;

export const artworks: Artwork[] = Array.from({ length: 50 }, (_, index) => {
  const artist = artists[index % artists.length];
  const style = stylePool[index % stylePool.length];
  const altStyle = stylePool[(index + 3) % stylePool.length];
  const medium = mediumPool[index % mediumPool.length];
  const tool = aiToolsPool[index % aiToolsPool.length];
  const price = priceRanges[index % priceRanges.length];
  const title = `${titlePrefixes[index % titlePrefixes.length]} ${titleFragments[(index + 2) % titleFragments.length]}`;

  const hero = `${imagePool[index % imagePool.length]}&sig=${index + 7}`;

  return {
    id: `artwork-${String(index + 1).padStart(3, '0')}`,
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    title,
    description: generateDescription(style, tool),
    hero,
    media: [
      { src: hero, width: 1600, height: 1000, type: 'image' },
      { src: `${imagePool[(index + 5) % imagePool.length]}&sig=${index + 107}`, width: 1080, height: 1350, type: 'image' },
    ],
    artistId: artist.id,
    collectionIds: [],
    relatedIds: [],
    styles: [style, altStyle],
    mediums: [medium],
    aiTools: [tool, aiToolsPool[(index + 1) % aiToolsPool.length]],
    tags: [style.toLowerCase(), medium.toLowerCase(), tool.toLowerCase()],
    availability: (['available', 'commissioned', 'exclusive'][index % 3] as Artwork['availability']),
    priceRange: price,
    dimensions: {
      width: 3840,
      height: 2160,
      unit: 'px',
    },
    createdAt: new Date(Date.now() - index * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - index * 43200000).toISOString(),
    stats: {
      views: 8000 + index * 250,
      likes: 1200 + index * 45,
      shares: 180 + index * 8,
      saves: 700 + index * 33,
    },
    collaborationHighlight:
      index % 3 === 0
        ? {
            summary: `Campaign assets created for ${artist.name.split(' ')[0]}’s premiere collaboration blending fashion and tech.`,
            brand: ['Lumina Labs', 'Verdure Collective', 'Syntek Studios'][index % 3],
            deliverables: ['Hero imagery', 'Motion teaser', 'Keynote deck'].slice(0, (index % 3) + 1),
            turnaroundWeeks: 3 + (index % 4),
          }
        : undefined,
  } satisfies Artwork;
});

// Populate related IDs (simple heuristic: link to next two artworks by same artist)
artworks.forEach((artwork) => {
  const siblings = artworks.filter((other) => other.artistId === artwork.artistId && other.id !== artwork.id);
  artwork.relatedIds = siblings.slice(0, 2).map((item) => item.id);
});

const artistMap = new Map(artists.map((artist) => [artist.id, artist]));
artworks.forEach((artwork) => {
  const artist = artistMap.get(artwork.artistId);
  if (artist && artist.highlights.length < 6) {
    artist.highlights.push(artwork.id);
  }
});