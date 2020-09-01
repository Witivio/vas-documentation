
module.exports = {
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
    '/': {
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
          { text: 'Witivio 365', link: '/articles/creation_chatbot' },
          { text: 'Dynameet', link: '/dynameet/' },
          { text: 'Videos', link: '/videos/' },
          { text: 'Teams Apps', link: '/teams_apps/' },
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
            ['build_your_chatbot/skype.md', 'Skype for Business Online prerequisites'],
            ['build_your_chatbot/requisites.md', 'Teams prerequisites']
          ]
        },
        {
          title: 'Inbox',
          path: '/en/articles/inbox',
          collapsable: false,
          children: [
            ['inbox/unanswered_questions.md', 'Unanswered Questions'],
            ['inbox/low_score.md', 'Low Score'],
            ['inbox/suggested_questions.md', 'Suggested Questions'],
            ['inbox/negative_feedbacks.md', 'Negative Feedbacks'],
            ['inbox/scoring_rules.md', 'Scoring Rules'],
          ]
        },
        {
          title: 'Dashboards',
          path: '/en/articles/dashboards',
          collapsable: false,
          children: [
            ['dashboards/performance.md', 'Performance Dashboard'],
            ['dashboards/usage.md', 'Usage Dashboard'],
            ['dashboards/power_bi.md', 'Power Bi Dashboard'],
          ]
        },
        {
          title: 'Knowledge',
          path: '/en/articles/knowledge/creation_process',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['knowledge/creation_process.md', 'Creation Process'],
            ['knowledge/messages.md', 'Messages'],
            ['knowledge/categories.md', 'Categories'],
            ['knowledge/kb.md', 'KB'],
            ['knowledge/entities.md', 'Entities'],
            ['knowledge/synonyms.md', 'Synonyms'],
            ['knowledge/test_plan.md', 'Test Plan'],
            ['knowledge/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Tools',
          path: '/en/articles/tools',
          collapsable: false,
          children: [
            ['tools/starting_flow.md', 'Starting Flow'],
            ['tools/escalation.md', 'Escalation'],
            ['tools/active_learning.md', 'Active Learning'],
            ['tools/feedback.md', 'Feedback'],
            ['tools/image_gallery.md', 'Image Gallery'],
            ['tools/recommendation.md', 'Recommendation'],
            ['tools/history.md', 'History'],
          ]
        },
        {
          title: 'Communication',
          path: '/en/articles/communication',
          collapsable: false,
          children: [
            ['communication/user_lists.md', 'User Lists'],
            ['communication/campaign.md', 'Campaign'],
          ]
        },
        {
          title: 'Profile',
          path: '/en/articles/profile',
          collapsable: false,
          children: [
            ['profile/api_profile.md', 'API Profile with SharedPoint and MS Flow'],
          ]
        },
        {
          title: 'Settings',
          path: '/en/articles/settings',
          collapsable: false,
          children: [
            ['settings/privacy.md', 'Privacy policies'],
            ['settings/chatbot.md', 'Chatbot accessibility'],
            ['settings/multilingual.md', 'Multilingual'],
            ['settings/user_list.md', 'User List'],
            ['settings/channels.md', 'Channels'],
            ['settings/coach.md', 'Coach'],
            ['settings/settings.md', 'Settings'],
          ]
        },
        {
          title: 'Licence Administrators',
          path: '/en/articles/licence_administrators',
          collapsable: false,
          children: [
            ['/en/articles/licence_administrators.md', 'Licence administrators'],
          ]
        },
        {
          title: 'Home',
          path: '/en/articles/home',
          collapsable: false,
          children: [
            ['/en/articles/home.md', 'Home'],
          ]
        },
        {
          title: 'Notification bar',
          path: '/en/articles/notification_bar',
          collapsable: false,
          children: [
            ['/en/articles/notification_bar.md', 'Home'],
          ]
        },
        {
          title: 'Limitations',
          path: '/en/articles/limitations',
          collapsable: false,
          children: [
            ['/en/articles/limitations.md', 'Limitations'],
          ]
        },
        {
          title: 'Teams Features',
          path: '/en/articles/teams_features',
          collapsable: false,
          children: [
            ['/en/articles/teams_features.md', 'Teams Features'],
          ]
        }
      ],
      '/articles/': [
        {
          title: "Création d'un chatbot",
          path: '/articles/creation_chatbot',
          collapsable: false,
          children: [
            ['creation_chatbot/skype.md', 'Pré requis Skype Entreprise Online'],
            ['creation_chatbot/condition_requises.md', 'Pré requis Teams']
          ]
        },
        {
          title: 'Boîte de réception',
          path: '/articles/boite_de_reception',
          collapsable: false,
          children: [
            ['boite_de_reception/questions_sans_reponses.md', 'Questions sans réponses'],
            ['boite_de_reception/score_faible.md', 'Score faible'],
            ['boite_de_reception/questions_suggerees.md', 'Questions suggérées'],
            ['boite_de_reception/feedback_negatif.md', 'Feedback négatif'],
            ['boite_de_reception/regles_des_scores.md', 'Règles des scores'],
          ]
        },
        {
          title: 'Tableaux de bord',
          path: '/articles/tableaux_de_bord',
          collapsable: false,
          children: [
            ['tableaux_de_bord/rapport_performance.md', 'Rapport de la performance'],
            ['tableaux_de_bord/rapport_usage.md', 'Rapport d’usage'],
            ['tableaux_de_bord/rapport_power_bi.md', 'Tableaux de bord Power BI'],
          ]
        },
        {
          title: 'Connaissances',
          path: '/articles/connaissances/processus_de_creation',
          collapsable: false,
          sidebarDepth: 3,  
          children: [
            ['connaissances/processus_de_creation.md', 'Processus de création'],
            ['connaissances/messages.md', 'Messages de bases'],
            ['connaissances/categories.md', 'Catégories'],
            ['connaissances/faq.md', 'FAQ'],
            ['connaissances/entites.md', 'Entités'],
            ['connaissances/synonymes.md', 'Synonymes'],
            ['connaissances/plan_de_test.md', 'Plan de test'],
            ['connaissances/configuration.md', 'Configuration'],
          ]
        },
        {
          title: 'Outils',
          path: '/articles/outils',
          collapsable: false,
          children: [
            ['outils/dialogues_initiaux.md', 'Dialogues initiaux'],
            ['outils/escalade.md', 'Escalade'],
            ['outils/active_learning.md', 'Active Learning'],
            ['outils/feedback.md', 'Feedback'],
            ['outils/galerie_images.md', 'Galerie d’images'],
            ['outils/recommandation.md', 'Recommandation'],
            ['outils/historique.md', 'Historique'],
          ]
        },
        {
          title: 'Communication push',
          path: '/articles/communication',
          collapsable: false,
          children: [
            ['communication/utilisateur_liste.md', "Listes d'utilisateurs"],
            ['communication/campagne.md', 'Campagnes'],
          ]
        },
        {
          title: 'Profil',
          path: '/articles/profil',
          collapsable: false,
          children: [
            ['profil/api_profil.md', 'Créer une API de profils avec Flow et Sharepoint'],
          ]
        },
        {
          title: 'Paramètres',
          path: '/articles/parametres',
          collapsable: false,
          children: [
            ['parametres/politiques_de_confidentialite.md', 'Politiques de confidentialité'],
            ['parametres/accessibilite_de_chatbot.md', 'Accessibilité du chatbot'],
            ['parametres/multilingue.md', 'Multilingue'],
            ['parametres/liste_utilisateurs.md', "Listes d'utilisateurs"],
            ['parametres/canaux.md', 'Canaux'],
            ['parametres/coach.md', 'Coachs'],
            ['parametres/parametres.md', 'Paramètres'],
          ]
        },
        {
          title: 'Administrateurs de licence',
          path: '/articles/administrateur_de_licence',
          collapsable: false,
          children: [
            ['/articles/administrateur_de_licence.md', 'Administrateur de Licence'],
          ]
        },
        {
          title: "Page d'accueil",
          path: '/articles/page_accueil',
          collapsable: false,
          children: [
            ['/articles/page_accueil.md', "Page d’accueil"],
          ]
        },
        {
          title: 'Barre de notifications',
          path: '/articles/barre_de_notification',
          collapsable: false,
          children: [
            ['/articles/barre_de_notification.md', 'Barre de notifications'],
          ]
        },
        {
          title: 'Limitations',
          path: '/articles/limitations',
          collapsable: false,
          children: [
            ['/articles/limitations.md', 'Limitations'],
          ]
        },
        {
          title: 'Fonctionnalités Teams',
          path: '/articles/fonctionnalites_teams',
          collapsable: false,
          children: [
            ['/articles/fonctionnalites_teams.md', 'Fonctionnalités Teams'],
          ]
        }
      ],
      '/dynameet/': [
        {
          title: 'Dynameet 365',
          path: '/dynameet/',
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
