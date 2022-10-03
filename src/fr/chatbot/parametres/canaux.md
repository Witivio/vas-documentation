# Canaux

Cet onglet permet de paramétrer les canaux sur lesquels le chatbot est disponible: - vous pouvez modifier les canaux déjà présent, choisit lors de la création du nouveau chatbot - ajouter ultérieurement un nouveau canal de diffusion.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux1.png')" alt="canaux">
</div>

## Skype for Business

Ce paramétrage permet de faire passer le chatbot en mode hor ligne sur Skype (bouton Pause) ou de redémarrer le connecteur sur Skype for Business en cas de problème (bouton Redémarrer).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux2.png')" alt="canaux">
</div>

Les cadres suivant permettent d'indiquer les informations de connexion (E-mail, mot depasse, ID Azure) ainsi que l’activité et le rôle du chatbot, par exemple : assistante RH. Une fois modifié, le changement apparaîtra automatiquement sur Skype Entreprise en dessus du nom du chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux3.png')" alt="canaux">
</div>

## Microsoft Teams

> Pour activer un bot sur teams, la démarche est expliquée [ici](/fr/chatbot/creation_chatbot/condition_requises.html).

Depuis la page d'**edition du canal teams**, vous pouvez publier ou retirer votre chatbot dans le catalogue teams de manière automatique ou manuel.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/teamsCanal.PNG')" alt="catalogue teams">
</div>
Cliquez sur l'onglet **Publication**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/publishTeams.PNG')" alt="catalogue teams">
</div>

### **Automatiquement**

---

#### Autorisation

---

Afin d'effectuer la publication de votre chatbot dans le catalogue teams, Witivio a besoin de l'autorisation d'un **Administrateur du tenant**.
Cliquez sur le bouton **"je t'autorise"** afin de commencer le processus d'authenfication.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/autorisationAuto.PNG')" alt="autorisation teams">
</div>

Vous devriez voir apparaitre une fenêtre d'authentification microsoft.
**Identifiez-vous** avec les informations d'un **admnistrateur du tenant**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/popupautorisation.PNG')" alt="autorisation teams">
</div>

Une fois l'autorisation effectué avec succés. Vous devriez voir l'état au dessus du bouton "je t'autorise" passé à **connecté** comme sur l'image ci-dessous.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/authSucess.PNG')" alt="autorisation teams">
</div>

#### Publication

---

Une fois **connecté** vous pouvez publier l'application automatiquement depuis la plateforme en cliquant sur le bouton **Publier**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/publishApp.PNG')" alt="publication application teams">
</div>

Une fois la publication effectué vous devriez voir un bouton **Retirer** apparaître afin de retirer l'application du catalogue Teams.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/unpublishApp.PNG')" alt="publication application teams">
</div>

### **Manuellement**

---

Si vous ne possédez pas de compte **administrateur du tenant** vous pouvez publier votre bot manuellement dans le catalogue Teams.

#### Télechargement

Depuis la page d'**edition du canal teams**, Téléchargez le package de l'application en cliquant sur le bouton **télécharger** comme l'image ci-dessous.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/downloadZip.PNG')" alt="download application teams">
</div>

#### Publication

Rendez-vous sur **Teams**, puis cliquez sur **Autres applications ajoutés** comme encadré dans l'image ci-dessous.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/teams.PNG')" alt="dropdown teams">
</div>
Une fenêtre s'affiche, cliquez alors sur **Autres applications**.
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/dropdownteams.PNG')" alt="dropdown teams">
</div>
Vous êtes maintenant dans le **Catalogue Teams**.
Cliquez sur **Envoyer au catalogue d'application** comme l'écran ci-dessous.
Puis cliquez sur **soumettre une application**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/appliCatalogue.PNG')" alt="application personalisé teams">
</div>
Une fenêtre s'affiche, sélectionnez le package téléchargé au préalable puis cliquez sur **Ouvrir**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/popupappliperso.PNG')" alt="application pop up personalisé teams">
</div>
Vous devriez voir apparaître votre application avec un status en attente.
Demandez à un administrateur :
* D'accepter que votre **chatbot** soit publié dans le catalogue Teams.
* De vous transmettre **l'id de l'application dans le catalogue**.
Une fois que l'admnistrateur aura accepter votre application, le statut de votre **chatbot** devrait passer à **Approuvé**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/approuved.PNG')" alt="application approuvé">
</div>
Dès lors vous pourrez retrouver l'application dans votre **catalogue Teams**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/chatbotsCatalogues.PNG')" alt="application approuvé">
</div>
Pour finaliser la publication retourner sur la page Catalogue de la plateforme et renseignez **l'id de l'application** fourni par l'administrateur lorsqu'il a approuvé votre **chatbot**.
Puis cliquez sur **Enregistrer l'id de l'application**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/idApp.PNG')" alt="application approuvé">
</div>

