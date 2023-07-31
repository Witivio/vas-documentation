---
sidebar : auto
title: "Architecture and security"
---



## Introduction

This document summarizes the macro technical architecture as well as data management and authentication systems.

## Architecture

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center1.png')" alt="Architecture and security">
</div>


## Hosting

The Witivio 365 solution is hosted in the Microsoft Azure Data Center located in Northern Europe (Ireland).

CF : [https://azure.microsoft.com/en-us/regions](https://azure.microsoft.com/en-us/regions)

* **The services used are:**

  * Azure Active Directory
  * Azure Functions
  * Azure App Services
  * Azure Storage
  * Azure Cosmos DB
  * Azure key Vault
  * Azure Service Bus
  * Azure Cognitive Services
    * Language Understanding (LUIS)
    * Text Analytics
    * Bing Spell Check
    * Translator
  * Qna Maker
  * Application Insight
  * SendGrid
  * Azure DataFactory
  * Azure Relay
  * Azure CDN
  * Azure Search
  * Azure Signal R


### Azure Architecture

<br />

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center2.png')" alt="Azure Architecture">
</div>


All the Azure component are exposed to Internet. Microsoft doesn&#39;t not provide VNET for all those components.



## Authentication

### Back office

Platform administrators connect with their Azure AD / Office 365 account on [https://app.witivio.com](https://app.witivio.com/)

Authentication is done with a multi-tenant Azure AD application.

Cf : [https://docs.microsoft.com/en-us/azure/active-directory/application-dev-setup-multi-tenant-app](https://docs.microsoft.com/en-us/azure/active-directory/application-dev-setup-multi-tenant-app)

| **Name** | Witivio - O365 |
| --- | --- |
| **ID** | 8c5c0060-2892-4355-b0db-661f206028a9 |
| **Permissions** | Delegated permissions |
| **Scopes** | User.Read, profile, User.ReadBasic.All, |

>More information: [https://developer.microsoft.com/en-us/graph/docs/concepts/permissions\_reference](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference)


#### Flow
---

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center3.png')" alt="Azure Architecture - Flow">
</div>


* The data exchange is done via HTTPS with TLS version 1.2.
* The certificate is provided by AlphaSSL CA – SHA256 – G2


### Bot & Office 365

When configuring a bot, the chatbot administrator / sponsor must grant special permissions through an Azure AD application, specific to each chatbot category.

#### Architecture
---

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center4.png')" alt="Azure Architecture - Architecture">
</div>



#### QnA
---

| **Name** | QnA365 - Witivio |
| --- | --- |
| **ID** | 1ba3af40-9c65-4bc1-86ac-479a85601ecc |
| **Permissions** | Delegated permissions |
| **Scopes** | Openid, profile, Sites.ManageAll |

#### DynaMeet
---

| **Name** | Dynameet365 - Witivio |
| --- | --- |
| **ID** | 1889c70d-4001-407f-90ea-03a3ecf3f2cb |
| **Permissions** | Application permissions |
| **Scopes** | Calendar.Read.Write, User.Read.All, MailboxSettings.All |

#### Key Vault
---

The authentication tokens of each activated chatbot are stored in Azure Key Vault, along with the user secret mode.

Cf : [https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis)




## Authorization

### Back Office

The back office is governed by 2 levels of authorization.

| **Role** | **Scope** |
| --- | --- | --- |
| **Super Admin** | Witivio | Access to all chatbots activated by Witivio customers |
| **Admin** | Client | Access to all chatbots enabled by the Azure AD Client tenant license |

### Chatbot access

#### Skype for Business
---

Chatbot access via Skype for Business is not restricted. Anyone with the ability to connect to Skype for Business with a Skype for Business client (desktop, mobile or web) is in the technical capacity to chat with the chatbot.

To converse with the chatbot just know the Name (DisplayName) or SIP of the chatbot.

#### MS Teams
---

Access to the chatbot via Microsoft Teams is limited to users who are in the Teams group where the chatbot package has been activated.

#### Web chat
---

Access to the chatbot via Webchat is not limited. Anyone with the ability to connect to the website on which the chatbot is present is in the technical capacity to interact with it.





## Channels

### Skype for Business _(S4Bot)_

#### Protocol and communication
---

Communication with the Skype Online or Skype OnPremise server is done using the UCWA 2.0 protocol.

Cf : [https://ucwa.skype.com/](https://ucwa.skype.com/)

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center5.png')" alt="Protocol and communication">
</div>



#### Architecture
---

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center6.png')" alt="Protocol and communication">
</div>




#### Mode
---

#### A. Hybrid

##### I - Infrastructure and prerequisites :
---
- Skype for Business Server 2015 >= 6.0.9319
- Supported Operating System:
  - Windows 10; Windows 8; Windows 8.1; Windows Server 2012; Windows Server 2012 R2Windows 8 (x86 et x64) ; Windows 8.1 (x86 et x64); Windows 10 ; Windows Server 2012 (x64) ; Windows Server 2012 R2 (x64)
- 1.5 GHz+
- 1024 MB of RAM
- 100 Mo of available hard disk space
- .NET Framework
- Install .NET Framework 4.6.1: [https://www.microsoft.com/download/details.aspx?id=49981/](https://www.microsoft.com/download/details.aspx?id=49981/)
- Internet access

##### II - Authentication
---
Authentication to the Skype for Business OnPremise server is done with:

- A user account (login and password)
- A Skype for Business license
- Exhibition of: https: //lyncdiscover.xx.xx

##### III - Communication API Push with the chatbot
---
The Skype for Business Connector is installed on an internal server. The push system requires communication to the cloud.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center7.png')" alt="Protocol and communication - Communication API push with the chatbot">
</div>

<br />
<br />
<br />

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center8.png')" alt="Protocol and communication - Communication API push with the chatbot">
</div>


Cf :

- WCF Relay: [https://docs.microsoft.com/en-us/azure/service-bus-relay/relay-what-is-it](https://docs.microsoft.com/en-us/azure/service-bus-relay/relay-what-is-it)
- Port: [https://docs.microsoft.com/en-us/azure/service-bus-relay/relay-port-settings](https://docs.microsoft.com/en-us/azure/service-bus-relay/relay-port-settings)

#### B. Online

##### I - Authentication
---
Authentication to the Skype for Business OnPremise server is done with:

- A user account (login and password)
- A Skype for Business license
- An Azure AD application in the client directory
  - See: Manually Configuring the AAD Application for Office 365.pptx
- Authentication in Grant Type : Password

#### C. Strong Connection Information Box
---
Login information and authentication tokens are stored in Azure Key Vault, along with the user secret mode.

- RSA 2048-bit key
- Reading traceability

Cf : [https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis](https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis)

#### Flow
---

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center9.png')" alt="Flow">
</div>



### Microsoft Teams

#### Protocol and communication
---
The interconnection between the chatbot and Microsoft Teams is operated by Microsoft.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center10.png')" alt="Protocol and communication - Microsoft Teams">
</div>



#### Authentication
---
An Azure AD application specific to each chatbot (create in the Witivio tenant) allows communication between the bot and Microsoft Teams.

### WebChat

#### Protocol and communication
---

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center11.png')" alt="Protocol and communication - WebChat">
</div>



#### Token generation
---

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center12.png')" alt="Protocol and communication - Token Generation">
</div>



#### Domain
---
| **Url** |
| --- |
| [https://webchat.witivio.com](https://webchat.witivio.com) |

| **Javascript &amp; css loaded files** |
| --- |
| **Init.js** |
| **Chat.js** |
| **Botchat.js** |
| **Btn.js** |
| **Callout.js** |
| [https://cdn.jsdelivr.net/npm/mutationobserver-shim/dist/mutationobserver.min.js](https://cdn.jsdelivr.net/npm/mutationobserver-shim/dist/mutationobserver.min.js) |
| [https://code.jquery.com/jquery-3.1.1.min.js](https://code.jquery.com/jquery-3.1.1.min.js) |
| [https://code.jquery.com/ui/1.12.0/jquery-ui.min.js](https://code.jquery.com/ui/1.12.0/jquery-ui.min.js) |
| **Style.css** |
| **Botchat.css** |

- The data exchange is done via HTTPS with TLS version 1.2.
- The certificate is provided by DigiCert SHA2 Secure Server CA

## Power Automate / LogicApps integration

The Witivio connector is validated by Microsoft and published in the LogicApps &amp; Power Automomate gallery.

The communication is made via API and Webhook communication.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/trust_center13.png')" alt="Power Automate / LogicApps integration">
</div>



The Witivio connector is open sourced by Microsoft: [https://github.com/microsoft/PowerPlatformConnectors/tree/master/connectors/Witivio](https://github.com/microsoft/PowerPlatformConnectors/tree/master/connectors/Witivio)

To know more about custom connectors: [https://docs.microsoft.com/en-us/connectors/custom-connectors/create-webhook-trigger](https://docs.microsoft.com/en-us/connectors/custom-connectors/create-webhook-trigger)

## Data

| **Backend** | **Type** | **Providers** | **Access** |
| --- | --- | --- | --- |
| **Co administrators** | FullNameEmailAzure AD ID | Backend administrators | Backend administratorsWitivio administrators |
| **KB** | Knowledge base text (question / answer) | Backend administratorsWitivio administrators | Backend administratorsWitivio administrators |
| **Dialogs** | Visio files stored in the client SharePoint Online | Backend administratorsWitivio administrators | Backend administrators
 |
| **Statistics** | Number of unique usersNumber of unique messagesSentimentUser message | Backend administratorsWitivio administrators | Backend administratorsWitivio administrators |
| **Messages** | Bot configuration messages | Backend administrators | Backend administratorsWitivio administrators |
| **Campaign** | Parameter of a push campaign | Backend administratorsWitivio administrators | Backend administratorsWitivio administrators
 |
| **User groups** | NameFirstNameEmail | Backend administrators | Backend administratorsWitivio administrators |

| **From the chatbot** | **Type** | **Provider** | **Access** |
| --- | --- | --- | --- |
| **Display Name** | User fullname | User | Witivio administrators |
| **SIP or Teams Id** | User SIP address or Teams ID | User | Witivio administrators |
| **User ID** | Azure AD unique ID | User | Witivio administrators |
| **Message** | Message | User | Witivio administrators |
| **Message Date &amp; Time** | Date or the message | User | Witivio administrators |

### Usage

The collected data are used for:

- Usage statistics
- Questions asked by users
- Answers sent by the chatbot
- Conversation history for escalation process
- Logs of good functioning

>The chatbot admin is able to disable the collection of &quot;Answers sent by the chatbot&quot;

### Storage

Data and backups are stored in Azure Storage and Cosmos DB services:

CF: [https://docs.microsoft.com/en-us/azure/storage/common/storage-security-guide](https://docs.microsoft.com/en-us/azure/storage/common/storage-security-guide)

CF: [https://docs.microsoft.com/en-us/azure/cosmos-db/database-security](https://docs.microsoft.com/en-us/azure/cosmos-db/database-security)

### Backup

Application backup in addition to backups made by Microsoft.

All data are saved and geo replicated:

CF : [https://docs.microsoft.com/en-us/azure/cosmos-db/online-backup-and-restore#restoring-a-database-from-an-online-backup](https://docs.microsoft.com/en-us/azure/cosmos-db/online-backup-and-restore#restoring-a-database-from-an-online-backup)

| **Type** | **Frequency** | **Retention** |
| --- | --- | --- |
| **KB** | Every 24H | 1 month |
| **Raw Data** | Every 24H | 1 month |
| **Configuration** | Every 24H | 1 month |

### Retention

All data is stored throughout the contract plus 1 month.

### Deletion

The data is deleted at the request of the customer and / or at the end of the contract (+1 month).

### Internal flow

The exchanges between the different internal services are done in HTTPS with TL version 1.2.

The certificates are issued by Microsoft IT TLS CA 4

