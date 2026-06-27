import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface MarkdownViewProps {
  text: string;
}

export default function MarkdownView({ text }: MarkdownViewProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!text) return null;

  // Simple, robust Markdown-like parser for structured mentoring outputs
  const blocks = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-4 text-slate-300 leading-relaxed font-sans text-sm">
      {blocks.map((block, index) => {
        if (block.startsWith("```")) {
          // Extract language and code content
          const match = block.match(/```(\w*)\n([\s\S]*?)```/);
          const lang = match ? match[1] : "code";
          const code = match ? match[2].trim() : block.replace(/```/g, "").trim();
          const blockId = `code-block-${index}`;

          return (
            <div key={index} className="relative my-4 rounded-xl border border-slate-700/60 bg-slate-950 overflow-hidden shadow-inner font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 text-[10px] tracking-wider uppercase font-semibold">
                <span>{lang || "kotlin"}</span>
                <button
                  onClick={() => handleCopy(code, blockId)}
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  {copiedId === blockId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-slate-200 leading-normal max-h-96">
                <code>{code}</code>
              </pre>
            </div>
          );
        }

        // Parse standard lines (headings, lists, bold elements)
        const lines = block.split("\n");
        return (
          <div key={index} className="space-y-2">
            {lines.map((line, lineIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={lineIdx} className="h-2" />;

              // Headers: ###, ##, #
              if (trimmed.startsWith("### ")) {
                return (
                  <h4 key={lineIdx} className="text-base font-bold text-slate-100 mt-6 mb-2 tracking-tight flex items-center gap-1.5 border-l-2 border-emerald-500 pl-2">
                    {trimmed.replace("### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("## ")) {
                return (
                  <h3 key={lineIdx} className="text-lg font-extrabold text-white mt-8 mb-4 border-b border-slate-800 pb-1.5 flex items-center gap-2">
                    {trimmed.replace("## ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("# ")) {
                return (
                  <h2 key={lineIdx} className="text-xl font-black text-white mt-10 mb-6 flex items-center gap-2 border-b-2 border-emerald-500 pb-2">
                    {trimmed.replace("# ", "")}
                  </h2>
                );
              }

              // Bullet points
              if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                const bulletContent = trimmed.substring(2);
                return (
                  <ul key={lineIdx} className="list-disc pl-6 space-y-1">
                    <li className="text-slate-300">
                      {parseInlineStyles(bulletContent)}
                    </li>
                  </ul>
                );
              }

              // Numbered lists
              const numMatch = trimmed.match(/^(\d+)\.\s(.*)/);
              if (numMatch) {
                return (
                  <ol key={lineIdx} className="list-decimal pl-6 space-y-1">
                    <li className="text-slate-300">
                      {parseInlineStyles(numMatch[2])}
                    </li>
                  </ol>
                );
              }

              return (
                <p key={lineIdx} className="text-slate-300 mb-2">
                  {parseInlineStyles(line)}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// Helper to support bold markdown elements in text
function parseInlineStyles(text: string): React.ReactNode[] | string {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-emerald-300">
          {part.replace(/\*\*/g, "")}
        </strong>
      );
    }
    return part;
  });
}
