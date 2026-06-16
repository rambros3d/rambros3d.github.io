import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

const sideBarTopics = [
  {
    id: 'home',
    label: 'Home',
    link: '/home',
    icon: 'home',
    items: [
      { slug: 'home' },
    ],
  },
  {
    id: 'railway',
    label: 'Dragon Railway',
    link: '/railway',
    icon: 'rail',
    items: [
      { slug: 'railway' },
      { slug: 'railway/features' },
      { slug: 'railway/3d-printing' },
      { slug: 'railway/parts' },
      { slug: 'railway/locomotives' },
      { slug: 'railway/rolling-stock' },
      { slug: 'railway/tracks' },
      { slug: 'railway/electronics' },
    ],
  },
  {
    id: 'trucks',
    label: 'Dragon Trucks',
    link: '/trucks',
    icon: 'car',
    items: [
      { slug: 'trucks' },
      { slug: 'trucks/trucks' },
      { slug: 'trucks/trailers' },
    ],
  },
];

export default defineConfig({
  site: 'https://rambros3d.com',
  integrations: [starlight({
    title: 'RamBros Docs',
    description: 'RamBros 3D printable scale model docs.',
    plugins: [starlightSidebarTopics(sideBarTopics)],
    customCss: ['./src/styles/starlight.css'],
    components: {
      Header: './src/components/starlight/Header.astro',
      Sidebar: './src/components/starlight/Sidebar.astro',
      ThemeSelect: './src/components/starlight/ThemeSelect.astro',
    },
    head: [
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/rambros/rambros-dragon-logo/rambros-dragon.svg',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/favicon.ico',
        },
      },
    ],
  }), mdx(), sitemap()],
  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
