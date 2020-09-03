# Créer une API de profils avec Flow et Sharepoint



1.  Connectez-vous à [**https://flow.microsoft.com**](https://flow.microsoft.com) avec votre compte **Office 365**

2.  Cliquez sur "**Créer**" au niveau du volet de navigation de gauche

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api1.png')" alt="low score">
</div>

3. Choisisser ensuite "Flux instantané

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api2.png')" alt="low score">
</div>

4.  Choisissez le trigger "**Lors de la récéption d'une demande HTTP**" (ou when a HTTP request is received)

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api3.png')" alt="low score">
</div>




5. Ajoutez le body JSON Schema suivant dans "**Schéma JSON du corps de la demande**"

``` JSON
{
    "type": "object",
    "properties": {
        "userId": {
            "type": "string"
        },
        "upn": {
            "type": "string"
        },
        "aadId": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "channel": {
            "type": "string"
        },
        "displayName": {
            "type": "string"
        }
    }
}
```


Ce sont les informations de l'utilisateur envoyées par le chatbot lorsqu'il devra determiner son profil.

Cliquez sur "**afficher les options avancée**" et choisissez la method "**POST**".  
  
Pour rappel, l'utilisateur peut parler au chatbot via les canaux suivants :

-   Msteams (Teams)
-   Directline (Skype for Business)
-   Webchat (Webchat)

Vous retrouverez ce code de canal dans la propriété channel du JSON ci-dessus

En fonction du canal, les informations suivantes sont remplies :

-   Skype for Business (directline)

    -   email (qui peut également être l'adresse SIP de l'utilisateur si celle-ci est différente de son email)
    -   UserId: Un id unique pour l'utilisateur,
    -   Display Name :  Le display name de l'utilisateur dans l'AD

-   Teams

    -   Upn
    -   Email
    -   aadId: L'id Azure AD de l'utilisateur qui parle au chatbot
    -   UserId : Un id unique de l'utilisateur teams
    -   Displau Name : Le display name de l'utilisateur dans l'AD

-   Webchat

    -   Email (qui correspond à la propriété envoyée dans le UserId de la configuration du webchat)
    -   UserId (qui correspond à la propriété envoyée dans le UserId de la configuration du webchat)
    -   Display Name (qui correspond à la propriété UserName dans la configuration du webchat)

::: tip 💡
pas besoin de faire la disctinction entre les canaux si vous n'en avez qu'un de configuré ou si votre email correspond à votre upn et votre sip.
:::

Voici un exemple de liste SharePoint:

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api4.jpg')" alt="low score">
</div>

Cette liste SharePoint est très simple. Elle contient l'identifiant de l'utilisateur dans la colonne "Title" et son profil attitré dans la colonne "profile".


6. Cliquez sur ajouter une nouvelle étape

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api5.png')" alt="low score">
</div>


7. Recherchez la boite "Sharepoint - "**Obtenir les éléments**" (ou Sharepoint - Get Items)

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api6.png')" alt="low score">
</div>

8.  Configurez la en ajoutant l'adresse du site sharepoint et la liste qui vous servira de base pour récuperer les profils

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api7.png')" alt="low score">
</div>

9. Cliquez sur "Afficher les options avancées"

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api8.png')" alt="low score">
</div>

10. Ajoutez la requête de filtre Title eq 'email' en choissant la propriété email depuis la boite de requête

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api9.png')" alt="low score">
</div>

11. Indiquez "jusqu'au nombre d'échantillon" = 1

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api10.png')" alt="low score">
</div>

12. Ajoutez une nouvelle étape

13. Recherchez la boite "Requête - Réponse"

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api11.png')" alt="low score">
</div>

14. Ajoutez le statu code 200 et dans le body le Json suivant

```JSON
{
  "user": {
    "userId": "",
    "profile": ""
  }
}
```

Remplacez les resultats vide par les données de votre requête sur SharePoint:

-   Remplace UserId par la valeur recu en input

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api12.png')" alt="low score">
</div>

-   Remplace Profile par la valeur récupéré sur Sharepoint : ```first(body('Obtenir_les_éléments')?['value'])?['profile']```

>   Expression = *first(body('Get_items')?['value'])?['profile']*

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api13.png')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api14.png')" alt="low score">
</div>

15. Changez le nom de votre flux par un nom compréhensible ( en haut à gauche: par exemple "Récupération des profils").

::: tip 💾
Cliquez sur **enregistrer !**.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api15.png')" alt="low score">
</div>


Votre API est prête à etre testée.

## Tester son API avec Postman

Postman est un utilitaire qui permet d'envoyer des requetes HTTP et d'examiner les retours. Il est téléchargeable gratuitement sur [**https://www.getpostman.com/**](https://www.getpostman.com/)

N'importe quel utilitaire HTTP fait l'affaire. Nous utilisons ici postman car c'est un outil de developpement commun.

1. Cliquez sur +New puis Request ( puis Cancel)

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api16.png')" alt="low score">
</div>

2. Choisissez POST

3. Collez l'url de l'API précédemment crée

4. Dans "Headers" choisissez KEY: Content type et VALUE: application/json

5. Dans "Body" choisissez "raw" et rentrer par exemple :

```JSON
{
	"email": "bob.alternant@witivio.com",
	"userId": "bob.alternant@witivio.com",
	"channel": "webchat"
}

Send 
Résultat : {
    "user": {
        "userId": "bob.alternant@witivio.com",
        "profile": "alternant"
    }
}
```

Cliquez sur "Send".

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api17.png')" alt="low score">
</div>


Voici un exemple de réponse:

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api18.png')" alt="low score">
</div>


Une fois l'API testée, vous pouvez retourner sur la plateforme dans l'onglet Profil et continuer le paramétrage du nouveau profil. Le cadre suivant vous permet donc de configurer les conditions des profils

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api19.png')" alt="low score">
</div>


-   Cadre 1: URL de l'API précédemment crée

-   Cadre 2: La query JSON PATH permet de vérifier le resultat renvoyé par l'API. Elle ressemble toujours à equals('something', 'result') Par exemple, dans notre cas, elle pourrait être : equals('$.user.profile', 'stagiaire'). Le $.user.profile équivaut à la query JSON PATH du retour de l'api. Plus d'infos sur : [https://jsonpath.com/](https://jsonpath.com/)

Si besoin, vous pouvez multiplier les appels d'API pour determiner un profil. Pour cela vous pouvez supprimer ou ajouter une nouvelle condition (1). Les deux conditions devront être remplies pour determiner le profil de l'utilisateur (ET logique).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/api20.png')" alt="low score">
</div>




### Commentaires
---
<Commentaire />
