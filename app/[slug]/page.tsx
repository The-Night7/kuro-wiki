import { notFound } from "next/navigation";
import { allPages, findPage } from "@/lib/wiki-data";
import PageBody from "@/components/PageBody";

export function generateStaticParams() {
  return allPages().map((p) => ({ slug: p.slug }));
}

export default function WikiPage({ params }: { params: { slug: string } }) {
  const page = findPage(params.slug);
  if (!page) notFound();

  return (
    <article className="reveal-once">
      <p className="mb-2 text-sm text-teal">{page.tagline}</p>
      <h1 className="font-display text-3xl text-parchment md:text-4xl">
        {page.title}
      </h1>
      <div className="mt-8">
        <PageBody blocks={page.blocks} />
      </div>
    </article>
  );
}
