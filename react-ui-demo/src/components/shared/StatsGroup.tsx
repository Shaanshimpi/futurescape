import React from 'react';

interface Stat {
  label: string;
  value: string;
  detail?: string;
}

interface StatsGroupProps {
  stats: Stat[];
}

export const StatsGroup: React.FC<StatsGroupProps> = ({ stats }) => (
  <div className="grid gap-4 text-center text-xs text-white/80 sm:grid-cols-2 md:grid-cols-4">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="rounded-2xl border border-white/20 bg-slate-950/70 p-4 shadow-[0_18px_40px_-24px_rgba(129,140,248,0.6)] backdrop-blur-xl"
      >
        <p className="text-xl font-semibold text-white">{stat.value}</p>
        <p className="mt-1 uppercase tracking-[0.35em] text-white/65">{stat.label}</p>
        {stat.detail ? <p className="mt-2 text-[11px] text-white/60">{stat.detail}</p> : null}
      </div>
    ))}
  </div>
);