::: danger 🔴
Sans l'étape du dessus, l'application ne sera pas fonctionnel.
:::

### Administration

En tant qu'**administrateur** rendez vous sur le **centre d'administration Microsoft Teams** depuis le **portail office**.
Accéder à l'onglet **Gérer les applications**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/manageApp.PNG')" alt="application approuvé">
</div>
Grâce à la barre de recherche, retourvez le nom du **chatbot** dans la liste et cliquez dessus.
Vous accédez à une page d'information de votre **chatbot**.
Dans  un premier temps transmettez l'**id de l'application** à la personnes ayant publier l'app.
Elle en aura besoin pour le renseigner dans la plateforme Witivio.
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/detailIdApp.PNG')" alt="application approuvé">
</div>
Ensuite changer l'état de publication de **Envoyé** à **Publié**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/detailApp.PNG')" alt="application approuvé">
</div>
Puis cliquez sur publier
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/publishPopUp.PNG')" alt="application approuvé">
</div>

Vous pouvez aussi choisir d'afficher ou non votre chatbot dans l'application **Chatbots**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/displayApp.PNG')" alt="publication application teams">
</div>

> Pour publier l'application **Chatbots** sur teams, la démarche est expliquée [ici](/fr/chatbot/acceuil/catalogue.html).

## Webchat

Le canal Webchat est activé par défaut.

<div class="image_center">
  <img class="webchat_img" :src="$withBase('/assets/img/fr/parametres/canaux4.png')" alt="canaux">
</div>

::: danger 🔴
La fenêtre Webchat est votre chatbot en intégration et vous permet de le tester et voir ses comportements, avant la publication de ses connaissances. Lorsque vous modifiez le profil dans la base de connaissances, le chatbot prend en compte le choix du nouveau profil dans le test.
:::

### Configuration du composant webchat V2

```
<script>
        window.webChatSettings = {
            botId: '[BOTID]',
            color: '[COLOR]',
            background: 'square3d',
            avatar: '[URL]',
            title: '[TITLE]',
            description:"[DESCRIPTION]",
            height: '650px',
            callout: true,
            welcome: true,
            width:'400px',
            apiKey: '[API KEY]',
            displayMode:'close',
            branding: false,
            autoscroll: false,
            autocomplete:false,
            hideSendBox:false,
            refresh: false,
        };
        !function () { function t() { var t = e.createElement("script"); t.type = "text/javascript", t.async = !0, t.src = "https://webchat.witivio.com/v2/init.js", t.onload = function () { witivioWebChat.load(window.webChatSettings) }; var n = e.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n) } var e = document, n = window; n.attachEvent ? n.attachEvent("onload", t) : n.addEventListener("load", t, !1) }();
</script>
```

