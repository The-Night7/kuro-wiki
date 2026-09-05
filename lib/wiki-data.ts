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
              "Genshin Impact installé et à jour",
              "Outil de modding requis (ex. injecteur/loader) — précise lequel ici",
              "Espace disque disponible (~XXX Mo)",
              "Windows 10/11 64 bits (ou précise ta cible)",
            ],
          },
          { type: "h2", text: "Étapes d'installation" },
          {
            type: "ol",
            items: [
              "Télécharge la dernière version depuis la page Releases du dépôt GitHub.",
              "Extrais l'archive dans un dossier dédié, hors du dossier d'installation du jeu.",
              "Copie les fichiers du mod dans le dossier attendu par ton loader.",
              "Lance le loader/injecteur avant de démarrer Genshin Impact.",
              "Lance le jeu et vérifie que le mod est actif (voir la section Vérification).",
            ],
          },
          {
            type: "code",
            lang: "bash",
            code: `# Exemple : structure attendue après extraction\nmods/\n  └─ ${modName}/\n      ├─ mod.json\n      └─ assets/`,
          },
          { type: "h2", text: "Vérification" },
          {
            type: "p",
            text: "Une fois en jeu, confirme que le mod est bien chargé avant de continuer vers le guide d'utilisation.",
          },
          {
            type: "ul",
            items: [
              "La console du loader ne montre aucune erreur au démarrage",
              "L'élément modifié par le mod est visible en jeu",
              "La version affichée correspond au fichier téléchargé",
            ],
          },
          {
            type: "note",
            tone: "warn",
            text: "Les mods non officiels peuvent enfreindre les conditions d'utilisation de Genshin Impact. Installe-les à tes propres risques et informe-toi sur les règles en vigueur.",
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
            text: "Si tu veux revenir en arrière, retire le mod dans l'ordre suivant pour éviter les fichiers orphelins.",
          },
          {
            type: "ol",
            items: [
              "Ferme Genshin Impact et le loader/injecteur.",
              `Supprime le dossier ${modName} de ton répertoire de mods.`,
              "Supprime les entrées de configuration associées si ton loader en garde.",
              "Redémarre le loader pour confirmer que le mod n'apparaît plus dans la liste.",
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
