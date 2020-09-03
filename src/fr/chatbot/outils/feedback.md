# Feedback


Dans cet onglet vous pouvez activer/désactiver et également paramétrer le Feedback (1), outil qui mesure la satisfaction de l’utilisateur par rapport aux réponses du chatbot. Ce dernier demandera systématiquement si l’utilisateur est satisfait, par exemple : "Es-tu satisfait de ma réponse ?" (2).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/feedback2.png')" alt="low score">
</div>


Voici des exemples de réponses données par le chatbot (3) :

-   Lorsque l’utilisateur est satisfait : "Merci de ton retour!"
-   Lorsqu’il indique ne pas être satisfait : "Merci de ton retour, je continue à travailler pour m’améliorer!"
-   L’utilisateur ne répond pas au feedback : "Pas de problème si tu ne souhaites pas me donner ton retour" (l'affichage de ce message peut être activé ou désactivé).

Le chatbot pose une question à l’utilisateur pour lui faire spécifier le type de retour s’il est mécontent. Par exemple : "Quelle est la nature de ton problème". De plus, le chatbot peut demander à l’utilisateur un retour libre, par exemple : "Décris ton problème ici" (4).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/outils/feedback3.png')" alt="low score">
</div>


Vous pouvez également activer ou désactiver le message de feedback ignoré. En effet, l'utilisateur peut décider de ne pas donner de feedback et poser directement une nouvelle question.



### Commentaires
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_24"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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