# FAQ


Cliquez sur « **Connaissainces** » puis « **FAQ** »

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb1.png')" alt="low score">
</div>


### A quoi sert ? 

L'onglet FAQ est la base de connaissances de votre chatbot. Il vous permet de configurer toutes les questions auxquelles vous voulez que le chatbot réponde ainsi que les réponses attendues.

### Comment ?
---
Construire une base de connaissances, c'est répondre aux questions suivantes :

-   A quoi doit répondre mon chatbot ?.
-   Qui sont les utilisateurs de mon chatbot ?.

Avant de débuter la construction de votre base de connaissances, n'hésitez pas à consulter les [**limitations techniques**](/fr/chatbot/limitations.html).


## Import

Si vous possédez déjà une base de connaissances créée en amont (questions/réponses issues d'une FAQ), vous pouvez importer ces données sur le studio. Le fichier à importer doit être un fichier Excel avec le format suivant :

-   **Colonne 1** : Les questions
-   **Colonne 2:** Les réponses
-   **Les alternatives:** La question sera différente (en dessous de la question dite "mère"), mais la réponse sera identique.

::: tip Qu'est-ce qu'une question mère ?
La question mère est la question qui apparaît en évidence dans votre base de connaissances. Une question mère doit avoir plusieurs alternatives. Le chatbot ne fera pas la différence entre "question mère" et "alternative" lorsqu'il s'agira de comprendre l'utilisateur.
user.
:::

Une question mère (1), la réponse à la question mère (2) et les alternatives correspondantes (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb2.png')" alt="low score">
</div>

::: warning ⚠️
**Dans la colonne 2 (réponse)**
:::

Copier/Coller de la même réponse ! Ne pas la recopier à la main car s’il y a une différence, l’alternative ne sera pas rattachée à la question mère.

::: warning ⚠️
**Titre et en-tête**
:::

Le fichier à importer ne doit pas comporter de titre de colonne

Cliquez [**ici**](https://witivio.blob.core.windows.net/static/samples/exemple%20import.xlsx) pour télécharger un exemple de fichier d'import

Pour importer un fichier, cliquez sur "Importer"(1) en haut à droite de la page FAQ. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb3.png')" alt="low score">
</div>


Choisissez ensuite la [**catégorie**](/fr/chatbot/connaissances/categories.html) dans laquelle vous souhaitez importer votre fichier.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb4.png')" alt="low score">
</div>

Cliquez ensuite sur Ajouter. Les questions importées seront ainsi intégrées à la base de connaissances du chatbot. 

## Export

Le bouton **EXPORTER** permet de télécharger toute la base de connaissances sous format Excel. Il est possible d'appliquer des filtres avant l'export. Par exemple, filtrez par catégorie, par type de réponses avant d'exporter. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb5.png')" alt="low score">
</div>

## Import avancé

Une fois votre base de connaissances exportée, apportez les modifications souhaitées, sauvegardez votre export Excel puis importez-le à l'aide du bouton **IMPORT AVANCE**.

Pour cela, cliquez sur la flèche à droite du bouton IMPORTER puis sur Import avancé. Sélectionnez le fichier Excel modifié puis cliquez sur Ajouter. 


### Filtrez votre base de connaissances

>Barre de recherche : il est possible de retrouver une question plus facilement et rapidement en tapant un ou plusieurs mots dans la barre de recherche.

>Vous avez également à votre disposition d'autres filtres permettant de retrouver plus facilement une question présente dans votre base de connaissances. Vous pouvez donc filtrer par :

* Catégories
* Type de réponses: simple, contextuelle, arbre de conversation, Adaptive Card, Webhooks, Power Automate, Azure Logic Apps.
* Status de publication: Récemment ajouté ou modifié, Entrainé et non publié, Publié en intégration, Publié en production
* Tous les états : prêt à être publié, à valider
* Tous les tags : il est possible d'appliquer un filtre multi-tags afin d'afficher les questions comportant plusieurs tags à la fois. 
* Pas de réponses
* Peu d'alternatives
* Tout sélectionner

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb6.png')" alt="low score">
</div>



## Créer une nouvelle question

Une fois votre question créer, cliquez dessus afin de la modifier, d'ajouter la réponse et/ou des alternatives.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/kb7.png')" alt="low score">
</div>

* Il est désormais possible de modifier les paramètres avancés (catégorie, profil, planification...) d'une question avant de rédiger la réponse.
* Etat de la question : Renseignez l'état de votre question et ajoutez un tags afin de faciliter la construction de la base de connaissance de votre chatbot (Prêt à être publié ou à valider).
* Tags : Assignation, réponse à compléter,... A vous de déterminer l'usage de cette fonctionnalité! Ajoutez également des tags à vos chatbots depuis l'onglet paramètres > Paramètres > Bot .


La base de connaissances est l'ensemble des questions auxquelles le chatbot saura répondre. [Le processus de création](/fr/chatbot/connaissances/processus_de_creation.html) regroupe l’ensemble des étapes permettant de créer, modifier, tester et enfin publier les questions/réponses.

Afin d'alimenter la base de connaissances du chatbot, il faut ajouter des:

* Questions
* Alternatives aux questions
* Réponses



### Nouvelle question
---

1.  Tout d’abord sélectionnez la catégorie à laquelle vous souhaitez rattacher votre question. Choisissez «éditorial» (catégorie présente par défaut) ou une autre catégorie .
2.  Sélectionnez «Texte libre» si vous souhaitez rédiger la question librement. Autrement, utilisé un des templates de la plateforme: il s'agit de différentes propositions de formulation de phrase (1) :

```
- A quoi sert...
- Combien de temps dure... 
- Combien y a-t-il de...
- Comment faire pour...
- Comment se passe...
- Est-ce que je peux...
- Dois-je..
- Où se trouve... 
- Pourquoi...
- Quand débute...
- A qui puis-je...
- Que veut dire...
- Je veux...
```


::: danger 🔴
Lorsque vous utilisez un template ou un modèle, la plateforme génèrera des alternatives automatiquement
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/newquestion1.jpg')" alt="low score">
</div>

3. Une fois créée, la question s’affiche (1) et il sera ensuite possible de la modifier, la supprimer, ajouter la réponse et également des alternatives supplementaires (2).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/newquestion2.png')" alt="low score">
</div>



### Signification des symboles
---
Différents symboles s'affichent à droite d'une nouvelle connaissance

|Symbole| Signification                                                                                                                                |
|----|--------------------------------------------------------------------------------------------------------------------------------------------------|
| ❌ | Pas de réponses (la question n'a pas de réponse, par conséquent le chatbot ne saura pas apporter de réponse à l'utilisateur pour cette question) |  
| ⚠️ | Peu d'alternatives                                                                                                                              |   
| ☁️ | pastille qui permet de savoir le statu de publication ainsi que l'environnement.                                                                |   

-   pastille bleue: la question a été publié en intégration

-   pastille verte : la question a été publié en production

-   green cloud: the question is published in production

|Symbole| Signification                                                                                                                                |
|----|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 👁️ | Etat de la question |

- à valider : Le status à valider signifie que la réponse est à revoir ou à completer et que par conséquent elle n'est pas encore prête à être publiée. Vous pouvez neaumoins entrainer une question ayant le status "à valider" afin de la tester en intégration.

- prête à être publié : Une fois que la réponse est validée, l'état de la question peut être changé en "prête à être publiée". La question peut alors être publiée.


::: tip Créer une nouvelle question
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/xGBL_6MD6eM?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::


## Type de réponse

Une fois la question validée, vous pouvez choisir un type de réponse:

-   [**Réponse simple de type texte:**](/fr/chatbot/connaissances/faq.html#reponse-simple) Rédige une réponse simple et directe. Mets la en forme grâce à l'éditeur de texte riche.

-   [**Réponse simple de type Adaptive card:**](/fr/chatbot/connaissances/faq.html#reponse-simple-de-type-adaptive-card) Configure une réponse Adaptive Card grâce à un designer visuel pour une mise en forme avancée (disponible uniquement en Webchat et sur Microsoft Teams). 

-   [**Réponse contextuelle:**](/fr/chatbot/connaissances/faq.html#reponse-contextuelle) Demande un élément de contexte auprès de l'utilisateur afin de lui fournir une réponse 

-   [**Réponse de type arbre de conversation**](/fr/chatbot/connaissances/faq.html#arbres-des-conversation): Crée un parcours conversationnel complet pour répondre à des demandes ou commandes avancées.

-   **Microsoft Flow** (Prochainement) : Connecte-toi à d'autres applications par l'intermédiaire de Microsoft Flow pour construire tes réponses.

-   **Webhook** (prochainement) : Connecte-toi à des API pour construire tes réponses

-   **Azure Logic Apps** (prochainement) : Connecte-toi à d'autres applications par l'intermédiaire de Azure Logic Apps pour construire tes réponses

On the Knowledge Base tab click on the question and select the type of answer.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/typereponse1.png')" alt="low score">
</div>



### Réponse Simple
---
**Il s’agit d’une réponse simple et directe.**

#### Réponse simple de type texte
---
Dans la fenêtre de votre réponse simple, vous retrouvez :


* La catégorie : il s'agit de la catégorie dans laquelle la question est classée, vous pouvez modifier la catégorie de votre question (1).
* Planification (2) : vous pouvez planifier la réponse de votre question. Cela signifie qu'elle sera valable pendant la période choisie. Au-delà, le chatbot n'aura plus la réponse à la question.
* Modifier le type de réponse : Si vous ne souhaitez plus que cette réponse soit de type "simple", il est possible de revenir en arrière avec ce bouton (3).


Vous pouvez ensuite rédiger votre réponse avec des éléments de forme, et avez également la possibilité de créer un lien hypertexte.

Pour plus d'information sur le format [**markdown**](/fr/chatbot/connaissances/faq.html#configuration-avancee).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/reponsesimple1.png')" alt="reponse simple et de type texte">
</div>



::: tip Comment créer une réponse simple de type texte
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/moPgRayWpjs?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::



### Réponse simple de type Adaptive Card
---
Les réponses simples de type Adaptive Card permettent une mise en forme plus riche. En effet, il est possible d'ajouter des images, des actions, des boutons, des vidéos, ... Ce type de réponse simple est disponible uniquement en Webcaht et sur Microsoft Teams. Vous n'aurez pas accès aux Adaptive Cards sur les canaux Skype et Sms, cependant si vous avez **plusieurs canaux** vous avez la possibilité de designer une réponse simple de type Adaptive Card pour les canaux Teams et Webchat et rédiger une réponse simple de type texte pour les canaux Skype et Sms.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedaptivecard.png')" alt="reponse de type adaptative">
</div>


Plusieurs éléments présents dans la boîte à outil permettent de créer une Adaptive Card. Pour cela, glissez les éléments de "Containers” et/ou de "Elements” souhaités dans l’Adaptive Card.

Cliquez ensuite sur le + en haut à droite (1) pour afficher les propriétés des éléments glissés, afin de les modifier comme souhaité.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedaptivecard1.png')" alt="reponse de type adaptative">
</div>


**CONTAINERS**

* **Container** : possible de mettre des éléments de "Elements” dans ( TextBlock, Rich TextBlock, Image et Media)
* **ImageSet** : Ajouter plusieurs images. Une fois cet élément glissé dans votre Adaptive Card, cliquez sur le + en haut à droite (1) puis sur le bouton "Add an image” pour ajouter autant d’images que souhaité.
* **FactSet** : Ajoutez ici des éléments pour catégoriser. Par exemple

<div class="image_center">
  <p><strong>Fact 1 = Nom / Value 1 = Dupont</strong></p>
</div>

<div class="image_center">
  <p><strong>Fact 2 = Prénom / Value 2 = Paul</strong></p>
</div>


Cliquez sur "**Add a new fact**” si vous souhaitez ajouter un élément supplémentaire

* **ColumnSet** : Il est possible d’aligner plusieurs colonnes et d’ajouter ainsi un éléments parmi "Elements” par colonne ( texte, image, média …)


**ELEMENTS**


* **TextBlock** : utilisez cet élément pour ajouter du texte dans vos Adaptive Cards
* **Rich TextBlock** : utilisez le JSON editor pour éditer du texte à l’aide de cet élément
* **Image** : 
::: warning ⚠️ 
**Ajouter l’url de l’image** que vous souhaitez ajouter
:::
* **Media** : Il est possible d’ajouter une vidéo mais cette dernière sera visible uniquement en Webchat ( l’élément média n’est pas disponible pour le canal Teams)


Il est également possible de créer une Adaptive Card à l’aide d’un code JSON. Pour cela cliquez sur « JSON en bas à gauche de la page. N’hesitez pas à consulter [**https://adaptivecards.io/samples/**](https://adaptivecards.io/samples/)

::: tip 💾
N’oubliez pas d'enregistrer au fur et à mesure !
:::

::: tip Comment créer une réponse simple de type Adaptive Card
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/Id56vYpZWbE?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::




### Réponse Contextuelle
---
Il y a un échange entre l'utilisateur et le chatbot car la réponse dépend du contexte (exemple : lieu, type de contrat,...).

Vous pouvez ajouter et supprimer un ou plusieurs choix (2) & (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsecontextuelle.jpg')" alt="reponse de type contextuelle">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsecontextuelle1.jpg')" alt="reponse de type contextuelle 1">
</div>


::: tip 💾
N’oubliez pas d'enregistrer au fur et à mesure !
:::

::: tip Comment créer un réponse contextuelle
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/DVt62VHPTVI?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::









### Réponse Image
---
La réponse de type **image** permet de designer une simple adaptive card composée d'une image obligatoire et d'un titre et du texte optionnels.

Lors de la création d'une réponse image, ajoutez un titre et du texte si vous le souhaitez puis choisissez une image. Celle-ci peut etre ajoutée à partir d'une url ou de la galerie d'images.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseimage.png')" alt="reponse de type image">
</div>


Pour ajouter une image à partir d'une url, copiez puis collez-la dans le champ fourni.

Pour ajouter une image depuis la galerie d'images, accédez à l'onglet puis choisissez une image déjà présente ou ajoutez-la directement à l'aide du bouton Ajouter, charger une image ou par un simple glisser-déposer.

::: warning ⚠️
La taille maximale de l'image est de 2 MB et les formats supportés sont .png, .jpeg et .gif.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseimage1.png')" alt="reponse de type image">
</div>






### Arbres des conversation
---
**Un arbre de conversation est le type de réponse utilisé lorsque les réponses simples ou contextuelles ne suffisent pas. L’arbre de conversation prévoit plusieurs échanges entre le chatbot et l’utilisateur.**

Il s’agit d’un fichier Visio synchronisé dans la bibliothèque SharePoint liée au chatbot.

Tout d’abord, créez une nouvelle question.

Sélectionnez le type de réponse "Arbre de conversation".

Après avoir nommé le fichier, cliquez sur enregistrer. Le fichiers visio sera crée automatiquement.

::: warning ⚠️
Il est nécessaire d’enlever les accents et apostrophes présents dans la question avant de créer le fichier visio.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation.png')" alt="reponse de type conversation">
</div>


Cliquez à nouveau sur la question que vous venez de créer. Le fichier Visio apparait (2).

::: warning ⚠️
Lorsqu’il s’agit de votre première utilisation de Visio, téléchargez les Template Witivio. Pour cela, cliquez sur [Télécharger les formes Visio](https://witivio.blob.core.windows.net/static/visio/Witivio.vssx) (3).
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation1.png')" alt="reponse de type conversation 1">
</div>


Cliquez ensuite sur "Ouvrir SharePoint" (4) afin d’accéder à vos fichiers Visio enregistré dans SharePoint.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation2.png')" alt="reponse de type conversation 2">
</div>


Les nouvelles questions dans SharePoint sont facilement identifiables avec : <img :src="$withBase('/assets/img/fr/connaissances/responseconversation3.png')" alt="reponse de type conversation 3">

Par exemple :

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation4.png')" alt="reponse de type conversation 4">
</div>


Clic droit sur la nouvelle question puis "Ouvrir dans Visio".

::: warning ⚠️
La plateforme n'est pas compatible avec les version Visio 2013, mais elle est compatible avec les versions Standard et Professionnelle de Visio de 2016 jusqu'à 2019.
:::

::: warning ⚠️
Il vous faudra, avant de commencer à construire votre arbre, récupérer les Template téléchargés au préalable. Cliquez sur "Formes" > "Autre formes" > "Mes formes" > "Organiser mes formes" > Witivio.
:::

Cette manipulation est essentielle à la création d’arbre de conversation. Cependant, vous n’aurez pas à la répéter à chaque fois mais uniquement lors de la première utilisation de Visio.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation5.png')" alt="reponse de type conversation 5">
</div>


Votre question est présente dans une forme : la première forme de votre arbre de conversation.

Il s’agira de la seule forme dont le bandeau de couleur sera remplit (1). Chaque forme correspond à un message du chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation6.png')" alt="reponse de type conversation 6">
</div>

::: warning ⚠️
Lorsque vous souhaitez ajouter un arbre de conversation dans votre base de connaissances et que celle-ci comporte déjà un nombre important que questions avec des réponses simples et contextuelles, l'entrainement (c'est à dire la synchronisation) peut être plus long. Cliquez sur "Entrainer" et patientez jusqu'à ce que le bouton soit grisé, avant de poursuivre la construction de vos connaissances.
:::

**Commencez par créer les formes :**

Type des formes Witivio :

* **Bot Message** : Cette forme correspond à un message du chatbot
* **Bot Input** : (le chatbot pose une question) et la réponse de l’utilisateur sera enregistré dans la variable
* **Call API** : Appelle une API. Méthode http (get/post). Exemple : get url. S'il y a des variables, elles seront envoyée à l’API.
* **Bot Question** : Ajout des "Choice". Le chatbot pose une question à l'utilisateur en proposant des choix en guise de réponse. (Enregistrement dans "Input")
* **Bot Feedback** : en ajoutant cette forme à votre arbre de converstion, le chatbot demande un feedback à l'utilisateur.

Lorsque le Chatbot doit demander à l'utilisateur de faire un choix (afin de préciser des informations pas exemple), vous pouvez utiliser la "Bot Question". Afin de remplir ces choix, il faut double cliquer dessus. Pour ajouter un choix supplémentaire, vous devez glisser une forme "Choice" (2) à gauche dans la "bot Question" (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation7.png')" alt="reponse de type conversation 7">
</div>


::: tip 💡️ Bonne pratique
Lorsque vous proposez des choix à l'utilisateur dans une "Bot Question", n'oubliez pas de prévoir un choix de type : "Autre" ou "Aucun de ces choix" auquel cas, l'utilisateur devra être obligé de faire un choix qui ne lui convient pas.
:::

::: danger 🔴
Cliquez [ici](/fr/chatbot/connaissances/faq.html#conversations-dynamiques) pour consulter l'ensemble des formes Witivio pour créer un arbre de conversation dynamique.
:::

Une fois les formes créées, il ne vous reste plus qu’à les relier en cliquant sur "Relationship" à gauche dans le menu "Formes" et de glisser le symbole (4).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation8.png')" alt="reponse de type conversation 8">
</div>

::: warning ⚠️
Les formes doivent bien être reliées entre elles, pour cela, faites attention à la zone sélectionnée en vert :
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation9.png')" alt="reponse de type conversation 9">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation10.png')" alt="reponse de type conversation 10">
</div>

::: tip 💡️ Bonne pratique
Pour vérifier si les formes sont bien reliées, nous vous conseillons de les déplacer légerémenent.
:::

Une fois votre arbre de conversation construit, cliquez sur « **Enregistrer** ».

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation11.png')" alt="reponse de type conversation 11">
</div>


Une fois l’arbre enregistré, retournez sur la plateforme Witivio afin de procéder à la synchronisation.

Cliquez sur « Synchroniser" (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation12.png')" alt="reponse de type conversation 12">
</div>


Après la synchronisation, vous verrez apparaître votre arbre. Si ce dernier s’affiche cela signifie que toutes les formes sont bien connectées.

### Changement de choix dans les arbres de conversation
---
::: danger 🔴
En fonction de l'arbre de conversation, vous pouvez changer votre choix pendant la conversation. Cependant, il existe des limites :
:::

* Il est impossible de revenir sur le choix et donc de le changer lorsque l'arbre de conversation est terminé. Par exemple :

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation13.png')" alt="reponse de type conversation 13">
</div>


Par exemple:

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation14.png')" alt="reponse de type conversation 14">
</div>


* Le retour dans le dialogues est possible uniquement **dans la même branche**, comme ci-dessous.

Par exemple, lorsque votre choix se porte sur le choix 3 ou 4, il ne sera pas possible de revenir au choix 6 ou 7, malgré que ces derniers soient enregistrés dans l’historique.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation15.png')" alt="reponse de type conversation 15">
</div>


De la même manière, lorsque vous choisissez le choix 6 ou 7, vous ne pourrez pas revenir au choix 3 ou 4, malgré que ces derniers soient enregistré dans l’historique.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation16.png')" alt="reponse de type conversation 16">
</div>


Ci-dessous, le retour sera possible uniquement vers le choix 3/4 et 1/2, mais pas vers le choix 10 et 11 (dans l'historique)) ni vers le choix et 7 car il ne s'agit pas de la même branche

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responseconversation17.png')" alt="reponse de type conversation 17">
</div>


* Ce changement est possible qu'en Webchat et sur Teams, vous ne pourrez donc pas effectuer de retour dans le dialogue sur le canal Skype.

* Si différentes questions ont le même choix de réponse, ce changement n'est pris en compte correctement. Autrement dit, si au moins deux réponses sont égales, à la lettre près, il ne sera pas possible de changer votre choix dans la conversation.

* Si l'arbre de conversation comporte des appels à des API, et que vous décidez de changer votre choix dans le dialogue, il se peut que les informations des API ne soient pas correctes.

::: tip 💾
N’oubliez pas d’enregistrer en cliquant sur « **Sauvegarder** » en bas à droite de la page !
:::

::: tip Comment créer un Arbre des Conversations
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/qrUMs6ngN44?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::



### Conversations dynamiques
---
#### QUESTION
---
* Forme : Bot Input
* Ajout du message
* Enregistrement dans ‘’Input’’

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique.png')" alt="reponse de type conversation 17">
</div>


#### LISTE DE CHOIX
---
* Forme : Bot Question
* Ajout des ‘’Choice’’
* Enregistrement dans ‘’Input’’

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique1.png')" alt="reponse de type dyanmique">
</div>



#### AFFICHAGE D'UNE VARIABLE
---
* Forme : Bot Message
* Syntaxe :
{NOM DE LA VARIABLE DANS L‘ARBRE}

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique2.png')" alt="reponse de type dyanmique 2">
</div>


#### APPEL D’API
---
* Forme : Call API
* Format :
  * HTTP VERB
    * GET
    * POST  
  * URL

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique3.png')" alt="reponse de type dyanmique 3">
</div>

<br style="margin: .5rem 0;" >
<br style="margin: .5rem 0;" >

CALL API AVEC PARAMETRE EN QUERY STRING
<br style="margin: .5rem 0;" >


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique4.png')" alt="reponse de type dyanmique 4">
</div>



#### FORMAT DES APIS
---
* API HTTP / HTTPS REST
* Headers
  * Witivio-apikey
    * Valeur de l’API Key définie dans Witivio 365
* Body
```
{

‘’userId’’ : ‘’id de l’utiisateur’’,
‘’userProfiled’’ : ’’id du profil’’,
‘’userProfileName’’ : ‘’nom du profil’’,
‘’userName’’ : ‘’displayName de l’utilisateur’’,
‘’VARIABLE_NAME_1’’ : ‘’VARIABLE_VALUE_1’’,
‘’VARIABLE_NAME_2’’ : ‘’VARIABLE_VALUE_2’’

}
```

**Retour en JSON**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique5.png')" alt="reponse de type dyanmique 5">
</div>


Utiliser la forme Visio Http header afin d'ajouter des Headers (name, value) à votre requête.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique6.png')" alt="reponse de type dyanmique 6">
</div>



#### AFFICHAGE D’UN RETOUR D'API
---
* Forme ‘’Bot Message’’
* Syntaxe :
```
[INDEX DE LA FORME API DANS LE FLUX]
:
[REQUETE JSONPATH DE LA PROPRIETE JSON]
```

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique7.png')" alt="reponse de type dyanmique 7">
</div>

<br/>
<br/>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique8.png')" alt="reponse de type dyanmique 8">
</div>


#### CONDITION ET EMBRANCHEMENT
---
* Forme ‘’API IF’’
* Ajout de ‘’IF Condition’’
* Syntaxe

```
[INDEX DE LA FORME API DANS LE FLUX}
:
[
Opérateur
equal
notequal
greater
lower
greaterorequal
lowerorequal
(
‘REQUETE JSONPATH DE LA PROPRIETE JSON’
,
‘Valeur a comparer’
)
]
```

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique9.png')" alt="reponse de type dyanmique 9">
</div>




#### LISTE DE CHOIX DYNAMIQUE
---
* Forme : Bot Question
* Ajout de ‘’Loop Choice’’
* Syntaxe :

```
[INDEX DE LA FORME API DANS LE FLUX]
:
[REQUETE JSONPATH DE LA PROPRIETE JSON]
```

* Enregistrement dans ‘’Input’’
* Syntaxe :
```
Nom de la variable
:
Type (string)
[INDEX DE LA FORME API DANS LE FLUX]
:
[REQUETE JSONPATH DE LA PROPRIETE JSON]
```

::: warning ⚠️
 Le call API doit retourner un Tableau
:::

Pensez à rajouter un choix de sortie !

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique10.png')" alt="reponse de type dyanmique 10">
</div>



#### LISTE DE CHOIX DYNAMIQUE CACHÉ
---
* Forme : ‘’Bot Question
* Ajout de ‘’Hidden Loop Choice’’
* Syntaxe :

```
[INDEX DE LA FORME API DANS LE FLUX]
:
[REQUETE JSONPATH DE LA PROPRIETE JSON]
```

* Enregistrement dans ‘’Input’’
* Syntaxe :
```
Nom de la variable
:
Type (string)
[INDEX DE LA FORME API DANS LE FLUX]
:
[REQUETE JSONPATH DE LA PROPRIETE JSON]
```

::: warning ⚠️
Le call API doit retourner un Tableau
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique11.png')" alt="reponse de type dyanmique 11">
</div>


#### BOT JSON ADAPTIVE CARD
---
* Permet d'afficher une adaptive card depuis un code JSON
* Inclure le code JSON depuis par exemple [**https://adaptivecards.io/samples/**](https://adaptivecards.io/samples/)
* Disponible uniquement pour Teams et Webchat

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique12.png')" alt="reponse de type dyanmique 12">
</div>



#### BOT IMAGE ADAPTIVE CARD
---
* Sous composant​
* Titre de l’adaptive card ​
* facultatif, le composant peut être supprimé​
* Image: Url de l’image (l’image doit etre accessible sans authentification)​
* facultatif, le composant peut être supprimé​
* Texte​
* Corp texte​
* Boutons​
* Bouton de type lien: format Markdown Texte​
* Texte uniquement​
* Qui peut être relié à une autre forme visio​

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique13.png')" alt="reponse de type dyanmique 13">
</div>


#### SOUS DIALOGUE
---
* Permet d’appeler un sous dialogue d’un autre onglet du même fichier ou d’un arbre d’une autre question​
* Le nom du sous dialogue correspond au titre de la forme de démarrage

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique14.png')" alt="reponse de type dyanmique 14">
</div>


#### LUIS ROLE IF
---
* Luis permet de créer des entités qui ont un rôle. ​
* Exemple: ​« Je veux Word » ou « Je veux une souris »​
* La question est « je veux xxx »​
* Dans l’arbre de conversation, le parcours est différent si la demande concerne un software ou un hardware.​
* Une entité nommée DEMANDE est crée, sur laquelle les roles software et hardware sont ajoutés​
* La forme Luis Role IF permet d’avoir un parcours différent en fonction du rôle​

Syntaxe:​ 
```
[entity(‘NOM_DE_LENTITE’,’NOM_DU_ROLE’)]
```

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique15.png')" alt="reponse de type dyanmique 15">
</div>


#### CHANNEL IF
---
* Permet d’avoir un parcours différent en fonction du channel​
* Par exemple envoyer une adaptive card si on est sur Teams ou texte pour Skype Entreprise​
* Canaux:
  * msteams​
  * emulator​
  * webchat​
  * directline => skype

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique16.png')" alt="reponse de type dyanmique 16">
</div>


#### FEEDBACK
---

Glissez la forme Feedback à la fin de votre arbre de conversation ou à la fin d'une branche à la suite d'une une réponse (le feedback ne sera pas déclenché si vous ajoutez la boite feedback à la fin d'un arbre de conversation d'escalade). Le message de feedback est à configurer depuis la plateforme (Outils > Feedback).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique17.png')" alt="reponse de type dyanmique 17">
</div>


#### NEXT ESCALATION
---

Glissez la forme Next escalation à la fin de votre arbre de conversation ou à la fin d'une branche afin de déclencher l'escalade. Celle-ci est à configurer depuis la plateforme (Outils > Escalade).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/responsedynamique18.png')" alt="reponse de type dyanmique 18">
</div>
 

### Flux de conversation 

Le type de réponse flux de conversation permet de designer un arbre de conversation directement sur Virtual Agent Studio. Le flux de conversation permet ainsi de répondre à une question principale. Le chatbot va diriger la conversation avec l'utilisateur, afin de pouvoir lui répondre grâce à des scénarios préétablis. Chacune des branches du flux de conversation représente des actions différentes, en fonction de la situation.

Accédez à l'onglet Connaissances puis FAQ. Une fois que vous avez ajouté une nouvelle question et ses alternatives, dans l'onglet Réponse, choisissez le type de réponse **"Flux de conversation"** puis sélectionner. 

Débutez la construction du flux de conversation en cliquant sur + COMMENCER LE DIALOGUE. 

Déroulez le menu afin de choisir l'action que doit faire le chatbot. Cliquez sur + afin d'ajouter une nouvelle étape. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/fluxdeconversation.PNG')" alt="flux de conversation">
</div>

#### ACTIONS
---
#### Envoyer un message à l'utilisateur
---
Le chatbot envoie un message à l'utilisateur. Vous pouvez personnalsier votre message à l'aide de l'editeur de texte,  ajouter un lien hypertexte ou définir une variable. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/fluxenvoyerunmessage.PNG')" alt="fluxdeconversation">
</div>

---
#### Poser une question à l'utilisateur avec une liste de choix
---

Cette action permet d'intégrer une question avec une liste de choix à votre flux de conversation.
Ajoutez votre question puis cliquez sur Ajouter un choix. Ajoutez autant de choix que nécessaire. Les choix se présenteront sous forme de boutons cliquables. Complétez ensuite chaque branche des respectifs choix. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/listedechoix.PNG')" alt="fluxdeconversation">
</div>

---
#### Poser une question à l'utilisateur
---

Cette action permet au chatbot de poser une question ouverte à l'utilisateur et la réponse sera enregistrée sous forme de variable.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/poserunequestion.PNG')" alt="fluxdeconversation">
</div>

#### Demander un fichier à l'utilisateur
---

Cette action permet au chatbot de demander à l'utilisateur d'ajouter un fichier. L'utilisateur pourra ainsi joindre un fichier en PJ à la conversation sur Microsoft Teams. 

Exemple : 
- Ajouter un justificatif pour une note de frais
- Joindre une capture d'écran à la procédure d'ouverture de ticket au support  

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/joindreunfichier.PNG')" alt="fluxdeconversation">
</div>

#### Envoyer une adaptive card à l'utilisateur
---

Ajoutez une adaptive card à votre flux de conversation. Completez les champs nécessaires.

* Ajoutez un titre 
* Ajoutez une image : coller l'url de l'image depuis la galerie d'images (Outils > Galerie d'image)
* Ajoutez le texte 
* Ajoutez un ou plusieurs boutons : ajouter le titre ainsi que l'URL du bouton

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/adaptivecard.PNG')" alt="fluxdeconversation">
</div>

