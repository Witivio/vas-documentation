const path = require('path')
module.exports = {
  title: 'Documentation',
  additionalPages: [
    {
      path: '/fr/articles/canaux.html',
      filePath: path.resolve(__dirname, '../fr/chatbot/parametres/canaux.md')
    },
    {
      path: '/fr/articles/escalade.html',
      filePath: path.resolve(__dirname, '../fr/chatbot/outils/escalade.md')
    },
    {
      path: '/fr/articles/accessibilites du chatbot.html',
      filePath: path.resolve(__dirname, '../fr/chatbot/parametres/accessibilite_de_chatbot.md')
    }
  ],
  afterDevServer: {
    allowedHosts: [
      'app.witivio.com'
    ]
  },
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
    ['script', { src:"/scripts/google.js" }],
    ['script', { src: "/scripts/commentaires.js" }]

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
          { text: 'Witivio 365', link: '/en/chatbot/creation_chatbot' },
          { text: 'Dynameet', link: '/en/dynameet/' },
          { text: 'Videos', link: '/en/videos/' },
          { text: 'Teams Apps', link: '/en/teams_apps/' },
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
          { text: 'Witivio 365', link: '/fr/chatbot/creation_chatbot' },
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
          { text: 'Witivio 365', link: '/en/chatbot/build_your_chatbot' },
          { text: 'Dynameet', link: '/en/dynameet/' },
          { text: 'Videos', link: '/en/videos/' },
          { text: 'Teams Apps', link: '/en/teams_apps/' },
          { text: 'Trust Center', link: '/en/trust_center/' }

        ],
        algolia: {}
      }
    },
    sidebar: {
      '/en/chatbot/': [
        {
          title: 'Build your chatbot',
          path: '/en/chatbot/build_your_chatbot',
          collapsable: false,
          children: [
            ['/en/chatbot/build_your_chatbot/skype.md', 'Skype for Business Online prerequisites'],
            ['/en/chatbot/build_your_chatbot/requisites.md', 'Teams prerequisites']
          ]
        },
        {
          title: 'Inbox',
          path: '/en/chatbot/inbox',
          collapsable: false,
          children: [
            ['/en/chatbot/inbox/unanswered_questions.md', 'Unanswered Questions'],
            ['/en/chatbot/inbox/low_score.md', 'Low Score'],
            ['/en/chatbot/inbox/suggested_questions.md', 'Suggested Questions'],
            ['/en/chatbot/inbox/negative_feedbacks.md', 'Negative Feedbacks'],
            ['/en/chatbot/inbox/scoring_rules.md', 'Scoring Rules'],
          ]
        },
        {
          title: 'Dashboards',
          path: '/en/chatbot/dashboards',
          collapsable: false,
          children: [
            ['/en/chatbot/dashboards/performance.md', 'Performance Dashboard'],
            ['/en/chatbot/dashboards/usage.md', 'Usage Dashboard'],
            ['/en/chatbot/dashboards/power_bi.md', 'Power Bi Dashboard'],
          ]
        },
        {
          title: 'Knowledge',
          path: '/en/chatbot/knowledge/creation_process',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['/en/chatbot/knowledge/creation_process.md', 'Creation Process'],
            ['/en/chatbot/knowledge/messages.md', 'Messages'],
            ['/en/chatbot/knowledge/categories.md', 'Categories'],
            ['/en/chatbot/knowledge/kb.md', 'KB'],
            ['/en/chatbot/knowledge/entities.md', 'Entities'],
            ['/en/chatbot/knowledge/synonyms.md', 'Synonyms'],
            ['/en/chatbot/knowledge/test_plan.md', 'Test Plan'],
            ['/en/chatbot/knowledge/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Tools',
          path: '/en/chatbot/tools',
          collapsable: false,
          children: [
            ['/en/chatbot/tools/starting_flow.md', 'Starting Flow'],
            ['/en/chatbot/tools/escalation.md', 'Escalation'],
            ['/en/chatbot/tools/active_learning.md', 'Active Learning'],
            ['/en/chatbot/tools/feedback.md', 'Feedback'],
            ['/en/chatbot/tools/image_gallery.md', 'Image Gallery'],
            ['/en/chatbot/tools/recommendation.md', 'Recommendation'],
            ['/en/chatbot/tools/history.md', 'History'],
          ]
        },
        {
          title: 'Communication',
          path: '/en/chatbot/communication',
          collapsable: false,
          children: [
            ['/en/chatbot/communication/user_lists.md', 'User Lists'],
            ['/en/chatbot/communication/campaign.md', 'Campaign'],
          ]
        },
        {
          title: 'Profile',
          path: '/en/chatbot/profile',
          collapsable: false,
          children: [
            ['/en/chatbot/profile/api_profile.md', 'API Profile with SharedPoint and MS Flow'],
          ]
        },
        {
          title: 'Settings',
          path: '/en/chatbot/settings',
          collapsable: false,
          children: [
            ['/en/chatbot/settings/privacy.md', 'Privacy policies'],
            ['/en/chatbot/settings/chatbot.md', 'Chatbot accessibility'],
            ['/en/chatbot/settings/multilingual.md', 'Multilingual'],
            ['/en/chatbot/settings/user_list.md', 'User List'],
            ['/en/chatbot/settings/channels.md', 'Channels'],
            ['/en/chatbot/settings/coach.md', 'Coach'],
            ['/en/chatbot/settings/settings.md', 'Settings'],
          ]
        },
        {
          title: 'Licence Administrators',
          path: '/en/chatbot/licence_administrators',
          collapsable: false,
          // children: [
          //   ['/en/chatbot/licence_administrators.md', 'Licence administrators'],
          // ]
        },
        {
          title: 'Home',
          path: '/en/chatbot/home',
          collapsable: false,
          // children: [
          //   ['/en/chatbot/home.md', 'Home'],
          // ]
        },
        {
          title: 'Notification bar',
          path: '/en/chatbot/notification_bar',
          collapsable: false,
          // children: [
          //   ['/en/chatbot/notification_bar.md', 'Home'],
          // ]
        },
        {
          title: 'Limitations',
          path: '/en/chatbot/limitations',
          collapsable: false,
          // children: [
          //   ['/en/chatbot/limitations.md', 'Limitations'],
          // ]
        },
        {
          title: 'Teams Features',
          path: '/en/chatbot/teams_features',
          collapsable: false,
          // children: [
          //   ['/en/chatbot/teams_features.md', 'Teams Features'],
          // ]
        },
        {
          title: 'Webchat V1 (obsolete)',
          path: '/en/chatbot/webchat_v1',
          collapsable: false,
          // children: [
          //   ['/en/chatbot/webchat_v1.md', 'Webchat V1 (obsolete)'],
          // ]
        }
      ],
      '/fr/chatbot/': [
        {
          title: "Création d'un chatbot",
          path: '/fr/chatbot/creation_chatbot',
          collapsable: false,
          children: [
            ['/fr/chatbot/creation_chatbot/skype.md', 'Pré requis Skype Entreprise Online'],
            ['/fr/chatbot/creation_chatbot/condition_requises.md', 'Pré requis Teams']
          ]
        },
        {
          title: 'Boîte de réception',
          path: '/fr/chatbot/boite_de_reception',
          collapsable: false,
          children: [
            ['/fr/chatbot/boite_de_reception/questions_sans_reponses.md', 'Questions sans réponses'],
            ['/fr/chatbot/boite_de_reception/score_faible.md', 'Score faible'],
            ['/fr/chatbot/boite_de_reception/questions_suggerees.md', 'Questions suggérées'],
            ['/fr/chatbot/boite_de_reception/feedback_negatif.md', 'Feedback négatif'],
            ['/fr/chatbot/boite_de_reception/regles_des_scores.md', 'Règles des scores'],
          ]
        },
        {
          title: 'Tableaux de bord',
          path: '/fr/chatbot/tableaux_de_bord',
          collapsable: false,
          children: [
            ['/fr/chatbot/tableaux_de_bord/rapport_performance.md', 'Rapport de la performance'],
            ['/fr/chatbot/tableaux_de_bord/rapport_usage.md', 'Rapport d’usage'],
            ['/fr/chatbot/tableaux_de_bord/rapport_power_bi.md', 'Tableaux de bord Power BI'],
          ]
        },
        {
          title: 'Connaissances',
          path: '/fr/chatbot/connaissances/processus_de_creation',
          collapsable: false,
          sidebarDepth: 3,  
          children: [
            ['/fr/chatbot/connaissances/processus_de_creation.md', 'Processus de création'],
            ['/fr/chatbot/connaissances/messages.md', 'Messages de bases'],
            ['/fr/chatbot/connaissances/categories.md', 'Catégories'],
            ['/fr/chatbot/connaissances/faq.md', 'FAQ'],
            ['/fr/chatbot/connaissances/entites.md', 'Entités'],
            ['/fr/chatbot/connaissances/synonymes.md', 'Synonymes'],
            ['/fr/chatbot/connaissances/plan_de_test.md', 'Plan de test'],
            ['/fr/chatbot/connaissances/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Outils',
          path: '/fr/chatbot/outils',
          collapsable: false,
          children: [
            ['/fr/chatbot/outils/dialogues_initiaux.md', 'Dialogues initiaux'],
            ['/fr/chatbot/outils/escalade.md', 'Escalade'],
            ['/fr/chatbot/outils/active_learning.md', 'Active Learning'],
            ['/fr/chatbot/outils/feedback.md', 'Feedback'],
            ['/fr/chatbot/outils/galerie_images.md', 'Galerie d’images'],
            ['/fr/chatbot/outils/recommandation.md', 'Recommandation'],
            ['/fr/chatbot/outils/historique.md', 'Historique'],
          ]
        },
        {
          title: 'Communication push',
          path: '/fr/chatbot/communication',
          collapsable: false,
          children: [
            ['/fr/chatbot/communication/utilisateur_liste.md', "Listes d'utilisateurs"],
            ['/fr/chatbot/communication/campagne.md', 'Campagnes'],
          ]
        },
        {
          title: 'Profil',
          path: '/fr/chatbot/profil',
          collapsable: false,
          children: [
            ['/fr/chatbot/profil/api_profil.md', 'Créer une API de profils avec Flow et Sharepoint'],
          ]
        },
        {
          title: 'Paramètres',
          path: '/fr/chatbot/parametres',
          collapsable: false,
          children: [
            ['/fr/chatbot/parametres/politiques_de_confidentialite.md', 'Politiques de confidentialité'],
            ['/fr/chatbot/parametres/accessibilite_de_chatbot.md', 'Accessibilité du chatbot'],
            ['/fr/chatbot/parametres/multilingue.md', 'Multilingue'],
            ['/fr/chatbot/parametres/liste_utilisateurs.md', "Listes d'utilisateurs"],
            ['/fr/chatbot/parametres/canaux.md', 'Canaux'],
            ['/fr/chatbot/parametres/coach.md', 'Coachs'],
            ['/fr/chatbot/parametres/parametres.md', 'Paramètres'],
          ]
        },
        {
          title: 'Administrateurs de licence',
          path: '/fr/chatbot/administrateur_de_licence',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/administrateur_de_licence.md', 'Administrateur de Licence'],
          // ]
        },
        {
          title: "Page d'accueil",
          path: '/fr/chatbot/page_accueil',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/page_accueil.md', "Page d’accueil"],
          // ]
        },
        {
          title: 'Barre de notifications',
          path: '/fr/chatbot/barre_de_notification',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/barre_de_notification.md', 'Barre de notifications'],
          // ]
        },
        {
          title: 'Limitations',
          path: '/fr/chatbot/limitations',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/limitations.md', 'Limitations'],
          // ]
        },
        {
          title: 'Fonctionnalités Teams',
          path: '/fr/chatbot/fonctionnalites_teams',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/fonctionnalites_teams.md', 'Fonctionnalités Teams'],
          // ]
        },
        {
          title: 'Webchat V1 (obsolète)',
          path: '/fr/chatbot/webchat_v1',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/webchat_v1.md', 'Webchat V1 (obsolète)'],
          // ]
        }
      ],
      '/fr/articles/': [
        {
          title: "Création d'un chatbot",
          path: '/fr/chatbot/creation_chatbot',
          collapsable: false,
          children: [
            ['/fr/chatbot/creation_chatbot/skype.md', 'Pré requis Skype Entreprise Online'],
            ['/fr/chatbot/creation_chatbot/condition_requises.md', 'Pré requis Teams']
          ]
        },
        {
          title: 'Boîte de réception',
          path: '/fr/chatbot/boite_de_reception',
          collapsable: false,
          children: [
            ['/fr/chatbot/boite_de_reception/questions_sans_reponses.md', 'Questions sans réponses'],
            ['/fr/chatbot/boite_de_reception/score_faible.md', 'Score faible'],
            ['/fr/chatbot/boite_de_reception/questions_suggerees.md', 'Questions suggérées'],
            ['/fr/chatbot/boite_de_reception/feedback_negatif.md', 'Feedback négatif'],
            ['/fr/chatbot/boite_de_reception/regles_des_scores.md', 'Règles des scores'],
          ]
        },
        {
          title: 'Tableaux de bord',
          path: '/fr/chatbot/tableaux_de_bord',
          collapsable: false,
          children: [
            ['/fr/chatbot/tableaux_de_bord/rapport_performance.md', 'Rapport de la performance'],
            ['/fr/chatbot/tableaux_de_bord/rapport_usage.md', 'Rapport d’usage'],
            ['/fr/chatbot/tableaux_de_bord/rapport_power_bi.md', 'Tableaux de bord Power BI'],
          ]
        },
        {
          title: 'Connaissances',
          path: '/fr/chatbot/connaissances/processus_de_creation',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['/fr/chatbot/connaissances/processus_de_creation.md', 'Processus de création'],
            ['/fr/chatbot/connaissances/messages.md', 'Messages de bases'],
            ['/fr/chatbot/connaissances/categories.md', 'Catégories'],
            ['/fr/chatbot/connaissances/faq.md', 'FAQ'],
            ['/fr/chatbot/connaissances/entites.md', 'Entités'],
            ['/fr/chatbot/connaissances/synonymes.md', 'Synonymes'],
            ['/fr/chatbot/connaissances/plan_de_test.md', 'Plan de test'],
            ['/fr/chatbot/connaissances/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Outils',
          path: '/fr/chatbot/outils',
          collapsable: false,
          children: [
            ['/fr/chatbot/outils/dialogues_initiaux.md', 'Dialogues initiaux'],
            ['/fr/chatbot/outils/escalade.md', 'Escalade'],
            ['/fr/chatbot/outils/active_learning.md', 'Active Learning'],
            ['/fr/chatbot/outils/feedback.md', 'Feedback'],
            ['/fr/chatbot/outils/galerie_images.md', 'Galerie d’images'],
            ['/fr/chatbot/outils/recommandation.md', 'Recommandation'],
            ['/fr/chatbot/outils/historique.md', 'Historique'],
          ]
        },
        {
          title: 'Communication push',
          path: '/fr/chatbot/communication',
          collapsable: false,
          children: [
            ['/fr/chatbot/communication/utilisateur_liste.md', "Listes d'utilisateurs"],
            ['/fr/chatbot/communication/campagne.md', 'Campagnes'],
          ]
        },
        {
          title: 'Profil',
          path: '/fr/chatbot/profil',
          collapsable: false,
          children: [
            ['/fr/chatbot/profil/api_profil.md', 'Créer une API de profils avec Flow et Sharepoint'],
          ]
        },
        {
          title: 'Paramètres',
          path: '/fr/chatbot/parametres',
          collapsable: false,
          children: [
            ['/fr/chatbot/parametres/politiques_de_confidentialite.md', 'Politiques de confidentialité'],
            ['/fr/chatbot/parametres/accessibilite_de_chatbot.md', 'Accessibilité du chatbot'],
            ['/fr/chatbot/parametres/multilingue.md', 'Multilingue'],
            ['/fr/chatbot/parametres/liste_utilisateurs.md', "Listes d'utilisateurs"],
            ['/fr/chatbot/parametres/canaux.md', 'Canaux'],
            ['/fr/chatbot/parametres/coach.md', 'Coachs'],
            ['/fr/chatbot/parametres/parametres.md', 'Paramètres'],
          ]
        },
        {
          title: 'Administrateurs de licence',
          path: '/fr/chatbot/administrateur_de_licence',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/administrateur_de_licence.md', 'Administrateur de Licence'],
          // ]
        },
        {
          title: "Page d'accueil",
          path: '/fr/chatbot/page_accueil',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/page_accueil.md', "Page d’accueil"],
          // ]
        },
        {
          title: 'Barre de notifications',
          path: '/fr/chatbot/barre_de_notification',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/barre_de_notification.md', 'Barre de notifications'],
          // ]
        },
        {
          title: 'Limitations',
          path: '/fr/chatbot/limitations',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/limitations.md', 'Limitations'],
          // ]
        },
        {
          title: 'Fonctionnalités Teams',
          path: '/fr/chatbot/fonctionnalites_teams',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/fonctionnalites_teams.md', 'Fonctionnalités Teams'],
          // ]
        },
        {
          title: 'Webchat V1 (obsolète)',
          path: '/fr/chatbot/webchat_v1',
          collapsable: false,
          // children: [
          //   ['/fr/chatbot/webchat_v1.md', 'Webchat V1 (obsolète)'],
          // ]
        }
      ],
      '/fr/dynameet/': [
        {
          title: 'Dynameet 365',
          path: '/fr/dynameet/',
          collapsable: false,
          children: [
            ['organiser.md', 'Organiser'],
            ['limites.md', 'Limites']
          ]
        }
      ],
      '/en/dynameet/': [
        {
          title: 'Dynameet 365',
          path: '/en/dynameet/',
          collapsable: false,
          children: [
            ['organizer.md', 'Organizer'],
            ['limits.md', 'Limits']
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
