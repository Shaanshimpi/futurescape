import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description, action }) => {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-white shadow-[0_16px_35px_-22px_rgba(129,140,248,0.75)]">
          {eyebrow}
        </div>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          <span className="gradient-text">{title}</span>
        </h2>
        {description ? <p className="max-w-2xl text-sm text-white/85 md:text-base">{description}</p> : null}
      </div>
      {action ? <div className="text-sm text-white md:text-base">{action}</div> : null}
    </div>
  );
};

