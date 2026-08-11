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
      className="fixed inset-x-0 top-3 z-50 mx-auto w-[calc(100%-1.25rem)] max-w-2xl px-1 sm:top-5 sm:px-4"
    >
      <nav className="flex w-full items-center justify-between rounded-full border border-white/70 bg-[#f4f1ea]/75 px-2.5 py-1.5 shadow-[0_10px_35px_rgba(18,19,26,.12)] backdrop-blur-xl sm:px-6 sm:py-2 sm:shadow-[0_16px_45px_rgba(18,19,26,.14)]">
        <Link
          href="/"
          className="display shrink-0 px-1.5 text-base font-black tracking-[-.08em] transition-opacity hover:opacity-80 sm:px-3 sm:text-xl"
        >
          <span className="sm:hidden">
            d4m<span className="text-coral">.</span>
          </span>
          <span className="hidden sm:inline">
            da4thmusketeer<span className="text-coral">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {links.map(([label, href]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-full px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider transition-colors sm:px-4 sm:py-2 sm:text-[10px] ${
                  isActive ? "text-cloud" : "text-ink/75 hover:bg-black/5 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}

