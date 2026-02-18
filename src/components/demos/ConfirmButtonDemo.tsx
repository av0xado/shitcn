"use client";

import { useState } from "react";

interface ConfirmDialog {
  id: number;
  depth: number;
}

export default function ConfirmButtonDemo() {
  const [dialogs, setDialogs] = useState<ConfirmDialog[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const addDialog = (depth: number) => {
    setDialogs((prev) => [...prev, { id: Date.now() + Math.random(), depth }]);
  };

  const handleInitialClick = () => {
    setConfirmed(false);
    setDialogs([]);
    addDialog(1);
  };

  const handleConfirm = (dialog: ConfirmDialog) => {
    if (dialog.depth >= 5) {
      // After 5 levels, "confirm" but then add more
      setConfirmed(true);
      setTimeout(() => {
        setConfirmed(false);
        setDialogs([]);
        addDialog(1);
      }, 1500);
    } else {
      addDialog(dialog.depth + 1);
    }
  };

  const handleCancel = (dialogId: number) => {
    setDialogs((prev) => prev.filter((d) => d.id !== dialogId));
  };

  const messages = [
    "Are you sure?",
    "Are you really sure?",
    "Like, REALLY sure?",
    "This is your last chance to back out...",
    "Final confirmation (we promise):",
  ];

  return (
    <div className="space-y-4">
      <button
        onClick={handleInitialClick}
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500"
      >
        Delete Account
      </button>

      {confirmed && (
        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
          <p className="text-sm text-green-400">
            ✅ Confirmed! Just kidding, starting over...
          </p>
        </div>
      )}

      <div className="space-y-2">
        {dialogs.map((dialog) => (
          <div
            key={dialog.id}
            className="rounded-lg border border-neutral-700 bg-neutral-800 p-4"
            style={{ marginLeft: dialog.depth * 12 }}
          >
            <p className="mb-3 text-sm text-neutral-300">
              {messages[Math.min(dialog.depth - 1, messages.length - 1)]}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleConfirm(dialog)}
                className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-500"
              >
                Yes, I&apos;m sure
              </button>
              <button
                onClick={() => handleCancel(dialog.id)}
                className="rounded-md bg-neutral-700 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:bg-neutral-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
