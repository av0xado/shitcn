import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">About shitcn</h1>
        <p className="mt-3 text-lg text-neutral-400">
          The world&apos;s first intentionally awful component library.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Why does this exist? Good Question</h2>
        <p className="text-neutral-400">
          <strong className="text-white">shitcn</strong> is a parody
          component-library documentation site. It mimics the clean,
          professional aesthetic of modern UI component libraries — but every
          component is intentionally designed to be frustrating, confusing, or
          absurd.
        </p>
        <p className="text-neutral-400">
          It&apos;s a humorous exploration of UX antipatterns, dark patterns,
          and the kinds of design decisions that make users want to throw their
          computers out the window.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          🧩 Chaos Feature Modules
        </h2>
        <p className="text-neutral-400">
          The old global control panel has been removed so the project can
          evolve into a production-ready component library with explicit,
          installable feature modules.
        </p>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 space-y-3">
          <h3 className="font-medium text-white">Implemented Features:</h3>
          <ul className="list-inside list-disc space-y-2 text-sm text-neutral-400">
            <li>
              <strong className="text-neutral-200">Drunk Mouse</strong> — Cursor
              jitters and hovered elements wobble
            </li>
            <li>
              <strong className="text-neutral-200">
                Unclickable Cookie Banner
              </strong>{" "}
              — A cookie banner that runs away from your cursor
            </li>
            <li>
              <strong className="text-neutral-200">Toast Storm</strong> — Every
              click spawns useless toast notifications
            </li>
            <li>
              <strong className="text-neutral-200">Whack-a-Mole Controls</strong>{" "}
              — Buttons in demo areas trigger random other buttons
            </li>
            <li>
              <strong className="text-neutral-200">Drunk Mode</strong> — Content
              gradually blurs over time
            </li>
            <li>
              <strong className="text-neutral-200">Tripping Balls</strong> —
              Elements randomly skew, rotate, and shift colors
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
        <p className="text-sm text-green-400">
          🛡️ <strong>Refactor note:</strong> Chaos effects are no longer mounted
          globally in this docs app. They are preserved as reusable modules for
          future `npx` install workflows.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Why?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
            <h3 className="mb-2 font-medium text-white">🎓 Educational</h3>
            <p className="text-sm text-neutral-400">
              Understanding bad UX helps you build better UX. These components
              are exaggerated examples of real antipatterns found in the wild.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
            <h3 className="mb-2 font-medium text-white">😂 Entertainment</h3>
            <p className="text-sm text-neutral-400">
              Sometimes you just need to laugh at terrible design. shitcn is
              that laugh.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
            <h3 className="mb-2 font-medium text-white">🧪 Technical Demo</h3>
            <p className="text-sm text-neutral-400">
              The chaos features demonstrate interesting browser APIs, CSS
              tricks, and React patterns — just used for evil.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
            <h3 className="mb-2 font-medium text-white">💡 Awareness</h3>
            <p className="text-sm text-neutral-400">
              Dark patterns are real. By making them obvious and absurd, we
              hope to make people more aware of subtle versions in real apps.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
        <ul className="list-inside list-disc space-y-1 text-neutral-400">
          <li>Next.js (App Router) with TypeScript</li>
          <li>Tailwind CSS for styling</li>
          <li>Typed feature modules (`src/features/chaos`) for reusable runtime APIs</li>
          <li>Zero external dependencies for chaos features</li>
          <li>Client-side hooks/components for explicit host-controlled behavior</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
        <p className="text-neutral-400">
          This is a parody project created for educational and entertainment
          purposes. Do not use these components in production applications. Do
          not use these patterns to intentionally frustrate real users. Be kind
          to your users. Build good UX. Then come here to laugh at bad UX.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/components"
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Browse Components
        </Link>
        <Link
          href="/docs"
          className="rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          Read the Docs
        </Link>
      </div>
    </div>
  );
}
