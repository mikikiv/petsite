// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  projectName: 'docusaurus', // Usually your repo name.
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  ssrTemplate: `<!DOCTYPE html>
  <html <%~ it.htmlAttributes %>>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="generator" content="Docusaurus v<%= it.version %>">
      <% if (it.noIndex) { %>
        <meta name="robots" content="noindex, nofollow" />
      <% } %>
      <%~ it.headTags %>
      <% it.metaAttributes.forEach((metaAttribute) => { %>
        <%~ metaAttribute %>
      <% }); %>
      <% it.stylesheets.forEach((stylesheet) => { %>
        <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
      <% }); %>
      <% it.scripts.forEach((script) => { %>
        <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
      <% }); %>
      <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
  new Crate({
    server: '299881420891881473',
    channel: '355719584830980096'
  })
</script>

    </head>
    <body <%~ it.bodyAttributes %>>
      <%~ it.preBodyTags %>
      <div id="__docusaurus">
        <%~ it.appHtml %>
      </div>
      <% it.scripts.forEach((script) => { %>
        <script src="<%= it.baseUrl %><%= script %>"></script>
      <% }); %>
      <%~ it.postBodyTags %>
    </body>
  </html>
  `
};

module.exports = config;