#### Envoyer une adaptive card à partir d'un JSON
---

Ajoutez une adaptive card à votre flux de conversation depuis un code json. 

Collez le code JSON dans la zone de texte. Pour rappel, vous pouvez copier le code json d'une adaptive card déjà existante dans votre base de connaissances.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/adaptivecardjson.PNG')" alt="fluxdeconversation">
</div>

#### Commencer un autre dialogue
---

Cette action permet d'appeler un flux de conversation externe, un autre flux de conversation faisant partie de la base de connaissances du chatbot. 

S'il existe d'autres flux, déroulez le menu ouvrant et sélectionnez le dialogue que vous souhaitez appeler. Sélectionner VOIR LE DIALOGUE si vous souhaitez afficher le flux sélectionné. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/commencerundialogue.PNG')" alt="fluxdeconversation">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/appelerdialogueinterne2.PNG')" alt="fluxdeconversation">
</div>

#### Commencer un autre dialogue
---

Cette action permet d'appeler un flux de conversation interne. Nommez le dialogue, ajoutez-le puis sélectionnez-le en haut à droite de votre page afin de l'ouvrir et le construire. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/appelerdialogueinterne.PNG')" alt="fluxdeconversation">
</div>

#### Tester un flux de conversation

Il est possible de tester le flux de conversation directement depuis la question. Pour cela, sauvegardez et fermez votre flux de conversation. Entrainez ensuite votre base de connaissances. Cette manipulation est à faire une seule fois. 

