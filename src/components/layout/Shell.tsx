"use client";

import { type ReactNode } from "react";
import { ChaosProvider } from "@/context/ChaosContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ChaosLayer from "@/components/chaos/ChaosLayer";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <ChaosProvider>
      <div id="app-root" className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
        <Navbar />
        <div className="relative z-0 flex flex-1">
        <Sidebar />
        <main
          id="main-content"
          className="flex-1 overflow-x-hidden px-4 py-8 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-4xl">{children}</div>
          </main>
        </div>
        <footer className="border-t border-neutral-800 py-4 text-center text-sm text-neutral-500">
          vibed with 💔 by{" "}
          <a
            href="https://github.com/av0xado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 underline hover:text-neutral-200 transition-colors"
          >
            av0xado
          </a>
        </footer>
        <ChaosLayer />
      </div>
    </ChaosProvider>
  );
}
