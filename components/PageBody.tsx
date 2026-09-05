import { Block } from "@/lib/wiki-data";

function Note({
  tone,
  text,
}: {
  tone: "info" | "warn" | "tip";
  text: string;
}) {
  const styles = {
    info: { border: "border-teal", label: "Note", color: "text-teal" },
    warn: { border: "border-ember", label: "Warning", color: "text-ember" },
    tip: { border: "border-gold", label: "Tip", color: "text-goldbright" },
  }[tone];

  return (
    <div className={`my-5 border-l-2 ${styles.border} bg-panel/60 py-3 pl-4 pr-4`}>
      <p className={`mb-1 text-xs uppercase tracking-wide ${styles.color}`}>
        {styles.label}
      </p>
      <p className="text-sm text-parchment/90">{text}</p>
    </div>
  );
}

export default function PageBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-wiki max-w-prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-1.5 pl-5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case "code":
            return (
              <pre key={i}>
                <code>{block.code}</code>
              </pre>
            );
          case "note":
            return <Note key={i} tone={block.tone} text={block.text} />;
          case "kv":
            return (
              <table key={i} className="my-4 w-full border-collapse text-sm">
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr
                      key={j}
                      className={
                        j === 0
                          ? "border-b border-line text-goldbright"
                          : "border-b border-line/50"
                      }
                    >
                      <td className="py-2 pr-4 font-medium">{row[0]}</td>
                      <td className="py-2 text-parchment/80">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
