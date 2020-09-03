# Active Learning

Click on **“Tools”** tab then on “**Active Learning**”.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/activelearning1.png')" alt="low score">
</div>

When the chatbot is not sure of the question asked by the user, it suggests
several choices of questions. The user selects the right question and the
chatbot give then the answers.

The Active Learning is triggered when the chatbot has a doubt about the
understanding of the question. Several questions in the knowledge base trigger a
high score [**(Scoring rules)**](/en/chatbot/inbox/scoring_rules.html) (difference of less than 20 points between
the different questions).

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/activelearning2.png')" alt="low score">
</div>



This tab is automatically set up but it is possible to modify its settings:

-   The Active Learning can be activated/deactivated (1)
-   You can specify the expression that will be used by the chatbot when the
    Active Learning is triggered. For example: "Do you mean..." (2).
-   You can choose the number of elements (questions) that Active Learning must
    return (3).
-   the chatbot can also list users' choices during Active Learning (4).

::: tip 💾
Don't forget to save changes!
:::

### Comments
---
<div id="disqus_thread"></div>


<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#29"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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