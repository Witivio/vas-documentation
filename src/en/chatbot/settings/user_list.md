**User Lists**
==================

Click on **Settings** then **User lists**.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/settingsuserlist1.png')" alt="low score">
</div>



You can create a user list to set a [**white list**](/en/chatbot/settings/chatbot.html)

To this, click on “+ new users list”, name the list.

These lists can be configured from an Active Directory group (dynamic list) or
by importing an Excel file (static list). To know the format of this Excel file,
click on the sample.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/settingsuserlist2.png')" alt="low score">
</div>


::: warning ⚠️
Add **SIP addresses** and not email addresses.
:::

::: warning ⚠️
All lines of the file (name, first name, SIP address) must be filled in.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/settingsuserlist3.png')" alt="low score">
</div>



The user List is now configured. Let’s go!

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/settingsuserlist4.png')" alt="low score">
</div>



Click on “EDIT” to modify the name of the list, to delete it or add users.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/settingsuserlist5.png')" alt="low score">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/settingsuserlist6.png')" alt="low score">
</div>


::: tip 💾
Save changes!
:::



### Comments
---
<div id="disqus_thread"></div>

<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#28"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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