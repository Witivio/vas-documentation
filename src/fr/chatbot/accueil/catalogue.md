# Catalogue Teams

La page **"Catalogue teams"** a pour but  de permettre à un administrateur/coach de publier ou retirer l'application **"Chatbots"** dans le catalogue teams de manière automatique ou manuel.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/CatalogueTeams.PNG')" alt="catalogue teams">
</div>

## Application de catalogue

Lorsque vous possèdez plusieurs bots sur Teams, il peut être judicieux d'installer une application pour permettre à vos utilisateurs de les identifiers plus facilement.
Cette application de catalogue recense tous les chatbots disponibles sur Microsoft Teams que vous avez choisi de "publier" sur l'application (voir [publication d'un bot dans Teams](/fr/chatbot/parametres/canaux.html#microsoft-teams))

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/chatbotApp.PNG')" alt="autorisation teams">
</div>

Cette application permet d'afficher aux utilisateurs la liste des chatbots déployé dans le tenant Teams.
Elle leur rappelle le nom et le perimetre de chaque chatbot.

## Installation automatique ##
------------------------------

### Autorisation ###
------------------------------

::: warning 
Pour publier automatiquement l'application **"Chatbots"** et les applications Teams de chaque chatbot, il est necessaire d'être autorisé par un administrateur du tenant.
**Sans cette autorisation explicite, vous ne pourrez pas automatiser vos installation d'application Teams.**
:::

Les droits pour autoriser l'installation d'application Teams sont les suivants :
| **Name** | Witivio - BotCatalog |
| --- | --- |
| **ID** | b4633c92-1b8e-4dbf-86cb-51ec202317c9 |
| **Permissions** | Delegated permissions |
| **Scopes** | AppCatalog.Read.All, AppCatalog.Submit, TeamsAppInstallation.ReadWriteForUser, offline_access, openid, |


Afin d'effectuer la publication de l'application **"Chatbots"** dans le catalogue teams, Witivio a besoin de l'autorisation d'un **Administrateur du tenant**.

Cliquez sur le bouton **"je t'autorise"** afin de commencer le processus d'authenfication.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/Autorisationauto.PNG')" alt="autorisation teams">
</div>

Vous devriez voir apparaitre une fenêtre d'authentification microsoft.

**Identifiez-vous** avec les informations d'un **admnistrateur du tenant**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/popupautorisation.PNG')" alt="autorisation teams">
</div>

Une fois l'autorisation effectuée avec succès, vous devriez voir l'état au dessus du bouton **"je t'autorise"** passé à **connecté** comme sur l'image ci-dessous.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/authSucess.PNG')" alt="autorisation teams">
</div>

### Publication ###
------------------------------
Une fois **connecté** vous pouvez publier l'application automatiquement depuis la plateforme en cliquant sur le bouton **Publier**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/publishApp.PNG')" alt="publication application teams">
</div>

Une fois la publication effectué vous devriez voir un bouton **Retirer** apparaître afin de retirer l'application du catalogue Teams.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/unpublishApp.PNG')" alt="publication application teams">
</div>


## Installation manuelle ##
------------------------------
Si vous ne possédez pas de compte **administrateur du tenant** vous pouvez publier l'application "Chatbots" manuellement dans Teams.

### Télechargement ###
Depuis la page **"Catalogue Teams"**, téléchargez le package de l'application en cliquant sur le bouton **télécharger** comme l'image ci-dessous.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/downloadZip.PNG')" alt="download application teams">
</div>

### Publication ###

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
Demandez à un administrateur (voir [démarche](/fr/chatbot/acceuil/catalogue.html#administration)) :
* D'accepter que l'application **Chatbots** soit publié dans le catalogue Teams.
* De vous transmettre **l'id de l'application dans le catalogue**.

Une fois que l'admnistrateur aura accepter votre application, le statut de l'application **Chatbots** devrait passer à **Approuvé**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/approuved.PNG')" alt="application approuvé">
</div>

Dès lors vous pourrez retrouver l'application dans votre **catalogue Teams**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/chatbotsCatalogues.PNG')" alt="application approuvé">
</div>

Pour finaliser la publication retourner sur la page Catalogue de la plateforme et renseignez **l'id de l'application** fourni par l'administrateur lorsqu'il a approuvé l'application **Chatbots**.
Puis cliquez sur **Enregistrer l'id de l'application**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/idApp.PNG')" alt="application approuvé">
</div>

::: danger 🔴
Sans l'étape du dessus, l'application ne sera pas fonctionnel.
:::

### Administration ###
En tant qu'**administrateur** rendez vous sur le **centre d'administration Microsoft Teams** depuis le **portail office**.
Accéder à l'onglet **Gérer les applications**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/page_accueil/manageApp.PNG')" alt="application approuvé">
</div>

Grâce à la barre de recherche, retrouvez l'application **Chatbots** dans la liste et cliquez dessus.
Vous accédez à une page d'information de l'application **Chatbots**.
Dans  un premier temps transmettez l'**id de l'application** à la personnes ayant publiée l'app.
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

#### Commentaires
---

<Commentaire />