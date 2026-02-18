import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Introduction</h1>
        <p className="mt-3 text-lg text-neutral-400">
          Welcome to <strong className="text-white">shitcn</strong> — the
          anti-component library for developers who believe great UX is
          overrated.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">What is shitcn?</h2>
        <p className="text-neutral-400">
          shitcn is a parody component library inspired by the clean,
          professional aesthetic of modern UI libraries — but with a twist.
          Every component is intentionally designed to be awful, frustrating,
          or absurd.
        </p>
        <p className="text-neutral-400">
          It&apos;s a love letter to every dark pattern, anti-pattern, and
          questionable design decision ever made. We&apos;ve collected the worst
          of the worst and packaged them into beautifully documented,
          copy-pasteable components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Philosophy</h2>
        <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
          <blockquote className="border-l-2 border-red-500 pl-4 italic text-neutral-300">
            &ldquo;The best way to understand good design is to experience
            truly terrible design.&rdquo;
            <footer className="mt-2 text-sm text-neutral-500">
              — Nobody, ever
            </footer>
          </blockquote>
        </div>
        <ul className="list-inside list-disc space-y-2 text-neutral-400">
          <li>
            <strong className="text-neutral-200">Educational:</strong> Learn
            what NOT to do by seeing it in action
          </li>
          <li>
            <strong className="text-neutral-200">Entertaining:</strong> Because
            sometimes you need to laugh at bad UX
          </li>
          <li>
            <strong className="text-neutral-200">Interactive:</strong> Toggle
            chaos features on and off via the Control Panel
          </li>
          <li>
            <strong className="text-neutral-200">Safe:</strong> Nothing here
            will actually break your computer (probably)
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">The Control Panel</h2>
        <p className="text-neutral-400">
          Click the{" "}
          <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-sm text-neutral-300">
            Show Control Panel
          </code>{" "}
          button in the top-right corner of the navbar to access the chaos
          control panel. From there, you can toggle individual chaos features
          on and off.
        </p>
        <p className="text-neutral-400">
          The control panel is <strong className="text-white">immune</strong>{" "}
          to all chaos effects — it will always remain usable, no matter how
          much chaos you enable.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/docs/installation"
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Installation →
        </Link>
        <Link
          href="/components"
          className="rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          Browse Components
        </Link>
      </div>
    </div>
  );
}
