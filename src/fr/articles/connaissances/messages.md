# Messages de bases


Cliquez sur « **Connaissances** » afin d'alimenter la base de connaissance du chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/messages1.png')" alt="low score">
</div>




### A quoi sert ?


L’onglet « Messages » vous permet de configurer les messages de base. Ce sont les réponses du chatbot dans des situations précises.


::: danger 🔴
S'il existe plusieurs [**profils**](/fr/articles/profil.html), configurez les messages de bases propres à chaque profil.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/messages2.png')" alt="low score">
</div>

::: tip 💡 Bonne pratique
Les messages de base sont indispensables à la création d’un chatbot sur la plateforme Witivio!
:::

Il s'agit des réponses du chatot dans des situations précises, par exemple lorsque le chatbot dit : "bonjour", "merci", "au revoir", "je ne suis pas sûr" et "j’ai besoin d’aide"?.

1.  **Que dois-je répondre quand les utilisateurs disent Bonjour ?**

::: tip 💡 Bonne pratique
Lors du paramétrage des ce message, il est conseillé de :
:::


-   Rappeler le nom (par exemple : Nany).
-   Indiquer le domaine d’expertise (par exemple : Stage).
-   Donner quelques exemples de questions auxquelles le chatbot sait répondre

Un éditeur markdown permet la mise en forme des messages. Par exemple, indiquez en gras le nom ainsi que le domaine d'expertise du chatbot.

Cliquez sur "Ajouter une alternative" afin de renseigner un ou plusiuers messages de presentation supplèmentaires du chatbot

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/messages3.png')" alt="low score">
</div>




1.  **Que dois-je dire si je ne suis pas sûr de la réponse ?**

Ce message apparait lorsque le score est faible. Ce dernier se déclenche lorsqu'une seule question présente dans la base de connaissances correspond à la question posée par l'utilisateur mais que le score est comme son nom l'indique: faible (entre 30 et 50%).

::: tip 💡 Bonne pratique
Ici, le chatbot indique ne pas être sûr de la réponse trouvée dans sa base de connaissances. Il propose néanmoins une possibilité de réponse et conseil de reformuler la question posée.
:::


2.  **Que dois-je répondre si je ne trouve pas de réponse dans la base de connaissances ?**

Ce message se déclenche lorsque la question posée par l’utilisateur ne correspond à aucune question dans la base de connaissances du chatbot.

::: tip 💡 Bonne pratique
Ici, le chatbot indique n’avoir rien trouvé dans sa base de connaissances
:::


3.  **Que dois-je répondre quand les utilisateurs disent qu'ils ont besoin d'aide ?**

Ce message apparait lorsque l’utilisateur indique avoir besoin d’aide ou demande au chatbot "à quoi sers-tu?".

::: tip 💡 Bonne pratique
Ici, pensez donc à présenter à nouveau le chatbot, en indiquant par exemple son domaine d’expertise et quelques questions auxquelles il sait répondre.
:::


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/messages4.png')" alt="low score">
</div>

4.  **Que dois-je dire quand j'affiche le message d'invitation à la conversation sur la webchat ou sur teams ?**

Ce message permet au chatbot d'inviter l'utilisateur à initier une conversation sur la Webchat ou sur Teams.

::: tip 💡 Bonne pratique
Il n'est pas nécessaire de présenter en détail le chatbot, en effet, une fois la fenetre de discussion ouverte, le message de base configuré en amont pour répondre à "Bonjour" s'affiche automatiquement.
:::


Le bouton « Ajouter une alternative » permet d'ajouter une reformulation des messages de base, le chatbot choisit de manière aléatoire parmis les alternatives.

::: tip 💾
N'oubliez pas d'enregistrer après toute modification !
:::

