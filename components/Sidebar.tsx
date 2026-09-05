"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { wiki } from "@/lib/wiki-data";
import SearchBox from "@/components/SearchBox";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-line/60 md:sticky md:top-0 md:h-screen md:w-64 md:overflow-y-auto md:border-r">
      <div className="px-6 pb-4 pt-8">
        <Link href="/" className="block">
          <p className="font-display text-lg text-parchment">
            [Nom du mod]
          </p>
          <p className="text-xs text-muted">Wiki communautaire</p>
        </Link>
      </div>

      <div className="px-6 pb-4">
        <SearchBox />
      </div>

      <nav className="px-4 pb-10">
        {wiki.map((section) => (
          <div key={section.label} className="mb-6">
            <p className="mb-2 px-2 text-xs text-muted">{section.label}</p>
            <ul className="space-y-0.5">
              {section.pages.map((page) => {
                const href = `/${page.slug}`;
                const active = pathname === href;
                return (
                  <li key={page.slug}>
                    <Link
                      href={href}
                      className={`relative block rounded-sm px-2 py-1.5 text-sm transition-colors ${
                        active
                          ? "text-goldbright"
                          : "text-parchment/80 hover:text-parchment"
                      }`}
                    >
                      {active && (
                        <span
                          aria-hidden
                          className="absolute -left-[1px] top-1/2 h-4 w-[2px] -translate-y-1/2 bg-gold"
                        />
                      )}
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-line/60 px-6 py-4">
        <a
          href="https://github.com/"
          className="text-xs text-muted hover:text-teal"
        >
          Code source sur GitHub →
        </a>
      </div>
    </aside>
  );
}
