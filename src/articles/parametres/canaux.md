# Canaux

Cet onglet permet de paramétrer les canaux sur lesquels le chatbot est disponible: - vous pouvez modifier les canaux déjà présent, choisit lors de la création du nouveau chatbot - ajouter ultérieurement un nouveau canal de diffusion.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux1.png')" alt="canaux">
</div>


## Skype for Business

Ce paramétrage permet de faire passer le chatbot en mode hor ligne sur Skype (bouton Pause) ou de redémarrer le connecteur sur Skype for Business en cas de problème (bouton Redémarrer).

<div class="image_center">scor
  <img :src="$withBase('/assets/img/fr/parametres/canaux2.png')" alt="canaux">
</div>



Les cadres suivant permettent d'indiquer les informations de connexion (E-mail, mot depasse, ID Azure) ainsi que l’activité et le rôle du chatbot, par exemple : assistante RH. Une fois modifié, le changement apparaîtra automatiquement sur Skype Entreprise en dessus du nom du chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux3.png')" alt="canaux">
</div>


## Microsoft Teams

>Pour activer un bot sur teams, la démarche est expliquée [ici](/articles/creation_chatbot/condition_requises.html).

#### Télécharger son package teams
---

Lorsque vous configurez ou souhaitez modifier la configuration de votre chatbot Teams, téléchargez le fichier zip contenant: - Un fichier JSON - 2 photos ( 96x96 Px, 20x20 Px )

Ce fichier décrit donc les informations fournies dans l'application. (Paramètres > Canaux)

Ajoutez ensuite ce package dans Teams. Choisissez une équipe et un canal sous cette équipe, cliquez sur "Gérer l'équipe", puis "Application" puis en bas à droite de la page "Charger une application personnalisée". Chargez le package Teams.


## Webchat

Le canal Webchat est activé par défaut.

::: danger Important
La fenêtre Webchat <img class="webchat_img" :src="$withBase('/assets/img/fr/parametres/canaux4.png')" alt="canaux"> est votre chatbot en intégration et vous permet de le tester et voir ses comportements, avant la publication de ses connaissances. Lorsque vous modifiez le profil dans la base de connaissances, le chatbot prend en compte le choix du nouveau profil dans le test.
:::

## Configuration du composant webchat V2


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
            <td>Couleur primaire en hexa</td>
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
            <td>Activer le message de bienvenue. (par défaut: true)</td>
        </tr>
		<tr>
            <td>welcome</td>
            <td>Activer l'affichage du message de bienvenue dans la fenêtre de discussion. (par défaut : true)</td>
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
            Si auncune configuration n'est spécifiée, le composant génère un identifiant unique qui est enregistré dans le navigateur.
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
            <td>Image de fond (par défaut: square3d) Valeurs possibles: (square3d, communication, square, travel)</td>
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


## Sécurité du chatbot

La webchat géré également **la sécurité du chatbot** d'une meilleure façon. Elle permet de savoir où est déployée la webchat. A des fins de gouvernance, **il est obligatoire** d'indiquer explicitement où se trouve la webchat, et donc de déclarer les différents sites sur lesquels elle sera disponible.

::: warning Attention !
**Sans cette définition explicite, la webchat ne chargera pas sur votre site**. Cela permet d'éviter qu'un individu ajoute la webchat sans que cela soit autorisé.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux5.png')" alt="canaux">
</div>


::: danger Important
La fenêtre Webchat s'affiche également dans le canal de diffusion Webchat (onglet "Paramètres"), afin de vous permettre de tester et parler directement au chatbot en production.
:::

## Configuration de la webpart SharePoint Modern


>Vous pouvez télécharger la webpart [**ici**](http://webchat.witivio.com/webpart/witivio-webchat.sppkg)


Pour ajouter le composant WebPart dans votre SharePoint Modern, vous devez ajouter le package sppkg au catalogue des applications.

>Si vous ne disposez pas d'un catalogue d'applications, un administrateur en ligne SharePoint peut en créer un en suivant les instructions de ce guide: [**Utilisez le catalogue des applications pour rendre les applications professionnelles personnalisées disponibles pour votre environnement SharePoint Online..**](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog)

### Déployer le package dans le catalogue d'applications

1. Accédez au catalogue d'applications de votre site.

2. Téléchargez ou faites glisser witivio-webchat.sppkg dans le catalogue des applications. <img :src="$withBase('/assets/img/fr/parametres/canaux6.png')" alt="canaux">

Cela déploie le package de solution côté client. S'agissant d'une solution côté client totalement fiable, SharePoint affiche une boîte de dialogue et vous invite à faire confiance au déploiement de la solution côté client.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux7.png')" alt="low score">
</div>


1. Selectionner Deployer.

## Configurer la webchat

La webchat est maintenant disponible à partir de vos pages sur votre site SharePoint.


1. Modifier une page sur votre site SharePoint
2. Cliquez sur Ajouter un nouveau composant WebPart
3. Si vous faites défiler l'écran vers le bas, vous trouverez la Webpart "Witivio-webchat"

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux8.png')" alt="canaux">
</div>


4. Sélectionnez la. Le composant apparaît, mais la discussion en ligne n'est pas encore configurée.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/canaux9.png')" alt="canauxe">
</div>

::: warning Note
Il n'apparaîtra pas tant que vous ne l'avez pas configuré.
:::

5. Sélectionnez le crayon pour éditer les paramètres. Veuillez vous référer à l'article ci-dessus pour comprendre la configuration.

::: warning Note
Lors de l'ajout de la Webpart à SharePoint, le contexte utilisateur est envoyé via la webchat. Cela signifie que l'utilisateur et le nom de l'utilisateur sont envoyés au bot. N'oubliez pas de consulter vos politiques de confidentialité si vous souhaitez que vos utilisateurs soient anonymes.
:::

## SMS
Conversez avec votre chatbot par sms depuis votre téléphone portable.

Cliquez [**ici**](https://docs.microsoft.com/fr-fr/azure/bot-service/bot-service-channel-connect-twilio?view=azure-bot-service-4.0https://docs.microsoft.com/fr-fr/azure/bot-service/bot-service-channel-connect-twilio?view=azure-bot-service-4.0) pour plus sur la configuration Twiliio.


