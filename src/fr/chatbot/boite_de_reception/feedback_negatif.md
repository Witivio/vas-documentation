# Feedback négatif

Le Feedback se déclenche après chaque réponse apportée par le chatbot. Il mesure la satisfaction de l'utilisateur.


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/negfeed1.png')" alt="Suggested questions 2">
</div>




L’onglet Feedback présent dans la boîte de réception ne regroupe que les retours négatifs. Lorsque l'utilisateur répond être insatisfait, le chatbot souhaite en savoir en indiquant plusieurs propositions :

-   La réponse contient des fautes
-   La réponse est incomplète
-   La réponse ne correspond pas à la question posée
-   Autre


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/negfeed2.png')" alt="Suggested questions 2">
</div>

Pour chacune des questions vous pouvez alors connaître la raison du mécontentenment de l'utilisateur. Le coach pourra alors effectuer les actions correctives nécessaires. Retrouvez également les nformations sur la question à traiter : " L'utilisateur s posé la question le ... et la réponse a été modifié le...".

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/negfeed3.png')" alt="Suggested questions 2">
</div>


Ici, par exemple, la réponse contient des fautes (1).

Elle peut être complétée ou modifiée en accédant directement à la base de connaissances (FAQ) (2).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/negfeed4.png')" alt="Suggested questions 2">
</div>


Par défaut cette fonctionnalité est désactivée (1). Vous trouverez tous les renseignements en cliquant sur l'onglet Outils puis Feedback.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/negfeed5.png')" alt="Suggested questions 2">
</div>


### Commentaires
---
<div id="disqus_thread"></div>


<script>
export default {
  mounted () {
    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_04"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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