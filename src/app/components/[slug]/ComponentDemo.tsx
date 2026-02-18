"use client";

import DemoSandbox from "@/components/DemoSandbox";
import ConfirmButtonDemo from "@/components/demos/ConfirmButtonDemo";
import SlowInputDemo from "@/components/demos/SlowInputDemo";
import ToastStormDemo from "@/components/demos/ToastStormDemo";
import FormWithAmnesiaDemo from "@/components/demos/FormWithAmnesiaDemo";
import InvertedScrollDemo from "@/components/demos/InvertedScrollDemo";

interface ComponentDemoProps {
  slug: string;
  hasDemo: boolean;
}

const DEMO_MAP: Record<string, React.ComponentType> = {
  "confirm-button": ConfirmButtonDemo,
  "slow-input": SlowInputDemo,
  "toast-storm": ToastStormDemo,
  "form-with-amnesia": FormWithAmnesiaDemo,
  "inverted-scroll": InvertedScrollDemo,
};

export default function ComponentDemo({ slug, hasDemo }: ComponentDemoProps) {
  if (!hasDemo) {
    return (
      <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-8 text-center">
        <div className="mb-3 text-4xl">📸</div>
        <p className="text-sm text-neutral-500">
          Interactive demo coming soon. For now, use your imagination.
        </p>
        <div className="mx-auto mt-4 h-32 w-full max-w-sm rounded-lg bg-neutral-800/50">
          <div className="flex h-full items-center justify-center">
            <span className="text-xs text-neutral-600">
              [ Placeholder Preview ]
            </span>
          </div>
        </div>
      </div>
    );
  }

  const DemoComponent = DEMO_MAP[slug];

  if (!DemoComponent) {
    return (
      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
        <p className="text-sm text-yellow-400">
          Demo component not found for &ldquo;{slug}&rdquo;. This is a bug (or a feature).
        </p>
      </div>
    );
  }

  return (
    <DemoSandbox>
      <DemoComponent />
    </DemoSandbox>
  );
}
