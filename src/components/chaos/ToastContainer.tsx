"use client";

import { useState, useEffect } from "react";

interface Toast {
  id: number;
  message: string;
  clicksToClose: number;
  clicks: number;
}

interface ToastContainerProps {
  registerSetter: (
    setter: React.Dispatch<React.SetStateAction<Toast[]>>
  ) => void;
}

export default function ToastContainer({ registerSetter }: ToastContainerProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    registerSetter(setToasts);
  }, [registerSetter]);

  const handleClose = (id: number) => {
    setToasts((prev) =>
      prev
        .map((t) => {
          if (t.id === id) {
            const newClicks = t.clicks + 1;
            if (newClicks >= t.clicksToClose) {
              return null;
            }
            return { ...t, clicks: newClicks };
          }
          return t;
        })
        .filter(Boolean) as Toast[]
    );
  };

  if (toasts.length === 0) return null;

  return (
    <div
      data-chaos-immune="true"
      className="fixed bottom-4 right-4 z-[99970] flex max-h-[60vh] w-80 flex-col gap-2 overflow-y-auto"
    >
      {toasts.slice(-15).map((toast) => (
        <div
          key={toast.id}
          className="animate-slide-in rounded-lg border border-neutral-700 bg-neutral-900 p-3 shadow-lg"
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            setToasts([]);
          }}
          className="rounded-md bg-neutral-800 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
        >
          Clear all ({toasts.length})
        </button>
      )}
    </div>
  );
}
