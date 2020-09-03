# Score faible

Le score faible se déclenche lorsqu'une seule question présente dans la base de connaissances correspond à la question posée par l'utilisateur mais que le score est comme son nom l'indique : faible.

Le score de confiance est considéré comme faible lorsqu'il est entre 35% et 50%.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/low1.png')" alt="low score">
</div>


Les questions à score faible peuvent être traitées de la même façon que les questions sans réponses. Les actions correctives sont :

Cliquez sur la question pour afficher les détails et apporter le correctif nécessaire
Actions:

-   Créer une nouvelle question.
-   Ajouter à une question existante.
-   Ajouter comme alternative à la question sélectionné par l'utilisateur.
-   Accéder à la **FAQ**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/low2.png')" alt="low score 2">
</div>



### Commentaires
---
<div id="disqus_thread"></div>

<script>
export default {
  mounted () {
    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_08"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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