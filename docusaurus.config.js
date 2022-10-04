// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Pet Sitters Guide to Galaxy',
	tagline: "So you're house sitting for us?",
	url: 'https://home-taylerandmikey.netlify.app',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'mikikiv', // Usually your GitHub org/user name.
	projectName: 'petsite', // Usually your repo name.
	noIndex: true,
	plugins: [require.resolve('docusaurus-lunr-search')],
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/mikikiv/petsite/edit/staging',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/mikikiv/petsite/edit/staging',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	scripts: [
		{
			src: 'https://kit.fontawesome.com/46ba255df9.js',
			async: true,
			crossorigin: 'anonymous',
		},
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Guide',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/mikikiv/petsite',
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
								label: 'Guide',
								to: '/docs/intro',
							},
							{
								label: 'Blog',
								to: '/blog',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Mikey and Tayler's Petsite, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
