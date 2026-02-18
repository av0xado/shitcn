"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function SlowInputDemo() {
  const [displayValue, setDisplayValue] = useState("");
  const [pendingChars, setPendingChars] = useState(0);
  const queueRef = useRef<string[]>([]);
  const processingRef = useRef(false);
  const processQueueRef = useRef<() => void>(undefined);

  useEffect(() => {
    processQueueRef.current = () => {
      if (processingRef.current || queueRef.current.length === 0) return;
      processingRef.current = true;

      const char = queueRef.current.shift()!;
      const delay = 500 + Math.random() * 1500;

      setTimeout(() => {
        setDisplayValue((prev) => {
          if (char === "BACKSPACE") {
            return prev.slice(0, -1);
          }
          return prev + char;
        });
        setPendingChars((p) => Math.max(0, p - 1));
        processingRef.current = false;
        processQueueRef.current?.();
      }, delay);
    };
  });

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Backspace") {
      queueRef.current.push("BACKSPACE");
    } else if (e.key.length === 1) {
      queueRef.current.push(e.key);
    } else {
      return;
    }

    setPendingChars((p) => p + 1);
    processQueueRef.current?.();
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-300">
          Type something (patience required)
        </label>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          readOnly
          value={displayValue}
          placeholder="Start typing..."
          className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
        />
      </div>

      {pendingChars > 0 && (
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
          <p className="text-xs text-yellow-400">
            Processing {pendingChars} character{pendingChars > 1 ? "s" : ""}...
            please wait
          </p>
        </div>
      )}

      <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
        <p className="text-xs text-neutral-500">
          Current value: &ldquo;{displayValue}&rdquo;
        </p>
        <p className="mt-1 text-xs text-neutral-600">
          Each keystroke has a 500ms–2s random delay. This is by design.
        </p>
      </div>
    </div>
  );
}
