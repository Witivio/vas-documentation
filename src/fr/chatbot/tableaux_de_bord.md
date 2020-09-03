# Tableaux de bord

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/dashboard1.png')" alt="Suggested questions 2">
</div>



>Les tableaux de bord d’évaluation permettent de visualiser de manière plus accessible et compréhensive l’activité du Chatbot. Ces outils sont incontournables pour mesurer sa performance.

>L’ensemble des données permettent l’amélioration continue du Chatbot.

Toutes les données permettent l'amélioration continue du Chatbot.

Les tableaux de bord comportent [le rapport de la performance](/fr/chatbot/tableaux_de_bord/rapport_performance.html) ainsi que [le rapport d'usage](/fr/chatbot/tableaux_de_bord/rapport_usage.html).

Une date de réinitialisation est indiquée à coté des rapports de performance et d'usage.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/dashboard2.png')" alt="Suggested questions 2">
</div>


::: danger 🔴
Les statistiques des tableaux de bord sont calculées toutes les heures fixes. Par exemple à 17h vous aurez accès à toutes les statistiques disponibles entre 16h et 17h. En revanche, à 16h55 les statistiques ne seront pas disponibles sur l'heure actuelle.
:::



### Commentaires
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_50"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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