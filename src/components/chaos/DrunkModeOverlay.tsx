"use client";

import { useEffect, useRef } from "react";

export default function DrunkModeOverlay() {
  const blurLevelRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    // Gradually increase blur over time on the app root.
    blurLevelRef.current = 0;
    const appRoot = document.getElementById("app-root");
    if (appRoot) {
      appRoot.style.transition = "filter 0.5s ease";
      appRoot.style.filter = "blur(0px)";
    }

    intervalRef.current = setInterval(() => {
      if (blurLevelRef.current < 12) {
        blurLevelRef.current += 0.15;
      }
      const appRootEl = document.getElementById("app-root");
      if (appRootEl) {
        appRootEl.style.filter = `blur(${blurLevelRef.current}px)`;
      }
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Reset blur on cleanup
      const appRootEl = document.getElementById("app-root");
      if (appRootEl) {
        appRootEl.style.filter = "";
        appRootEl.style.transition = "";
      }
    };
  }, []);

  return null; // This component just applies effects, no visual output
}
