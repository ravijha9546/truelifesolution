export default function Privacy() {
  return (
    <Legal title="Privacy Policy">
      <p>
        This starter policy is a placeholder and should be reviewed by qualified
        legal counsel before publication.
      </p>
      <h2>Information we collect</h2>
      <p>
        We may collect information submitted through forms, including contact
        details and campaign-related inquiries.
      </p>
      <h2>How information is used</h2>
      <p>
        Information may be used to respond to inquiries, provide requested
        information, operate campaigns, and improve the website.
      </p>
      <h2>Contact</h2>
      <p>
        Replace this section with your official privacy contact details and
        applicable legal disclosures.
      </p>
    </Legal>
  );
}
function Legal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container max-w-3xl py-36">
      <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">
        Legal
      </p>
      <h1 className="mt-3 text-5xl font-black">{title}</h1>
      <div className="mt-10 space-y-7 text-sm leading-8 text-slate-400">
        {children}
      </div>
    </section>
  );
}
