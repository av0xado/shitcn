"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const ControlPanel = dynamic(() => import("@/components/ControlPanel"), {
  ssr: false,
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/components", label: "Components" },
  { href: "/showcase", label: "Showcase" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      data-chaos-immune="true"
      className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-white transition-colors hover:text-neutral-300"
        >
          <span className="text-xl">💩</span>
          <span className="text-lg tracking-tight">
            shit<span className="text-red-500">cn</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Control Panel Button */}
        <div className="flex items-center gap-3">
          <ControlPanel />
        </div>
      </div>
    </header>
  );
}
