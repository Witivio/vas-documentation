# Accessibilité du chatbot


Il est possible de restreindre l'accès au chatbot au travers trois moyens d'autorisation :

* par domaine
* en configurant une liste blanche
* via une API d'autorisation

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/chatbot1.png')" alt="low score">
</div>



## Restriction par domaine

Par défaut, si vos paramètres de fédération le permettent, le chatbot est accessible à tout le monde sur Skype for Business même en dehors de l’entreprise (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/chatbot2.png')" alt="low score">
</div>



Cependant vous pouvez restreindre son accès sur le canal de diffusion Skype for Business en entrant le domaine auquel vous souhaitez autoriser l’accès. Seul un utilisateur des domaines cités en configuration pourra échanger avec le chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/chatbot3.png')" alt="low score">
</div>



## Liste blanche

Vous pouvez également restreindre l'accès au chatbot en paramétrant une liste blanche. Cette option est disponible pour tous les canaux de diffusion.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/chatbot4.png')" alt="low score">
</div>


Vous pouvez créer une nouvelle liste ou sélectionner une liste d'utilisateurs déjà existante.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/chatbot5.png')" alt="low score">
</div>



L’adresse qui permet d’identifier un utilisateur dans la liste blanche change en fonction du canal de diffusion:

* Skype for Business: adresses SIP
* Microsoft Teams: adresses UPN
* Webchat : l'adresse dépend de la configuration

::: warning ⚠️
Lorsqu'une la liste blanche est supprimée, le chatbot est à nouveau accèssible à tout le monde.
:::

::: tip 💾
N'oubliez pas d'enregistrer avant de quitter la page.
:::

## API d'autorisation


Configurez des appels à des API externes afin d'autoriser le chatbot à communiquer avec un utlisateur.

Pour cela, ajoutez un nouveau moyen d'autorisation et sélectionnez "API d'autorisation".

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/chatbot6.png')" alt="low score">
</div>




* Sélectionnez ensuite le verbe HTTP souhaité : POST ou PUT
* Renseignez l'URL de votre API
* Renseignez le corps complémentaire que vous souhaitez envoyer à votre API. Exemple : {name:'Dupont'}
* Renseignez le header à envoyer à votre API, en indiquant la clef ainsi que la valeur. Plusieurs Headers peuvent être ajoutés (bouton "+ AJOUTER").

Vous avez la possibilité de tester votre API d'autorisation avant publication. Pour cela, utilisez le bouton "ESSAYER" en haut à droite de votre page de configuration.

::: tip 💾
Une fois votre API d'autorisation configurée, n'oubliez pas d'enregistrer !
:::

