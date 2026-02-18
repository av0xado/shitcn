"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface Toast {
  id: number;
  message: string;
  clicksToClose: number;
  clicks: number;
  /** Which edge this toast spawns from: top | bottom | left | right (assigned by wrapper) */
  edge?: "top" | "bottom" | "left" | "right";
  /** Position along the edge as a percentage (0–100) (assigned by wrapper) */
  edgePos?: number;
}

interface ToastContainerProps {
  registerSetter: (
    setter: React.Dispatch<React.SetStateAction<Toast[]>>
  ) => void;
}

/** Pick a random edge and a random position along it */
function randomEdgePos(): { edge: Toast["edge"]; edgePos: number } {
  const edges: Toast["edge"][] = ["top", "bottom", "left", "right"];
  const edge = edges[Math.floor(Math.random() * edges.length)];
  // Keep away from corners so the toast is fully visible
  const edgePos = 10 + Math.random() * 80;
  return { edge, edgePos };
}

/** Build inline style for a toast based on its edge + position */
function toastStyle(
  edge: Toast["edge"],
  edgePos: number | undefined
): React.CSSProperties {
  const pos = edgePos ?? 50;
  const base: React.CSSProperties = {
    position: "fixed",
    zIndex: 99970,
    width: "18rem", // w-72
    maxWidth: "calc(100vw - 2rem)",
  };

  switch (edge) {
    case "top":
      return { ...base, top: "1rem", left: `${pos}%`, transform: "translateX(-50%)" };
    case "bottom":
      return { ...base, bottom: "1rem", left: `${pos}%`, transform: "translateX(-50%)" };
    case "left":
      return { ...base, left: "1rem", top: `${pos}%`, transform: "translateY(-50%)" };
    case "right":
      return { ...base, right: "1rem", top: `${pos}%`, transform: "translateY(-50%)" };
    default:
      return { ...base, bottom: "1rem", right: "1rem" };
  }
}

/** CSS animation name based on edge */
function slideInClass(edge: Toast["edge"]): string {
  switch (edge) {
    case "top":    return "animate-slide-in-top";
    case "bottom": return "animate-slide-in-bottom";
    case "left":   return "animate-slide-in-left";
    case "right":  return "animate-slide-in-right";
    default:       return "animate-slide-in-bottom";
  }
}

export default function ToastContainer({ registerSetter }: ToastContainerProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Stable wrapped setter: injects random edge/edgePos for any toast that lacks one
  const wrappedSetter = useCallback<React.Dispatch<React.SetStateAction<Toast[]>>>(
    (action) => {
      setToasts((prev) => {
        const next = typeof action === "function" ? action(prev) : action;
        return next.map((t) => (t.edge ? t : { ...t, ...randomEdgePos() }));
      });
    },
    [] // setToasts is stable, no deps needed
  );

  useEffect(() => {
    registerSetter(wrappedSetter);
  }, [registerSetter, wrappedSetter]);

  const handleClose = (id: number) => {
    setToasts((prev) =>
      prev
        .map((t) => {
          if (t.id === id) {
            const newClicks = t.clicks + 1;
            if (newClicks >= t.clicksToClose) return null;
            return { ...t, clicks: newClicks };
          }
          return t;
        })
        .filter(Boolean) as Toast[]
    );
  };

  if (toasts.length === 0) return null;

  return (
    <>
      {toasts.slice(-20).map((toast) => (
        <div
          key={toast.id}
          data-chaos-immune="toast"
          className={`${slideInClass(toast.edge)} rounded-lg border border-neutral-700 bg-neutral-900 p-3 shadow-lg`}
          style={toastStyle(toast.edge, toast.edgePos)}
        >
          <div className="flex items-start justify-between gap-2">
            <p className="flex-1 text-sm text-neutral-300">{toast.message}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose(toast.id);
              }}
              className="flex-shrink-0 rounded p-0.5 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          {toast.clicksToClose > 1 && toast.clicks < toast.clicksToClose && (
            <p className="mt-1 text-xs text-red-400">
              Click {toast.clicksToClose - toast.clicks} more time(s) to close
            </p>
          )}
        </div>
      ))}
      {toasts.length > 3 && (
        <div
          data-chaos-immune="toast"
          style={{ position: "fixed", bottom: "1rem", left: "50%", transform: "translateX(-50%)", zIndex: 99971 }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setToasts([]);
            }}
            className="rounded-md bg-neutral-800 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white shadow-lg"
          >
            Clear all ({toasts.length})
          </button>
        </div>
      )}
    </>
  );
}
