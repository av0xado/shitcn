"use client";

import { useState, useEffect, useRef } from "react";

export default function FormWithAmnesiaDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amnesiaTriggers, setAmnesiaTriggers] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // AMNESIA! Clear all fields
          setName("");
          setEmail("");
          setMessage("");
          setAmnesiaTriggers((t) => t + 1);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              countdown <= 3 ? "animate-pulse bg-red-500" : "bg-yellow-500"
            }`}
          />
          <span className="text-xs text-neutral-400">
            Memory wipe in: <strong className={countdown <= 3 ? "text-red-400" : "text-yellow-400"}>{countdown}s</strong>
          </span>
        </div>
        <span className="text-xs text-neutral-600">
          Amnesia events: {amnesiaTriggers}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-300">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name (quickly)"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email (hurry)"
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-neutral-300">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type fast before it forgets..."
            rows={3}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none"
          />
        </div>
      </div>

      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500">
        Submit (if you can)
      </button>

      {amnesiaTriggers > 0 && (
        <p className="text-xs text-red-400">
          The form has forgotten your data {amnesiaTriggers} time
          {amnesiaTriggers > 1 ? "s" : ""}. Keep trying!
        </p>
      )}
    </div>
  );
}
