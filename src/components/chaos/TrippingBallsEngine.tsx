"use client";

import { useEffect, useRef } from "react";

function isImmune(el: Element): boolean {
  let current: Element | null = el;
  while (current) {
    if (current.getAttribute("data-chaos-immune") === "true") return true;
    if (current.id === "main-content") return false; // Stop at main content
    current = current.parentElement;
  }
  return false;
}

function getRandomElements(count: number): HTMLElement[] {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return [];

  const allElements = mainContent.querySelectorAll(
    "h1, h2, h3, p, span, a, button, div, li, code, pre, img"
  );
  const eligible: HTMLElement[] = [];

  allElements.forEach((el) => {
    if (!isImmune(el) && el instanceof HTMLElement) {
      eligible.push(el);
    }
  });

  // Shuffle and pick N
  const shuffled = eligible.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function generateRandomAnimation(): string {
  const duration = 2 + Math.random() * 6; // 2-8s
  const delay = Math.random() * 2;
  const direction = Math.random() > 0.5 ? "alternate" : "alternate-reverse";

  const maxRotate = (Math.random() - 0.5) * 15; // -7.5 to 7.5 deg
  const maxSkew = (Math.random() - 0.5) * 10; // -5 to 5 deg
  const maxScale = 0.85 + Math.random() * 0.35; // 0.85 to 1.2
  const hueRotate = Math.floor(Math.random() * 360);
  const saturate = 0.5 + Math.random() * 3; // 0.5 to 3.5
  const grayscale = Math.random() > 0.7 ? Math.random() * 0.8 : 0;

  // Neon shadow colors
  const shadowColors = [
    "rgba(255, 0, 128, 0.6)",
    "rgba(0, 255, 128, 0.6)",
    "rgba(128, 0, 255, 0.6)",
    "rgba(255, 255, 0, 0.6)",
    "rgba(0, 255, 255, 0.6)",
    "rgba(255, 128, 0, 0.6)",
  ];
  const shadowColor =
    shadowColors[Math.floor(Math.random() * shadowColors.length)];
  const shadowSize = Math.random() > 0.5 ? `0 0 ${8 + Math.random() * 20}px ${shadowColor}` : "none";

  const animName = `trip-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

  const keyframes = `
    @keyframes ${animName} {
      0%, 100% {
        transform: rotate(0deg) skew(0deg) scale(1);
        filter: hue-rotate(0deg) saturate(1) grayscale(0);
        box-shadow: none;
      }
      50% {
        transform: rotate(${maxRotate}deg) skew(${maxSkew}deg) scale(${maxScale});
        filter: hue-rotate(${hueRotate}deg) saturate(${saturate}) grayscale(${grayscale});
        box-shadow: ${shadowSize};
      }
    }
  `;

  // Inject keyframes
  const styleEl = document.createElement("style");
  styleEl.setAttribute("data-trippy", "true");
  styleEl.textContent = keyframes;
  document.head.appendChild(styleEl);

  return `${animName} ${duration}s ${delay}s ${direction} infinite ease-in-out`;
}

export default function TrippingBallsEngine() {
  const affectedElements = useRef<Map<HTMLElement, string>>(new Map());
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    const MAX_AFFECTED = 20;
    const elementsMap = affectedElements.current;

    const applyEffects = () => {
      // Clean up old animations from elements that may have been removed
      elementsMap.forEach((_originalAnimation, el) => {
        if (!document.body.contains(el)) {
          elementsMap.delete(el);
        }
      });

      // Pick new random elements
      const newElements = getRandomElements(MAX_AFFECTED);

      // Remove effects from elements no longer selected
      elementsMap.forEach((originalAnimation, el) => {
        if (!newElements.includes(el)) {
          el.style.animation = originalAnimation;
          el.style.transition = "";
          elementsMap.delete(el);
        }
      });

      // Apply effects to new elements
      newElements.forEach((el) => {
        if (!elementsMap.has(el)) {
          elementsMap.set(el, el.style.animation || "");
          el.style.animation = generateRandomAnimation();
        }
      });
    };

    // Initial application
    applyEffects();

    // Refresh selection every 5 seconds
    intervalRef.current = setInterval(applyEffects, 5000);

    return () => {
      // Cleanup
      if (intervalRef.current) clearInterval(intervalRef.current);

      // Remove all applied animations
      elementsMap.forEach((originalAnimation, el) => {
        if (document.body.contains(el)) {
          el.style.animation = originalAnimation;
          el.style.transition = "";
        }
      });
      elementsMap.clear();

      // Remove injected style elements
      document
        .querySelectorAll('style[data-trippy="true"]')
        .forEach((el) => el.remove());
    };
  }, []);

  return null;
}