<table>
        <tr>
            <td>botId</td>
            <td>L'identifiant unique de votre chatbot. L'identifiant est disponible dans le menu paramètres .</td>
        </tr>
        <tr>
            <td>color</td>
            <td>Couleur primaire en hexa. Il s'agit de le couleur du bandeau et de la bulle de la webchat. </td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>URL de l'image de votre chatbot.</td>
        </tr>
		<tr>
            <td>title</td>
            <td>Le titre de la fenêtre de discussion. Généralement le nom du chatbot.</td>
        </tr>
	    <tr>
            <td>description</td>
            <td>Description de la fenêtre de discussion. Généralement le role du chatbot.</td>
        </tr>
		<tr>
            <td>callout</td>
            <td>Activer le message de bienvenue (par défaut: true). Il s'agit du message de base d'invitation à la conversation (dernier message de base) à personnaliser depuis l'onglet Connaissances > Messages.</td>
        </tr>
		<tr>
            <td>welcome</td>
            <td>Activer l'affichage du message de bienvenue dans la fenêtre de discussion. (par défaut : true). Il s'agit du message de "Bonjour" à personnaliser depuis l'onglet Connaissances > Messages.</td>
        </tr>
		 <tr>
            <td>user</td>
            <td>Non obligatoire. Si vous êtes dans SharePoint Online, vous pouvez utiliser : 
            <pre><code>
{
    'id': _spPageContextInfo.aadUserId,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            or
            <pre>
            <code>
{
    'id': _spPageContextInfo.userPrincipalName,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            Si aucune configuration n'est spécifiée, le composant génère un identifiant unique qui est enregistré dans le navigateur.
            </td>
        </tr>
        <tr>
            <td>refresh</td>
            <td>Affiche un bouton qui réactualise le composant (par défaut : false)</td>
        </tr>
         <tr>
            <td>hideSendBox</td>
            <td>Permet de masquer le champ de saisie du message et le bouton envoyer (par défaut : false)</td>
        </tr>
        <tr>
            <td>apiKey</td>
            <td>L'api key qui se trouve dans les paramètres du chatbot</td>
        </tr>
        <tr>
            <td>displayMode</td>
            <td>Détermine si la webchat doit s'afficher ouverte 'open' ou fermée 'close' lors du chargement de celle-ci (par défaut 'close')</td>
        </tr>
         <tr>
            <td>environnement</td>
            <td>Environnement de la base de connaissance ('production', ou 'intégration') (par défaut : 'production')</td>
        </tr>
         <tr>
            <td>triggerableDialogId</td>
            <td>Identifiant du Triggerable ID à démarrer (facultatif)</td>
        </tr>
        <tr>
            <td>triggerableDialogItemId</td>
            <td>Identifiant du Triggerable Item ID à démarrer (facultatif)</td>
        </tr>
        <tr>
            <td>background</td>
            <td>Image de fond. Par défaut: square3d (= losanges en guise d'image de fond de la webchat). Valeurs possibles: (square3d, communication, square, travel). Ajouter la valeur 'none' si vous ne souhaitez pas personnaliser l'image de fond de votre webchat.</td>
        </tr>
         <tr>
            <td>autocomplete</td>
            <td>Permet d'afficher la liste des questions en mode autocompletion (par défaut: false)</td>
        </tr>
         <tr>
            <td>autoscroll</td>
            <td>Permet de forcer l'autoscroll lorsqu'un utilisateur remonte dans la conversation et décide de renvoyer un message dans le chat.</td>
        </tr>
        <tr>
            <td>buttonDesign.shape</td>
            <td>Permet de choisir la forme du bouton, valeurs possibles: square, circle, chat (par défaut: circle)</td>
        </tr>
        <tr>
            <td>buttonDesign.icon</td>
            <td>Permet de choisir l'icône du bouton, valeurs possibles: 'bot' prendra l'avatar de votre chatbot, peut également prendre la classe d'une Font Awesome (par exemple 'fa fa-quote-right' ou 'fas fa-comment') ou mettre une URL vers une image (par défaut: fa-comment-dots)</td>
        </tr>
        <tr>
            <td>buttonDesign.height</td>
            <td>Longueur du bouton, unité conseillée: 'px' (par défaut: '80px')</td>
        </tr>
        <tr>
            <td>buttonDesign.width</td>
            <td>Largeur du bouton, unité conseillée: 'px' (par défaut: '80px')</td>
        </tr>
        <tr>
            <td>buttonDesign.border</td>
            <td>6 caractères hexadécimaux pour la bordure ou 'none' pour aucune bordure (attention la forme 'chat' du bouton est considéré comme une bordure) (par défaut: 'ffffff')</td>
        </tr>
        <tr>
            <td>buttonDesign.text</td>
            <td>Le texte à afficher à coté de l'icone choisi. Au dela de 25 caractère, le texte sera coupé.</td>
        </tr>
        <tr>
            <td>headerHeight</td>
            <td>permet de régler la taille du header. valeurs possible : small, normal (par défaut: 'normal' si non spécifié)</td>
        </tr>
        <tr>
            <td>position</td>
            <td>position de la webchat sur la page,'top', 'middle' ou 'bottom' puis 'left' ou 'right' suivie optionnellement d'une marge de maximum 150px (par défaut: 'bottom right 10px 10px')</td>
        </tr>
</table>

### Configuration du composant webchat V3 (preview)

```
<script>
  "use strict";
  window.webchatV3Settings = {
        color: "[COLOR]",
        position: "right bottom 50px 25px",
        avatar: "[URL]",
        buttonDesign: {
          shape: "square",
          text: "",
          height: "75px",
          width: "75px",
        },
        menu: {
          suggestion: false,
          question: true,
        },
        displayMode: "close",
        title: "[TITLE]",
        slide: false,
        animation: true,
        skipContent: false,
        callout: {
          display: true,
          capacity: false,
          description: "",
        }
        autocomplete: true,
        refresh: true,
        hideSendBox: false,
        apiKey: "[APIKEY]",
        botId: "[BOTID]",
      };
var e=document,t=e.createElement("script");t.type="text/javascript",t.async=!1,t.src="https://webchat.virtualagentstudio.com/v3/static/js/main.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a);
var e=document,t=e.createElement("script");t.type="text/javascript",t.async=!1,t.src="https://webchat.virtualagentstudio.com/v3/source/simple-update-in.production.min.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a);
</script>

<body>
  <div class="vas-webchat" id="vas-webchat"></div>
</body>
```

<table>
        <tr>
            <td>color</td>
            <td>Couleur primaire en hexa (sans le "#" devant). Il s'agit de la couleur de la webchat.</td>
        </tr>
        <tr>
            <td>position</td>
            <td>Placer la webchat selon vos préférences, sous le format [left/right top/bottom x y] (par défaut : "right bottom 50px 25px")</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>URL de l'image de votre chatbot.</td>
        </tr>
        <tr>
            <td>buttonDesign.shape</td>
            <td>Permet de choisir la forme du bouton, valeurs possibles: square, circle (par défaut: circle)</td>
        </tr>
        <tr>
            <td>buttonDesign.text</td>
            <td>Possibilité de mettre du text à la place de l'icône (limite à 25 caractères)</td>
        </tr>
        <tr>
            <td>buttonDesign.height</td>
            <td>Longueur du bouton, unité conseillée: 'px' (par défaut: '75px') limité à 100px</td>
        </tr>
        <tr>
            <td>buttonDesign.width</td>
            <td>Largeur du bouton, unité conseillée: 'px' (par défaut: '75px') limité à 100px</td>
        </tr>
        <tr>
            <td>menu.suggestion</td>
            <td>Permet d'activer des suggestions propres à votre Webchat</td>
        </tr>
        <tr>
            <td>menu.question</td>
            <td>Permet d'activer des questions récurrentes propres à votre Webchat</td>
        </tr>
        <tr>
            <td>displayMode</td>
            <td>Détermine si la webchat doit s'afficher ouverte 'open' ou fermée 'close' lors du chargement de celle-ci (par défaut 'close').</td>
        </tr>
        <tr>
            <td>title</td>
            <td>Le titre de la fenêtre de discussion. Généralement le nom du chatbot.</td>
        </tr>
        <tr>
            <td>slide</td>
            <td>Mode d'affichage alternatif sous forme de menu sur le côté (par défaut : false).</td>
        </tr>
        <tr>
            <td>animation</td>
            <td>Les animations de la webchat.</td>
        </tr>
        <tr>
            <td>skipContent</td>
            <td>Permet de ne pas afficher le menu ainsi que le message de bienvenue à l'ouverture de la webchat.</td>
        </tr>
		    <tr>
            <td>callout.display</td>
            <td>Activer le message de bienvenue (par défaut: true). Il s'agit du message de base d'invitation à la conversation à personnaliser depuis l'onglet.</td>
        </tr>
		    <tr>
            <td>callout.capacity</td>
            <td>Affiche les suggestions dans la callout (menu.suggestion doit être activé).</td>
        </tr>
		    <tr>
            <td>callout.description</td>
            <td>Message d'accueil présente dans la callout (le paramètre callout doit être activé)</td>
        </tr>
		    <tr>
            <td>autocomplete</td>
            <td>Active l'autocomplétion lors de vos recherches sur la webchat.</td>
        </tr>
		    <tr>
            <td>refresh</td>
            <td>Actualise la conversation pour supprimer les messages précédent</td>
        </tr>
		    <tr>
            <td>hideSendBox</td>
            <td>Supprime le champ pour écrire</td>
        </tr>
		    <tr>
            <td>apikey</td>
            <td>L'api key qui se trouve dans les paramètres du chatbot</td>
        </tr>
		    <tr>
            <td>botId</td>
            <td>L'identifiant unique de votre chatbot. L'identifiant est disponible dans le menu paramètres .</td>
        </tr>
        <tr>
            <td>triggerableDialog.triggerableDialogId</td>
            <td>Identifiant du Triggerable ID à démarrer (facultatif)</td>
        </tr>
        <tr>
            <td>triggerableDialog.triggerableDialogItemId</td>
            <td>Identifiant du Triggerable Item ID à démarrer (facultatif)</td>
        </tr>
        <tr>
            <td>environment</td>
            <td>Environnement de la base de connaissance ('production', ou 'intégration') (par défaut : 'production')</td>
        </tr>
        <tr>
            <td>profileId</td>
            <td>Modifie la réponse apportée par la webchat selon le profil de l'utilisateur. (par défault: "")</td>
        </tr>
        <tr>
            <td>userId</td>
            <td>Si aucune configuration n'est spécifiée, le composant génère un identifiant unique qui est enregistré dans le navigateur. (par défault: "")</td>
        </tr>
        <tr>
            <td>displayName</td>
            <td>Nom d'utilisateur. (par défault: "")</td>
        </tr>
</table>

#### [Configuration du composant Webchat V1 compatible avec IE11 (obsolete)](/fr/chatbot/webchat_v1.html)

### Sécurité du chatbot

La webchat géré également **la sécurité du chatbot** d'une meilleure façon. Elle permet de savoir où est déployée la webchat. A des fins de gouvernance, **il est obligatoire** d'indiquer explicitement où se trouve la webchat, et donc de déclarer les différents sites sur lesquels elle sera disponible.

::: warning ⚠️
**Sans cette définition explicite, la webchat ne chargera pas sur votre site**. Cela permet d'éviter qu'un individu ajoute la webchat sans que cela soit autorisé.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux5.png')" alt="canaux">
</div>

::: tip 💡
La fenêtre Webchat s'affiche également dans le canal de diffusion Webchat (onglet "Paramètres"), afin de vous permettre de tester et parler directement au chatbot en production.
:::

### Personnalisation de la webchat

Accédez à l'onglet **Personnalisation** si vous souhaitez personnaliser la webchat depuis la plateforme Witivio.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/personnalisationwebchat.PNG')" alt="webchat">
</div>

Cliquez sur le bouton **PRE-VISUALISER** pour avoir une preview de votre webchat personnalisée.

::: danger 🔴
Lorsque vous souhaitez afficher cette configuration personnalissée, il suffit de supprimer la personnalisation déjà existante dans le script JS et ne laisser que ces informations :

- Bot Id (Paramètres > Paramètres > Bot)
- Api KEY (Paramètres > Paramètres > Clef)
  :::

Lorsqu'il s'agit de votre première configuration, une fois la personnalisation terminée, cliquer sur SAUVEGARDER en haut à droite. Accédez au code JS de votre page et ajoutez les deux valeurs Bot Id et Api key.

Si vous souhaitez obtenir le code JS de votre configuration, cliquer sur COPIER LA CONFIGURATION en haut à droite. Celle-ci sera copiée dans votre presse-papier.

## Webpart SharePoint Modern

> Vous pouvez télécharger la webpart [**ici**](https://webchat.witivio.com/webpart/witivio-webchat.sppkg)

Pour ajouter le composant WebPart dans votre SharePoint Modern, vous devez ajouter le package sppkg au catalogue des applications.

> Si vous ne disposez pas d'un catalogue d'applications, un administrateur en ligne SharePoint peut en créer un en suivant les instructions de ce guide: [**Utilisez le catalogue des applications pour rendre les applications professionnelles personnalisées disponibles pour votre environnement SharePoint Online..**](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog)

### Déployer le package dans le catalogue d'applications

1. Accédez au catalogue d'applications de votre site.

2. Téléchargez ou faites glisser witivio-webchat.sppkg dans le catalogue des applications. <img :src="$withBase('/assets/img/fr/parametres/canaux6.png')" alt="canaux">

Cela déploie le package de solution côté client. S'agissant d'une solution côté client totalement fiable, SharePoint affiche une boîte de dialogue et vous invite à faire confiance au déploiement de la solution côté client.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux7.png')" alt="low score">
</div>

1. Sélectionner Deployer.

### Configurer la webchat

La webchat est maintenant disponible à partir de vos pages sur votre site SharePoint.

1. Modifier une page sur votre site SharePoint
2. Cliquez sur Ajouter un nouveau composant WebPart
3. Si vous faites défiler l'écran vers le bas, vous trouverez la Webpart "Witivio-webchat"

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux8.png')" alt="canaux">
</div>

4. Sélectionnez la. Le composant apparaît, mais la discussion en ligne n'est pas encore configurée.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux9.PNG')" alt="canaux">
</div>

::: warning ⚠️
Il n'apparaîtra pas tant que vous ne l'avez pas configuré.
:::

5. Sélectionnez le crayon pour éditer les paramètres. Veuillez vous référer à l'article ci-dessus pour comprendre la configuration.

::: tip 💡
Lors de l'ajout de la Webpart à SharePoint, le contexte utilisateur est envoyé via la webchat. Cela signifie que l'utilisateur et le nom de l'utilisateur sont envoyés au bot. N'oubliez pas de consulter vos politiques de confidentialité si vous souhaitez que vos utilisateurs soient anonymes.
:::

::: warning ⚠️
La Webpart SharePoint de la webchat doit être ajoutée en haut de la page.
Sinon, elle ne sera affichée que lors du scroll.
:::

## Outlook

La plateforme Witivio permet d'ajouter un chatbot sur Outlook sous forme de webchat.

Voici les étapes à suivre pour intégrer votre assistant virtuel à votre Outlook :

> - Dans un premier accédez à la plateforme Witiovio puis à l'onglet **Paramètres > Canaux**

- Cliquez sur le bouton **+ AJOUTER UN CANAL** et choisissez **Outlook**

- Une URL est generée. Cliquez sur le bouton **COPIER L'URL**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/outlook.PNG')" alt="canaloutlook">
</div>

- Cliquez sur le bouton SUIVANT. Le canal Outlook est prêt à être ajouté!

> - Connectez-vous à Outlook. Accédez à l'onglet Accueil au niveau de la barre de navigation supérieure, puis sélectionnez la commande **Téléchargez des compléments**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/outlook1.PNG')" alt="canaloutlook">
</div>

