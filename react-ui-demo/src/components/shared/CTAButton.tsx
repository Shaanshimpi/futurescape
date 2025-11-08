import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const baseClass =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const variantClass: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white shadow-[0_18px_40px_-18px_rgba(99,102,241,0.85)] hover:brightness-110',
  secondary:
    'border border-white/40 bg-slate-950/70 text-white shadow-[0_10px_30px_-20px_rgba(129,140,248,0.6)] hover:border-purple-300/60 hover:bg-slate-900/80',
  ghost: 'text-white hover:text-purple-100',
};

export const CTAButton: React.FC<CTAButtonProps> = ({ to, children, variant = 'primary', icon, className = '', onClick }) => (
  <Link
    to={to}
    className={`${baseClass} ${variantClass[variant]} ${className}`}
    onClick={() => {
      const label = typeof children === 'string' ? children : 'cta';
      console.info('[CTA]', label, '→', to);
      onClick?.();
    }}
  >
    {icon ? <span className="mr-2" aria-hidden>{icon}</span> : null}
    {children}
  </Link>
);

