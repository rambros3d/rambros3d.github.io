// @ts-check
import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightUtils from "@lorenzo_lewis/starlight-utils";
//import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
	site: 'https://rambros3d.com',
	integrations: [
		starlight({
			plugins: [
				//starlightLinksValidator(),
				starlightUtils({
					multiSidebar: { switcherStyle: "hidden", },
					navLinks: { leading: { useSidebarLabelled: "leadingNavLinks" } },
				}),
				starlightImageZoom({ showCaptions: true })
			],
			title: 'RamBros',
			logo: {
				light: '/src/assets/logo/rambros-name-svg.svg',
				dark: '/src/assets/logo/rambros-name-dark-svg.svg',
				replacesTitle: true,
			},
			social: {
				youtube: 'https://www.youtube.com/@RamBrosWorkshop',
				//github: 'https://github.com/rambros3d',
				discord: 'https://discord.com/invite/3CKbCmZ72G',
			},
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/styles/landing.css'],
			sidebar: [
				{ label: "DragonRailway", autogenerate: { directory: 'dragon-railway' }, },
				//{ label: "TWYN", autogenerate: { directory: 'twyn' }, },
				{
					label: "leadingNavLinks",
					items: [
						{ label: "DragonRailway", link: "dragon-railway" },
						//{ label: "TWYN", link: "twyn" },
					],
				},
			],
		}),
	],
});
