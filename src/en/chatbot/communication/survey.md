# Sondages

Create a survey for your collaborators using Virtual Agent Studio.


Cliquez sur l'onglet **Communication** puis sur **Sondage**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/Sondage.PNG')" alt="Sondage">
</div>
Create a first survey using the button **new survey**. First you have to give a name to this survey.

You can create a new "flux de conversation" for you survey clicking the button **create**.

You are in the creation tool.  This documentation will give you the basics to create a simple survey. If you are new to this creation tool please take a look to our dedicaded documentation about "flux de conversation" .
 [**flux de conversation**](/fr/chatbot/connaissances.html#flux-de-conversation)


 You can now use the dropdown and select wich type of interaction you need, to start the conversation with your chatbot.


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/creation-sondage')" alt="Début de sondage">
</div>

You can chose to ask a simple question with multiple choice to strat the survey. In this exemple we chose to ask the user if he is ready to strat the conversation.



<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/lancement-sondage')" alt="Première-question">
</div>

Grâce à cette fonctionnalité c'est le bot qui vient parler à l'utilisateur et non plus l'inverse. Nous vous invitons donc à ponctuer la conversation pour essayer de la rendre dynamique et augmenter l'immersion de l'expérience conversationelle.

::: warning ⚠️
Afin d'enregistrer les réponses reçues de votre sondage vous devrez paramétrer une variable. Cette étape est primordiale pour l'enregistrement et l'interprétation des résultats.
:::



Vos utilisateurs peuvent répondre de manière "libre" à votre chatbot. Pour poser une question libre on utilise "poser une question à l'utilisateur" suivi de la variable pour enregistrer les résultats. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/suite-sondage.png')" alt="choix libre">
</div>

Pour créer une question à choix multiple on sélectionne "poser une question à l'utilisateur avec une liste de choix". Avec ce type de question les embranchements possibles sont infinis. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/choix-multiples-sondages.png')" alt="liste de choix">
</div>


Un dernier message à l'utilisateur pour le remercier et on enregistre pour ne pas perdre l'avancement.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/fin-sondage.png')" alt="choix libre">
</div>


Votre sondage est prêt. Vous pouvez à présent  [**lancer une campagne**](/fr/chatbot/campagne.html#campagne). 




### Commentaires
---

<Commentaire />
