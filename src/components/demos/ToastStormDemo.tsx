"use client";

import { useState } from "react";

interface DemoToast {
  id: number;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

const TOAST_MESSAGES = [
  { message: "🎉 Toast spawned!", type: "success" as const },
  { message: "⚠️ Another toast appeared!", type: "warning" as const },
  { message: "ℹ️ Did you know? Toasts multiply.", type: "info" as const },
  { message: "❌ Error: Too many toasts.", type: "error" as const },
  { message: "🍞 Bread has been toasted.", type: "info" as const },
  { message: "🔔 Notification: You have toasts.", type: "info" as const },
  { message: "✅ Toast successfully toasted.", type: "success" as const },
  { message: "💩 shitcn toast reporting for duty.", type: "warning" as const },
];

export default function ToastStormDemo() {
  const [toasts, setToasts] = useState<DemoToast[]>([]);
  const [totalSpawned, setTotalSpawned] = useState(0);

  const spawnToasts = () => {
    const count = 1 + Math.floor(Math.random() * 3); // 1-3 toasts per click
    const newToasts: DemoToast[] = [];

    for (let i = 0; i < count; i++) {
      const template =
        TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)];
      newToasts.push({
        id: Date.now() + Math.random(),
        ...template,
      });
    }

    setToasts((prev) => [...prev, ...newToasts]);
    setTotalSpawned((prev) => prev + count);
  };

  const dismissToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const typeColors = {
    info: "border-blue-500/20 bg-blue-500/5 text-blue-400",
    success: "border-green-500/20 bg-green-500/5 text-green-400",
    warning: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
    error: "border-red-500/20 bg-red-500/5 text-red-400",
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={spawnToasts}
          className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-500"
        >
          🍞 Spawn Toasts
        </button>
        <button
          onClick={() => setToasts([])}
          className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-neutral-800"
        >
          Clear All
        </button>
        <span className="text-xs text-neutral-500">
          Total spawned: {totalSpawned}
        </span>
      </div>

      <div className="max-h-64 space-y-2 overflow-y-auto">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center justify-between rounded-lg border p-3 ${typeColors[toast.type]}`}
          >
            <span className="text-sm">{toast.message}</span>
            <button
              onClick={() => dismissToast(toast.id)}
              className="ml-2 rounded p-1 opacity-50 transition-opacity hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {toasts.length === 0 && (
        <p className="text-sm text-neutral-600">
          No toasts yet. Click the button to start the storm.
        </p>
      )}
    </div>
  );
}
