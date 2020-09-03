# Pré requis Teams

## Pré-requis

Avant de pouvoir effectuer cette étape, votre chatbot doit être créé sur la plateforme Witivio (et donc apparaitre dans la liste des chatbots). Le chatbot ne doit pas forcément être configuré. Vous pouvez effectuer cette étape lorsqu'il vient d'être créé ou lors de l'ajout d'un canal.

## Création d'un Azure Bot Channel

::: warning ⚠️
Avant de commencer, vous devez avoir accès à une souscription Azure.
:::

Connectez-vous au portail [https://portal.azure.com](https://portal.azure.com)

* Cliquez sur **Créer** une ressource

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite1.png')" alt="click on create a resource">
</div>


* Dans la barre de recherche, **entrez bot channel registration**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite2.png')" alt="bot channel registration">
</div>


* Cliquez sur **créer**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite3.png')" alt="click on create">
</div>

| Nom du bot        | Le nom du bot que vous souhaitez. Une bonne pratique consiste à mettre le même que dans l'interface de Witivio |
|---------------------|-------------------------------------------------------------------------------------------|
| Subscription        | Votre souscription Azure                                                                   |
| Groupe de ressource    | Le groupe de ressource Azure que vous souhaitez                                                       |
| Localisation            | La localisation du service que vous allez créer. North Europe = Dublin              |
| Pricing Tier        | S1                                                                                        |
| Url de message        | L'url affichée dans l'interface Witivio                                                |
| Application Insight | Désactivé                                                                                  |

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite4.png')" alt="bot channel">
</div>


* Créez le bot channel
* Cliquez sur **Settings** puis sur le lien **Manage**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite5.png')" alt="Click on Settings and in the link Manage">
</div>


* Cliquez sur **New Clients secret** puis selectionnez **Never**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite6.png')" alt="New Clients secret">
</div>


* Copiez et **garder** précieusement la valeur crée

Une fois créé, il faut maintenant activer Teams sur ce nouveau canal

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite7.png')" alt="Teams must now be activated">
</div>


Cliquez sur channels puis cliquez sur l'icone Teams

Cliquez sur **sauvegarder**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite8.png')" alt="click on save">
</div>


Acceptez les conditions d'utilisation de Microsoft.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/prerequisite9.png')" alt="Accept Microsoft's terms of use.">
</div>


## Configurer le canal sur l'application Witivio 365

Votre canal est créé sur Azure. Vous avez donc toutes les informations pour l'activer dans l'interface. Pour cela, copiez le microsoft App Id et le Microsoft Password dans les champs correspondant.

Votre canal est configuré et votre chatbot sera actif sur Teams dans quelques minutes.

### Ajouter une image au bot.

Par défaut votre chatbot Teams n'a pas d'image.

Pour lui ajouter une photo, accèdez au bot channel sur azure. Cliquez sur Settings puis Add a picture.


::: tip 💾
N'oubliez pas d'enregistrer!
:::



### Commentaires
---
<Commentaire />
