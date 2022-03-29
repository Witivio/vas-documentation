# Pré requis Teams

## Pré-requis

Avant de pouvoir effectuer cette étape, votre chatbot doit être créé sur la plateforme Witivio (et donc apparaitre dans la liste des chatbots). Le chatbot ne doit pas forcément être configuré. Vous pouvez effectuer cette étape lorsqu'il vient d'être créé ou lors de l'ajout d'un canal.

## Création d'un Azure Bot

::: warning ⚠️
Avant de commencer, vous devez avoir accès à une souscription Azure.
:::

Connectez-vous au portail [https://portal.azure.com](https://portal.azure.com)

* Cliquez sur **Créer** une ressource

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite1.png')" alt="click on create a resource">
</div>


* Dans la barre de recherche, **entrez 'Azure Bot'**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite2.png')" alt="bot channel registration">
</div>


* Cliquez sur **créer**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite3.png')" alt="click on create">
</div>

| Champ           | Commentaires          |
|---------------------|-------------------------------------------------------------------------------------------|
| Descripteur du bot        | Le nom du bot que vous souhaitez. Une bonne pratique consiste à mettre le même que dans l'interface de Witivio. S'il n'est pas disponible, vous pouvez ajouter le nom de votre société en préfixe. Exemple : "contoso-mary" |
| Subscription        | Votre souscription Azure                                                                   |
| Groupe de ressource    | Le groupe de ressource Azure que vous souhaitez                                                       |
| Localisation            | La localisation du service que vous allez créer. North Europe = Dublin              |
| niveau tarifaire        | Standard                                                                                        |
| Microsoft App Id        | choisissez **Plusieurs locataire** et **Créer un nouvel ID d'application Microsoft**                                               |

::: warning ⚠️ Attention
Si vous ne choisissez pas **plusieurs locataire**, le chatbot ne fonctionnera pas et vous devrez recréer un nouveau bot Azure.
La raison est que le bot est créé dans votre tenant mais est aussi utilisé par le tenant de Microsoft BotFramework.com
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite4.png')" alt="bot channel">
</div>



* Cliquez sur Vérifier + créer
* Cliquez sur Créer

Une fois votre bot créé, depuis la vue d'ensemble Azure, cliquez sur **Entrées**

* Verifiez que votre **appType** est bien **MultiTenant**
* Recupérez votre password d'application dans l'input **msAppPassword**. Copiez le et **garder** le précieusement.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite5.png')" alt="Click on Settings and in the link Manage">
</div>


* Cliquez sur **Vue d'ensemble** puis sur **Accéder à la ressource**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite6.png')" alt="New Clients secret">
</div>


Il faut maintenant activer Teams sur ce nouveau bot et modifier les paramètres necessaires à son bon fonctionnement.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite7.png')" alt="Teams must now be activated">
</div>


* Dans la section **paramètres** cliquez sur **canaux** puis cliquez sur **Microsoft Teams**


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite8.png')" alt="click on save">
</div>

* Acceptez les conditions d'utilisation de Microsoft.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite9.png')" alt="Accept Microsoft's terms of use.">
</div>

* Cliquez sur **Appliquer**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite10.png')" alt="Apply">
</div>


## Configurer le canal sur l'application Witivio 365

Votre bot est créé sur Azure et configuré pour Microsoft Teams. Vous avez donc toutes les informations pour l'activer dans l'interface. Pour cela, copiez le icrosoft App Id et le Microsoft Password dans les champs correspondant.

Copiew l'url affiché dans l'interface.
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite10.1.png')" alt="Apply">
</div>
De retour dans sur votre bot dans Azure dans la section **Paramètres** cliquez sur **Configuration**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite11.png')" alt="Configuration panel">
</div>

Collez l'url dans l'input **Point de terminaison de la messagerie**
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite12.png')" alt="Configuration panel filled">
</div>

Cliquez sur **Appliquer**

Votre canal est configuré et votre chatbot sera actif sur Teams dans quelques minutes.

### Ajouter une image au bot.

Par défaut votre chatbot Teams n'a pas d'image.

Pour lui ajouter une photo, accèdez a votre bot sur azure.
Dans la section **paramètres** cliquez sur **profil de bot**
Dans ce menu, vous pouvez changer l'icone du bot dans Microsoft Teams ainsi que son nom.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite13.png')" alt="Configuration panel filled">
</div>

::: tip
Dans ce menu, le nom du bot n'est pas forcément unique.
Vous pouvez donc le changer pour mettre le nom que vous souhaitez voir dans Microsoft Teams
:::


### Commentaires
---

<Commentaire />
