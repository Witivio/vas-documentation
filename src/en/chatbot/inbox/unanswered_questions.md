# Unaswered questions

This section lists the questions of users to whom the chatbot could not provide an answer for the following reasons:

* The question does not exist in the knowledge base
* It is a reformulation of a question in the knowledge base
* The question does not fall within the chatbot's area of expertise
* The question was not correctly formulated by the user

<div class="image_center">
  <img :src="$withBase('/assets/img/en/inbox/unanswered1.png')" alt="unanswered questions">
</div>


Click on the question asked by the user to display the details and take the necessary corrective actions:

* The question does not exist in the knowledge base: <strong>Create a new question</strong>
* This is a reformulation of a question in the knowledge base: **Add the question as an alternative to an existing question**
* The question does not fall within the chatbot's field of expertise: **Delete (trash icon)**
* For all other actions: **Access the FAQ**

<div class="image_center">
  <img :src="$withBase('/assets/img/en/inbox/unanswered2.png')" alt="acces to faq">
</div>


::: tip How to manage unanswered questions
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/xIWY-gcGXBE?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br style="margin: .5rem 0;" >

:::

### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#12"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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