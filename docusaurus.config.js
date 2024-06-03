const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config = {
  title: "Pet Sitters Guide to Galaxy",
  tagline: "So you're house sitting for us?",
  url: "https://home.taylerandmikey.com/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mikikiv", // Usually your GitHub org/user name.
  projectName: "petsite", // Usually your repo name.
  noIndex: true,
  plugins: [tailwindPlugin, require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/mikikiv/petsite/edit/master",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/mikikiv/petsite/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  scripts: [
    {
      src: "https://kit.fontawesome.com/46ba255df9.js",
      async: true,
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guide",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/mikikiv/petsite",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guide",
                to: "/docs/intro",
              },
              {
                label: "Feeding info",
                to: "/docs/pets/food",
              },
            ],
          },
          {
            title: "Rules",
            items: [
              {
                html: `<div><div><ol><li>Don't let Scoutie outside <i class="fa-solid fa-cat" aria-hidden="true"></i></li><li>Make sure Scoutie can access her litterbox <i class="fa-solid fa-poo" aria-hidden="true"></i></li><li>Don't let the dogs have access Scoutie's litterbox <i class="fa-solid fa-poop" aria-hidden="true"></i></li><li>Keep CJs heart rate down <i class="fa-solid fa-heart" aria-hidden="true"></i></li><li>Don't leave alone longer than 6 hours <i class="fa-solid fa-clock" aria-hidden="true"></i></li></ol></div></div>`,
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Mikey and Tayler's Petsite, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["bash", "diff", "json"],

        theme: darkTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
