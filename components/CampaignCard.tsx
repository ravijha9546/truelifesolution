import Link from "next/link";
import type { Campaign } from "@/lib/campaigns";
export default function CampaignCard({ c }: { c: Campaign }) {
  return (
    <Link
      href={`/services/${c.slug}`}
      className="group glass block rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-white/20"
    >
      <div className="mb-8 flex items-start justify-between">
        <div
          className="grid h-14 w-14 place-items-center rounded-2xl text-2xl"
          style={{ background: `${c.accent}18`, color: c.accent }}
        >
          {c.icon}
        </div>
        <span className="text-slate-500 transition group-hover:text-cyan-300">
          ↗
        </span>
      </div>
      <h3 className="mb-2 text-xl font-bold">{c.name}</h3>
      <p className="text-sm leading-6 text-slate-400">{c.short}</p>
      <div className="mt-6 text-sm font-semibold text-cyan-300">
        Explore campaign →
      </div>
    </Link>
  );
}
