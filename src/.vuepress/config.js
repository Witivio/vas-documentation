const path = require('path')
module.exports = {
  title: 'Documentation',
  additionalPages: [
    {
      path: '/fr/articles/canaux.html',
      filePath: path.resolve(__dirname, '../fr/articles/parametres/canaux.md')
    },
    {
      path: '/fr/articles/escalade.html',
      filePath: path.resolve(__dirname, '../fr/articles/outils/escalade.md')
    },
    {
      path: '/fr/articles/accessibilites du chatbot.html',
      filePath: path.resolve(__dirname, '../fr/articles/parametres/accessibilite_de_chatbot.md')
    }
  ],
  description: "witivio - Chatbots d’entreprise pour le Digital Workplace",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", sizes: "16x16", href: "/assets/img/index/favicon.ico" }],
    ['link', { rel: 'icon', href: '/assets/img/logo_white.png' }],
    ['script', { src: "/scripts/redirection.js" }],
    ['script', { src: "/scripts/chatbot.js" }],
    ['script', { id: "hs-script-loader", async: "", defer: "", src: "//js.hs-scripts.com/5583418.js"}],
    ['script', { async:"", src: "https://www.googletagmanager.com/gtag/js?id=UA-176942222-1"}],
    ['script', { src:"/scripts/google.js" }]
  ],
  locales: {
    '/fr/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
      title: 'Documentation',
      description: 'witivio'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Documentation',
      description: 'witivio'
    }
  },
  themeConfig: {
    smoothScroll: true,
    repo: '',
    logo: '/assets/img/index/logo_black.png',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/': {
        searchPlaceholder: 'recherche...',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'fr-FR',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Witivio 365', link: '/fr/articles/creation_chatbot' },
          { text: 'Dynameet', link: '/fr/dynameet/' },
          { text: 'Videos', link: '/fr/videos/' },
          { text: 'Teams Apps', link: '/fr/teams_apps/' },
          { text: 'Trust Center', link: '/en/trust_center/' }
        ]
      },
      '/fr/': {
        searchPlaceholder: 'recherche...',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'fr-FR',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Witivio 365', link: '/fr/articles/creation_chatbot' },
          { text: 'Dynameet', link: '/fr/dynameet/' },
          { text: 'Videos', link: '/fr/videos/' },
          { text: 'Teams Apps', link: '/fr/teams_apps/' },
          { text: 'Trust Center', link: '/en/trust_center/'}
        ]
      },
      '/en/': {
        searchPlaceholder: 'search...',
        selectText: 'Languages',
        label: 'en-US',
        editLinkText: 'text GitHub witivio',
        serviceWorker: {
          updatePopup: {
            message: "New content is available..",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Witivio 365', link: '/en/articles/build_your_chatbot' },
          { text: 'Dynameet', link: '/en/dynameet/' },
          { text: 'Videos', link: '/en/videos/' },
          { text: 'Teams Apps', link: '/en/teams_apps/' },
          { text: 'Trust Center', link: '/en/trust_center/' }

        ],
        algolia: {}
      }
    },
    sidebar: {
      '/en/articles/': [
        {
          title: 'Build your chatbot',
          path: '/en/articles/build_your_chatbot',
          collapsable: false,
          children: [
            ['/en/articles/build_your_chatbot/skype.md', 'Skype for Business Online prerequisites'],
            ['/en/articles/build_your_chatbot/requisites.md', 'Teams prerequisites']
          ]
        },
        {
          title: 'Inbox',
          path: '/en/articles/inbox',
          collapsable: false,
          children: [
            ['/en/articles/inbox/unanswered_questions.md', 'Unanswered Questions'],
            ['/en/articles/inbox/low_score.md', 'Low Score'],
            ['/en/articles/inbox/suggested_questions.md', 'Suggested Questions'],
            ['/en/articles/inbox/negative_feedbacks.md', 'Negative Feedbacks'],
            ['/en/articles/inbox/scoring_rules.md', 'Scoring Rules'],
          ]
        },
        {
          title: 'Dashboards',
          path: '/en/articles/dashboards',
          collapsable: false,
          children: [
            ['/en/articles/dashboards/performance.md', 'Performance Dashboard'],
            ['/en/articles/dashboards/usage.md', 'Usage Dashboard'],
            ['/en/articles/dashboards/power_bi.md', 'Power Bi Dashboard'],
          ]
        },
        {
          title: 'Knowledge',
          path: '/en/articles/knowledge/creation_process',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['/en/articles/knowledge/creation_process.md', 'Creation Process'],
            ['/en/articles/knowledge/messages.md', 'Messages'],
            ['/en/articles/knowledge/categories.md', 'Categories'],
            ['/en/articles/knowledge/kb.md', 'KB'],
            ['/en/articles/knowledge/entities.md', 'Entities'],
            ['/en/articles/knowledge/synonyms.md', 'Synonyms'],
            ['/en/articles/knowledge/test_plan.md', 'Test Plan'],
            ['/en/articles/knowledge/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Tools',
          path: '/en/articles/tools',
          collapsable: false,
          children: [
            ['/en/articles/tools/starting_flow.md', 'Starting Flow'],
            ['/en/articles/tools/escalation.md', 'Escalation'],
            ['/en/articles/tools/active_learning.md', 'Active Learning'],
            ['/en/articles/tools/feedback.md', 'Feedback'],
            ['/en/articles/tools/image_gallery.md', 'Image Gallery'],
            ['/en/articles/tools/recommendation.md', 'Recommendation'],
            ['/en/articles/tools/history.md', 'History'],
          ]
        },
        {
          title: 'Communication',
          path: '/en/articles/communication',
          collapsable: false,
          children: [
            ['/en/articles/communication/user_lists.md', 'User Lists'],
            ['/en/articles/communication/campaign.md', 'Campaign'],
          ]
        },
        {
          title: 'Profile',
          path: '/en/articles/profile',
          collapsable: false,
          children: [
            ['/en/articles/profile/api_profile.md', 'API Profile with SharedPoint and MS Flow'],
          ]
        },
        {
          title: 'Settings',
          path: '/en/articles/settings',
          collapsable: false,
          children: [
            ['/en/articles/settings/privacy.md', 'Privacy policies'],
            ['/en/articles/settings/chatbot.md', 'Chatbot accessibility'],
            ['/en/articles/settings/multilingual.md', 'Multilingual'],
            ['/en/articles/settings/user_list.md', 'User List'],
            ['/en/articles/settings/channels.md', 'Channels'],
            ['/en/articles/settings/coach.md', 'Coach'],
            ['/en/articles/settings/settings.md', 'Settings'],
          ]
        },
        {
          title: 'Licence Administrators',
          path: '/en/articles/licence_administrators',
          collapsable: false,
          // children: [
          //   ['/en/articles/licence_administrators.md', 'Licence administrators'],
          // ]
        },
        {
          title: 'Home',
          path: '/en/articles/home',
          collapsable: false,
          // children: [
          //   ['/en/articles/home.md', 'Home'],
          // ]
        },
        {
          title: 'Notification bar',
          path: '/en/articles/notification_bar',
          collapsable: false,
          // children: [
          //   ['/en/articles/notification_bar.md', 'Home'],
          // ]
        },
        {
          title: 'Limitations',
          path: '/en/articles/limitations',
          collapsable: false,
          // children: [
          //   ['/en/articles/limitations.md', 'Limitations'],
          // ]
        },
        {
          title: 'Teams Features',
          path: '/en/articles/teams_features',
          collapsable: false,
          // children: [
          //   ['/en/articles/teams_features.md', 'Teams Features'],
          // ]
        },
        {
          title: 'Webchat V1 (obsolete)',
          path: '/en/articles/webchat_v1',
          collapsable: false,
          // children: [
          //   ['/en/articles/webchat_v1.md', 'Webchat V1 (obsolete)'],
          // ]
        }
      ],
      '/fr/articles/': [
        {
          title: "Création d'un chatbot",
          path: '/fr/articles/creation_chatbot',
          collapsable: false,
          children: [
            ['/fr/articles/creation_chatbot/skype.md', 'Pré requis Skype Entreprise Online'],
            ['/fr/articles/creation_chatbot/condition_requises.md', 'Pré requis Teams']
          ]
        },
        {
          title: 'Boîte de réception',
          path: '/fr/articles/boite_de_reception',
          collapsable: false,
          children: [
            ['/fr/articles/boite_de_reception/questions_sans_reponses.md', 'Questions sans réponses'],
            ['/fr/articles/boite_de_reception/score_faible.md', 'Score faible'],
            ['/fr/articles/boite_de_reception/questions_suggerees.md', 'Questions suggérées'],
            ['/fr/articles/boite_de_reception/feedback_negatif.md', 'Feedback négatif'],
            ['/fr/articles/boite_de_reception/regles_des_scores.md', 'Règles des scores'],
          ]
        },
        {
          title: 'Tableaux de bord',
          path: '/fr/articles/tableaux_de_bord',
          collapsable: false,
          children: [
            ['/fr/articles/tableaux_de_bord/rapport_performance.md', 'Rapport de la performance'],
            ['/fr/articles/tableaux_de_bord/rapport_usage.md', 'Rapport d’usage'],
            ['/fr/articles/tableaux_de_bord/rapport_power_bi.md', 'Tableaux de bord Power BI'],
          ]
        },
        {
          title: 'Connaissances',
          path: '/fr/articles/connaissances/processus_de_creation',
          collapsable: false,
          sidebarDepth: 3,  
          children: [
            ['/fr/articles/connaissances/processus_de_creation.md', 'Processus de création'],
            ['/fr/articles/connaissances/messages.md', 'Messages de bases'],
            ['/fr/articles/connaissances/categories.md', 'Catégories'],
            ['/fr/articles/connaissances/faq.md', 'FAQ'],
            ['/fr/articles/connaissances/entites.md', 'Entités'],
            ['/fr/articles/connaissances/synonymes.md', 'Synonymes'],
            ['/fr/articles/connaissances/plan_de_test.md', 'Plan de test'],
            ['/fr/articles/connaissances/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Outils',
          path: '/fr/articles/outils',
          collapsable: false,
          children: [
            ['/fr/articles/outils/dialogues_initiaux.md', 'Dialogues initiaux'],
            ['/fr/articles/outils/escalade.md', 'Escalade'],
            ['/fr/articles/outils/active_learning.md', 'Active Learning'],
            ['/fr/articles/outils/feedback.md', 'Feedback'],
            ['/fr/articles/outils/galerie_images.md', 'Galerie d’images'],
            ['/fr/articles/outils/recommandation.md', 'Recommandation'],
            ['/fr/articles/outils/historique.md', 'Historique'],
          ]
        },
        {
          title: 'Communication push',
          path: '/fr/articles/communication',
          collapsable: false,
          children: [
            ['/fr/articles/communication/utilisateur_liste.md', "Listes d'utilisateurs"],
            ['/fr/articles/communication/campagne.md', 'Campagnes'],
          ]
        },
        {
          title: 'Profil',
          path: '/fr/articles/profil',
          collapsable: false,
          children: [
            ['/fr/articles/profil/api_profil.md', 'Créer une API de profils avec Flow et Sharepoint'],
          ]
        },
        {
          title: 'Paramètres',
          path: '/fr/articles/parametres',
          collapsable: false,
          children: [
            ['/fr/articles/parametres/politiques_de_confidentialite.md', 'Politiques de confidentialité'],
            ['/fr/articles/parametres/accessibilite_de_chatbot.md', 'Accessibilité du chatbot'],
            ['/fr/articles/parametres/multilingue.md', 'Multilingue'],
            ['/fr/articles/parametres/liste_utilisateurs.md', "Listes d'utilisateurs"],
            ['/fr/articles/parametres/canaux.md', 'Canaux'],
            ['/fr/articles/parametres/coach.md', 'Coachs'],
            ['/fr/articles/parametres/parametres.md', 'Paramètres'],
          ]
        },
        {
          title: 'Administrateurs de licence',
          path: '/fr/articles/administrateur_de_licence',
          collapsable: false,
          // children: [
          //   ['/fr/articles/administrateur_de_licence.md', 'Administrateur de Licence'],
          // ]
        },
        {
          title: "Page d'accueil",
          path: '/fr/articles/page_accueil',
          collapsable: false,
          // children: [
          //   ['/fr/articles/page_accueil.md', "Page d’accueil"],
          // ]
        },
        {
          title: 'Barre de notifications',
          path: '/fr/articles/barre_de_notification',
          collapsable: false,
          // children: [
          //   ['/fr/articles/barre_de_notification.md', 'Barre de notifications'],
          // ]
        },
        {
          title: 'Limitations',
          path: '/fr/articles/limitations',
          collapsable: false,
          // children: [
          //   ['/fr/articles/limitations.md', 'Limitations'],
          // ]
        },
        {
          title: 'Fonctionnalités Teams',
          path: '/fr/articles/fonctionnalites_teams',
          collapsable: false,
          // children: [
          //   ['/fr/articles/fonctionnalites_teams.md', 'Fonctionnalités Teams'],
          // ]
        },
        {
          title: 'Webchat V1 (obsolète)',
          path: '/fr/articles/webchat_v1',
          collapsable: false,
          // children: [
          //   ['/fr/articles/webchat_v1.md', 'Webchat V1 (obsolète)'],
          // ]
        }
      ],
      '/fr/dynameet/': [
        {
          title: 'Dynameet 365',
          path: '/fr/dynameet/',
          collapsable: false,
          children: [
            ['dynameet/organiser.md', 'Organiser'],
            ['dynameet/limites.md', 'Limites']
          ]
        }
      ],
      '/en/dynameet/': [
        {
          title: 'Dynameet 365',
          path: '/en/dynameet/',
          collapsable: false,
          children: [
            ['dynameet/organizer.md', 'Organizer'],
            ['dynameet/limits.md', 'Limits']
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom'
  ]
}
