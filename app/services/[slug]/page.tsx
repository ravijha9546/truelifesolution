import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { campaigns, getCampaign } from "@/lib/campaigns";
import CallButton from "@/components/CallButton";

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

  if (!c) {
    return notFound();
  }

  return (
    <>
      {/* Hero section */}
      <section className="grid-bg relative overflow-hidden pt-36 pb-20">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div
              className="mb-6 grid h-16 w-16 place-items-center rounded-2xl text-3xl"
              style={{
                background: `${c.accent}18`,
                color: c.accent,
              }}
            >
              {c.icon}
            </div>

            <p
              className="text-sm font-bold uppercase tracking-[.2em]"
              style={{ color: c.accent }}
            >
              True Life Solution · Campaign
            </p>

            <h1 className="mt-3 text-5xl font-black md:text-6xl">{c.name}</h1>

            <p className="mt-4 text-lg font-medium text-slate-300">{c.short}</p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
              {c.description}
            </p>

           
<div className="mt-8 flex flex-wrap items-center gap-3">
  <CallButton
    campaign={c.name}
    className="min-w-36"
  />

  <Link
    href="/contact"
    className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
  >
    Request information
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</div>


            <p className="mt-4 text-xs leading-5 text-slate-500">
              Service availability and eligibility may vary by location and
              provider. Request information to learn more about available
              options.
            </p>
          </div>

          {/* Campaign benefits */}
          <div className="glass glow rounded-[2rem] p-6 md:p-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[.2em] text-slate-400">
              Explore your options
            </p>

            <h2 className="mb-7 text-2xl font-bold">How we can help</h2>

            <div className="grid gap-4">
              {c.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.03] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm leading-6 text-slate-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/[.05] p-5">
              <p className="font-semibold text-cyan-200">
                Looking for more information?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Contact our team to ask about this campaign and the options
                available to you.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center text-sm font-bold text-cyan-300 hover:text-cyan-200"
              >
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="container py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            Getting started
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            A straightforward way to explore your options
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Start by requesting information about {c.name.toLowerCase()}. Review
            the information provided, ask questions, and decide which next steps
            are appropriate for your needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Explore",
              description:
                "Review the information and options available for this campaign.",
            },
            {
              number: "02",
              title: "Ask questions",
              description:
                "Request additional details relevant to your circumstances.",
            },
            {
              number: "03",
              title: "Choose your next step",
              description:
                "Consider the information before deciding how to proceed.",
            },
          ].map((step) => (
            <div key={step.number} className="glass rounded-3xl p-6 md:p-7">
              <span className="text-sm font-bold text-cyan-300">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section className="container pb-20 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Common questions about {c.name}
          </h2>

          <div className="mt-8 grid gap-4">
            {c.faqs.map((question, index) => (
              <div key={question} className="glass rounded-2xl p-6">
                <h3 className="font-bold">
                  {index + 1}. {question}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Details may depend on your location, circumstances, and the
                  services or programs available. Contact the relevant qualified
                  provider for information specific to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="container pb-20">
        <div className="glass rounded-[2rem] p-8 text-center md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">
            Have questions about {c.name}?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Get in touch to request more information and explore the options
            available for your situation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton campaign={c.name} />

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
