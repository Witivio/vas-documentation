# Politiques de confidentialité

Cet onglet permet de configurer les politiques de confidentialité du chatbot. Vous pouvez choisir le profil souhaité à l'aide du filtre.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/confiden1.png')" alt="low score">
</div>


Vous avez 3 options disponibles :


* **Historique de conversation**

Lorsque vous activez l'enregistrement de l'historique de conversation, tout ce que l'utilisateur dit au chatbot ainsi que les réponses de ce dernier sont enregistrées. Le dialogue est sauvegardé dans son intégralité.

Si vous choisissez de désactiver cette option, les données sont également techniquement enregistrées mais le contenu est remplacé par le texte suivant : (anonymized). De plus, l'export des logs dans l'onglet "historique de conversation" n'est pas disponible.

>Exemple :
>-   Lorsque l'option est activée : si l'utilisateur dit "bonjour"; le message >"bonjour", l'heure, la date et le canal de diffusion sont enregistrés.
>-   Lorsque l'option est désactivée : si l'utilisateur dit "bonjour", le message "anonymized", l'heure, la date et le canal de diffusion sont enregistrés.

* **Identité des utilisateurs**

Ce qui diffère cette option de la précédente est que cette dernière permet d'identifier qui a envoyé un message.

-   Si les 2 premières options sont activées : Vous savez qui dit quoi et quand.
-   Si uniquement la deuxième option est activée (identité des utilisateurs): vous savez qui a parlé au chatbot mais vous n'avez pas l'information concernant ce que l'utilisateur a dit.
-   Si la deuxième option est désactivée : la plateforme remplace l'identité de l'utilisateur par un identifiant (Skype : Adresse SIP, Teams: UPN). Il s'agit d'un identifiant généré par un Hash, vous n'aurez donc pas la possibilité de savoir qui est l'utilisateur.

::: warning ⚠️
L' anonymisation n'est pas rétroactive. Chaque message reçu par le chatbot applique les paramètres de confidentialité en vigueur au moment de la réception. Si le paramétrage change alors qu'un utilisateur est en pleine conversation avec le bot, les nouveaux paramètres seront appliqués jusqu'à 10 minutes après enregistrement des nouveaux paramètres.
:::

-   Si l'option « identité des utilisateurs » est désactivée, il est alors possible de personnaliser les éléments de réponse à apporter aux utilisateurs dans le cas où celui interroge le bot sur ses données personnelles.

* **Prévenir les utilisateurs**

Vous pouvez activer cette option (qui est automatiquement désactivée) : Lorsque l’utilisateur démarre une conversation pour la première fois avec le chatbot, ce dernier l'informe que la conversation est enregistrée.

Vous devrez alors personnaliser le message de prévention.

>Exemple : Bonjour, notre conversation est enregistrée. SI tu ne souhaites pas que tes données personnelles soient sauvegardées à des fins d'amélioration, je t'invite à poser tes questions à tes collègues. Pour plus d'informations, voici le lien vers notre politique de protection des données personnelles de l'entreprise.

::: warning ⚠️
* Les données que Witivio est susceptible d'enregistrer sont les suivantes :
  * E-mail (en fonction du canal : UPN et/ou SIP) - Nom - Prénom.
:::

Ces données sont exploitées uniquement lorsque l'enregistrement de l'historique de conversation et celui de l'identité des utilisateurs sont activés à des fins d'amélioration de la performance du chatbot.


## RGPD

La plateforme witivio permet à chaque utilisateur du chatbot de récupérer ses données et de les anonymiser.

Pour cela, tout chatbot connaît 4 intentions qui permettent de répondre aux questions:

* Est-ce que la conversation est enregistrée ?
* Est-ce que tu enregistres mon identité ?
* Qu'est-ce que tu as comme données sur moi ?
* Anonymise mes données.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/rgpd1.png')" alt="low score">
</div>


Le chatbot a un fonctionnement prédéfini si l'option de sauvegarde d'identité des utilisateurs est active. Dans le cas, où l'option n'est pas active, il est possible de configurer les messages.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/rgpd2.png')" alt="low score">
</div>


### Récuperer ses données

* Lorsqu'un utilisateur demande au chatbot de lui compiler ses données, le chatbot exécute la requête et demande à quelle adresse il doit envoyer l'archive zip qui sera générée. Ce processus peut prendre jusqu'à une heure. Il est donc possible que la demande soit faite et que l'archive zip contenant les données de l'utilisateur soit envoyé par mail jusqu'à une heure après la demande.

