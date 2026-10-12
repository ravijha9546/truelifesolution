export default function About() {
  return (
    <section className="container py-36">
      <div className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
          About us
        </p>
        <h1 className="mt-3 text-5xl font-black md:text-6xl">
          A better way to connect people with solutions.
        </h1>
        <p className="mt-7 text-xl leading-9 text-slate-400">
          True Life Solution is focused on building clear, modern and scalable
          campaign experiences for US consumers and service partners.
        </p>
      </div>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        <div className="glass rounded-3xl p-7">
          <h3 className="text-xl font-bold">Our mission</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Make complex service journeys easier to discover and understand.
          </p>
        </div>
        <div className="glass rounded-3xl p-7">
          <h3 className="text-xl font-bold">Our approach</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Combine strong digital experiences with structured campaign
            operations.
          </p>
        </div>
        <div className="glass rounded-3xl p-7">
          <h3 className="text-xl font-bold">Our standard</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Prioritize transparency, responsible messaging and useful next
            steps.
          </p>
        </div>
      </div>
    </section>
  );
}
