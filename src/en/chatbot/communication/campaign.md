# Campaign

To start a push campaign, you have to create a campaign. Click on
“**Communication**” tab then on “**Campaign**”.

::: warning ⚠️
This tab is available for chatbot with Skype for Business and Microsoft Teams as channel.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign1.png')" alt="low score">
</div>


Click on “**NEW CAMPAIGN**” to create a new campaign. To configure it, name it and
add the message that the chatbot will send. You can customize the message as
follows:

```
Hello, [FIRSTNAME] +[LASTNAME].
```

When you add or modify a campaign, a text editor allows you to format the
message.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign2.png')" alt="low score">
</div>




Choose the channel on which you want to boradcast your campaign: Skype or Microsoft Teams. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign3.png')" alt="low score">
</div>




Recipients can be added from an existing [**user list**](/en/chatbot/communication/user_lists.html) but also by
creating a new mailing list.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign4.png')" alt="low score">
</div>




Select the day from which the message will be sent (1), the duration of the
campaign (2) and then indicate the working hours of your companies (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign5.png')" alt="low score">
</div>




### Only for the channel Skype
---
You can schedule the sending of the message when the recipients are "available"
on Skype, or push the message when the status of the recipients is "available",
"absent" or "busy" in Skype.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign6.png')" alt="low score">
</div>




The programmed message is sent randomly and not at the same time to all
recipients. When a campaign lasts several days, here is the sending process in
case of absence of the recipient:

-   At a pre-calculated time
-   10 minutes later
-   At the exact time after the time of the first message (for example at 2:27
    p.m. then at 3:00 p.m.)
-   The next day during opening hours

This process is repeated 3 times, after this, the message will then be
unprogrammed.

Once the campaign is over, you will find in the "Campaigns" tab a report to
evaluate the success of your communication. For example, the click engagement
measures the number of people who clicked on a link included in the sent
message.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign7.png')" alt="low score">
</div>


A campaign can be modified only when it has not yet been broadcast. 
Once it has been released, you will be able to get information about it or delete it.


Click on « iNFORMATION » to know:

-   The channel
-   The message of the campaign
-   The name of the list
-   The starting date and hour 
-   The duration of the campaign


>   You can also delete the campaign (DELETE button) or test it (TRY button).

::: warning ⚠️
Once a campaign has started, it cannot be modified or cancelled. 
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign8.png')" alt="low score">
</div>



The “TRY” button allows you to test if the campaign works well.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/communication/campaign9.png')" alt="low score">
</div>



Enter your e-mail address to check the efficiency of your campaign. If the
campaign is configured well, you will get the message of the chatbot.

::: tip 💾 
Do not forget to save changes.
:::

::: tip How to create a push campaign
<br style="margin: .5rem 0;" >

<iframe class="video_embed" src="https://www.youtube.com/embed/_Vhu2RpzHbY?list=PLRFG2FXmQTR_EV3iWJ9HL2Go95WhNq9Qb" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      this.page.identifier = "witivio_#03"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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