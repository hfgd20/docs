import { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "hfgd2.0",
	tagline: "building the future of hybrid education 🎓🚀",
	favicon: "images/favicon.svg",

	// Set the production url of your site here
	url: "https://v2.hfg.design",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/docs/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "hfgd2.0", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	// Enable Mermaid for diagrams
	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],

	presets: [
		[
			"classic",
			{
				/*
				gtag: {
					trackingID: "G-522JSJVWTB",
					anonymizeIP: false,
				},
				*/
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/hfgd20/docs/blob/main",
					exclude: ["**/tab-**/**"],
					// Enable versioning
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
					breadcrumbs: true,
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		// image: "images/docusaurus-social-card.jpg",
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: false,
		},
		navbar: {
			title: "hfgd2.0",
			logo: {
				src: "images/favicon.svg",
				srcDark: "images/favicon.svg",
			},
			items: [
				{
					label: "GitHub",
					href: "https://github.com/hfgd20/ui",
					position: "right",
					className: "header-github-link",
					"aria-label": "GitHub repository",
				},
				{
					label: "Discord",
					href: "https://discord.com/invite/vyBRpuph7F",
					position: "right",
					className: "header-discord-link",
					"aria-label": "Discord server",
				},
			],
		},
		footer: {
			logo: {
				src: "images/favicon.svg",
				height: 100,
			},
			style: "light",
			links: [
				{
					title: "Docs",
					items: [
						/*
						{
							label: "Getting Started",
							to: "getting-started",
						},
						{
							label: "FAQ",
							to: "faq",
						},
						*/
						{
							label: "Help Improve The Docs",
							to: "https://github.com/hfgd20/docs",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/hfgd20/ui",
						},
						{
							label: "Discord",
							href: "https://discord.com/invite/vyBRpuph7F",
						},
						{
							label: "𝕏",
							href: "https://x.com/hfgd20",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Release Notes",
							to: "https://github.com/hfgd20/ui/blob/main/CHANGELOG.md",
						},
						{
							label: "About",
							to: "https://v2.hfg.design",
						},
						{
							label: "Report a Vulnerability / Responsible Disclosure",
							to: "https://github.com/hfgd20/ui/security",
						},
					],
				},
			],
			// copyright: `Copyright © ${new Date().getFullYear()} OpenWebUI`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["hcl", "docker"],
		},
		imageZoom: {
			// CSS selector to apply the plugin to, defaults to '.markdown img'
			selector: '.markdown img',
			// Optional medium-zoom options
			// see: https://www.npmjs.com/package/medium-zoom#options
			options: {
				margin: 24,
				background: 'rgba(0, 0, 0, 0.9)',
				scrollOffset: 0,
			},
		},
	} satisfies Preset.ThemeConfig,
	plugins: [require.resolve("docusaurus-lunr-search"), require.resolve('plugin-image-zoom')],
};

export default config;
