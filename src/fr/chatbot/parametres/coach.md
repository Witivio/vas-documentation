**Coachs**
===========================


### A quoi sert ?
---
L'onglet « Coachs » permet de rajouter des coachs au chatbot. Cet onglet vous permettra de donner accès au coach à un ou plusieurs chatbot(s) défini(s).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/coach1.png')" alt="low score">
</div>



### Comment ?
---
Cliquez sur « ajouter un co-administrateur » (1) afin d’ajouter les noms des personnes qui pourront avoir accès au chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/coach2.png')" alt="low score">
</div>


Afin que ces co-administrateurs n'aient accès qu'au chatbot sélectionné, il vous faudra les supprimer en tant que user en cliquant sur votre icône en haut à droite, puis sur " Administrateurs".

::: tip 💡
En savoir plus sur les [**super adminitrateurs**](/fr/chatbot/administrateur_de_licence)
:::


### Commentaires
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_30"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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