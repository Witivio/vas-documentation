# Escalade


>L'escalade permet de mettre en place une interaction pour proposer une solution à l’utilisateur lorsque le chatbot n’a pas la réponse. Cet outil est disponible par profil et également par langue.

Il est possible de configurer plusieurs escalades afin d'apporter de l'aide aux utilisateurs. Lors de la configuration, utilisez l'option "Priorité" afin de prioriser vos escalade. Lorque votre escalade de niveau 1 n'aboutit pas, ne remplit pas une condition et/ou que l'utilisateur n'est pas satisfait par cette première solution, alors le chatbot proposera votre escalade de niveau 2.

Exemple : Lorsque le chatbot n'a pas de réponse, celui-ci propose de contacter directement le support Teams. Si ce dernier n'est pas disponible alors le chatbot proposera à l'utilisateur d'envoyer un e-mail. 


Il existe 8 types d’interactions :

-   **E-MAIL**
-   **SERVICE NOW**
-   **SUPPORT OFFICE**
-   **ARBRE DE CONVERSATION**
-   **MICROSOFT TEAMS**
-   **MICROSOFT FLOW** (prochainement)
-   **AZURE LOGIC APPS** (prochainement)
-   **WEBHOOK** (prochainement)

Pour tout type d'escalade, deux cas de figure vous permettent de la lancer :

1. lorsqu'il n' y a pas de réponse à la question posée.
2. lorsque les utilisateurs donnent un [feedback négatif](/fr/chatbot/boite_de_reception/feedback_negatif.html)

    -   quand la réponse contient des fautes
    -   quand la réponse est incomplète
    -   quand la réponse ne correpond pas à la question posée
    -   quand l'utilisateur choisi Autre

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade1.png')" alt="low score">
</div>

## E-mail

Vous importez une liste de contacts à partir d’un fichier Excel (exemple). Lorsque le chatbot ne sait pas répondre, les opérateurs indiqués recevront l’e-mail d’escalade, afin de pouvoir apporter de l'aide aux utilisateurs.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade2.png')" alt="low score">
</div>

Vous pouvez choisir différents supports d’escalades et il est possible de les classer par ordre de priorité (1). Si l’aide apportée par le premier support ne vous convient pas, le chatbot s’adresse automatiquement au second support.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade3.png')" alt="low score">
</div>



Vous indiquez ensuite le titre et le corps du mail, ainsi que la question et les réponses que le chatbot doit poser pour savoir si l’utilisateur souhaite qu’un support soit contacté.

Par exemple :

-   Veux-tu que je contacte le support ?
-   Le support a été averti
-   Un agent te contactera rapidement


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade4.png')" alt="low score">
</div>


Lorsque vous ajoutez ou modifiez le support d'escalade, un **éditeur de texte** permet la mise en forme du corps de l'e-mail à envoyer.

## Service now

>Le chatbot automatise la création d’un ticket.


### Support Microsoft Office

Ce support d'escalade ne concerne que les chatbots qui répondent au questions Office 365. Le chatbot automatise la recherche sur le Support Office.

Vous indiquez l’ordre de priorité si d’autres support sont actifs, mais également la question et les réponses que le chatbot doit poser pour savoir si l’utilisateur souhaite que le support soit contacté.

Par exemple : "Souhaites-tu que je cherche ta question sur le support office ?"

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade5.png')" alt="low score">
</div>


Plusieurs supports d'éscalade peuvent être ajoutés (1) et classés par ordre de priorité.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade6.png')" alt="low score">
</div>



## Arbre de conversation

Lorsque le chatbot n'a pas la réponse, vous pouvez créer un arbre de conversation afin de personnaliser l'échange avec l'utilisateur avant de lui proposer une solution, par exemple l'envoie d'un mail ou la création d'un ticket.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade7.png')" alt="low score">
</div>


* Sélectionnez le type d'escalade Arbre de conversation.
* Nommez le fichier Visio qui permettra de créer l'arbre de conversation.
* Sélectionnez l'ordre de priorité.
* L'arbre de conversation s'affiche.


