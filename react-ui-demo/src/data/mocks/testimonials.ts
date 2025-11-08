import type { BrandTestimonial } from '../types';
import { artists } from './artists';

const logoPool = [
  'https://dummyimage.com/120x120/1f2937/ffffff&text=LL',
  'https://dummyimage.com/120x120/1f2937/ffffff&text=VC',
  'https://dummyimage.com/120x120/1f2937/ffffff&text=SS',
  'https://dummyimage.com/120x120/1f2937/ffffff&text=OO',
  'https://dummyimage.com/120x120/1f2937/ffffff&text=FX',
  'https://dummyimage.com/120x120/1f2937/ffffff&text=GA',
];

const profilePool = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80&sat=40',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80&sat=20',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80&hue=260',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1521578770793-90d365d77005?auto=format&fit=crop&w=200&q=80',
];

const companies = [
  { brand: 'Lumina Labs', role: 'VP Creative', company: 'Lumina Labs' },
  { brand: 'Verdure Collective', role: 'Experience Director', company: 'Verdure Collective' },
  { brand: 'Syntek Studios', role: 'Head of Experiential', company: 'Syntek Studios' },
  { brand: 'Orbit Originals', role: 'Showrunner', company: 'Orbit Originals' },
  { brand: 'Flux Agency', role: 'Executive Producer', company: 'Flux Agency' },
  { brand: 'Galaxia Media', role: 'Creative Director', company: 'Galaxia Media' },
];

const quotes = [
  'Delivered visuals that amplified our product story and launch momentum.',
  'Captured the regenerative essence of our brand ethos with sensitivity.',
  'Generated adaptive experiences that kept audiences immersed start to finish.',
  'Created narrative depth that elevated our streaming anthology debut.',
  'Built an unforgettable campaign toolkit in record time.',
  'Translated complex data into emotive storytelling for our docuseries.',
];

export const testimonials: BrandTestimonial[] = Array.from({ length: 24 }, (_, index) => {
  const artist = artists[index % artists.length];
  const company = companies[index % companies.length];
  return {
    id: `testimonial-${index + 1}`,
    brandName: company.brand,
    logo: logoPool[index % logoPool.length],
    quote: quotes[index % quotes.length],
    authorName: `${['Jade', 'Noah', 'Riya', 'Lara', 'Kian', 'Mara'][index % 6]} ${['Morales', 'van der Meer', 'Patel', 'Gibson', 'Lee', 'Hughes'][index % 6]}`,
    authorTitle: company.role,
    company: company.company,
    profileImage: profilePool[index % profilePool.length],
    artistId: artist.id,
  } satisfies BrandTestimonial;
});
