# Coaches

Click on **Settings tab** then on **Coaches**.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/coach1.png')" alt="low score">
</div>


### What for ?
---

The “Coaches” tab allows to add coaches to the chatbots. It allows to give
access to the coach to one or several chatbots.

The coach is the person who ensure the continuous improvement of the chatbot, by
teaching it new questions and by improving already existing element of its
knowledge base (questions, alternative, synonyms …).

### How ?
---

Click on “Add a new coach” in order to add the name of the person who will be
able to access the chatbot.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/coach2.png')" alt="low score">
</div>

::: warning ⚠️
In order to allow these co-administrators (coaches) to access only the
selected chatbot, you will have to delete them as users by clicking on the icon
at the top right, then on “Administrators”.
:::

Click [**here**](/en/chatbot/licence_administrators) to know more about super administrators.


### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#24"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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