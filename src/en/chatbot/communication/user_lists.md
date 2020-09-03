# User lists

Click on **“Communication”** then “**User lists**”.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist1.png')" alt="low score">
</div>


::: warning ⚠️
The “Communication” tab is available only for chatbots with the channel Skype
for Business.
:::

First, you can create a user list, that is to say a list with all users that
will receive the message of the chatbot. To this, click on “+ new users list” and name the list,

These lists can be configured: 

**1 ) From an Excel file (static list)**. To know the format of this Excel file, click on the [**sample**](https://witivio.blob.core.windows.net/static/list-sample.xlsx)" (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist2.png')" alt="low score">
</div>


::: warning ⚠️
Add **SIP addresses** for Skype and **UPN adresses** for Microsoft Teams. 
:::

::: warning ⚠️
All lines of the file (name, first name, SIP/UPN address) must be filled in.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist3.png')" alt="low score">
</div>




**2 ) From an Active Directory group (dynamic list).**

1. The Client Administrator provides Witivio with the ID client and the Secret of an Azure AD application. Witivio records this information.

2. Authentication to Azure AD to get a valid token.

3. When configuring a push campaign, Witivio searches and displays the groups to which the connected back office user belongs. The user selects a group. 

4. Executing a push campaign. Reading group membersReading the members' SIP address. Sending of messages.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist4.png')" alt="low score">
</div>




The user List is now configured. Let’s go!

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist5.png')" alt="low score">
</div>



Click on “EDIT” to modify the name of the list, to delete it or add users.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist6.png')" alt="low score">
</div>



<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist7.png')" alt="low score">
</div>


::: danger 🔴
When you want to create a push campaign on Microsoft Teams, you have the possiblity to know if your recipients have installed the chatbot application in Microsoft Teams. 
Only users with the Teams icon to the right of their address will receive the push message. 
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/userlist8.png')" alt="low score">
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
      this.page.identifier = "witivio_#04"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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