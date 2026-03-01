"use client";

import { useEffect, useRef } from "react";

export function useWhackAMole(enabled: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !container.contains(target)) return;

      const clickedButton = target.closest("button");
      if (!clickedButton || !container.contains(clickedButton)) return;

      const allButtons = Array.from(container.querySelectorAll("button"));
      if (allButtons.length <= 1) return;

      const otherButtons = allButtons.filter((b) => b !== clickedButton);
      if (otherButtons.length === 0) return;

      const randomButton =
        otherButtons[Math.floor(Math.random() * otherButtons.length)];

      e.preventDefault();
      e.stopPropagation();

      randomButton.style.transition = "transform 0.1s, box-shadow 0.1s";
      randomButton.style.transform = "scale(1.1)";
      randomButton.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.5)";

      setTimeout(() => {
        randomButton.style.transform = "";
        randomButton.style.boxShadow = "";
      }, 300);

      randomButton.click();
    };

    container.addEventListener("click", handler, true);
    return () => container.removeEventListener("click", handler, true);
  }, [enabled]);

  return containerRef;
}
