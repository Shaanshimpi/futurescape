import React from 'react';
import { useData } from '../context/DataContext';

export const InsightsPage: React.FC = () => {
  const { site } = useData();

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12">
      <header className="space-y-2 border-b border-slate-800 pb-6">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">Insights</p>
        <h1 className="text-3xl font-semibold text-slate-100">Why Futurescape’s curated marketplace works</h1>
        <p className="text-sm text-slate-400">
          Metrics below are mock placeholders that demonstrate how we’ll communicate traction and reliability to brands and artists.
        </p>
      </header>
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {site.metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">
            <p className="text-3xl font-semibold text-slate-100">{metric.value}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{metric.label}</p>
            <p className="mt-3 text-sm text-slate-400">{metric.description}</p>
          </div>
        ))}
      </section>
      <section className="mt-10 space-y-4 text-sm text-slate-300">
        <h2 className="text-lg font-semibold text-slate-200">What this page will become</h2>
        <p>
          In future phases, this route will include case studies, how-to guides for briefs, pricing transparency, and ROI calculators. For now, it
          exists to prove routing and layout, and to house supporting copy once backend integrations go live.
        </p>
        <p>
          We’ll also embed success stories sourced from Payload once the CMS is integrated, allowing easy updates without code changes.
        </p>
      </section>
    </div>
  );
};

