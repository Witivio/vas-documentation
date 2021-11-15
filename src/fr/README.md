---
home: true
heroImage: /assets/img/index/VirtualAgentStudio.png
tagline: Chatbots d’entreprise pour le Digital Workplace
taglineStartup: Witivio 365 est la plateforme complète de création et monitoring de Chatbots pour le Digital Workplace et Office 365. Nos solutions sont pensées pour vos collaborateurs et visent à faciliter l’accès à l’information au sein de votre organisation.
actionText: Commencer →
actionLink: /fr/chatbot/creation_chatbot
features:
- title: /assets/img/index/1bot-300x228.png
  details: Grâce à la plateforme Witivio, créez autant de chatbots que vous voulez, de façon simple et sans code !
- title: /assets/img/index/2lesagentsmeties-300x246.png
  details: Donnez la main au métier ! Chaque spécialité peut construire son chatbot facilement et de façon autonome.
- title: /assets/img/index/3realisationcommune.png
  details: Nous réalisons et activons ensemble le 1er assistant virtuel. Les chatbots n’auront plus aucun secrets pour vous !
items:
- title: Création d'un chatbot
  itemImage: /assets/img/index/robotic-arm.png
  itemDescription: Créez et configurez votre chatbot.
  link: /fr/chatbot/creation_chatbot.html
- title: Boîte de réception
  itemImage: /assets/img/index/email.png
  itemDescription: Traitez les questions des utilisateurs.
  link: /fr/chatbot/boite_de_reception.html
- title: Tableaux de bord
  itemImage: /assets/img/index/dashboard.png
  itemDescription: Performance et usage du chatbot.
  link: /fr/chatbot/tableaux_de_bord.html
- title: Connaissances
  itemImage: /assets/img/index/knowledge.png
  itemDescription: Configurez votre base de connaissances.
  link: /fr/chatbot/connaissances/processus_de_creation.html
- title: Outils
  itemImage: /assets/img/index/technical-support.png
  itemDescription: Développez les capacités de votre chatbot.
  link: /fr/chatbot/outils.html
- title: Communication push
  itemImage: /assets/img/index/conversation.png
  itemDescription: Diffusez des informations en interne.
  link: /fr/chatbot/communication.html
- title: Profil
  itemImage: /assets/img/index/user.png
  itemDescription: Créez de profils pour apporter la bonne réponse à la bonne personne.
  link: /fr/chatbot/profil.html
- title: Paramètres
  itemImage: /assets/img/index/programming.png
  itemDescription: Paramétrez les accès, les canaux et les politiques de confidentialité.
  link: /fr/chatbot/parametres.html
footer: Créé par Witivio avec ❤️
---

<script>
export default {
  mounted () {
    window.webChatSettings = {
        botId: '4f8c93fd-b71f-4abc-82b3-184b32cc7e20',
        color: '903163',
        title: 'Jeff',
        height: '500px',
        callout: true,
        welcome: true,
        width: '600px',
        refresh: false,
        apiKey: 'gxwhqaNdr01ITVcVFRmVv7HrXF3cyMuu&7V&AS5SmeviXPtQZ0VI50MiYftT',
        displayMode: 'close'
      };

      witivioWebChat.load(window.webChatSettings)  
  }
}
</script>