"use client";

import { type ReactNode } from "react";
import { useWhackAMole } from "@/features/chaos";

interface DemoSandboxProps {
  children: ReactNode;
  className?: string;
  enableWhackAMole?: boolean;
}

export default function DemoSandbox({
  children,
  className = "",
  enableWhackAMole = false,
}: DemoSandboxProps) {
  const containerRef = useWhackAMole(enableWhackAMole);

  return (
    <div
      ref={containerRef}
      data-demo-sandbox="true"
      className={`relative rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 ${className}`}
    >
      <div className="absolute right-2 top-2 rounded bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500">
        Demo
      </div>
      {children}
    </div>
  );
}
