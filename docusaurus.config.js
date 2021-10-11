const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Bit of Binary",
    tagline: "Deepak's digital garden",
    url: "https://bitofbinary.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "deepak-kapoor", // Usually your GitHub org/user name.
    projectName: "bitofbinary", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/",
            // Please change this to your repo.
            // editUrl: "https://github.com/deepak-kapoor/bitofbinary/edit/docs/",
          },
          blog: {
            path: "blog",
            routeBasePath: "/stream",
            showReadingTime: false,
            // Please change this to your repo.
            // editUrl: "https://github.com/deepak-kapoor/bitofbinary/edit/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Bit of Binary",
          logo: {
            alt: "BitofBinary.com",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Garden",
            },
            { to: "/stream", label: "Stream", position: "left" },
            { to: "/about", label: "About", position: "right" },
            // {
            //   href: "https://github.com/facebook/docusaurus",
            //   label: "GitHub",
            //   position: "right",
            // },
          ],
        },
        footer: {
          style: "dark",
          links: [
            // {
            //   title: "Docs",
            //   items: [
            //     {
            //       label: "Tutorial",
            //       to: "/docs/intro",
            //     },
            //   ],
            // },
            // {
            //   title: "Community",
            //   items: [
            //     {
            //       label: "Stack Overflow",
            //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //     },
            //     {
            //       label: "Discord",
            //       href: "https://discordapp.com/invite/docusaurus",
            //     },
            //     {
            //       label: "Twitter",
            //       href: "https://twitter.com/docusaurus",
            //     },
            //   ],
            // },
            // {
            //   title: "More",
            //   items: [
            //     {
            //       label: "Blog",
            //       to: "/blog",
            //     },
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/facebook/docusaurus",
            //     },
            //   ],
            // },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Deepak. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
