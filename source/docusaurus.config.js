// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Aristurtle',
    tagline: 'taglone',
    url: 'https://aristurtle.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'aristurtledev', // Usually your GitHub org/user name.
    projectName: 'aristurtle-dev', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/AristurtleDev/aristurtle-dev',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'hhttps://github.com/AristurtleDev/aristurtle-dev',
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
                title: 'AristurtleDev',

                items: [
                    // {
                    //     type: 'doc',
                    //     docId: 'intro',
                    //     position: 'left',
                    //     label: 'Tutorial',
                    // },
                    // { to: '/blog', label: 'Blog', position: 'left' },
                    // {
                    //     href: 'https://github.com/aristurtledev',
                    //     className: 'header-link github-link',
                    //     position: 'right',
                    // },
                    // {
                    //     href: 'https://twitch.tv/aristurtledev',
                    //     className: 'header-link twitch-link',
                    //     position: 'right',
                    // },
                    // {
                    //     href: 'https://twitter.com/aristurtledev',
                    //     className: 'header-link twitter-link',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    //   {
                    //     title: 'Docs',
                    //     items: [
                    //       {
                    //         label: 'Tutorial',
                    //         to: '/docs/intro',
                    //       },
                    //     ],
                    //   },
                    //   {
                    //     title: 'Community',
                    //     items: [
                    //       {
                    //         label: 'Stack Overflow',
                    //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //       },
                    //       {
                    //         label: 'Discord',
                    //         href: 'https://discordapp.com/invite/docusaurus',
                    //       },
                    //       {
                    //         label: 'Twitter',
                    //         href: 'https://twitter.com/docusaurus',
                    //       },
                    //     ],
                    //   },
                    //   {
                    //     title: 'More',
                    //     items: [
                    //       {
                    //         label: 'Blog',
                    //         to: '/blog',
                    //       },
                    //       {
                    //         label: 'GitHub',
                    //         href: 'https://github.com/facebook/docusaurus',
                    //       },
                    //     ],
                    //   },
                ],
                copyright: `Designed with 🧡 by Christopher Whitley, built with Docusaurus <br />  Copyright © ${new Date().getFullYear()} by Christopher Whitley.  All Rights Reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
