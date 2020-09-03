# Campagnes

Pour lancer une communication push, il vous faut créer une campagne. Cliquez sur « **Communication** » puis « **Campagnes** »

::: warning ⚠️
Cet onglet est disponible uniquement pour les chatbots ayant Skype ou Teams comme canal de diffusion.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne1.png')" alt="low score">
</div>


Donnez un nom à votre campagne et programmez le message que vous souhaitez déployer.

Vous pouvez personnaliser votre message de la manière suivante :

>Bonjour, [FIRSTNAME] +[LASTNAME].

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne2.png')" alt="low score">
</div>

Lorsque vous ajoutez ou modifiez une campagne, **un éditeur de texte** permet la mise en forme du message à envoyer.





Choisissez ensuite le canal sur lequel vous souhaitez diffuser votre campagne : Microsoft Teams ou Skype.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne3.png')" alt="low score">
</div>



Les destinataires peuvent être ajoutés à partir d’une [**liste de diffusion**](/fr/chatbot/communication.html#communication-push) déjà existante mais également en créant une nouvelle liste de diffusion (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne4.png')" alt="low score">
</div>




Sélectionnez le jour à partir duquel le message sera envoyé (2), la durée de la campagne (3) puis indiquez les horaires de travail de vos entreprises (4).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne5.png')" alt="low score">
</div>




**Uniquement avec le canal Skype:**

Vous avez la possibilité de prévoir un envoi uniquement lorsque les destinataires apparaissent "disponible" ou de pousser le message lorsque le statut des destinataires est "disponible", "absent" ou "occupé" dans Skype.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne6.png')" alt="low score">
</div>




Le message programmé n'est pas diffusé en même temps à tous les destinataires mais de manière aléatoire. Lorsqu'une campagne dure plusieurs jours, voici le processus d'envoi en cas d'absence du destinataire :

-   A une heure précalculé
-   10 minutes après
-   À l’heure exacte après l’heure du premier message (par exemple à 14h27 puis à 15h00)
-   Le lendemain aux heures d’ouverture

Ce processus est répété 3 fois, le message sera ensuite deprogrammé.

Une fois la campagne terminée, vous retrouverez dans l'onglet "**Campagnes**" un rapport afin d'évaluer le succès de votre communication. Par exemple l’engagement de clic mesure le nombre de personnes qui ont cliqué sur un lien présent dans le message envoyé.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/communication/campagne7.png')" alt="low score">
</div>



Une campagne ne peut être modifiée que lorsqu'elle n'a pas encore été diffusée. Une fois diffusée, vous pourrez obtenir les informations à son sujet ou la supprimer.


Cliquez sur "**INFORMATIONS**" pour connaître :

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



### Commentaires
---
<div id="disqus_thread"></div>

<script>
export default {
  mounted () {
    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_09"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://docs-witivio.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
  }
}
</script>