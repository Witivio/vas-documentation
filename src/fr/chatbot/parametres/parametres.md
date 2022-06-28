# Paramètres

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/setting1.png')" alt="low score">
</div>

## Identité

Cet onglet permet non seulement d’avoir des informations sur l’identité du chatbot, mais également de changer la photo, le nom du chatbot (à l'aide du petit stylo) ainsi que la description.

Vous pouvez également demander la suppresion du chatbot.

Cet onglet vous permet aussi d'ajouter un ou plusieurs tags à votre chatbot. Par exemple, ajoutez le tag Chatbot démo, Chatbot test, en construction, ... Ces tags s'affichent à côté du nom du chatbot au niveau de la page d'accueil. 


## Autorisations

En cliquant sur « je t’autorise » , le chatbot sera mis à jour. Il est conseillé d’actualiser cette autorisation tous les 90 jours. 

Cette autorisation permet au chatbot de récupérer les fichiers Visio afin de les synchorniser. Lorsque l'autorisation est expirée, cliquez sur le bouton "Je t'autorise" pour renouveler votre connexion à SharePoint.

::: tip 💾
N’oubliez pas de sauvegarder !
:::


## Tableaux de bord

Cet onglet vous permet de choisir la date à partir de laquelle vous souhaitez afficher les différentes informations des tableaux de bord.

[**Tableau de bord de performance**](/fr/chatbot/tableaux_de_bord/rapport_performance.html)

[**Tableau d'usage**](/fr/chatbot/tableaux_de_bord/rapport_usage.html)

Lorsque vous réinitialisez la date, les statiques de performance et d'usage du chatbot seront affichées uniquement à partir de la date sélectionnez. Effacez celle-ci si vous souhaitez revenir aux informations précédentes.


## Sharepoint

Vous pouvez choisir d’importer un site et une bibliothèque Sharepoint.Cette bibliothèque SharePoint est nécessaire pour stocker vos fichiers Visio, qui sont utilisés pour créer des arbres de conversation, des dialogues initiaux et l'escalade de type arbre de conversation.

Une fois la bibliothèque configurée, cliquez sur "Importer depuis SharePoint" et ajoutez l'URL de la bibliothèque.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/setting2.png')" alt="low score">
</div>


Lorsque l'autorisation a expiré, accèdez à l'onglet Autorisation puis sélectionnez "Je t'autorise" et sauvegardez en haut à droit de votre page.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/setting3.png')" alt="low score">
</div>


Suivez les étapes suivantes pour renouvler l'autorisation : Paramètres > Paramètres > Autorisations > "Je t'autorise"

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/setting4.png')" alt="low score">
</div>



## Clef d'API

Lorsque que le chatbot fait appel à une API via un arbre de conversation, la clef d'API est envoyée. Afin de vérifier et sécuriser les appels aux api externes, vous pouvez intégrer la vérification de cette clé d'api externe dans vos API.

Si la clef n'est pas envoyée dans le header "witivio-apikey" de la requête alors c'est que l'appel ne provient pas du chatbot et donc il est préférable d'ignorer l'appel et de renvoyer une réponse HTTP 403.

Si vous pensez que la clef d'API n'est plus sécurisée, alors vous pouvez la régénérer. N'oubliez pas de la modifier dans vos API.

::: tip 💾
N’oubliez pas de sauvegarder !
:::

**Suppression des données**
------------------------

Cet onglet vous permet de supprimer les données du chatbot. Sélectionnez une date et toutes les données précédant cette date seront supprimées.

Vous pouvez décider de supprimer uniquement les données d'un utilisateur en particulier en indiquant son nom.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/setting5.png')" alt="low score">
</div>



### Commentaires
---

<Commentaire />
