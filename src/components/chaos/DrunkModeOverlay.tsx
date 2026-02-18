"use client";

import { useEffect, useRef } from "react";

export default function DrunkModeOverlay() {
  const blurLevelRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    // Gradually increase blur over time
    blurLevelRef.current = 0;
    const main = document.getElementById("main-content");
    if (main) {
      main.style.transition = "filter 0.5s ease";
      main.style.filter = "blur(0px)";
    }

    intervalRef.current = setInterval(() => {
      if (blurLevelRef.current < 12) {
        blurLevelRef.current += 0.15;
      }
      const mainEl = document.getElementById("main-content");
      if (mainEl) {
        mainEl.style.filter = `blur(${blurLevelRef.current}px)`;
      }
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Reset blur on main content when disabled
      const mainEl = document.getElementById("main-content");
      if (mainEl) {
        mainEl.style.filter = "";
        mainEl.style.transition = "";
      }
    };
  }, []);

  return null; // This component just applies effects, no visual output
}
