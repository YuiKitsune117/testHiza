"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems, isReady } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sakura-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-heading flex items-center gap-2 text-xl font-bold text-sakura-700">
          <span aria-hidden="true">🌸</span>
          Hizakura
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-sm font-semibold transition-colors hover:text-sakura-600 ${
                  isActive ? "text-sakura-600" : "text-sakura-900/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/panier"
            className="relative flex items-center gap-2 rounded-full bg-sakura-50 px-4 py-2 font-heading text-sm font-semibold text-sakura-700 transition-colors hover:bg-sakura-100"
          >
            <span aria-hidden="true">🛍️</span>
            <span className="hidden sm:inline">Panier</span>
            {isReady && totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-sakura-500 px-1 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-sakura-700 hover:bg-sakura-50 md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-sakura-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading rounded-lg px-3 py-2 text-sm font-semibold text-sakura-900/80 hover:bg-sakura-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
