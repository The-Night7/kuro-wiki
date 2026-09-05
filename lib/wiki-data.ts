export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "note"; tone: "info" | "warn" | "tip"; text: string }
  | { type: "kv"; rows: [string, string][] };

export type WikiPage = {
  slug: string;
  title: string;
  tagline: string;
  blocks: Block[];
};

export type NavSection = {
  label: string;
  pages: WikiPage[];
};

export const modName = "Kuro by firael";

export const wiki: NavSection[] = [
  {
    label: "Démarrage",
    pages: [
      {
        slug: "installation",
        title: "Installation",
        tagline: "Mettre le mod en place, étape par étape.",
        blocks: [
          {
            type: "p",
            text: `Ce guide couvre l'installation de ${modName} de A à Z. Adapte les commandes et chemins ci-dessous à ta configuration réelle.`,
          },
          {
            type: "note",
            tone: "info",
            text: "Fais toujours une sauvegarde de tes fichiers avant d'installer un mod.",
          },
          { type: "h2", text: "Prérequis" },
          {
            type: "ul",
            items: [
              "Genshin Impact installé ou pas (pas besoin de le lancer pour installer le mod ni de le désinstaller)",
              "Télécharger l'apk Kuro depuis le dépôt GitHub",
            ],
          },
          { type: "h2", text: "Étapes d'installation" },
          {
            type: "ol",
            items: [
              "Télécharge la dernière version depuis la page Releases du dépôt GitHub.",
              "Ouvre l'application ZArchives et aller dans le répertoir contenant l'apk téléchargé.",
              "Appuyer dessus et choisir l'option Installer.",
              "Lance le jeu et vérifie que le mod est actif et fonctionnel.",
            ],
          },
          {
            type: "ul",
            items: [
              "L'application ne montre aucune erreur au démarrage",
              "Le logo du mod est visible en jeu et ouvre le menu du mod",
              "La version affichée correspond au fichier téléchargé",
            ],
          },
        ],
      },
      {
        slug: "desinstallation",
        title: "Désinstallation",
        tagline: "Retirer proprement le mod si besoin.",
        blocks: [
          {
            type: "p",
            text: "Si tu veux revenir en arrière.",
          },
          {
            type: "ol",
            items: [
              "Désinstalle Kuro (pas besoin de toucher à la version officielle).",
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Utilisation",
    pages: [
      {
        slug: "guide",
        title: "Guide d'utilisation",
        tagline: "Comment tirer parti du mod une fois installé.",
        blocks: [
          {
            type: "p",
            text: `Ce guide explique comment utiliser ${modName} au quotidien : activation, options disponibles et bonnes pratiques.`,
          },
          { type: "h2", text: "Activer / désactiver le mod" },
          {
            type: "p",
            text: "Décris ici le raccourci clavier, le menu du loader, ou la commande utilisée pour activer et désactiver le mod sans le désinstaller.",
          },
          { type: "h2", text: "Options et configuration" },
          {
            type: "kv",
            rows: [
              ["Paramètre", "Effet"],
              ["ex_option_1", "décris ce que fait cette option"],
              ["ex_option_2", "décris ce que fait cette option"],
            ],
          },
          { type: "h2", text: "Bonnes pratiques" },
          {
            type: "ul",
            items: [
              "Vérifie une mise à jour du mod après chaque mise à jour majeure de Genshin Impact.",
              "Garde une copie de ta configuration avant de mettre à jour.",
              "Signale un bug via les Issues GitHub plutôt que par message privé.",
            ],
          },
          {
            type: "note",
            tone: "tip",
            text: "Ajoute ici des captures d'écran ou GIFs du mod en action — glisse-les dans /public et référence-les dans une future section « Aperçu ».",
          },
        ],
      },
      {
        slug: "faq",
        title: "FAQ & dépannage",
        tagline: "Problèmes courants et leurs solutions.",
        blocks: [
          { type: "h3", text: "Le mod ne se charge pas" },
          {
            type: "p",
            text: "Vérifie que le loader est lancé avant le jeu, et que la version du mod correspond à la version du jeu installée.",
          },
          { type: "h3", text: "Le jeu crash au démarrage" },
          {
            type: "p",
            text: "Désactive les autres mods un par un pour identifier un conflit, puis consulte les Issues GitHub pour un problème similaire.",
          },
          { type: "h3", text: "Où signaler un bug ?" },
          {
            type: "p",
            text: "Ouvre une Issue sur le dépôt GitHub du projet avec ta configuration, les logs du loader et les étapes de reproduction.",
          },
        ],
      },
    ],
  },
];

export function findPage(slug: string): WikiPage | undefined {
  for (const section of wiki) {
    const page = section.pages.find((p) => p.slug === slug);
    if (page) return page;
  }
  return undefined;
}

export function allPages(): WikiPage[] {
  return wiki.flatMap((s) => s.pages);
}
