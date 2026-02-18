import Link from "next/link";
import { components } from "@/data/components";

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Components</h1>
        <p className="mt-3 text-lg text-neutral-400">
          A curated collection of beautifully awful UI components. Browse,
          preview, and copy-paste your way to a worse user experience.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {components.map((comp) => (
          <Link
            key={comp.slug}
            href={`/components/${comp.slug}`}
            className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-white group-hover:text-red-400">
                {comp.name}
              </h3>
              <div className="flex items-center gap-2">
                {comp.hasDemo && (
                  <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
                    Live Demo
                  </span>
                )}
                <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500">
                  {comp.category}
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400">{comp.description}</p>
            <div className="mt-4 rounded-lg border border-neutral-800 bg-neutral-950 p-3">
              <p className="text-xs text-neutral-600">
                {comp.hasDemo ? "🎮 " : "📸 "}
                {comp.previewDescription}
              </p>
            </div>
            <div className="mt-3 text-sm font-medium text-neutral-500 group-hover:text-red-400">
              View Component →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
