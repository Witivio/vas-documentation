# Campagnes

Créez une campagne à l'aide de la plateforme Witivio afin de lancer une communication push. 

::: warning ⚠️
L'onglet Communication est disponible uniquement lorsque votre chatbot est déployé sur Microsoft Teams et/ou Skype.
:::


## Campagnes Skype


Cliquez sur l'onglet **Communication** puis sur **Campagne Skype**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/menucampagneskype.PNG')" alt="campagneskype">
</div>


Donnez un nom à votre campagne et programmez le message que vous souhaitez envoyer.

Lorsque vous ajoutez ou modifiez une campagne, **un éditeur de texte** permet la mise en forme du message à envoyer.

Vous pouvez personnaliser votre message de la manière suivante :

>Bonjour, [FIRSTNAME] +[LASTNAME].

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne2.png')" alt="campagneskype">
</div>


Les destinataires peuvent être ajoutés à partir d’une [**liste de diffusion**](/fr/chatbot/communication.html#communication-push) déjà existante mais également en créant une nouvelle liste de diffusion (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne4.png')" alt="low score">
</div>


Sélectionnez le jour à partir duquel le message sera envoyé (2), la durée de la campagne (3) puis indiquez les horaires de travail de vos entreprises (4).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne5.png')" alt="low score">
</div>

**La durée d'une campagne** permet de définir le créneau horaire pendant lequel le message sera distribué. Par exemple, si vous choisissez une durée de deux heures à partir de 10h, le message push sera distribués de façon aléatoire aux utilisateurs à différents horaires de 10h à midi: 
- utilisateur A à 10h15
- utilisateur B à 11h05
- utilisateur C à 11H32 
etc. 


Pendant la configuration de votre campagne, vous avez la possibilité de prévoir un envoi uniquement lorsque les destinataires apparaissent "disponible" ou de pousser le message lorsque le statut des destinataires est "disponible", "absent" ou "occupé" dans Skype.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne6.png')" alt="low score">
</div>


Le message programmé n'est pas diffusé en même temps à tous les destinataires mais de manière aléatoire. Lorsqu'une campagne dure plusieurs jours, voici le processus d'envoi en cas d'absence du destinataire :

-   A une heure précalculé
-   10 minutes après
-   À l’heure exacte après l’heure du premier message (par exemple à 14h27 puis à 15h00)
-   Le lendemain aux heures d’ouverture

Ce processus est répété 3 fois, le message sera ensuite deprogrammé.


### Avant la diffusion de la campagne push ...


Une campagne ne peut être modifiée que lorsqu'elle n'a pas encore été diffusée. Une fois diffusée, vous pourrez obtenir les informations à son sujet ou la supprimer.

Cliquez sur "**INFORMATIONS**" en haut à droite pour connaître :

-   Le canal de diffusion
-   Le message diffusé
-   Le nom de la liste de diffusion
-   la date et l'heure de démarrage
-   la durée de la campagne


Vous pouvez également supprimer ou décider de tester votre campagne.

::: warning ⚠️
Une fois une campagne démarrée, elle ne pourra être ni modifée ni annullée.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne8.png')" alt="low score">
</div>


Le bouton « **ESSAYER** » en haut à droite vous permet donc de tester le bon fonctionnement de votre campagne.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne9.png')" alt="low score">
</div>


Entrez votre adresse E-mail afin de vérifier l’éfficacité de votre campagne. Le chatbot vous envoie un message conforfement aux configurations faites en amont.

Voici un exemple.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne10.png')" alt="low score">
</div>


::: tip 💾
N’oubliez pas d’enregistrer après toute modification !
:::

::: tip How to create a push campaign
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/_Vhu2RpzHbY?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::

### Une fois votre campagne diffusée ...


Une fois la campagne diffusée, vous retrouverez dans l'onglet "**Campagnes**", en utilisant le filtres en haut à droite, un rapport afin d'évaluer le succès de votre communication. Par exemple l’engagement de clic mesure le nombre de personnes qui ont cliqué sur un lien présent dans le message envoyé.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne7.png')" alt="low score">
</div>

## Campagnes Teams

Cliquez sur l'onglet **Communication** puis sur **Campagne Teams**. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/menucampagneteams.PNG')" alt="campagnesteams">
</div>

Donnez un nom à votre campagne et choisissez le type de message que vous souhaitez programmer, parmi les formats suivants : 
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

