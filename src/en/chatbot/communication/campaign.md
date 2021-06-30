# Campaign

To start a push campaign, you have to create a campaign. Click on
“**Communication**” tab then on “**Campaign**”.

::: warning ⚠️
This tab is available for chatbot with Skype for Business and Microsoft Teams as channel.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign1.PNG')" alt="low score">
</div>


Click on “**NEW CAMPAIGN**” to create a new campaign. To configure it, name it and
add the message that the chatbot will send. You can customize the message as
follows:

```
Hello, [FIRSTNAME] +[LASTNAME].
```

When you add or modify a campaign, a text editor allows you to format the
message.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign2.png')" alt="low score">
</div>




Choose the channel on which you want to boradcast your campaign: Skype or Microsoft Teams. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign3.png')" alt="low score">
</div>




Recipients can be added from an existing [**user list**](/en/chatbot/communication/user_lists.html) but also by
creating a new mailing list.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign4.png')" alt="low score">
</div>




Select the day from which the message will be sent (1), the duration of the
campaign (2) and then indicate the working hours of your companies (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign5.png')" alt="low score">
</div>




### Only for the channel Skype
---
You can schedule the sending of the message when the recipients are "available"
on Skype, or push the message when the status of the recipients is "available",
"absent" or "busy" in Skype.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign6.png')" alt="low score">
</div>




The programmed message is sent randomly and not at the same time to all
recipients. When a campaign lasts several days, here is the sending process in
case of absence of the recipient:

-   At a pre-calculated time
-   10 minutes later
-   At the exact time after the time of the first message (for example at 2:27
    p.m. then at 3:00 p.m.)
-   The next day during opening hours

This process is repeated 3 times, after this, the message will then be
unprogrammed.

Once the campaign is over, you will find in the "Campaigns" tab a report to
evaluate the success of your communication. For example, the click engagement
measures the number of people who clicked on a link included in the sent
message.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign7.png')" alt="low score">
</div>


A campaign can be modified only when it has not yet been broadcast. 
Once it has been released, you will be able to get information about it or delete it.


Click on « iNFORMATION » to know:

-   The channel
-   The message of the campaign
-   The name of the list
-   The starting date and hour 
-   The duration of the campaign


>   You can also delete the campaign (DELETE button) or test it (TRY button).

::: warning ⚠️
Once a campaign has started, it cannot be modified or cancelled. 
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign8.png')" alt="low score">
</div>



The “TRY” button allows you to test if the campaign works well.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign9.png')" alt="low score">
</div>



Enter your e-mail address to check the efficiency of your campaign. If the
campaign is configured well, you will get the message of the chatbot.

::: tip 💾 
Do not forget to save changes.
:::

::: tip How to create a push campaign
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/_Vhu2RpzHbY?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::

## Campagnes Teams

Click on **Communication** tab and then on **Teams Campaigns**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/menucampagneteams.PNG')" alt="campagnesteams">
</div>

Donnez un nom à votre campagne et choisissez le type de message que vous souhaitez programmer, parmis les formats suivants : 
* Idée
* Succès
* Important 
* Adaptive card 
* Message

### Idée 

Configurez le message d'idée que vous souahitez envoyer à l'aide de l'éditeur de texte. Une fois votre message ajouté, cliquez sur Suivant puis Actualiser l'aperçu avant de continuer la configuration de votre message push. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/teamsidee.PNG')" alt="campagnesteams">
</div>

### Succès 

A l'aide de l'editeur de texte, configurez le message de succès, par exemple pour faire une annonce. Une fois votre message ajouté, cliquez sur Suivant puis Actualiser l'aperçu avant de continuer la configuration de votre message push. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/teamssucces.PNG')" alt="campagnesteams">
</div>

### Important 

A l'aide de l'editeur de texte, configurez un message important, par exemple pour communiquer une deadline. Une fois votre message ajouté, cliquez sur Suivant puis Actualiser l'aperçu avant de continuer la configuration de votre message push. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/teamsimportant.PNG')" alt="campagnesteams">
</div>

### Adaptive card

Créez votre message push en format Adaptive Card. Ajoutez un titre, une image, du texte ou un bouton. Une fois votre message ajouté, cliquez sur Suivant afin de continuer la configuration de votre message push. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/teamsadaptivecard.PNG')" alt="campagnesteams">
</div>

### Message 

Utilisez ce format pour créer un message simple. Une fois votre message ajouté, cliquez sur Suivant puis Actualiser l'aperçu avant de continuer la configuration de votre message push. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/teamsmessage.PNG')" alt="campagnesteams">
</div>

Une fois le message créer, vous avez la possibilité de distribuer le message : 

* à une nouvelle liste de diffusion
* une liste de diffusion existante
* à tous les utilisateurs : il s'agit des utilisateurs ayant installés l'application du chatbot sur Teams. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagnesteamsdestinataires.PNG')" alt="campagnesteams">
</div>

Pour rappel, pour qu'un utilisateur reçoit le message push programmé, il doit avoir installé le chatbot sur Microsoft Teams. 

Entregistrez votre brouillon. Cliquez sur MODIFIER votre campagne si vous souhaitez :

- Modifier votre message
- Supprimer la campagne 
- Essayer la campagne 
- Envoyer la campagne 

* **ESSAYER** 

Avant d'envoyer la campagne, vous avez la possiblité de la tester. Ajoutez une adresse mail puis cliquez sur vérifier. Vous pourrez ainsi vérifier si l'utilisateur a bien l'application du chatbot d'installé dans Microsoft Teams. L'envoi ne sera pas disponible tant que l'adresse e-mail ne correspond pas à un utilisateur valide. 


* **ENVOYER** 

Lorsque vous modifiez votre message, vous pouvez décider de l'envoyer maintenant ou de programmer l'envoi. 

Cliquez sur la fleche à droite du bouton ENVOYER MAINTENANT, puis sélectionnez Envoyer plus tard : l'envoi de la campagne peut être programmé avec un différé de maximum 6 jours.

La campagne est ensuite enregristrée et envoyé à l'heure décidée. 

Une fois la campagne terminée, retrouvez un rapport dans l'onglet Campagne Teams > **Terminé**

Cliquez sur RAPPORT pour avoir un résumé de la campagne : 

- Nom de la campagne 
- Date et heure d'envoi
- Résultat : erreur, succès, reporté ou en cours
- Destinataires 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagnesteamsrapport.PNG')" alt="campagnesteams">
</div>



### Comments
---

<Commentaire />
