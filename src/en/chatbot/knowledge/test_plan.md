# Test plan

Click on**Knowledge** then **Tests**.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/test_plan1.png')" alt="low score">
</div>




### What for?
---
>This tool allows you to perform non-regression test on the platform. In case you
modify the knowledge base (for example add new questions), you will be able to
check that the old questions are still working properly.

### How?
---
First, click on “New test plan”

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/test_plan2.png')" alt="low score">
</div>



Select the profil and add the name of the new test plan

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/test_plan3.png')" alt="low score">
</div>



Once the test plan has been created, you can create a new one.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/synonyms3.png')" alt="low score">
</div>



You will be able to define a rule, that is to say a minimum score expected
between the question asked by the user and the question in the knowledge base.

Once created and executed, click on the test case. You can decide to test again
it againg by clicking on the test then on on the “RUN” button (1).

If the percentage (2) (on the right of the question) is equal to or higher than
the predefined score, the test is valid (blue 👍). Otherwise, if necessary, the
knowledge base must be modified (red 👎) (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/test_plan4.png')" alt="low score">
</div>


### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#20"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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