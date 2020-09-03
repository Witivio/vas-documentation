# Suggested questions

The "Suggested Questions" tab corresponds to the questions for which the Active
Learning has been activated.

The Active Learning is triggered when the chatbot has a doubt about the
understanding of the question: several questions in the knowledge base trigger a
score higher than 30% but with a difference of less than 20 points.

For the questions in this tab, the chatbot suggested few questions and the user
thus selects the right suggestion to get the corresponding answer.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/inbox/suggested1.png')" alt="Suggested questions">
</div>



Suggested questions can be handled in the same way as unanswered questions and Low scoring questions.

Click on the question to display the details and take the necessary corrective
actions:

-   The question does not exist in the knowledge base: **Create a new question**
-   This is a reformulation of another question in the knowledge base: **Choose an existing question**
-   This is a reformulation of the choosen question: **Add the question as an alternative to the question selected by the user**
-   For all other actions: **Access the FAQ**

<div class="image_center">
  <img :src="$withBase('/assets/img/en/inbox/suggested2.png')" alt="Suggested questions 2">
</div>


### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#11"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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