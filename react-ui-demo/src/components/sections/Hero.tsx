import React from 'react';
import { Sparkles } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';
import { Skeleton } from '../shared/Skeleton';

interface HeroCta {
  label: string;
  href: string;
}

interface HeroMetric {
  label: string;
  value: string;
}

interface HeroProps {
  eyebrow: string;
  headline: string;
  subheading: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  tertiaryCta?: HeroCta;
  introBlurb?: string;
  metrics: HeroMetric[];
  isLoading?: boolean;
  metricTitle?: string;
  metricBadgeLabel?: string;
}

export const Hero: React.FC<HeroProps> = ({
  eyebrow,
  headline,
  subheading,
  primaryCta,
  secondaryCta,
  metrics,
  tertiaryCta,
  introBlurb,
  isLoading = false,
  metricTitle = 'Platform Metrics',
  metricBadgeLabel = 'Live Snapshot',
}) => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-20">
      <div className="grid gap-12 md:grid-cols-[1.2fr,0.9fr] md:items-center">
        <div className="space-y-7 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-purple-100 shadow-[0_18px_40px_-20px_rgba(99,102,241,0.95)]">
            <Sparkles className="h-3.5 w-3.5 text-purple-200" />
            <span>{eyebrow}</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            <span className="gradient-text">{headline}</span>
          </h1>
          <p className="max-w-xl text-lg text-white/90 md:text-xl">{subheading}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton
              to={primaryCta.href}
              className="shadow-[0_18px_40px_-20px_rgba(124,58,237,0.85)] saturate-150"
            >
              {primaryCta.label}
            </CTAButton>
            <CTAButton
              to={secondaryCta.href}
              variant="secondary"
              className="border-white/30 bg-slate-950/70 text-white hover:border-purple-300/60 hover:bg-slate-900/80"
            >
              {secondaryCta.label}
            </CTAButton>
            {tertiaryCta ? (
              <CTAButton
                to={tertiaryCta.href}
                variant="ghost"
                className="text-white/90 hover:text-white"
              >
                {tertiaryCta.label}
              </CTAButton>
            ) : null}
          </div>
          {introBlurb ? (
            <p className="max-w-2xl text-sm text-white/80 md:text-base">{introBlurb}</p>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-slate-950/70 p-6 pb-8 shadow-[0_30px_70px_-35px_rgba(124,58,237,0.85)] backdrop-blur-xl animate-slide-up">
          <div className="pointer-events-none absolute -inset-px rounded-[32px] bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-transparent opacity-70" />
          <div className="absolute left-6 top-4 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-purple-500/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-white shadow-[0_18px_45px_-22px_rgba(168,85,247,0.75)]">
            {metricBadgeLabel}
          </div>

          <div className="relative mt-8">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">{metricTitle}</p>
            {isLoading ? (
              <div className="mt-8 space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={`hero-skeleton-${index}`} className="h-16 w-full rounded-2xl border border-white/20 bg-slate-900/70" />
                ))}
              </div>
            ) : (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-6 text-center text-white shadow-[0_25px_60px_-35px_rgba(129,140,248,0.65)] transition duration-300"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-400/10 via-indigo-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <p className="relative text-2xl font-semibold tracking-tight text-white">{metric.value}</p>
                    <p className="relative mt-2 text-[11px] uppercase tracking-[0.35em] text-white/65">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