* L'utilisateur reçoit un mail de l'expéditeur jeff@witivio.com avec pour objet : "Vos données personnelles" ou "Your personal data" en fonction de la langue dans lequel l'utilisateur a fait la demande.

L'archive expediée contient un fichier JSON comme suit :

```
{
  "conversations": [
    {
      "statisticEntryType": "MessageFromUser",
      "timeStamp": "3/19/2019 10:51:01 AM +00:00",
      "activityId": "DkUXQSpoa0NFHwfp7BuBJ5-9|0000000",
      "replyToId": null,
      "conversationId": "DkUXQSpoa0NFHwfp7BuBJ5-9",
      "fromName": "Bob",
      "fromId": "bob@witivio.com",
      "text": "Salut",
      "attachements": [],
      "suggestedActions": null
    },
    {
      "statisticEntryType": "MessageFromBot",
      "timeStamp": "2/4/2019 3:43:08 PM +00:00",
      "activityId": null,
      "replyToId": "DkUXQSpoa0NFHwfp7BuBJ5-9|0000000",
      "conversationId": "DkUXQSpoa0NFHwfp7BuBJ5-9",
      "fromName": "Dynameet365",
      "fromId": "Dynameet365-dev@V_VONwGAD4U",
      "text": "",
      "attachements": [
        {
          "contentType": "application/vnd.microsoft.card.hero",
          "contentUrl": null,
          "content": {
            "title": null,
            "subtitle": null,
            "text": "Choisis ton site",
            "images": null,
            "buttons": [
              {
                "type": "imBack",
                "title": "Lyon",
                "image": null,
                "text": null,
                "displayText": null,
                "value": "Lyon"
              },
              {
                "type": "imBack",
                "title": "Paris",
                "image": null,
                "text": null,
                "displayText": null,
                "value": "Paris"
              }
            ],
            "tap": null
          },
          "name": null,
          "thumbnailUrl": null
        }
      ],
      "suggestedActions": null
    },
  ]
}
```

Ce fichier est constitué à partir de l'identifiant de l'utilisateur sur le canal: son user channel ID.


>Si le chatbot est multi canal, il est possible que le fichier ne contienne pas tous les échanges. Cela peut se produire si les identifiants sont différents entre les différents canaux.

### Anonymiser ses données

Lorsqu'un utilisateur demande au chatbot d'anonymiser ses données, le chatbot exécute la requête. Il compile toutes les données qu'il a sur l'utilisateur comme s'il allait les envoyer et lance le processus de mise à jour. Le texte des messages envoyé au et par le chatbot est remplacé par la chaîne "(anonymized)" et les identifiants sont remplacés par un hash.


>Note : Les listes d'escalades et les listes de distribution ne sont pas modifiées car elles sont nécessaires au bon fonctionnement de l'application.


### Cas particuliers

#### Sauvegarde d'identité désactivée
---

Les intentions d'anonymisation des données ne sont pas disponibles si l'option de sauvegarde de l'identité des utilisateurs est désactivée. Il est possible dans ce cas de paramétrer la réponse du chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/rgpd3.png')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/rgpd4.png')" alt="low score">
</div>


Si les champs sont vides, le chatbot répondra :

* Utilisateur : Qu'est-ce que tu as comme données sur moi ?
* Chatbot : Je suis désolé, je ne peux pas te donner tes données personnelles car rien n'est enregistré :)
* Utilisateur : Anonymise mes données.
* Chatbot : Ne t'inquiète pas toutes tes données sont déjà anonymisées :)

#### Désactivation des intentions liées au RGPD
---

Il est possible de désactiver les intentions préconfigurées liées au RGPD. Cela permet d'éviter les conflits lorsque vous souhaitez gérer vous-même ces réponses.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/rgpd5.png')" alt="low score">
</div>

::: warning ⚠️
La désactivation des intentions liées au RGPD fait que les utilisateurs ne peuvent plus demander au chatbot de compiler leurs données et de les anonymiser. Nous vous conseillons lors de la désactivation des intentions de ne pas stocker l'identité de l'utilisateur pour éviter tout problème de données personnelles.
:::



### Commentaires
---
<Commentaire />
