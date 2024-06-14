import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Commus DCS FR",
  description: "La liste des Communautés DCS World Francophones",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
    },

    logo: '/logo.png',

    footer: {
      message: 'Released under the <a href="https://fr.wikipedia.org/wiki/Licence_MIT">MIT License</a>.',
      copyright: 'Copyright © 2024 <a href="https://kerboul.me/site_gov/">Gouvernement du Kerboulistan</a>'
    }
  }
})