A l'aide de l'éditeur de texte, configurez le message de succès, par exemple pour faire une annonce. Une fois votre message ajouté, cliquez sur Suivant puis Actualiser l'aperçu avant de continuer la configuration de votre message push. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/teamssucces.PNG')" alt="campagnesteams">
</div>

### Important 

A l'aide de l'éditeur de texte, configurez un message important, par exemple pour communiquer une deadline. Une fois votre message ajouté, cliquez sur Suivant puis Actualiser l'aperçu avant de continuer la configuration de votre message push. 


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

Enregistrez votre brouillon. Cliquez sur MODIFIER votre campagne si vous souhaitez :

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



## Campagnes de sondage

Cliquez sur l'onglet **Communication** puis sur **Campagne teams** ou bien **Campagne Skype** selon votre besoin.  



Rendez-vous dans l'onglet **terminé** . Depuis cette interface vous pouvez consulter toutes les campagnes. Nous allons donc sélectionner une campagne de sondage.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagnetermine.PNG')" alt="campagnes terminées">
</div>


## Engagement de la campagne


Dans ce tableau récapitulatif de campagne nous retrouvons plusieurs élements liés à l'envoi de la campagne : 

- Destinataires (le nombre de personnes à qui cette campagne a été envoyée)
- Messages envoyés (le nombre de messages ayant été reçus)
- Messages vus (les personnes ayant effectivement reçues le sondage)
- Messages en erreur (Les messages ayant rencontré des problèmes)


En bas vous retrouverez le détail de chaque élement avec la liste d'utilisateurs pour chaque etat. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/sondage-board.PNG')" alt="engagement de campagne">
</div>



## Detail des réponses


On trouve ici le nombre de réponses reçues ainsi que le temps de réponse moyen au sondage. Le temps de réponse est calculé à partir de l'instant où l'utilisateur va répondre à la première question du sondage. 

Vous pouvez visualiser deux types de "dernière réponse". Les réponses simples sous forme de texte s'afficheront comme ceci : 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/reponse-simple.PNG')" alt="réponse simple">
</div>

Tandis que les réponses à choix multiples seront affichées sous forme de camembert, permettant l'interprétation des différents choix et de leurs résultats. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/detailchoix.PNG')" alt="visualisation du choix du détails">
</div>


En cliquant sur le lien **plus de détails** disponible sous chaque question vous pouvez visualiser l'onglet permettant de visualiser l'ensemble des réponses pour chaque utilisateur par rapport à la question sélectionnée. 



## Detail des réponses


Vous pouvez aussi faire le choix de visualiser les résultats par utilisateur. Pour ouvrir les réponses d'un utilisateur vous pouvez cliquer sur son nom de compte Microsoft. 






<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/reponseutilisateur.PNG')" alt="onglet : réponses utilisateurs">
</div>


Vous pouvez à présent constater le détail des réponses pour chaque utilisateur. Dans le cas, où vous auriez activé l'anonymisation le compte Microsoft ou son adresse-mail seraient masqués. Vous pouvez naviguer à travers les réponses de chaque utilisateur en utilisant le fleches directionnelles à côté de l'adresse de l'utilisateur.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/reponseutilisateur.PNG')" alt="onglet : réponses utilisateurs">
</div>





## Consulter les campagnes 

Pour paramétrer une campagne déjà pré-programmée rendez-vous dans l'onglet **Brouillon** et cliquez sur **Configurer** de l'un des sondages. 


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/configurerclonesondage.PNG')" alt="configurer un sondage">
</div>

Dans cette nouvelle fenêtre vous pouvez à présent modifier la campagne selon vos souhaits, et utiliser les différentes fonctionnalités : 

- Supprimer
- Essayer (permet d'envoyer la campagne à un seul utilisateur pour tester)
- Cloner (permet créer une copie de cette campagne et de l'envoyer dans les brouillons)
- Envoyer Maintenant 
- Enregistrer



Enfin, vous pouvez sélectionner la liste de diffusion en choisissant **une liste existante** ou bien d'envoyer à **tous les utilisateurs**.
En sélectionnant une liste existante vous pouvez visualiser le nombre d'utilisateurs utilisant Teams, il s'agit donc du nombre d'utilisateurs ciblés par cette campagne.


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/liste.PNG')" alt="liste d'utilisateurs">
</div>


Une fois la campagne envoyée il faut parfois attendre plusieurs minutes avant la réception de celui-ci puisqu'il dépend du temps de traitement des paramètres de votre campagne. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/teams.PNG')" alt="résultat teams">
</div>


### Commentaires
---

<Commentaire />
