import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Commus DCS FR",
  description: "La liste des Communautés DCS World Francophones",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Communautés', link: '/new' }
    ],

    sidebar: [
      {
        text: 'Présentation',
        items: [
          { text: 'Nouveau Format ?', link: '/new' }
        ]
      },
      {
        text: 'Communautés',
        items: [
          { text: '1er ROC', link: '/commus/1roc' },
          { text: '2nd French Fighter Squadron', link: '/commus/2ffs' },
        ]
      },
      {
        text: 'Contact',
        items: [
          { text: 'Contact', link: '/contact' }
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
