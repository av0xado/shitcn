"use client";

import { useState } from "react";
import { useChaos, CHAOS_FEATURES } from "@/context/ChaosContext";

export default function ControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, toggle, enableAll, disableAll, isAnyActive } = useChaos();

  return (
    <div data-chaos-immune="true" style={{ zIndex: 99999 }}>
      {/* Toggle Button - always visible in navbar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-800 hover:text-white"
      >
        <span className="relative flex h-2 w-2">
          {isAnyActive && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              isAnyActive ? "bg-red-500" : "bg-neutral-600"
            }`}
          />
        </span>
        {isOpen ? "Hide" : "Show"} Control Panel
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: 99998 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div
            className="fixed right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-neutral-800 bg-neutral-950 shadow-2xl"
            style={{ zIndex: 99999 }}
            data-chaos-immune="true"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 p-6">
              <div>
                <h2 className="text-lg font-bold text-white">
                  🎛️ Chaos Control Panel
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Toggle chaos features on and off. This panel is immune to all
                  effects.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 border-b border-neutral-800 p-4">
              <button
                onClick={enableAll}
                className="flex-1 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500"
              >
                🔥 Enable All
              </button>
              <button
                onClick={disableAll}
                className="flex-1 rounded-md bg-neutral-800 px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-700"
              >
                🧊 Disable All
              </button>
            </div>

            {/* Feature Toggles */}
            <div className="p-4">
              <div className="space-y-3">
                {CHAOS_FEATURES.map((feature) => (
                  <div
                    key={feature.key}
                    className="flex items-start gap-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">
                          {feature.label}
                        </span>
                        {state[feature.key] && (
                          <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-neutral-500">
                        {feature.description}
                      </p>
                    </div>
                    <button
                      onClick={() => toggle(feature.key)}
                      className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${
                        state[feature.key] ? "bg-red-600" : "bg-neutral-700"
                      }`}
                    >
                      <span
                        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                          state[feature.key]
                            ? "translate-x-5"
                            : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-800 p-4">
              <p className="text-center text-xs text-neutral-600">
                This panel is immune to all chaos effects.
                <br />
                You can always regain control from here.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
