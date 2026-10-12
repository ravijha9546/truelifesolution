"use client";
import { motion } from "framer-motion";
export default function Orb() {
  return (
    <div className="relative mx-auto h-[430px] w-[430px] max-w-[80vw]">
      <motion.div
        className="orb absolute inset-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-4 top-16 rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 text-xs shadow-xl backdrop-blur"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <b className="text-cyan-300">USA CAMPAIGNS</b>
        <br />
        <span className="text-slate-400">Built for scale</span>
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-0 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs shadow-xl backdrop-blur"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <b>Connected</b>
        <br />
        <span className="text-slate-400">People → Services</span>
      </motion.div>
    </div>
  );
}
