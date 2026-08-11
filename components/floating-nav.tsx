"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  ["Home", "/"],
  ["Blog", "/blog"],
  ["Portfolio", "/portfolio"],
  ["Contact", "/contact"],
] as const;

export function FloatingNav() {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, type: "spring", stiffness: 160, damping: 18 }}
      className="fixed inset-x-0 top-5 z-50 mx-auto w-full max-w-2xl px-4"
    >
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/70 bg-[#f4f1ea]/65 px-3 py-2 shadow-[0_16px_45px_rgba(18,19,26,.14)] backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="display px-2 text-lg font-black tracking-[-.1em] sm:px-3 sm:text-xl"
        >
          da4thmusketeer<span className="text-coral">.</span>
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-2.5 py-1.5 text-[9px] uppercase tracking-wider transition-colors sm:px-4 sm:py-2 sm:text-[10px] ${pathname === href ? "bg-ink text-cloud" : "hover:bg-black/5"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
