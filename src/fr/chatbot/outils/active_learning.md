# Entraînement actif ou Active Learning


Lorsque le chatbot n’est pas sûr de la question qui est posée, il propose plusieurs choix de questions. L’utilisateur sélectionne la bonne question et le chatbot lui apporte ensuite une réponse.

L’Active Learning se déclenche lorsque le chatbot a un doute sur la compréhension de la question, plusieurs questions présentes dans la base de connaissances déclenchent un score élevé (écart de moins de 20 points).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/entrainement1.png')" alt="low score">
</div>



C’est onglet est automatiquement paramétré mais il est possible d’apporter des modifications :

-   l’Active Learning peut être activé/désactivé (1)
-   le chatbot peut également lister les choix des utilisateurs lors d’un Active Learning (2).

De plus, vous pouvez indiquer l’expression qui sera utilisée par le chatbot lorsqu’il affiche le résultat trouvé par l’Active Learning. Par exemple : "Est-ce que tu veux dire … " (3).

Le nombre d’élément que doit retourner l’Active Learning est également paramétrable (4).

::: tip 💾
N'oubliez pas d'enregistrer après toute modification!
:::



### Commentaires
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {
    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_21"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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