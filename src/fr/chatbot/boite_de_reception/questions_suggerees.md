# Questions suggérées

L'onglet "Questions suggérées" correspond aux questions pour lesquelles l'Active Learning s'est déclenchée.

L’Active Learning se déclenche lorsque le chatbot a un doute sur la compréhension de la question : plusieurs questions présentes dans la base de connaissances déclenchent un score supérieur à 35% mais avec un écart de moins de 20 points.

Dans cet onglet, retrouvez l'ensemble des questions proposées par le chatbot lors du déclenchement de l'active learning ainsi que le choix de l'utilisateur.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/suggested1.png')" alt="Suggested questions">
</div>



En cliquant sur les questions, la plateforme vous permet de réaliser des actions correctives suivantes :

-   Créer une nouvelle question.
-   Ajouter à une question existante.
-   Ajouter comme alternative à la question sélectionnée par l'utilisateur (1).
-   Accéder à la **FAQ**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/suggested2.png')" alt="Suggested questions 2">
</div>



### Commentaires
---
<div id="disqus_thread"></div>

<script>
export default {
  mounted () {
    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_06"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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