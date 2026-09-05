import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bracket-frame max-w-md">
      <span className="bf-tr" />
      <span className="bf-bl" />
      <p className="mb-2 text-sm text-ember">Page not found</p>
      <h1 className="font-display text-2xl text-parchment">
        This page doesn't exist (yet).
      </h1>
      <p className="mt-3 text-sm text-muted">
        Check the URL, or head back home to find your way.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block border border-line px-4 py-2 text-sm text-parchment/80 hover:border-teal hover:text-teal"
      >
        Back to home
      </Link>
    </div>
  );
}
