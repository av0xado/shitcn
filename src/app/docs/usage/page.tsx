import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";

export default function UsagePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Usage</h1>
        <p className="mt-3 text-lg text-neutral-400">
          How to use shitcn components to make your app objectively worse.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Basic Usage</h2>
        <p className="text-neutral-400">
          shitcn components work just like regular React components — except
          they&apos;re terrible. Import them and use them in your JSX:
        </p>
        <CodeBlock
          code={`import { ConfirmButton } from "@/components/shitcn/confirm-button"

export default function MyForm() {
  const handleSubmit = () => {
    // This will never actually fire
    console.log("Form submitted!")
  }

  return (
    <form>
      <ConfirmButton onConfirm={handleSubmit}>
        Submit Form
      </ConfirmButton>
    </form>
  )
}`}
          language="tsx"
          filename="components/MyForm.tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Chaos Features (Global)
        </h2>
        <p className="text-neutral-400">
          Beyond individual components, shitcn includes global chaos features
          that affect the entire page. These are controlled via the{" "}
          <strong className="text-white">Control Panel</strong> (top-right
          button in the navbar).
        </p>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900">
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Effect
                </th>
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Scope
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-400">
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  drunkMouse
                </td>
                <td className="px-4 py-3">Cursor jitter + element wobble</td>
                <td className="px-4 py-3">Global</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  unclickableCookieBanner
                </td>
                <td className="px-4 py-3">Dodging cookie consent</td>
                <td className="px-4 py-3">Global overlay</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  toastStorm
                </td>
                <td className="px-4 py-3">Click = toast notification</td>
                <td className="px-4 py-3">Global</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  whackAMole
                </td>
                <td className="px-4 py-3">Random button activation</td>
                <td className="px-4 py-3">Demo areas only</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  drunkMode
                </td>
                <td className="px-4 py-3">Progressive blur</td>
                <td className="px-4 py-3">Main content</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  trippingBalls
                </td>
                <td className="px-4 py-3">Psychedelic transforms</td>
                <td className="px-4 py-3">Main content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Using the ChaosProvider
        </h2>
        <p className="text-neutral-400">
          If you want to integrate chaos features into your own app, wrap your
          app with the ChaosProvider:
        </p>
        <CodeBlock
          code={`import { ChaosProvider } from "@/context/ChaosContext"

export default function Layout({ children }) {
  return (
    <ChaosProvider>
      {children}
    </ChaosProvider>
  )
}`}
          language="tsx"
          filename="app/layout.tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Reading Chaos State
        </h2>
        <p className="text-neutral-400">
          Access the chaos state in any client component:
        </p>
        <CodeBlock
          code={`"use client"
import { useChaos } from "@/context/ChaosContext"

export function MyComponent() {
  const { state, toggle } = useChaos()

  return (
    <div>
      <p>Drunk Mouse: {state.drunkMouse ? "ON" : "OFF"}</p>
      <button onClick={() => toggle("drunkMouse")}>
        Toggle Drunk Mouse
      </button>
    </div>
  )
}`}
          language="tsx"
          filename="components/MyComponent.tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Immunity (data-chaos-immune)
        </h2>
        <p className="text-neutral-400">
          Add{" "}
          <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-sm text-neutral-300">
            data-chaos-immune=&quot;true&quot;
          </code>{" "}
          to any element to protect it from chaos effects:
        </p>
        <CodeBlock
          code={`<div data-chaos-immune="true">
  {/* This content is safe from chaos */}
  <ImportantNavigation />
</div>`}
          language="tsx"
        />
      </div>

      <div className="flex gap-4">
        <Link
          href="/components"
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Browse Components →
        </Link>
        <Link
          href="/docs/installation"
          className="rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          ← Installation
        </Link>
      </div>
    </div>
  );
}
