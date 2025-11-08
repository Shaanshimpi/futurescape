export type ID = string;

export interface ArtistTestimonial {
  id: ID;
  brandName: string;
  brandLogo: string;
  quote: string;
  projectTitle: string;
  year: number;
}

export interface ArtistBadge {
  id: ID;
  label: string;
  color: string;
  description?: string;
}

export interface Artist {
  id: ID;
  slug: string;
  name: string;
  headline: string;
  bio: string;
  avatar: string;
  coverImage: string;
  location: {
    city: string;
    country: string;
    timezone: string;
  };
  specialties: string[];
  aiTools: string[];
  experienceLevel: string;
  languages: string[];
  availability: 'open' | 'waitlist' | 'booked';
  socialLinks: Array<{
    platform: 'behance' | 'dribbble' | 'instagram' | 'website' | 'linkedin' | 'twitter';
    url: string;
  }>;
  stats: {
    artworks: number;
    collaborations: number;
    approvalRate: number;
    averageRating: number;
    followers: number;
  };
  badges: ArtistBadge[];
  highlights: ID[]; // artwork ids
  testimonials: ArtistTestimonial[];
  featuredCollections: ID[]; // collection ids
}

export interface ArtworkMediaVariant {
  src: string;
  width: number;
  height: number;
  type: 'image' | 'video';
}

export interface Artwork {
  id: ID;
  slug: string;
  title: string;
  description: string;
  hero: string;
  media: ArtworkMediaVariant[];
  artistId: ID;
  collectionIds: ID[];
  relatedIds: ID[];
  styles: string[];
  mediums: string[];
  aiTools: string[];
  tags: string[];
  availability: 'available' | 'commissioned' | 'exclusive';
  priceRange: string;
  dimensions: {
    width: number;
    height: number;
    unit: 'px' | 'cm';
  };
  createdAt: string;
  updatedAt: string;
  stats: {
    views: number;
    likes: number;
    shares: number;
    saves: number;
  };
  collaborationHighlight?: {
    summary: string;
    brand: string;
    deliverables: string[];
    turnaroundWeeks: number;
  };
}

export interface Collection {
  id: ID;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  curator: {
    type: 'artist' | 'staff';
    id: ID;
    name: string;
  };
  heroImage: string;
  artworkIds: ID[];
  themes: string[];
  tags: string[];
  spotlight: string;
}

export interface BrandTestimonial {
  id: ID;
  brandName: string;
  logo: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
  profileImage: string;
  artistId: ID;
}

export interface NavigationLink {
  label: string;
  href: string;
  badge?: string;
}

export interface SiteSettings {
  navigation: NavigationLink[];
  mobileNavigation: NavigationLink[];
  footer: {
    columns: Array<{
      heading: string;
      links: NavigationLink[];
    }>;
    social: NavigationLink[];
  };
  heroVariants: Array<{
    id: string;
    eyebrow: string;
    headline: string;
    subheading: string;
    ctaPrimary: NavigationLink;
    ctaSecondary: NavigationLink;
  }>;
  ctaBlocks: Array<{
    id: string;
    title: string;
    description: string;
    illustration: string;
    action: NavigationLink;
  }>;
  metrics: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export interface Taxonomies {
  styles: string[];
  mediums: string[];
  aiTools: string[];
  locations: Array<{
    city: string;
    country: string;
    timezone: string;
  }>;
  experienceLevels: string[];
  priceRanges: string[];
  languages: string[];
}

export interface DataBundle {
  taxonomies: Taxonomies;
  artists: Artist[];
  artworks: Artwork[];
  collections: Collection[];
  testimonials: BrandTestimonial[];
  site: SiteSettings;
}

