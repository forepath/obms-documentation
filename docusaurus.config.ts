import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Redocusaurus from 'redocusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OBMS',
  tagline: 'Open-source business management software for workflow streamlining and digital sales automation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kublade.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kublade', // Usually your GitHub org/user name.
  projectName: 'kublade', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: {
          blogTitle: 'OBMS Blog',
          blogDescription: 'The official blog of OBMS',
          blogSidebarCount: 10,
          postsPerPage: 10,
          showReadingTime: true,
        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'https://documents.obms.one/api-docs-latest.json',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#040e29',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/screenshots/dashboard.png',
    navbar: {
      logo: {
        alt: 'OBMS Logo',
        src: 'img/logo-full.svg',
      },
      items: [
        /*
        {
          type: 'html',
          position: 'left',
          value: '<span class="navbar__separator"></span>',
        },
        {
          href: '/blog',
          label: 'Blog',
          position: 'left',
        },
        */
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: '/api/',
          label: 'API',
          position: 'left',
        },
        {
          type: 'html',
          position: 'left',
          value: '<span class="navbar__separator"></span>',
        },
        {
          label: 'Enterprise Support',
          href: '/enterprise-support',
          position: 'left',
        },
        {
          href: 'https://github.com/forepath/obms',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/5wFMuVvQZM',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} IPvX UG (haftungsbeschränkt)`,
      links: [
        {
          title: 'Resources',
          items: [
            /*
            {
              label: 'Blog',
              href: '/blog',
            },
            */
            {
              label: 'Documentation',
              href: '/docs/intro',
            },
            {
              label: 'API',
              href: '/api/',
            },
            {
              label: 'Enterprise Support',
              href: '/enterprise-support',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/forepath/obms',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/5wFMuVvQZM',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Legal Disclosure',
              href: '/legal-disclosure',
            },
            {
              label: 'Privacy Policy',
              href: '/privacy-policy',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
      type: 'text/css',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
          name: "documents",
          sourceBaseUrl: "https://documents.obms.one/",
          outDir: "docs/project",
          documents: ["CHANGELOG.md", "DEPENDENCIES-latest.md"],
          modifyContent: (filename, content) => {
            switch (filename) {
              case "CHANGELOG.md":
                return {
                  content: `---
sidebar_position: 2
---

${content}`
                }
              case "DEPENDENCIES-latest.md":
                return {
                  content: `---
sidebar_position: 4
---

${content}`
                }
            }
          },
      },
    ],
    [
      '@signalwire/docusaurus-plugin-llms-txt',
      {
        siteTitle: 'OBMS',
        siteDescription: 'Open-source business management software for workflow streamlining and digital sales automation',
        depth: 2,
        content: {
          includeBlog: true,
          includePages: true
        }
      }
    ],
  ],
};

export default config;
