"use client";

import { useEffect, useRef } from "react";

export default function InvertedScrollDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Invert the scroll direction
      container.scrollTop -= e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="space-y-3">
      <p className="text-sm text-neutral-400">
        Try scrolling inside the box below. Scroll down to go up. Scroll up to
        go down. 🙃
      </p>
      <div
        ref={containerRef}
        className="h-48 overflow-y-auto rounded-lg border border-neutral-700 bg-neutral-800 p-4"
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="border-b border-neutral-700/50 py-3 text-sm text-neutral-300"
          >
            <span className="mr-2 text-neutral-600">#{i + 1}</span>
            {i === 0 && "👆 This is the top. Scroll down to get here."}
            {i === 19 && "👇 This is the bottom. Scroll up to get here."}
            {i > 0 &&
              i < 19 &&
              `Item ${i + 1} — Everything is backwards and nothing makes sense.`}
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-600">
        Pro tip: Your brain will adapt after about 30 seconds. Then normal
        scrolling will feel wrong.
      </p>
    </div>
  );
}
