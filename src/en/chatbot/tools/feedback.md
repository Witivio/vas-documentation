# Feedback

Click on **“Tools”** tab then **“Feedback”**

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/feedback1.png')" alt="low score">
</div>

In this tab you can enable/disable and also set up the Feedback tool. It
measures user satisfaction in relation to the chatbot answers. It asks for
example: "Are you satisfied with my answer?".

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/feedback2.png')" alt="low score">
</div>


Here are some examples of the answers given by the chatbot :

-   When the user is satisfied: “Thank you for your feedback”
-   When the user is not satisfied: “Thank you for your feedback, I keep working
    to get better
-   When the user ignore the feedback: “ No problem if you do not want to give
    me your feedback” ( you can activate/deasctive the display of this message)

When the user is not satisfied, the chatbot ask the reason, for example : “Is
the defect one of … “ or “Describe the issue”.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/feedback3.png')" alt="low score">
</div>


### Comments
---
<div id="disqus_thread"></div>


<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#31"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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