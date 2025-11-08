import React from 'react';

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const FilterChip: React.FC<FilterChipProps> = ({ label, active = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-3 py-1 text-xs transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
      active ? 'border-indigo-400 bg-indigo-400/20 text-indigo-200' : 'border-slate-700 text-slate-300 hover:border-slate-500'
    }`}
  >
    {label}
  </button>
);

