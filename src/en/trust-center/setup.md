This page summarizes the setup of Witivio solution in Azure

##	Pre requisite

- Azure : Witivio is based on Azure solutions. An active Azure subscription in North Europe region is required.
- Certificate : Wildcard SSL certificate, PFX and the associate password
- Domains

| Domain    | Description         | 
| :--------------- |:---------------| 
| App.YOURDOMAIN |   Webchat components      |  
| Webchat.YOURDOMAIN  | Dynameet chatbot |
| botDynameet.YOURDOMAIN | Dynameet chatbot     |	
| Adaptivecards.YOURDOMAIN |	Adaptive card designer |
| Botqna.YOURDOMAIN | 	Qna chatbot |
| login-dynameet.YOURDOMAIN	| Dynameet login webiste |
| teams-escalation.YOUDOMAIN	|MS Teams Escalation module for Microsoft Teams |


This configuration has to be done by a Domain administrator

##	Azure AD application
|     |         | 
| :--------------- |:---------------| 
|Name| 	Witivio - O365|
|Permissions|		Delegated permissions|
|Scopes	|User.Read, profile, User.ReadBasic.All, |


|     |         | 
| :--------------- |:---------------| 
|Name	|QnA365 - Witivio|
|Permissions	|	Delegated permissions|
|Scopes	|Openid, profile, Sites.ManageAll |

|     |         | 
| :--------------- |:---------------| 
|Name	|Dynameet365 - Witivio|
|Permissions	|	Application permissions|
|Scopes	|Calendar.Read.Write, User.Read.All, MailboxSettings.All|


##	Azure components
|     Components|    number      | SKU |
| :--------------- |:---------------|:---------------| 
|Application Insights| 	8	|
|Bot Channels Registration	||	S1|
Storage account|	2	|StorageV2 (general purpose v2)LRS minimum|
|Key vault|	1	|
|Data factory|	1	|
|Bing Spell check|	1|	S1|
|Cosmos DB|	1	|RU/s 400 per database|
|CDN|	1|	Standard Verizon|
|Sendgrid	|1	|Free|
|App Service Plan - chatbot|	1	|S3|
|QnA Maker	|4 (1 per language)|	S0|
|App Service Plan – QNAMaker	|4 (1 per language)|	S1|
|App Service Plan – Skype connecotr|	1|	S1|
|Azure Search	|4 (1 per language)|	S2|
|Signal R Service	|1	|Standard|
|Luis	|4 (1 per language)|	S0|
|Text Analytics|	1	|S0|
|Translator	|1	|S1|


## Setup

The setup is made by a PowerShell script and lunch ARM templates. The script has to be run with an Azure administrator account.

##	Power Automate connector

The Witivio Power Automate connector has to be upload manually using this procedure: https://docs.microsoft.com/en-us/connectors/custom-connectors/define-blank

The connector has to be adapted manually for the client environment before installation


##	Power BI connector


The Witivio Power BI connector has to be installed manually using this procedure: https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility

The connector has to be adapted manually for the client environment before installation

##	Notes


The following components are not provided:
-	Status page like status.witivio.com
-	Trial version management
-	Learn application
-	Documentation pages
-	Ideas pages
