import { notFound } from "next/navigation";
import Link from "next/link";
import { components, getComponentBySlug } from "@/data/components";
import CodeBlock from "@/components/ui/CodeBlock";
import ComponentDemo from "./ComponentDemo";

// Generate static params for all components
export function generateStaticParams() {
  return components.map((comp) => ({ slug: comp.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  // Find prev/next components for navigation
  const currentIndex = components.findIndex((c) => c.slug === slug);
  const prevComponent = currentIndex > 0 ? components[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < components.length - 1 ? components[currentIndex + 1] : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500">
            {component.category}
          </span>
          {component.hasDemo && (
            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
              Interactive Demo
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-white">{component.name}</h1>
        <p className="mt-3 text-lg text-neutral-400">{component.description}</p>
      </div>

      {/* Demo Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Preview</h2>
        <ComponentDemo slug={slug} hasDemo={component.hasDemo} />
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Installation</h2>
        <CodeBlock
          code={`npx shitcn@latest add ${slug}`}
          language="bash"
          filename="terminal"
        />
        <p className="text-xs text-neutral-600">
          (This command is fictional. Copy the source code instead.)
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Usage</h2>
        <CodeBlock
          code={`import { ${component.name} } from "@/components/shitcn/${slug}"

export default function MyPage() {
  return (
    <${component.name} />
  )
}`}
          language="tsx"
          filename={`app/page.tsx`}
        />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Props</h2>
        <div className="overflow-hidden rounded-lg border border-neutral-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900">
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Prop
                </th>
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Default
                </th>
                <th className="px-4 py-3 text-left font-medium text-neutral-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-400">
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  chaos
                </td>
                <td className="px-4 py-3 font-mono text-xs">boolean</td>
                <td className="px-4 py-3 font-mono text-xs">true</td>
                <td className="px-4 py-3">
                  Enable chaos behavior. Why would you disable it?
                </td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  intensity
                </td>
                <td className="px-4 py-3 font-mono text-xs">number</td>
                <td className="px-4 py-3 font-mono text-xs">5</td>
                <td className="px-4 py-3">
                  Chaos intensity from 1-10. Values above 7 are not recommended.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-red-400">
                  className
                </td>
                <td className="px-4 py-3 font-mono text-xs">string</td>
                <td className="px-4 py-3 font-mono text-xs">-</td>
                <td className="px-4 py-3">
                  Additional CSS classes. Not that it matters.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
        {prevComponent ? (
          <Link
            href={`/components/${prevComponent.slug}`}
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            ← {prevComponent.name}
          </Link>
        ) : (
          <div />
        )}
        {nextComponent ? (
          <Link
            href={`/components/${nextComponent.slug}`}
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            {nextComponent.name} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
