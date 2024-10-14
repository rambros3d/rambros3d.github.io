// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	site: 'https://rambros3d.github.io',
	integrations: [
		starlight({
			plugins: [
				starlightLinksValidator(),
				starlightUtils({
					multiSidebar: { switcherStyle: "hidden", },
					navLinks: { leading: { useSidebarLabelled: "leadingNavLinks" } },
				}),
				starlightImageZoom({ showCaptions: true })
			],
			title: 'RamBros',
			logo: {
				light: '/src/assets/rambros-dragon-logo/rambros-dragon.svg',
				dark: '/src/assets/rambros-dragon-logo/rambros-dragon.svg',
				//replacesTitle: true,
			},
			social: {
				github: 'https://github.com/rambros3d',
				youtube: 'https://www.youtube.com/@RamBrosWorkshop',
				discord: 'https://discord.gg/pS29QSZF',
			},
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/styles/landing.css'],
			sidebar: [
				{ label: "DragonRailway", autogenerate: { directory: 'dragon-railway' }, },
				{ label: "TWYN", autogenerate: { directory: 'twyn' }, },
				{
					label: "leadingNavLinks",
					items: [
						{ label: "DragonRailway", link: "dragon-railway" },
						{ label: "TWYN", link: "twyn" },
					],
				},
			],
		}),
	],
});
