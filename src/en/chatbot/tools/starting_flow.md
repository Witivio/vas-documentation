# Starting Flow


**The starting flow tool is only supported in Webchat.** It allows the chatbot
to trigger a conversation tree to start the conversation.

This tab allows you to create new starting flow (1), but also to access already
existing ones in order to modify them if necessary (2).

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/starting1.png')" alt="low score">
</div>



When creating a new starting flow, choose the language and the profile (if the
chatbot is configured in multilingual and has several profiles); name the
starting flow and the file that will be created in Visio.

Once created, click on “Edit” on the starting flow. The latter, created in a
Visio file, is now available on the platform and on SharePoint. Access
Sharepoint and download Visio forms directly from the platform.

This allows you to modify the starting flow if necessary.

::: danger 🔴
Click on “Synchronize” to updated your Starting flow.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/starting2.png')" alt="low score">
</div>


::: warning ⚠️
Click on PUBLISH so that your conversation tree is available to users.
Otherwise, it will only be available in the Webchat in integration. -\> phrase
de arbre de conversation dans support escalade : voir quelle phrase mettre ici
pour starting flow
:::



### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#35"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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