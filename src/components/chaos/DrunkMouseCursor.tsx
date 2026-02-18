"use client";

import { useEffect, useState } from "react";

export default function DrunkMouseCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setVisible(true);
      // Add random jitter
      const jitterX = (Math.random() - 0.5) * 30;
      const jitterY = (Math.random() - 0.5) * 30;
      setPos({ x: e.clientX + jitterX, y: e.clientY + jitterY });

      // Jitter hovered elements (not immune ones)
      const target = e.target as HTMLElement;
      if (target && !isImmune(target)) {
        const jx = (Math.random() - 0.5) * 4;
        const jy = (Math.random() - 0.5) * 4;
        target.style.transform = `translate(${jx}px, ${jy}px)`;
        // Reset after a short delay
        setTimeout(() => {
          if (target.style) {
            target.style.transform = "";
          }
        }, 100);
      }
    };

    const handleLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      data-chaos-immune="true"
      className="pointer-events-none fixed z-[99990]"
      style={{
        left: pos.x - 10,
        top: pos.y - 10,
        width: 20,
        height: 20,
        transition: "left 0.05s, top 0.05s",
      }}
    >
      <div className="h-full w-full rounded-full border-2 border-red-500 bg-red-500/20" />
    </div>
  );
}

function isImmune(el: Element | null): boolean {
  if (!el) return false;
  let current: Element | null = el;
  while (current) {
    const val = current.getAttribute("data-chaos-immune");
    if (val === "true" || val === "toast") return true;
    current = current.parentElement;
  }
  return false;
}
