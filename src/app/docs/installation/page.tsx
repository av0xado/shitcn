import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Installation</h1>
        <p className="mt-3 text-lg text-neutral-400">
          How to add shitcn to your project. Spoiler: you probably shouldn&apos;t.
        </p>
      </div>

      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
        <p className="text-sm text-yellow-400">
          ⚠️ <strong>Disclaimer:</strong> shitcn is a parody project. These
          components are intentionally terrible. Do not use them in production.
          Do not use them in staging. Honestly, don&apos;t use them at all.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Prerequisites</h2>
        <ul className="list-inside list-disc space-y-2 text-neutral-400">
          <li>A sense of humor</li>
          <li>Low expectations</li>
          <li>Node.js 18+ (or whatever, we&apos;re not your mom)</li>
          <li>A Next.js project (or any React project, really)</li>
          <li>Tailwind CSS (for maximum aesthetic damage)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Step 1: Initialize shitcn
        </h2>
        <p className="text-neutral-400">
          Run the shitcn CLI to initialize your project with our configuration:
        </p>
        <CodeBlock
          code={`npx shitcn@latest init`}
          language="bash"
          filename="terminal"
        />
        <p className="text-sm text-neutral-500">
          (This command doesn&apos;t actually exist. This is a parody.)
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Step 2: Add Components
        </h2>
        <p className="text-neutral-400">
          Add individual components to your project:
        </p>
        <CodeBlock
          code={`npx shitcn@latest add confirm-button
npx shitcn@latest add slow-input
npx shitcn@latest add toast-storm`}
          language="bash"
          filename="terminal"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Step 3: Import and Use
        </h2>
        <p className="text-neutral-400">
          Import components like you would with any other library:
        </p>
        <CodeBlock
          code={`import { ConfirmButton } from "@/components/shitcn/confirm-button"
import { SlowInput } from "@/components/shitcn/slow-input"

export default function MyPage() {
  return (
    <div>
      <SlowInput placeholder="Type something... eventually" />
      <ConfirmButton onConfirm={() => console.log("finally!")}>
        Submit
      </ConfirmButton>
    </div>
  )
}`}
          language="tsx"
          filename="app/page.tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Manual Installation
        </h2>
        <p className="text-neutral-400">
          Alternatively, you can just copy-paste the component source code
          directly from the component pages. We won&apos;t judge. (We will judge
          a little.)
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/docs/usage"
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Usage Guide →
        </Link>
        <Link
          href="/docs"
          className="rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          ← Back to Docs
        </Link>
      </div>
    </div>
  );
}
