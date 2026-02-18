"use client";

import { useState, useCallback } from "react";

function getInitialPosition() {
  if (typeof window === "undefined") return { x: 200, y: 500 };
  return {
    x: window.innerWidth / 2 - 200,
    y: window.innerHeight - 120,
  };
}

export default function CookieBanner() {
  const [position, setPosition] = useState(getInitialPosition);
  const [dodgeCount, setDodgeCount] = useState(0);

  const dodge = useCallback(() => {
    setDodgeCount((prev) => prev + 1);
    const bannerW = 400;
    const bannerH = 100;
    const padding = 80;

    const maxX = window.innerWidth - bannerW - padding;
    const maxY = window.innerHeight - bannerH - padding;
    const minX = padding;
    const minY = padding + 60;

    const newX = minX + Math.random() * (maxX - minX);
    const newY = minY + Math.random() * (maxY - minY);

    setPosition({ x: newX, y: newY });
  }, []);

  const handleMouseEnterAccept = useCallback(() => {
    dodge();
  }, [dodge]);

  return (
    <div
      data-chaos-immune="true"
      className="fixed z-[99980] rounded-lg border border-neutral-700 bg-neutral-900 p-4 shadow-2xl"
      style={{
        left: position.x,
        top: position.y,
        width: 400,
        transition: "left 0.3s ease-out, top 0.3s ease-out",
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-white">🍪 Cookie Notice</p>
          <p className="mt-1 text-xs text-neutral-400">
            We use cookies to make your experience {dodgeCount > 3 ? "impossible" : "worse"}.
            {dodgeCount > 5 && " You can't catch me."}
            {dodgeCount > 10 && " 😈"}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md bg-neutral-800 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-700">
            Decline
          </button>
          <button
            onMouseEnter={handleMouseEnterAccept}
            className="rounded-md bg-green-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-green-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
