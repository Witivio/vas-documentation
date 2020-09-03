# Administrateurs de licence


Cliquez sur votre icône en haut à droite de la plateforme puis sur "**Administrateurs**".

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/administrateurs_de_licence/administrateurs_de_licence1.png')" alt="low score">
</div>


La page "**Administrateurs**" permet de rajouter ou de supprimer des coachs de licence aux chatbots.

::: tip 💡
* Les administrateurs de licence sont les coachs qui ont accès à l'ensemble des chatbots d'une licence.
* **Un coach** n'a accès uniquement à un ou plusieurs chatbot(s) défini(s). L'accès des coachs à la plateforme est geré depuis l'onglet Paramètres > Coach.
:::

Pour rappel, le coach est la personne qui assure l’amélioration continue du chatbot. Il lui apprend les questions auxquelles il ne sait pas répondre et améliore l’ensemble de ses connaissances (questions, réponses, synonymes…).

### Politiques de confidentialité

Sur la page d'accueil de la plateforme, l'onglet "Politiques de confidentialité" vous permet de configurer les paramètres de confidentialités de manière globale pour l'ensemble des chatbots disponibles (1) ou pour chacun de vos chatbots (2), à savoir :

-   Enregistrer l'identité des utilisateurs
-   Enregistrer l'historique de conversation
-   Activer les questons préconfigurées liées au RGPD

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/administrateurs_de_licence/administrateurs_de_licence2.png')" alt="low score">
</div>


### Commentaires
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_39"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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