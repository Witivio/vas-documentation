# Multilingue

Deux possibilités s'offrent à vous afin d'activer votre chatbot en multilingue:


## 1. Une base de connaissance par langue

Aujourd'hui, les chatbots Witivio s’expriment en français, anglais, allemand et italien.

::: warning ⚠️
Pour rappel, toute langue activée doit avoir une base de connaissance correspondate. Dans l'onglet Paramètres puis Multilingue, cochez donc la langue souhaitée puis accédez à l'onglet Connaissances > FAQ afin d'ajouter les questions corréspondantes.
:::

::: tip 💾
 N’oubliez pas de cliquer sur "Sauvegarder" lorsque vous ajoutez/enlevez une langue.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/multilingual1.png')" alt="low score">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/multilingual2.jpg')" alt="low score">
</div>



-   **Création des bases de connaissances:** créez plusieurs bases de connaissances, afin de permettre au chatbot de fournir des réponses cohérentes.

-   **Détection de la langue:** lorsque l’utilisateur commence la discussion, le chatbot reconnaît automatiquement la langue souhaitée. Par exemple, si l’utilisateur débute la conversation par « Bonjour », le chatbot détecte la langue française et la conversation continuera en français.

::: warning ⚠️
Commencer une conversation par « Hello » pourrait induire le chatbot en erreur, car il s’agit d’un terme courant en français également.
:::

-   **Base de connaissa1nces correspondante**: au premier message d’une conversation, le chatbot reconnaît la langue employée par l’utilisateur. Le chatbot utilise donc la base de connaissances correspondante.
-   **Sauvegarde du choix de langue**: La langue detectée et choisie est sauvegardée temporairement pendant 7 jours. Si l’utilisateur souhaite s’adresser au chatbot dans une autre langue, il doit lui en faire la demande explicitement.

>Par exemple : « I speak English » ou bien « Je parle français ».

Une fois cette demande faite, le chatbot enregistre à nouveau ce choix pendant 7 jours et continu d’utiliser cette nouvelle langue jusqu’à la prochaine demande explicite.


### Changement automatique de langue (bêta)
-------------

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/multilingual3.png')" alt="low score">
</div>

Lorsque votre chatbot est multilingue et que vous décidez d'activer l'option suivante "changer de langue automatiquement lorsque l'utilisateur parle dans une autre langue", le chatbot reconnaît la nouvelle langue parlée et poursuit ainsi la conversation dans la langue détectéee.

Par exemple, lorsqu'un utilisateur débute la conversation par "bonjour" le chatbot détecte la langue française et continue en français; il suffit de dire par exemple "Buongiorno" pour que le chatbot détecte et passe automatiquement à l'italien.

Cependant, corsque cette option est désactivée et le chatbot est mulitlingue, utilisez par exemple la phrase "I speak english" ou "je parle français" pour passer d'une langue à l'autre.

## 2. Traduction automatique (bêta)

Vous avez la possibilité d'activer une version beta de la traduction automatique.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/multilingual4.png')" alt="low score">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/multilingual5.png')" alt="low score">
</div>



Lorsque vous activez cette option, Cliquez sur + Ajouter pour configurer :

* **la langue parlée par l'utilisateur** (par exemple Espagnol ou Bosniaque)

> Langues supportés : Afrikaans, Allemand, Arabe, Bangla, Bosnien, Bulgare, Catalan, Chinois, Croate, Danois, Estonien, Anglais, En finnois, Français, Gallois, Grec, Créole haïtien, Hébreu, Hindi, Hmong Daw, Hongrois, Islandais, Indonésien, Italien, Japonais, Kiswahili, Klingon, Coréen, Letton, Lituanien, Malais, Maltais, Néerlandais, Norvégien, Persan, Polonais, Portugais, Roumain, Russe , Serbe, Slovaque, Slovène, Espagnol, Suédois, Tamil,Thai, Tchèque, Turc, Ukrainien, Urdu, Vietnamien.


- **la langue de la base de connaissances dans laquelle le chatbot doit aller chercher la réponse** (Ici par exemple espagnol)

>Langues comprises par le chatbot : Allemand, Anglais, Français, Italien.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/multilingual6.png')" alt="low score">
</div>



Les questions posées en Espagnol et Bosniaque sont détéctées et traduites alors en Français.

Enfin, vous pouvez décider de traduire ou ne pas traduire la réponse.

::: warning ⚠️
Lorsque la traduction automatique est configurée, la mise en forme des réponses n'est pas conservée et peut donc être altérée.
:::

::: warning ⚠️
  Veuillez également noter que certains termes, tels que des mots métiers peuvent être traduits.
:::

> Par exemple de l'anglais vers le français, "Microsoft teams" peut être traduit en "Microsoft équipes". 



### Commentaires
---

<Commentaire />
