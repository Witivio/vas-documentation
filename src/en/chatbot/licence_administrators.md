# Licence Administrators

Click on your icon at the top right of the platform and then on
“Administrators”.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/licence_administrators/licence1.png')" alt="low score">
</div>

### What for ?
---

The **Administrators page** allows you to add or remove coaches to the chatbot.
This tab will allow you to give the coach acess to the platform to one or
several defined chatbot(s).

An administrator has access to all the chatbots of a company, while a coach has
access to one or several specific chatbot.

The coach is the person who ensures the continous improvement of the chatbot, by
teachin it new questions and by improving already existing element of its
knowledge (questions, alternatives, synonyms, … )


### How ?
---

Click on **Add a new administrator**

<div class="image_center">
  <img :src="$withBase('/assets/img/en/licence_administrators/licence2.png')" alt="low score">
</div>

Super administrators have access to all chatbots.

If you want to remove an administrator, click on the adress, then on “Actiont”
and “Delete”.

On the platform's home page, the "Privacy Policies" tab allows you to configure
the privacy settings globally for all available chatbots (1) or for each of your
chatbots (2) :

-   record the identity of users
-   record the conversation history
-   enable pre-configured queries related to the [**GDPR**](/en/chatbot/settings/privacy.html#gdprl)

<div class="image_center">
  <img :src="$withBase('/assets/img/en/licence_administrators/licence3.png')" alt="low score">
</div>




### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#41"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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