// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My API Docs',
  tagline: 'API documentation powered by Redocusaurus',
  favicon: 'img/favicon.ico',

  // Set these to your actual GitHub Pages values.
  url: 'https://caseylee-tc.github.io',
  baseUrl: '/Redocusaurus/',

  organizationName: 'caseylee-tc', // GitHub org/user name
  projectName: 'Redocusaurus', // GitHub repo name
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'my-api',
            spec: 'openapi/my-api.yaml',
            route: '/api/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My API Docs',
        items: [
          {
            to: '/docs/intro',
            label: 'Docs',
            position: 'left',
          },
          {
            to: '/api/',
            label: 'API Reference',
            position: 'left',
          },
          {
            href: 'https://github.com/caseylee-tc/Redocusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} My Company.`,
      },
    }),
};

module.exports = config;