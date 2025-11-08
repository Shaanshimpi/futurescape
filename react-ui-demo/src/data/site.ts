import type { SiteSettings } from './types';

export const SITE_SETTINGS: SiteSettings = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Artists', href: '/artists' },
    { label: 'Collections', href: '/collections' },
    { label: 'Insights', href: '/insights', badge: 'New' },
  ],
  mobileNavigation: [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Artists', href: '/artists' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
  ],
  footer: {
    columns: [
      {
        heading: 'Platform',
        links: [
          { label: 'How it works', href: '/insights#how-it-works' },
          { label: 'Pricing', href: '/insights#pricing' },
          { label: 'FAQs', href: '/about#faq' },
        ],
      },
      {
        heading: 'For Artists',
        links: [
          { label: 'Apply to join', href: '/artists#apply' },
          { label: 'Portfolio tips', href: '/insights#portfolio' },
          { label: 'Community', href: '/insights#community' },
        ],
      },
      {
        heading: 'For Brands',
        links: [
          { label: 'Book a discovery call', href: '/collections#consult' },
          { label: 'Case studies', href: '/insights#case-studies' },
          { label: 'Brand brief template', href: '/insights#brief' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/futurescape' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/futurescape' },
      { label: 'Behance', href: 'https://behance.net/futurescape' },
    ],
  },
  heroVariants: [
    {
      id: 'default',
      eyebrow: 'The AI Art Collaboration Hub',
      headline: 'Connect visionary brands with verified AI artists.',
      subheading: 'Browse cinematic portfolios, commission new worlds, and track collaborations inside one immersive workspace.',
      ctaPrimary: { label: 'Explore the gallery', href: '/gallery' },
      ctaSecondary: { label: 'Meet the artists', href: '/artists' },
    },
    {
      id: 'brands',
      eyebrow: 'Need a campaign hero in 2 weeks?',
      headline: 'Brief the world’s leading AI artists in minutes.',
      subheading: 'Submit a creative brief once and receive curated artist matches with timelines, pricing, and moodboards.',
      ctaPrimary: { label: 'Create a brief', href: '/collections#consult' },
      ctaSecondary: { label: 'View case studies', href: '/insights#case-studies' },
    },
  ],
  ctaBlocks: [
    {
      id: 'artist-cta',
      title: 'Join the curated artist roster',
      description: 'Submit your portfolio for review, gain access to premium briefs, and collaborate with global brands.',
      illustration: 'https://images.unsplash.com/photo-1526481280695-3c46973c2b86?auto=format&fit=crop&w=800&q=80',
      action: { label: 'Apply as artist', href: '/artists#apply' },
    },
    {
      id: 'brand-cta',
      title: 'Commission bespoke AI artwork',
      description: 'Answer a few questions and our curators will shortlist artists with aligned aesthetics and availability.',
      illustration: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      action: { label: 'Start a brief', href: '/collections#consult' },
    },
  ],
  metrics: [
    { label: 'Commission success rate', value: '96%', description: 'Of projects delivered on-time and approved by brands.' },
    { label: 'Verified artists', value: '180+', description: 'Portfolios reviewed and quality assured by Futurescape curators.' },
    { label: 'Avg. turnaround', value: '12 days', description: 'From brief submission to final delivery for campaign hero visuals.' },
  ],
};

