# Sondages

Create a survey for your collaborators using Virtual Agent Studio.


Click on the  **Communication** tab and then on **Survey**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/Sondage.PNG')" alt="Sondage">
</div>
Create a first survey please use the button **new survey**. And attribute a name to it.

To registrer the questions of your survey you need to use the conversation flow tool. To do it, you can click on  **create**.

## Create a survey

You are in the conversation flow tool.  This documentation will give you the basics to create a simple survey. If you are new to this creation tool please take a look to our dedicaded documentation about 
 [**conversation flow**](/fr/chatbot/connaissances.html#flux-de-conversation).


 You can now use the dropdown and select wich type of interaction you want, to start the conversation with your chatbot.


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/creation-sondage')" alt="Début de sondage">
</div>

In this exemple we chose to ask a simple question with multiple choice to strat the survey. First we decided to ask the user if he is ready to start the survey. At the moment, it is not possible to reschedule the survey. But your users can wait and answer it later. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/startdialog.png')" alt="Première-question">
</div>

With this new feature the chatbot is talking to the user and not the reverse. Please make sure to ponctuate the conversation to make it feel more dynamical to your users and increase the conversational experience. 

::: warning ⚠️
To save every user answers into the survey you have to insert a variable. This step is essential to save the data and interprate the results later.
::: 

You may need your users to answer completely free way to your chatbot. To ask a free way question you can use "ask a question to the user" and add a **variable** to save the results. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/variable.png')" alt="free answer">
</div>


To create a question with differents choices please select **list of choices**. With this type of question the possibilities of your survey are infinite. Then, please use a **variable** to save your users answers.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/listofchoices.png')" alt="list of choices">
</div>

A last message to the user to thanks him and then **save** your work to not loose it. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/save.png')" alt="save your work      ">
</div>

Your survey is created. You can now create a [**survey campaign**](/fr/chatbot/campagne.html#campagne). 




### Commentaires
---

<Commentaire />