Une fois l'entrainement terminé, accédez de nouveau à votre question et ouvrez le panneau ESSAYER à gauche. Posez votre question au chatbot afin de la tester. Si vous souhaitez apporter des modifications, procédez aux changements puis sauvegardez avec l'icône en haut à droite 💾. Il n'est pas nécessaire de renouveler l'entrainement. Reposez votre question de nouveau dans le panneau ESSAYER afin de vérifier que les changements ayant été pris en compte.  



## Alternatives


Une alternative est une reformulation de la question mère. Le nombre d'alternative à une question mère s'affiche en dessous à droite (1).

Lorsque l’on choisit un template ou un modèle, la question aura plusieurs alternatives automatiquement.

::: danger 🔴
Ces alternatives créées automatiquement sont des alternatives dites "simples", la question mère est reformulée plusieurs fois à partir des mêmes mots. Seuls les utilisateurs peuvent nous apporter des alternatives dites "complexes". Ces dernières n'ont pas du tout la même forme ni parfois les mêmes mots que la question mère mais le sens reste le même. La réponse du chatbot sera la même.
:::

Exemple :

-   Question mère : Comment faire une note de frais ?
-   Alternative simple : Dis moi comment faire une note de frais ?
-   Alternative complexe : Comment je me fais rembourser mes frais?

