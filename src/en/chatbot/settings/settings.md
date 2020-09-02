# Settings

Click on **Settings tab** then **Settings** again.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting1.png')" alt="low score">
</div>


## Bot


This tab allows to have information about the Id of the chatbot, but also to
modify its name and pictue, when needed.

::: tip 💡
You can also delete the chatbot.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting2.png')" alt="low score">
</div>

## Authorization

By clicking on “I authorize you”, the chatbot will be updated. It is recommended
to update this authorisation each 90 days. 

This authorization allows the chatbot to retrieve the Visio file in order to synchronize them. 
When the authorization expires, click on the "I authorize you" button to renew your connection to SharePoint. 
Don't forget to click on SAVE. 


## Dashboard

This tab allows to s choose the date from which you want to display the
dashboards.

* [**Performance dashboard**](/en/chatbot/dashboards/performance.html)
* [**Usage dashboard**](/en/chatbot/dashboards/usage.html)


When resetting the date, the chatbot performance and usage statics will only be displayed starting from the chosen date. 
Delete the date if you want to return to the previous information. 



## Sharepoint

You can import a SharePoint site and library. This sharepoint library is needed to store your Visio files, which are used to create conversation trees, starting flows and escalation. 

Once the library is configured, click on "Import a library from SharePoint" and add the library URL.  

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting3.png')" alt="low score">
</div>

When the authorization has expired, access the [**Authorization**](/en/chatbot/settings/settings.html#authorization) tab then select "I authorize you". Do not forget to click on save. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting4.png')" alt="low score">
</div>


Follow these steps to renew the authorization:
**Settings** > **Settings** > **Authorizations** > **"I authorize you"**

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting5.png')" alt="low score">
</div>


## API KEY

When the chatbot uses an API via a conversation tree, the API key is sent. In
order to verify and secure calls to external APIs, you can integrate the
verification of this external API key into your APIs.

If the key is not sent in the "witivio-apikey" header of the request then it is
because the call does not come from the chatbot and therefore it is better to
ignore the call and forward an HTTP 403 response.

If you think the API key is no longer secure, then you can regenerate it. Don't
forget to modify it in your APIs.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting6.png')" alt="low score">
</div>

::: tip 💾
Save Changes!
:::


## Data deletion

This tab allows you to delete the chatbot data. 
Select a date and all data before this date will be deleted. 

You can decide to delete only the data of a specific user by selecting the user's name. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/setting7.png')" alt="low score">
</div>

