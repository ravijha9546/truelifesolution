
import { Phone } from "lucide-react";

type CallButtonProps = {
  campaign: string;
  className?: string;
};

const PHONE_NUMBER = "+12294902281";

export default function CallButton({
  campaign,
  className = "",
}: CallButtonProps) {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      aria-label={`Call about ${campaign} at ${PHONE_NUMBER}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-200 ${className}`}
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