::: tip 💡 Bonne Pratique
Une question mère doit avoir au minimum 5 alternatives complexes et au maximum 99 alternatives simples et complexes confondues.
:::

::: tip 💡 Bonne pratique
Il n'est pas possible d'avoir plus de 99 alternatives.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/alternatives1.png')" alt="low score">
</div>

En cliquant sur ce nombre, toutes les alternatives s'affichent. Vous pouvez alors en rajouter (en utilisant un texte libre ou un Template), en supprimer une (icône poubelle) ou plusieurs à la fois (cocher les alternatives à supprimer puis cliquez sur l'icône poubelle de la première ligne).


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/alternatives2.png')" alt="low score">
</div>

::: tip Ajouter alternatives et editer des questions
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/_KCGeSKguh8?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::



## Configuration avancée

### Markdown

La syntaxe markdown permet de mettre en forme riche le contenu du chatbot.

::: tip 💡
Il est possible de positionner des markdown dans les réponses et les messages
:::

* Italique: ```*Italic*```
* Gras: ```**Bold**```
* Header1-5: #H1
* Lien: ```[bing](http://bing.com)```

Image et bouton (bêta - Webchat et Teams uniquement)

### Image

Le code suivant est à ajouter dans la réponse à une question:

```
<attachment contentType="image/jpg" title="Your title" thumbnailUrl="Your thumbnail url" contentUrl="Your url" />
```

### Bouton

Le code suivant est à ajouter dans la réponse à une question:

```
<attachment contentType="button" title="Your title" link="Your link" />
```

::: warning ⚠️
**Le nombre de flux ou arbre de conversation par chatbot est limité à 400.**
:::


### Commentaires
---

<Commentaire />
