"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { components } from "@/data/components";

const docsLinks = [
  { href: "/docs", label: "Introduction" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/usage", label: "Usage" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      data-chaos-immune="true"
      className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 flex-shrink-0 overflow-y-auto border-r border-neutral-800 bg-neutral-950 p-4 lg:block"
    >
      {/* Docs Section */}
      <div className="mb-6">
        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Getting Started
        </h3>
        <nav className="space-y-0.5">
          {docsLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-neutral-800 font-medium text-white"
                    : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Components Section */}
      <div>
        <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Components
        </h3>
        <nav className="space-y-0.5">
          <Link
            href="/components"
            className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
              pathname === "/components"
                ? "bg-neutral-800 font-medium text-white"
                : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
            }`}
          >
            Overview
          </Link>
          {components.map((comp) => {
            const href = `/components/${comp.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={comp.slug}
                href={href}
                className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-neutral-800 font-medium text-white"
                    : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                }`}
              >
                {comp.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Showcase & About */}
      <div className="mt-6 border-t border-neutral-800 pt-4">
        <nav className="space-y-0.5">
          <Link
            href="/showcase"
            className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
              pathname === "/showcase"
                ? "bg-neutral-800 font-medium text-white"
                : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
            }`}
          >
            Showcase
          </Link>
          <Link
            href="/about"
            className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
              pathname === "/about"
                ? "bg-neutral-800 font-medium text-white"
                : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </aside>
  );
}