Cliquez ici pour avoir plus d'informations sur comment construire un [**arbre de conversation**](/fr/chatbot/connaissances/faq.html#arbres-des-conversation) 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade8.png')" alt="low score">
</div>


::: danger 🔴
Lorsque le chatbot n'a pas la réponse, il renvoie directement l'arbre de conversation sans poser la question (par exemple) "Souhaitez-vous que je crée un ticket?". Si vous souhaitez que cette question soit posée, il vous suffit de l'ajouter dans l'arbre de conversation.
:::

Une fois ce type d'escalade ajouté, vous pouvez modifier l'ordre de priorité, synchroniser ou supprimer l'arbre de conversation ainsi qu'ouvrir SharePoint.

::: warning ⚠️
N'oubliez pas de PUBLIER pour que votre arbre de conversation soit disponible pour les utilisateurs. Lorsque vous ne publiez pas, il sera disponible seulement dans la fenêtre Webchat en intégration.
:::

## Microsoft Teams


Lorsque l'utilisateur n'a pas la réponse à sa question, il peut désormais être mis en contact avec un opérateur humain en direct.

Pour cela :

- Identifiez les agents qui prendront en charge la requête de l'utilisateur
- Créez une équipe support sur Microsoft Teams
- Ajoutez dans cette équipe les agents identifiés au préalable
- Configurez ensuite l'escalade Teams sur votre plateforme Witivio. Cliquez sur l'onglet "Outils" puis "Escalade".

Ajoutez un nouveau support d'escalade puis sélectionnez "Teams-beta".

Choisissez dans un premier temps quand souhaitez vous lancer l'escalade.

Ajoutez les informations pour la configuration du canal Teams, à savoir l'id de l'application Microsoft ainsi que le mot de passe [(voir Documentation )](/fr/chatbot/creation_chatbot/condition_requises.html).


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade9.png')" alt="low score">
</div>


Activez ou désactivez ensuite l’affichage du message de non-réponse paramétré dans les messages de base lorsque le chatbot ne trouve rien dans la base de connaissances.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade10.png')" alt="low score">
</div>


Choisissez si vous souhaitez partager l’identité de l’agent.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade11.png')" alt="low score">
</div>


Choisissez si vous souhaitez permettre à un agent de rejeter la demande d’escalade d’un utilisateur.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade12.png')" alt="low score">
</div>

Choisissez si vous souhaitez permettre au chatbot de lancer une demande de feedback après l'escalade.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade13.png')" alt="low score">
</div>

Configurez ensuite les périodes de prise de contact avec les agents.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade14.png')" alt="low score">
</div>



Par exemple :

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade15.png')" alt="low score">
</div>



Vous pouvez également configurer le(s) jour(s) fériés.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade16.png')" alt="low score">
</div>


Choisissez l'ordre de priorité de ce support d'escalade.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade17.png')" alt="low score">
</div>



L'étape suivante permet de paramétrer le temps d’attente maximum pour qu’une demande soit acceptée (en minute).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade18.png')" alt="low score">
</div>




Configurez les questions que le chatbot doit poser à l’utilisateur pour savoir :

- si l'utilisateur souhaite que le chatbot contacte le support
- quelle réponse doit-il donner à l'utilisateur s'il indique qu'il veut contacter le support
- quelle réponse doit-il donner à l'utilisateur s'il indique qu'il ne veut pas contacter le support

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade19.png')" alt="low score">
</div>


Configurez le message de demande de feedback et le message lorsque l'agent met l'utilisateur en attente.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade20.png')" alt="low score">
</div>



Le chatbot est maintenant prêt à ajouter le nouveau service d’escalade.

L'utilisateur indique au chatbot qu'il souhaite être mit en contact avec l'équipe de support.

**Charger une application personnalisées dans une équipe Teams**


Une fois l'escalade configurée, téléchargez le fichier ZIP du chatbot ainsi que le fichier ZIP de la gestion des tickets.

