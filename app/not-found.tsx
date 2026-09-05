import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bracket-frame max-w-md">
      <span className="bf-tr" />
      <span className="bf-bl" />
      <p className="mb-2 text-sm text-ember">Page introuvable</p>
      <h1 className="font-display text-2xl text-parchment">
        Cette page n'existe pas (encore).
      </h1>
      <p className="mt-3 text-sm text-muted">
        Vérifie l'URL, ou retourne à l'accueil pour retrouver ton chemin.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block border border-line px-4 py-2 text-sm text-parchment/80 hover:border-teal hover:text-teal"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
