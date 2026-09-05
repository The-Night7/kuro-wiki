"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allPages } from "@/lib/wiki-data";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const pages = allPages();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return pages
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.blocks.some(
            (b) => "text" in b && b.text.toLowerCase().includes(q)
          )
      )
      .slice(0, 6);
  }, [query, pages]);

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 120)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && results[0]) {
            router.push(`/${results[0].slug}`);
            setQuery("");
          }
        }}
        placeholder="Search a page…"
        className="w-full rounded-sm border border-line bg-panel px-3 py-2 text-sm text-parchment placeholder:text-muted/70 outline-none focus:border-teal"
      />
      {focused && results.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full border border-line bg-panel2 shadow-lg">
          {results.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="block px-3 py-2 text-sm text-parchment/90 hover:bg-panel hover:text-goldbright"
              >
                {p.title}
                <span className="ml-2 text-xs text-muted">{p.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
