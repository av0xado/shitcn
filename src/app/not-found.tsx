import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-6 text-8xl">💩</div>
      <h1 className="mb-2 text-4xl font-bold text-white">404</h1>
      <p className="mb-2 text-xl text-neutral-400">Page Not Found</p>
      <p className="mb-8 max-w-md text-sm text-neutral-500">
        This page doesn&apos;t exist. Unlike our components, this is
        unintentionally broken. We apologize for the competent error handling.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Go Home
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
