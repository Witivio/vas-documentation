# Channels

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels1.png')" alt="low score">
</div>



This tab allows you to configure the channels on which the chatbot is available:
- you can modify the channels already available or add a new channel later.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels2.png')" alt="low score">
</div>



## Skype for Business

Click on “edit” to access the setting of the channel Skype for Business.  
Here you can click on pause ⏸️ if you want that the chatbot appear “offline” on
skype; or click on 🔄 restart to start the connector in case of issue.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels3.png')" alt="low score">
</div>


The following boxes contain the connection information: E-mail, password, Azure
ID.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels4.png')" alt="low score">
</div>


You can also indicate the description of the chatbot which will appear on Skype.
For example: HR assistant. In case you decide to modify it, the change will
automatically appear on Skype above the chatbot name.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels5.png')" alt="low score">
</div>


It also possible to consult the event logs of the connector.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels6.png')" alt="low score">
</div>



## Microsoft Teams

Click [**here**](/en/chatbot/build_your_chatbot/requisites.html) to know how to activate a chatbot on Microsoft Teams.


#### Download the Teams package
---
When you configure or want to modify the configuration of your chatbot Teams,
you can download a zip file containing:

* A JSON file
* 2 photos (96x96 Px, 20x20 Px).

This file describes the information provided in the application.

You can add this package in Teams. Choose a team and a channel in Microsoft
Teams, choose + to add an application (Click on "Other application").


## Webchat


The webchat channel is automatically activated. 

<div class="image_center">
  <img class="webchat_img" :src="$withBase('/assets/img/en/settings/creation3.png')" alt="low score">
</div>


::: danger 🔴
The Webchat window is your chatbot in integration and allows you to test the chatbot before publishing it.
:::

If you modify the profile in the knowledge base, the chatbot takes into account
the choice of the new profile in the test.


## Configuration of the Webchat V2 component


<table>
        <tr>
            <td>botId</td>
            <td>The unique ID of your chatbot. The ID is available in the settings menu.</td>
        </tr>
        <tr>
            <td>color</td>
            <td>Primary color in hexa.</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>URL of your chatbot's image.</td>
        </tr>
		<tr>
            <td>title</td>
            <td>The title of the chat window. Usually the name of the chatbot.</td>
        </tr>
	    <tr>
            <td>description</td>
            <td>Description of the chat window. Usually the role of the chatbot.</td>
        </tr>
		<tr>
            <td>callout</td>
            <td>Activate the welcome message. (by default: true)</td>
        </tr>
		<tr>
            <td>welcome</td>
            <td>Enable the display of the welcome message in the chat window. (by default: true)</td>
        </tr>
		 <tr>
            <td>user</td>
            <td>Not mandatory. If you are on SharePoint Online, you can use : 
            <pre><code>
{
    'id': _spPageContextInfo.aadUserId,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            or
            <pre>
            <code>
{
    'id': _spPageContextInfo.userPrincipalName,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            If no configuration is specified, the component generates a unique identifier that is stored in the browser.
            </td>
        </tr>
        <tr>
            <td>refresh</td>
            <td>Displays a button that refreshes the component (by default: false)</td>
        </tr>
         <tr>
            <td>hideSendBox</td>
            <td>Hide the message entry field and the send button (by default: false)</td>
        </tr>
        <tr>
            <td>apiKey</td>
            <td>Find the api key in the settings of the chatbot</td>
        </tr>
        <tr>
            <td>displayMode</td>
            <td>Determines whether the webchat should be displayed 'open' or 'close' when it is loaded (by default is 'close')</td>
        </tr>
         <tr>
            <td>environnement</td>
            <td>Environment of the Knowledge Base ('production', or 'integration') (by default:  'production')</td>
        </tr>
         <tr>
            <td>triggerableDialogId</td>
            <td>ID of the Triggerable ID to start (optional)</td>
        </tr>
        <tr>
            <td>triggerableDialogItemId</td>
            <td>ID of the Triggerable Item ID to start (optional)</td>
        </tr>
        <tr>
            <td>background</td>
            <td>Background image (by default: square3d) Possible values: (square3d, communication, square, travel)</td>
        </tr>
         <tr>
            <td>autocomplete</td>
            <td>Allows you to display the list of questions in autocompletion mode (by default: false)</td>
        </tr>
         <tr>
            <td>autoscroll</td>
            <td>Allows you to force the auto scroll when a user gets back into the conversation and decides to send a message back into the chat.</td>
        </tr>
</table>

#### [Configuration of the Webchat V1 component compatible with IE11 (obsolete)](/en/chatbot/webchat_v1.html)

## Security of the chatbot 

The Webchat allows you to manage the **security of the chatbot** in a better way. It allows you to know where the webchat is deployed. For governance purposes, it is mandatory to explicitly indicate where the webchat is located, and therefore declare the different sites on which it will be available.

::: warning ⚠️
**Without this explicit definition, the webchat will not upload to your site**. This prevents a person from adding webchat without permission.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels8.png')" alt="low score">
</div>

::: danger 🔴
The Webchat also appears in the Webchat channel settings tab, so you can test and talk directly to the chatbot in production.
:::

## Configuration of the SharePoint Modern webpart

You can download the webpart [here](http://webchat.witivio.com/webpart/witivio-webchat.sppkg)

In order to add the webpart into your SharePoint Modern, you need to add the sppkg package to the app catalog.

> If you do not have an app catalog, a SharePoint Online Admin can create one by following the instructions in this guide: [Use the App Catalog to make custom business apps available for your SharePoint Online environment](https://docs.microsoft.com/en-us/sharepoint/use-app-catalog).

## Deploy the package to app catalog

1. Go to your site's app catalog.
2. Upload or drag and drop the witivio-webchat.sppkg to the app catalog.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels9.png')" alt="low score">
</div>


This deploys the client-side solution package. Because this is a full trust client-side solution, SharePoint displays a dialog and asks you to trust the client-side solution to deploy.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels10.png')" alt="low score">
</div>

3. Select Deploy.


## Configure the webchat for SharePoint Modern

The webchat is now available from your pages in your SharePoint site.

1. Edit a page on your SharePoint Site
2. Click on Add a new WebPart
3. If you scroll down you will find "Witivio-webchat" webpart

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels11.png')" alt="low score">
</div>


4. Select it. the component appear, but the webchat is not configured yet.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/settings/channels12.png')" alt="low score">
</div>

::: tip 💡
It will not appear until you configure it.
:::

5. Select the pencil to edit the parameters.

Please refere to the article above to understand the configuration

::: tip 💡
When adding the webpart to SharePoint the user context is send to the webchat. That means that the upn and the name of the user is send to the bot. Do not forget to review your privacy policies if you want your users to be anonymous.
:::

## SMS 


Chat with your chatbot by using text message from your mobile phone.

Click [**here**](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-twilio?view=azure-bot-service-4.0&viewFallbackFrom=azure-bot-service-4.0https%3A%2F%2Fdocs.microsoft.com%2Ffr-fr%2Fazure%2Fbot-service%2Fbot-service-channel-connect-twilio%3Fview%3Dazure-bot-service-4.0) for more information about the Twiliio configuration.



### Comments
---
<Commentaire />
