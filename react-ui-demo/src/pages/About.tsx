import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-12 text-sm text-slate-300">
      <header className="space-y-2 border-b border-slate-800 pb-6 text-slate-100">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">About</p>
        <h1 className="text-3xl font-semibold">Prototype mission statement</h1>
      </header>
      <section className="mt-8 space-y-5">
        <p>
          This mock experience showcases how the client-facing Futurescape platform will feel prior to backend integration. Every component on the
          site will eventually be powered by Payload CMS collections, enabling curators to update hero copy, featured artworks, and artist stories
          without developer involvement.
        </p>
        <p>
          During MVP we focus purely on client discovery flows: browsing artworks, understanding artist capabilities, and shortlisting talent for
          campaigns. Admin workflows, payments, and messaging are intentionally excluded to keep this iteration lightweight.
        </p>
        <p>
          Once validated, this front-end will receive real data through payload’s APIs, incorporate authentication gates, and plug into the
          collaboration tooling already outlined in the broader project plan.
        </p>
      </section>
    </div>
  );
};

