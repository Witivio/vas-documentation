# Sondages

Créez un sondage auprès de vos collaborateurs grâce à Virtual Agent Studio.  



Cliquez sur l'onglet **Communication** puis sur **Sondage**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/Sondage.PNG')" alt="Sondage">
</div>

Lancez la création d'un premier sondage en cliquant sur le bouton **nouveau sondage**

Indiquez le nom du sondage que vous souhaitez donner.

Vous pouvez à présent créer un flux de conversation pour votre sondage en cliquant sur le bouton **créer**.

Vous êtes dans l'outil de création. Cette documentation vous donnera les bases pour la création d'un sondage simple. Si vous êtes novice dans la création de flux nous vous invitons à consulter notre partie dédiée aux [**flux de conversation**](/fr/chatbot/connaissances.html#flux-de-conversation), de notre documentation.

Grâce à la liste déroulante, choisissez le type d'interaction que vous souhaitez pour débuter.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/creation-sondage')" alt="Début de sondage">
</div>

Pour l'exemple nous choisissons de poser une question avec une liste de choix. 

Grâce à cette fonctionnalité c'est le bot qui vient parler à l'utilisateur et non l'invere, nous vous invitons donc à ponctuer la conversation pour essayer de la rendre dynamique et augmenter l'immersion de l'expérience conversationelle.

### Heading level 3  Paramètre important

Afin d'enregistrer les réponses reçues de votre sondage vous devrez paramétrer une variable. Cette étape est primordiale pour l'enregistrement et l'interprétation des résultats.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/lancement-sondage')" alt="Première-question">
</div>



Vos utilisateurs peuvent répondre de manière "libre" à votre chatbot. Pour poser une question libre on utilise "poser une question à l'utilisateur" suivi de la variable pour enregistrer les résultats. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/suite-sondage.png')" alt="choix libre">
</div>

Pour créer une question à choix multiple on sélectionne "poser une question à l'utilisateur avec une liste de choix". Avec ce type de question les embranchements possibles sont infinis. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/choix-multiples-sondages.png')" alt="liste de choix">
</div>


Un dernier message à l'utilisateur pour le remercier et on enregistre le travail

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/fin-sondage.png')" alt="choix libre">
</div>


Votre sondage est prêt. Vous pouvez à présent lancer une campagne. 




### Commentaires
---

<Commentaire />
