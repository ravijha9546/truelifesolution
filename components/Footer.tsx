import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 text-xl font-black">
            TRUE LIFE <span className="text-cyan-300">SOLUTION</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            A modern campaign and customer-connection company helping people
            find pathways to services across the United States.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-bold">Explore</h4>
          <div className="grid gap-3 text-sm text-slate-400">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-bold">Legal</h4>
          <div className="grid gap-3 text-sm text-slate-400">
            <Link href="/legal/privacy">Privacy Policy</Link>
            <Link href="/legal/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="container border-t border-white/10 py-6 text-xs text-slate-500">
        © {new Date().getFullYear()} True Life Solution. All rights reserved.
        Information on this website is for general purposes and does not
        constitute a guarantee of eligibility, approval, pricing, coverage, or
        service availability.
      </div>
    </footer>
  );
}
