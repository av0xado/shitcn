"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { useChaos } from "@/context/ChaosContext";

interface DemoSandboxProps {
  children: ReactNode;
  className?: string;
}

export default function DemoSandbox({ children, className = "" }: DemoSandboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { state } = useChaos();

  useEffect(() => {
    if (!state.whackAMole) return;

    const container = containerRef.current;
    if (!container) return;

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !container.contains(target)) return;

      // Only intercept button clicks
      const clickedButton = target.closest("button");
      if (!clickedButton || !container.contains(clickedButton)) return;

      // Find all buttons in this sandbox
      const allButtons = Array.from(container.querySelectorAll("button"));
      if (allButtons.length <= 1) return;

      // Pick a random different button
      const otherButtons = allButtons.filter((b) => b !== clickedButton);
      if (otherButtons.length === 0) return;

      const randomButton =
        otherButtons[Math.floor(Math.random() * otherButtons.length)];

      // Prevent the original click and trigger the random one
      e.preventDefault();
      e.stopPropagation();

      // Visual feedback on the "wrong" button
      randomButton.style.transition = "transform 0.1s, box-shadow 0.1s";
      randomButton.style.transform = "scale(1.1)";
      randomButton.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.5)";

      setTimeout(() => {
        randomButton.style.transform = "";
        randomButton.style.boxShadow = "";
      }, 300);

      // Trigger the random button
      randomButton.click();
    };

    container.addEventListener("click", handler, true);
    return () => container.removeEventListener("click", handler, true);
  }, [state.whackAMole]);

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
