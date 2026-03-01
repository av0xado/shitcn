import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-6 text-center">
        <div className="inline-block rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-sm text-neutral-400">
          The anti-component library
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          shitcn 💩
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400">
          Beautifully broken components for the modern web.
          <br />
          A collection of intentionally awful UI components and UX antipatterns. Copy and paste into your project. Open source. Open wounds.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/docs"
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            Get Started
          </Link>
          <Link
            href="/components"
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            Browse Components
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          emoji="🍺"
          title="Drunk Mouse"
          description="Your cursor develops a drinking problem. Elements jitter and dodge as you hover."
        />
        <FeatureCard
          emoji="🍪"
          title="Unclickable Cookie Banner"
          description="A cookie consent banner that physically runs away from your cursor."
        />
        <FeatureCard
          emoji="🍞"
          title="Toast Storm"
          description="Every click spawns useless notifications. Some require multiple clicks to dismiss."
        />
        <FeatureCard
          emoji="🔨"
          title="Whack-a-Mole"
          description="Click a button, a different button activates. Demo areas become a game."
        />
        <FeatureCard
          emoji="🥴"
          title="Drunk Mode"
          description="Content gradually blurs over time. How long can you read before giving up?"
        />
        <FeatureCard
          emoji="🌈"
          title="Tripping Balls"
          description="Elements randomly skew, rotate, and shift colors in a psychedelic nightmare."
        />
      </section>

      {/* Code Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Quick Start</h2>
        <p className="text-neutral-400">
          Install shitcn and start ruining your app in seconds.
        </p>
        <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
          <div className="border-b border-neutral-800 bg-neutral-900/80 px-4 py-2">
            <span className="font-mono text-xs text-neutral-500">
              terminal
            </span>
          </div>
          <pre className="overflow-x-auto p-4">
            <code className="font-mono text-sm text-neutral-300">
              {`npx shitcn@latest init\nnpx shitcn@latest add confirm-button\nnpx shitcn@latest add toast-storm`}
            </code>
          </pre>
        </div>
        <p className="text-xs text-neutral-600">
          (This is a parody. There is no real npm package. Please don&apos;t try to install this.)
        </p>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to make things worse?</h2>
        <p className="mt-2 text-neutral-400">
          The global chaos runtime has been detached from this docs app while we
          refactor toward installable production modules. Feature pages and
          demos remain available.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href="/components"
            className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-500"
          >
            Explore Components
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900">
      <div className="mb-3 text-2xl">{emoji}</div>
      <h3 className="mb-2 font-semibold text-white">{title}</h3>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  );
}
