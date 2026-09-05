import Link from "next/link";
import { wiki } from "@/lib/wiki-data";

export default function HomePage() {
  return (
    <div className="reveal-once">
      <div className="bracket-frame mb-14 max-w-2xl">
        <span className="bf-tr" />
        <span className="bf-bl" />
        <p className="mb-3 text-sm text-teal">Wiki communautaire · non-officiel</p>
        <h1 className="font-display text-4xl leading-tight text-parchment md:text-5xl">
          Kuro by firael
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Tout ce qu'il faut pour installer, configurer et dépanner le mod —
          écrit pour être lu vite et suivi sans se perdre.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/installation"
            className="border border-gold px-4 py-2 text-sm text-goldbright transition-colors hover:bg-gold/10"
          >
            Commencer l'installation
          </Link>
          <Link
            href="/guide"
            className="border border-line px-4 py-2 text-sm text-parchment/80 transition-colors hover:border-teal hover:text-teal"
          >
            Guide d'utilisation
          </Link>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {wiki.map((section) => (
          <div key={section.label}>
            <p className="mb-3 text-xs uppercase tracking-wide text-muted">
              {section.label}
            </p>
            <ul className="space-y-3">
              {section.pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="group block border-b border-line/60 pb-3"
                  >
                    <span className="block font-display text-lg text-parchment group-hover:text-goldbright">
                      {page.title}
                    </span>
                    <span className="text-sm text-muted">{page.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