- Une nouvelle fenetre s'affiche. Dans le menu de gauche, cliquez sur **Mes compléments**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/outlook3.PNG')" alt="canaloutlook">
</div>

- En bas de la page, cliquez sur la commande **+ Ajouter un complément personnalisé** et choisir **à partir d'une URL**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/outlook4a.PNG')" alt="canaloutlook">
</div>

- Collez ici **l'URL** generée depuis la plateforme Witivio.

- Cliquez ensuite sur **Ok > Installer**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/outlook5.PNG')" alt="canaloutlook">
</div>

Une fois ajouté, retrouvez votre complément personnalisé au niveau de la barre de navigation supérieure. Sélectionnez-le, une fenêtre s'ouvre à droite de la page. Échangez ainsi avec votre chatbot depuis Outlook.

## Lumapps

## Beezy

## Powell 365

## SMS

Conversez avec votre chatbot par sms depuis votre téléphone portable.

Cliquez [**ici**](https://docs.microsoft.com/fr-fr/azure/bot-service/bot-service-channel-connect-twilio?view=azure-bot-service-4.0https://docs.microsoft.com/fr-fr/azure/bot-service/bot-service-channel-connect-twilio?view=azure-bot-service-4.0) pour en savoir plus sur la configuration Twiliio.

### Commentaires

---

<Commentaire />
