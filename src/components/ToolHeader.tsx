import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface ToolHeaderProps {
  toolNumber?: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  badge?: string;
  category?: string;
  statusText?: string;
}

export const ToolHeader: React.FC<ToolHeaderProps> = ({
  toolNumber,
  title,
  subtitle,
  icon,
  badge,
  category,
  statusText = 'AI Ready'
}) => {
  return (
    <div className="mb-10 text-left">
      <div className="edu-tool-shell rounded-[30px] p-4 sm:p-6 lg:p-7 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,94,252,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative z-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-xs font-bold text-[#0f172a]/75 hover:text-[#0f172a] bg-white/85 border border-[#dfe7ff] hover:border-[#6d5efc] px-4 py-2 rounded-full transition-all shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>All tools</span>
              </Link>
              {toolNumber && (
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded-full bg-[#ede9fe] text-[#6d5efc] border border-[#c4b5fd]">
                  {toolNumber}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              {category && (
                <span className="hidden sm:inline text-xs font-medium text-[#475569] font-body">
                  {category}
                </span>
              )}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eef2ff] border border-[#dfe7ff] text-[11px] font-bold text-[#0f172a]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>{statusText}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              {badge && (
                <span className="inline-flex items-center rounded-full border border-[#c4b5fd] bg-[#f5f3ff] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6d5efc]">
                  {badge}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight font-display flex items-center gap-3">
                {icon && (
                  <span className="p-2.5 rounded-2xl bg-white border border-[#dfe7ff] shadow-[0_12px_25px_rgba(15,23,42,0.06)] inline-flex items-center justify-center shrink-0 text-[#6d5efc]">
                    {icon}
                  </span>
                )}
                <span className="edu-gradient-text">{title}</span>
              </h1>

              <p className="text-sm sm:text-base text-[#475569] font-body leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 min-w-[260px]">
              {[
                { label: 'Speed', value: 'Instant' },
                { label: 'Format', value: 'AI-ready' },
                { label: 'Output', value: 'Export' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#dfe7ff] bg-white/80 px-3 py-2.5 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#64748b]">{stat.label}</div>
                  <div className="mt-2 text-sm font-black text-[#0f172a]">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
