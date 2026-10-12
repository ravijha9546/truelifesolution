import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { campaigns, getCampaign } from "@/lib/campaigns";
export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}
export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCampaign(slug);
  if (!c) return notFound();
  return (
    <>
      <section className="grid-bg pt-36 pb-20">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div
              className="mb-6 grid h-16 w-16 place-items-center rounded-2xl text-3xl"
              style={{ background: `${c.accent}18`, color: c.accent }}
            >
              {c.icon}
            </div>
            <p
              className="text-sm font-bold uppercase tracking-[.2em]"
              style={{ color: c.accent }}
            >
              Campaign
            </p>
            <h1 className="mt-3 text-5xl font-black md:text-6xl">{c.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              {c.description}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3.5 font-bold text-slate-950"
            >
              Request information <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="glass rounded-[2rem] p-8">
            <div className="mb-7 text-sm font-bold uppercase tracking-[.2em] text-slate-400">
              What this campaign can support
            </div>
            <div className="grid gap-4">
              {c.benefits.map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.03] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black">Common questions</h2>
          <div className="mt-8 grid gap-4">
            {c.faqs.map((q, i) => (
              <div key={q} className="glass rounded-2xl p-6">
                <div className="font-bold">
                  {i + 1}. {q}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A qualified professional can provide the most accurate
                  information based on your situation, location, and current
                  program or service availability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
