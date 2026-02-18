interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  code,
  language = "tsx",
  filename,
}: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
      {filename && (
        <div className="border-b border-neutral-800 bg-neutral-900/80 px-4 py-2">
          <span className="font-mono text-xs text-neutral-500">{filename}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className={`font-mono text-sm text-neutral-300 language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