> Pour ajouter le fichier ZIP du chatbot :

- Cliquez sur °°° à droite de votre équipe support
- Cliquez sur Gérer l'équipe
- Cliquez sur "Applications" puis "Charger une applications personnalisées" en bas à droite de votre page
- Sélectionnez votre fichier ZIP du chatbot.

> Pour ajouter le fichier ZIP de gestion des tickets 

- Cliquez sur Application en bas à gauche de votre interface Microsoft Teams
- Cliquez sur Charger une application personnalisée en bas à gauche
- Sélectionnez le fichier ZIP de gestion de tickets
- Sélectionnez l'équipe support Teams créer au préalable.
- Renseignez l'Id et le mot de passe du bot service (Cliquez ici pour en savoir plus)

::: tip 💡
Lorsque le message suivant apparait dans l'équipe Support Teams, cela signifie que l'escalade est correctement configurée:
:::

"L’escalade Teams est maintenant correctement configurée 👍 Les demandes d’escalade à un agent apparaitront dans ce canal".

Les agents de l'équipe support Teams préconfigurés au préalable reçoivent une demande de support.


**Liste des tickets du support**

>Lorsque vous ajoutez le fichier ZIP de la gestion des tickets, un nouvel onglet "Liste des demandes" apparait dans l'équipe Teams. Connectez-vous avec votre compte Office365 pour accèder à la liste des tickets du support de votre chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade21.png')" alt="low score">
</div>


- Le filtre "Tous les status des tickets" permet de suivre l'état du ticket : ouvert (jaune), en cours (bleu), fermés (vert), annulés ou refusé (rouge) ou mis en attente (orange).
- Le filtre "Tous les agents" permet de savoir quel agent a effectué la dernière action sur un ticket. Pour rappel, les agents sont les personnes qui on été ajoutés à l'équipe support Teams. 

Lorsqu’un agent reçoit une nouvelle demande d’assistance, il peut :

- ✔️ Accepter
- ❌ Refuser
- ⏸️ Accepter et mettre en attente

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade22.png')" alt="low score">
</div>



## Demande acceptée

L’exemple suivant montre que la demande a été acceptée

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade23.png')" alt="low score">
</div>



L’agent peut ainsi début l’échange avec l’utilisateur.

Le chatbot informe l’agent qu’il s’occupe de transmettre l’ensemble des messages à l’utilisateur.
L’agent clique sur le bouton « Déconnecter » lorsqu’il souhaite terminer la conversation avec l’utilisateur.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade24.png')" alt="low score">
</div>


::: warning ⚠️
Pour que l’utilisateur reçoit les messages, l’agent doit obligatoirement identifier par un tag @ le chatbot et rédiger ensuite le message souhaité. Par exemple " @Mary . Bonjour Tanguy, il faut que le collaborateur soit dans l'entreprise depuis plus de 6 mois (période d'essai terminée)"
:::

::: danger 🔴
Lorsqu’un agent accepte la demande de support mais n’a pas la réponse, il peut solliciter un collaborateur (faisant partie de l’équipe Teams support) par un simple tag @. Le deuxième agent peut également décider d’accepter ou refuser la demande de support.
:::

## Demande acceptée et mise en attente

Ici par exemple, la demande a été acceptée et mise en attente par un agent.

Le chatbot demande à l’utilisateur de patienter le temps que l’agent soit disponible.

L’agent clique ensuite sur le bouton ‘’Connecter’’ pour prendre en main la conversation.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade25.png')" alt="low score">
</div>




## Refuser la demande de support


L’agent peut décider de refuser une demande de support et indiquer la raison pour laquelle il a refusé.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/escalade26.png')" alt="low score">
</div>



Lorsqu’une demande de support est acceptée et la conversation terminée, l’agent clique sur le bouton « Déconnecter » pour terminer l’échange.

L’utilisateur peut ainsi continuer son échange avec le chatbot.



### Commentaires
---
<Commentaire />
