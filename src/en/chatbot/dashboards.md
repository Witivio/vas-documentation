# Dashboards

<div class="image_center">
  <img :src="$withBase('/assets/img/en/dashboards/dashboard1.png')" alt="Suggested questions 2">
</div>

>   The dashboards provide a more accessible and comprehensive view of the
>   Chatbot's activity. These tools are essential to measure its performance.

All the data allows the continuous improvement of the Chatbot.

The dashboards include [**the performance report**](/en/chatbot/Dashboards/Performance.html) as well as
[**the usage report**](/en/chatbot/Dashboards/Usage.html).


A reset date is indicated next to the performance and usage reports.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/dashboards/dashboard2.png')" alt="Suggested questions 2">
</div>


::: danger 🔴
Dashboard statistics are calculated every fixed hour. For instance, at 5pm you
will have access to all the statistics available between 4pm and 5pm. However,
at 4:55 p.m. statistics will not be available at the current time.
:::

### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#38"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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