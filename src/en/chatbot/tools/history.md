# Conversation history

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/history1.png')" alt="low score">
</div>



The conversations and the identity of users are registered. The user can be
informed that the conversations are registered. These privacy policies are
configured beforehand but can be modified: [**Privacy policies**](/en/chatbot/settings/privacy.html). 

You can find all conversations in the tab **Tools** > **History**. 

> Use filters to choose the period of time you want to display the conversation history or search the user who talked to the chatbot.

> Click on the wished conversation to get more details about the exchange between the chatbot and the user. 

> You can also filter the conversation history by profiles or channels if available. 

> Finally, you can export the history by using the EXPORT button in the top right corner.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/history2.png')" alt="low score">
</div>

### Comments
---
<div id="disqus_thread"></div>


<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#32"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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