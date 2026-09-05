export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "note"; tone: "info" | "warn" | "tip"; text: string }
  | { type: "kv"; rows: [string, string][] }
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; caption?: string };

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
    label: "Getting Started",
    pages: [
      {
        slug: "installation",
        title: "Installation",
        tagline: "Set up the mod, step by step.",
        blocks: [
          {
            type: "p",
            text: `This guide covers installing ${modName} from start to finish. Adjust the steps below to match your actual setup.`,
          },
          {
            type: "note",
            tone: "info",
            text: "Always back up your files before installing a mod.",
          },
          { type: "h2", text: "Prerequisites" },
          {
            type: "ul",
            items: [
              "Genshin Impact installed or not (no need to launch it to install or uninstall the mod)",
              "Download the Kuro APK from the GitHub repository",
            ],
          },
          { type: "h2", text: "Installation steps" },
          {
            type: "ol",
            items: [
              "Download the latest version from the GitHub repository's Releases page.",
              "Open the ZArchiver app and go to the folder containing the downloaded APK.",
              "Tap it and choose the Install option.",
              "Launch the game and check that the mod is active and working.",
            ],
          },
          {
            type: "ul",
            items: [
              "The app shows no errors on startup",
              "The mod's logo is visible in-game and opens the mod's menu",
              "The displayed version matches the downloaded file",
            ],
          },
        ],
      },
      {
        slug: "desinstallation",
        title: "Uninstallation",
        tagline: "Cleanly remove the mod if needed.",
        blocks: [
          {
            type: "p",
            text: "If you want to roll back.",
          },
          {
            type: "ol",
            items: [
              "Uninstall Kuro (no need to touch the official version).",
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Usage",
    pages: [
      {
        slug: "guide",
        title: "User Guide",
        tagline: "Walkthroughs for the questions that need a video or photo.",
        blocks: [
          {
            type: "p",
            text: "A few common questions where a quick video or photo says it best.",
          },
          {
            type: "h3",
            text: "Do I need to delete my original Genshin Impact?",
          },
          {
            type: "p",
            text: "No. There's no need to delete your original Genshin Impact, as you can run both of them.",
          },
          {
            type: "video",
            src: "/videos/play-apk-without-reinstalling.mp4",
            caption: "How to play the Kuro APK without reinstalling the game.",
          },
          { type: "h3", text: "The mod's menu doesn't show up in-game" },
          {
            type: "p",
            text: "Confirm you installed the Kuro APK itself and not the official Genshin Impact APK, and that the installed version matches the one you downloaded.",
          },
          {
            type: "image",
            src: "/images/original-vs-modified-icon.jpg",
            alt: "Visual difference between the original app and the modified one. To revert to the original, do the same but change the letter (t) back to (n).",
          },
          { type: "h3", text: "What does auto dialogue do?" },
          {
            type: "p",
            text: "It goes through dialogue faster without you tapping the screen, and it automatically picks the first option. Check the pinned messages for how to enable it.",
          },
          {
            type: "video",
            src: "/videos/auto-skip-dialogue.mp4",
            caption: "How to enable Auto Skip Dialogue.",
          },
        ],
      },
      {
        slug: "faq",
        title: "FAQ & Troubleshooting",
        tagline: "Common problems and how to solve them.",
        blocks: [
          { type: "h3", text: "Is this mod safe? Will I get banned?" },
          {
            type: "p",
            text: "No, you won't get banned. Just don't overuse the features marked as dangerous, or the system may detect it and you may get a temporary ban.",
          },
          {
            type: "note",
            tone: "warn",
            text: "Don't use the mod in co-op mode, as you may get reported — but you can use it with trusted people who won't report you.",
          },
          { type: "h3", text: "Which features are safe to use?" },
          {
            type: "p",
            text: "\"Dangerous\" means the feature sends data to the server, not that it's unusable or an instant ban. Just don't leave it on all the time — turn it on when you need it, and turn it back off once you're done.",
          },
          {
            type: "kv",
            rows: [
              ["Feature", "Risk"],
              ["Multi Hit", "Low"],
              ["Player Speed", "Medium"],
              ["NoClip", "High"],
              ["Unlimited Skill", "High"],
            ],
          },
          {
            type: "p",
            text: "Anything marked (Local) only affects your own client and is safe to use. Anything marked (Server~checkable) is sent to the server — it's almost safe, but should still be used sparingly.",
          },
          { type: "h3", text: "Will I get hacked?" },
          {
            type: "p",
            text: "No, you won't get hacked. Kuro is safe and free to use.",
          },
          { type: "h3", text: "Why can't I log in with Google?" },
          {
            type: "p",
            text: "Google login isn't available on Kuro. Link your email to your Hoyoverse account instead, then log in with that email and password.",
          },
          {
            type: "note",
            tone: "info",
            text: "If your account is linked through X (Twitter): open both the official Genshin Impact and the Kuro login screens, log in with X from the Genshin Impact screen, and once authenticated you'll be given two options — choose Kuro.",
          },
          {
            type: "h3",
            text: "Can I use this mod in endgame content (Spiral Abyss, Stygian Onslaught, Imaginarium Theater)?",
          },
          {
            type: "p",
            text: "Yes, you can use this mod in that content and it will work.",
          },
          {
            type: "note",
            tone: "tip",
            text: "Hide your Stygian clear-time records from friends so you don't attract their attention. If you're afraid of getting flagged for clearing too fast, enable dumb enemies and spend some extra time before clearing — this way you can avoid the fear of getting flagged.",
          },
          { type: "h3", text: "Can I play Kuro on PC?" },
          {
            type: "p",
            text: "Yes — you can run Kuro on PC using an Android emulator such as NoxPlayer, MuMu Player, or BlueStacks. Since Kuro isn't the official APK, you'll need to manually configure the keymap inside the emulator.",
          },
          {
            type: "h3",
            text: "How do I use the Oculus/Chest hunt or teleport safely?",
          },
          {
            type: "p",
            text: "Before using Hunt or Teleport to Nearest Oculus (or chest), it's recommended to unlock all teleport waypoints first, so you don't get stuck under the map.",
          },
          {
            type: "note",
            tone: "tip",
            text: "If you get stuck, or want to reset the collected count, use the \"Forget Collected\" option below the hunt feature. Same for chests.",
          },
          { type: "h3", text: "The APK won't install" },
          {
            type: "p",
            text: "Make sure \"Install unknown apps\" is allowed for the app you used to open the APK, and that you downloaded the file completely (a partial download will fail to install). Re-download it if in doubt.",
          },
          { type: "h3", text: "The APK download website isn't loading" },
          {
            type: "p",
            text: "If the website isn't loading, try using a VPN and keep it running until the APK file finishes downloading.",
          },
          {
            type: "h3",
            text: "I can't download the Kuro file from GitHub on Chrome for mobile",
          },
          {
            type: "p",
            text: "Go to the GitHub repository, search for \"Asset,\" and select the APK file directly — you should be able to download it without any problems.",
          },
          {
            type: "h3",
            text: "Can I skip downloading resources for the hax version?",
          },
          {
            type: "p",
            text: "Yes, you can choose not to download the resources and simply clone them instead — check the pinned messages in the download channel on the Discord server.",
          },
          {
            type: "note",
            tone: "info",
            text: "Some devices can't clone the files due to restrictions. If that's your case, you'll have to download the resources instead, as there's no other alternative right now.",
          },
          {
            type: "h3",
            text: "My resources, Primogems, or other items aren't being counted",
          },
          {
            type: "p",
            text: "This happens when the Infinite Stamina option is turned on. Turn it off and your items should be counted normally again.",
          },
          { type: "h3", text: "The game crashes on startup" },
          {
            type: "p",
            text: "Try reinstalling the APK, then check the pinned messages on the Discord server for a similar report before asking.",
          },
          { type: "h3", text: "Where do I report a bug?" },
          {
            type: "p",
            text: "Report it in the bug-report channel on the Discord server, along with your device, your Genshin Impact version, and steps to reproduce.",
          },
          { type: "h2", text: "Still stuck?" },
          {
            type: "p",
            text: "For other issues — login, cloning, auto dialogue, or download problems — check the pinned messages in this channel on the Discord server, posted by other helpers.",
          },
          {
            type: "note",
            tone: "tip",
            text: "Wish you all enjoy Kuro!",
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
