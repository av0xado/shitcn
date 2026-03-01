import Link from "next/link";

const showcaseItems = [
  {
    title: "The Impossible Form",
    description:
      "A complete checkout form using SlowInput, FormWithAmnesia, and ConfirmButton. Average completion time: ∞",
    components: ["slow-input", "form-with-amnesia", "confirm-button"],
    difficulty: "Nightmare",
  },
  {
    title: "Toast Notification Hell",
    description:
      "A dashboard where every interaction spawns toast notifications. Includes nested toasts that spawn more toasts.",
    components: ["toast-storm"],
    difficulty: "Chaotic",
  },
  {
    title: "The Unnavigable Nav",
    description:
      "A navigation menu built entirely with PaginationRoulette and DropdownOfTheseus. Good luck finding anything.",
    components: ["pagination-roulette", "dropdown-of-theseus"],
    difficulty: "Disorienting",
  },
  {
    title: "Accessibility Audit Speedrun",
    description:
      "How many WCAG violations can we fit on one page? The answer will surprise you (and your screen reader).",
    components: ["accessibility-inverter"],
    difficulty: "Criminal",
  },
  {
    title: "The Full shitcn Experience",
    description:
      "All chaos features enabled simultaneously via a custom runtime host. We dare you.",
    components: [],
    difficulty: "Legendary",
  },
];

const difficultyColors: Record<string, string> = {
  Nightmare: "text-red-400 bg-red-500/10",
  Chaotic: "text-orange-400 bg-orange-500/10",
  Disorienting: "text-yellow-400 bg-yellow-500/10",
  Criminal: "text-purple-400 bg-purple-500/10",
  Legendary: "text-pink-400 bg-pink-500/10",
};

export default function ShowcasePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Showcase</h1>
        <p className="mt-3 text-lg text-neutral-400">
          Real-world examples of shitcn components working together to create
          truly terrible user experiences. These are conceptual showcases while
          global chaos wiring is being refactored.
        </p>
      </div>

      <div className="space-y-4">
        {showcaseItems.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  difficultyColors[item.difficulty] || "text-neutral-400 bg-neutral-800"
                }`}
              >
                {item.difficulty}
              </span>
            </div>
            <p className="text-sm text-neutral-400">{item.description}</p>
            {item.components.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.components.map((comp) => (
                  <Link
                    key={comp}
                    href={`/components/${comp}`}
                    className="rounded-md bg-neutral-800 px-2 py-1 font-mono text-xs text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
                  >
                    {comp}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 text-center">
        <h3 className="text-lg font-semibold text-white">
          Want to try the full experience?
        </h3>
        <p className="mt-2 text-sm text-neutral-400">
          Use the new chaos runtime API from{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs text-neutral-300">
            /docs/usage
          </code>{" "}
          to mount and toggle all six features in your own host component.
        </p>
        <p className="mt-1 text-xs text-neutral-600">
          (We are not responsible for any frustration, confusion, or existential
          crises that may result.)
        </p>
      </div>
    </div>
  );
}
