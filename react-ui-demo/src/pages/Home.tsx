import React, { useEffect, useMemo } from 'react';
import { Star } from 'lucide-react';
import { useData } from '../context/DataContext';
import { ArtworkCard } from '../components/cards/ArtworkCard';
import { ArtistCard } from '../components/cards/ArtistCard';
import { CollectionCard } from '../components/cards/CollectionCard';
import { SectionHeader } from '../components/shared/SectionHeader';
import { CTAButton } from '../components/shared/CTAButton';
import { Skeleton } from '../components/shared/Skeleton';
import { Hero } from '../components/sections/Hero';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export const HomePage: React.FC = () => {
  const { site, artworks, artists, collections, testimonials, isReady } = useData();

  const topArtworks = useMemo(
    () => [...artworks].sort((a, b) => b.stats.views - a.stats.views).slice(0, 4),
    [artworks],
  );

  const contestsPreview = [
    {
      id: 'contest-01',
      title: 'Global Prompt Challenge',
      theme: 'Celestial Dreamscapes',
      deadline: 'April 12',
      prize: '$5K artist grant',
      href: '/insights#contests',
    },
    {
      id: 'contest-02',
      title: 'Real-Time Remix',
      theme: 'Live AI Illustration Battle',
      deadline: 'May 7',
      prize: 'Feature in AI Art Magazine',
      href: '/insights#contests',
    },
    {
      id: 'contest-03',
      title: 'Immersive World Sprint',
      theme: 'Metaverse Environments',
      deadline: 'June 3',
      prize: 'Residency with Futurescape Labs',
      href: '/insights#contests',
    },
    {
      id: 'contest-04',
      title: 'Audio Vision Hackathon',
      theme: 'Generative Sound & Visuals',
      deadline: 'July 11',
      prize: 'Collaboration with SynthWave Studios',
      href: '/insights#contests',
    },
  ];

  const upcomingEvents = [
    { id: 'event-01', title: 'Workshop: Storyboarding with AI', date: 'April 26', format: 'Virtual', href: '/insights#events' },
    { id: 'event-02', title: 'Live Q&A with Futurescape filmmakers', date: 'May 18', format: 'Stream', href: '/insights#events' },
  ];

  const spotlightArtists = useMemo(
    () => [...artists].sort((a, b) => b.stats.collaborations - a.stats.collaborations).slice(0, 4),
    [artists],
  );

  const heroMetrics = useMemo(
    () => [
      { label: 'Curated Artists', value: `${artists.length}` },
      { label: 'Gallery Concepts', value: `${artworks.length}` },
      { label: 'Curated Collections', value: `${collections.length}` },
      { label: 'Brand Testimonials', value: `${testimonials.length}` },
    ],
    [artists.length, artworks.length, collections.length, testimonials.length],
  );

  useEffect(() => {
    if (isReady) {
      console.info('[Home] page view', { artworks: artworks.length, artists: artists.length });
    }
  }, [isReady, artworks.length, artists.length]);

  return (
    <div className="relative">
      <Hero
        eyebrow="The AI Art Collaboration Hub"
        headline="Where AI Meets Art"
        subheading="Discover, collaborate, and innovate with AI artists shaping the future of creativity."
        primaryCta={{ label: 'Join the AI Art Revolution', href: '/about' }}
        secondaryCta={{ label: 'Submit Your Work', href: '/artists#apply' }}
        tertiaryCta={{ label: 'Explore Artists', href: '/artists' }}
        introBlurb="At Futurescape Studios, we believe in the limitless power of artificial intelligence fused with human creativity. We promote AI artists, host global contests, and pioneer groundbreaking projects — like our upcoming AI film venture — connecting creators to build the future of art."
        metrics={heroMetrics}
        isLoading={!isReady}
        metricTitle="Platform Metrics"
        metricBadgeLabel="Live Snapshot"
      />

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <SectionHeader
          eyebrow="Spotlight"
          title="Artworks trending with brands"
          description="Pulled from the mock dataset by highest view counts. These will later surface real-time when connected to Payload analytics."
          action={<CTAButton to="/gallery" variant="ghost">Browse full gallery →</CTAButton>}
        />
        {isReady ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {topArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-60 w-full rounded-3xl border border-white/20 bg-slate-900/70" />
            ))}
          </div>
        )}
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <SectionHeader
          eyebrow="Roster"
          title="Commission-ready AI artists"
          description="Each artist is vetted for quality and reliability. Explore highlights and navigate to their full profiles."
          action={<CTAButton to="/artists" variant="ghost">View artist roster →</CTAButton>}
        />
        {isReady ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {spotlightArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-44 w-full rounded-3xl border border-white/20 bg-slate-900/70" />
            ))}
          </div>
        )}
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <SectionHeader eyebrow="Collections" title="Curated moodboards" action={<CTAButton to="/collections" variant="ghost">Explore all collections →</CTAButton>} />
        {isReady ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {collections.slice(0, 4).map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-48 w-full rounded-3xl border border-white/20 bg-slate-900/70" />
            ))}
          </div>
        )}
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20">
        <SectionHeader eyebrow="Community Voices" title="Testimonials from partners & collaborators" />
        <div className="relative mt-8 overflow-hidden rounded-[40px] border border-white/15 bg-slate-950/70 px-6 py-10 shadow-[0_45px_90px_-40px_rgba(129,140,248,0.75)] backdrop-blur-xl md:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(167,139,250,0.25),_transparent_60%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.35fr,0.65fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                Trusted by creative innovators
              </p>
              <h3 className="text-3xl font-semibold text-white">Real stories from brands, studios, and artists.</h3>
              <p className="text-sm text-white/75">
                Futurescape Studios empowers collaborators around the world. Here’s how our curated AI artists deliver cinematic campaigns,
                streamlined partnerships, and memorable experiences.
              </p>
            </div>
        {isReady ? (
              <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.slice(0, 4).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-6 shadow-[0_35px_75px_-35px_rgba(167,139,250,0.7)] transition duration-300 hover:border-purple-400/45 hover:shadow-[0_45px_90px_-35px_rgba(167,139,250,0.75)] backdrop-blur-xl"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/12 via-indigo-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <blockquote className="relative text-lg font-medium text-white">“{testimonial.quote}”</blockquote>
                    <div className="relative mt-6 flex items-center gap-4">
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.authorName}
                        className="h-11 w-11 rounded-full border border-white/30 object-cover"
                        loading="lazy"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/30 text-purple-100">
                            <Star className="h-3.5 w-3.5" />
                          </span>
                          <p className="text-sm font-semibold tracking-tight text-white">{testimonial.authorName}</p>
                        </div>
                        <p className="text-xs uppercase tracking-[0.35em] text-purple-200/85">{testimonial.authorTitle}</p>
                        <p className="text-xs text-white/70">{testimonial.company}</p>
                      </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
              <div className="grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
                  <Skeleton key={index} className="h-48 w-full rounded-3xl border border-white/20 bg-slate-900/70" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20">
        <SectionHeader eyebrow="AI Movie Project" title="An unprecedented film co-created by AI artists worldwide" />
        <div className="relative grid gap-10 overflow-hidden rounded-[40px] border border-white/15 bg-slate-950/75 p-8 shadow-[0_45px_95px_-45px_rgba(129,140,248,0.75)] backdrop-blur-xl lg:grid-cols-[0.6fr,0.4fr] lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.28),_transparent_60%)]" />
          <div className="relative space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/75">The Vision</p>
            <h3 className="text-3xl font-semibold text-white md:text-4xl">
              Imagine a cinematic universe crafted entirely by AI storytellers.
            </h3>
            <p className="text-sm text-white/80 md:text-base">
              Futurescape Studios is assembling artists, coders, world-builders, and filmmakers to co-create a feature-length experience.
              From concept art to final edit, every scene fuses machine imagination with human direction.
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/30 text-[11px] text-white">
                  01
                </span>
                <span>Collaborative story room with weekly global syncs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/30 text-[11px] text-white">
                  02
                </span>
                <span>Dedicated asset pipeline for concept art, animation, and score.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/30 text-[11px] text-white">
                  03
                </span>
                <span>Premiering at global festivals with behind-the-scenes documentary.</span>
              </li>
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton to="/insights#ai-movie" className="shadow-[0_25px_55px_-28px_rgba(167,139,250,0.85)]">
                Learn how to collaborate
              </CTAButton>
              <CTAButton
                to="/artists#apply"
                variant="secondary"
                className="border-white/35 bg-slate-950/70 text-white hover:border-purple-300/60 hover:bg-slate-900/80"
              >
                Submit your reel
              </CTAButton>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-6 rounded-3xl border border-white/12 bg-white/8 p-6 text-white shadow-[0_35px_80px_-40px_rgba(129,140,248,0.7)] backdrop-blur-xl">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Timeline & Process</p>
              <div className="space-y-4 text-sm text-white/75">
                <div>
                  <p className="text-lg font-semibold text-white">Phase 1 · Worldbuilding</p>
                  <p>Ideation sprint with collaborative prompt labs and narrative outlines.</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Phase 2 · Production Pods</p>
                  <p>Specialized teams for animation, VFX, soundscapes, and dialogue.</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Phase 3 · Premiere</p>
                  <p>Hybrid film release accompanied by interactive gallery showcase.</p>
                </div>
              </div>
            </div>
            <CTAButton to="/insights#timeline" variant="ghost" className="text-white/90 hover:text-white">
              View full production roadmap →
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20">
        <SectionHeader eyebrow="Contests & Events" title="Where innovation meets competition" />
        <div className="relative grid gap-8 lg:grid-cols-[0.6fr,0.4fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {contestsPreview.map((contest) => (
              <div
                key={contest.id}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 shadow-[0_35px_75px_-35px_rgba(129,140,248,0.7)] transition duration-300 hover:border-purple-400/50 hover:shadow-[0_45px_90px_-35px_rgba(167,139,250,0.75)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/12 via-indigo-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <p className="relative text-xs uppercase tracking-[0.35em] text-white/70">{contest.theme}</p>
                <h3 className="relative mt-3 text-xl font-semibold text-white">{contest.title}</h3>
                <div className="relative mt-4 space-y-2 text-sm text-white/75">
                  <p>
                    <span className="font-semibold text-white">Deadline:</span> {contest.deadline}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Prize:</span> {contest.prize}
                  </p>
                </div>
                <CTAButton to={contest.href} variant="ghost" className="relative mt-6 inline-flex items-center gap-2 px-0 text-white/85 hover:text-white">
                  View contest details
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </CTAButton>
              </div>
            ))}
          </div>
          <div className="flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/12 bg-slate-950/75 p-6 shadow-[0_40px_90px_-45px_rgba(129,140,248,0.75)] backdrop-blur-xl">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Upcoming Events</p>
              <div className="mt-4 space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-white/75">
                    <p className="text-lg font-semibold text-white">{event.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/65">
                      {event.date} • {event.format}
                    </p>
                    <CTAButton to={event.href} variant="ghost" className="mt-3 inline-flex items-center gap-2 px-0 text-white/80 hover:text-white">
                      Reserve a spot
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </CTAButton>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-purple-400/40 bg-purple-500/20 p-5 text-sm text-white">
              Looking for custom programming? Book a private workshop or brand immersion session tailored for your team.
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20">
        <SectionHeader eyebrow="Newsletter" title="Stay updated with contests, features & cinematic drops" />
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-slate-950/75 p-8 shadow-[0_40px_95px_-45px_rgba(129,140,248,0.75)] backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_65%)]" />
          <div className="relative grid gap-8 md:grid-cols-[0.55fr,0.45fr] md:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Futurescape Dispatch</p>
              <h3 className="text-3xl font-semibold text-white md:text-4xl">Stories, artist spotlights, and first-access calls.</h3>
              <p className="text-sm text-white/75">
                Sign up for our monthly briefing covering AI film updates, global contest alerts, creative prompts, and exclusive interviews with the artists pushing the frontier.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Behind-the-scenes looks at the AI Movie production</li>
                <li>• Access to beta tools and prompt experiments</li>
                <li>• Early invites to residencies and partnerships</li>
              </ul>
            </div>
            <form className="relative space-y-4 rounded-3xl border border-white/12 bg-white/10 p-6 shadow-[0_35px_80px_-40px_rgba(129,140,248,0.7)] backdrop-blur-xl">
              <div>
                <label className="text-xs uppercase tracking-[0.35em] text-white/70">Email</label>
                <Input
                  type="email"
                  placeholder="you@future.art"
                  className="mt-2 border-white/30 bg-slate-950/70 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.35em] text-white/70">Creative focus</label>
                <Input
                  type="text"
                  placeholder="e.g., Concept artist, Director, Motion designer"
                  className="mt-2 border-white/30 bg-slate-950/70 text-white placeholder:text-white/40"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-sm font-semibold text-white shadow-[0_25px_55px_-28px_rgba(99,102,241,0.85)] hover:brightness-110"
              >
                Subscribe for updates
              </Button>
              <p className="text-[11px] text-white/55">
                We respect your inbox. Expect one curated email per month.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20">
        <SectionHeader eyebrow="About Futurescape" title="The fusion of AI technology and human artistry" />
        <div className="relative grid gap-6 md:grid-cols-2">
          <div className="space-y-6 overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 shadow-[0_35px_75px_-35px_rgba(129,140,248,0.7)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            <p className="text-sm text-white/75">
              Futurescape Studios is a creative innovation hub where AI technology and artistry collide. Our mission is to empower artists worldwide, foster collaboration, and push the boundaries of what’s possible in storytelling.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Global residency programs and mentorship tracks</li>
              <li>• Ethical AI guidelines for responsible creative deployment</li>
              <li>• Partnerships with brands pioneering immersive experiences</li>
            </ul>
            <CTAButton to="/about#vision" variant="ghost" className="px-0 text-white/85 hover:text-white">
              Explore our manifesto →
            </CTAButton>
          </div>
          <div className="space-y-6 overflow-hidden rounded-3xl border border-white/12 bg-white/10 p-6 shadow-[0_35px_75px_-35px_rgba(129,140,248,0.7)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Our Story</h3>
            <p className="text-sm text-white/75">
              Born from a passion for creativity and technology, Futurescape Studios is led by a collective of producers, artists, and engineers committed to bridging AI and human expression. This is more than a platform — it’s a movement.
            </p>
            <p className="text-sm text-white/70">
              From small community showcases to global campaigns, we’ve helped brands and creators explore unfamiliar territory while staying grounded in narrative craft.
            </p>
            <CTAButton to="/about#story" variant="ghost" className="px-0 text-white/85 hover:text-white">
              Meet the founders →
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-20">
        <SectionHeader eyebrow="Get Started" title="Designer & brand call-to-actions" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {site.ctaBlocks.map((block) => (
            <div
              key={block.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_25px_45px_-30px_rgba(79,70,229,0.85)] transition duration-300 hover:border-purple-400/50 hover:shadow-[0_35px_65px_-30px_rgba(129,140,248,0.75)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="relative text-xs uppercase tracking-[0.35em] text-purple-200">{block.id.replace('-', ' ')}</p>
              <h3 className="relative mt-3 text-2xl font-semibold text-white">{block.title}</h3>
              <p className="relative mt-3 text-sm text-slate-200/80">{block.description}</p>
              <CTAButton
                to={block.action.href}
                variant="ghost"
                className="relative mt-6 inline-flex items-center gap-2 px-0 text-purple-200 transition hover:text-white"
              >
                {block.action.label}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </CTAButton>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

