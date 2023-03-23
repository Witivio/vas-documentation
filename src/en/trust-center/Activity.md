Ce document synthétise les actions de reprise d’activité.

## Hosting
Witivio uses Microsoft Azure cloud services. The SaaS and PaaS infrastructure is 100% managed by the host.

 https://www.microsoft.com/en-us/trustcenter

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/Hosting.jpg')" alt="Responsibility - Paas">
</div>


## Component SLA
In the event of a malfunction on the part of the host, the host undertakes to do everything possible for a quick return in accordance with our contract (table)

| Services   | SLA        | 
| :--------------- |:---------------| 
|Azure Active Directory	|99.9	https://azure.microsoft.com/fr-fr/support/legal/sla/active-directory/v1_0/|
|Azure Functions|	99,95	https://azure.microsoft.com/fr-fr/support/legal/sla/functions/v1_0/|
|Azure App Services	|99,95	https://azure.microsoft.com/fr-fr/support/legal/sla/app-service/v1_4/|
|Azure Storage	|99,99	https://azure.microsoft.com/fr-fr/support/legal/sla/storage/v1_3/|
|Azure Cosmos DB	|99,99	https://azure.microsoft.com/fr-fr/support/legal/sla/cosmos-db/v1_1/ |
Azure key Vault	|99,9	https://azure.microsoft.com/fr-fr/support/legal/sla/key-vault/v1_0/ |
|Azure Service Bus	|99.9	https://azure.microsoft.com/fr-fr/support/legal/sla/service-bus/v1_1/|
|Azure Cognitive Services|	99.9	https://azure.microsoft.com/fr-fr/support/|legal/sla/cognitive-services/v1_1/|
|Qna Maker	|99.9	https://azure.microsoft.com/en-us/support/legal/sla/cognitive-services/v1_1/
|Application Insight|	99,9	https://azure.microsoft.com/fr-fr/support/legal/sla/application-insights/v1_0/|
|Azure Search	|99.9	https://azure.microsoft.com/en-ca/support/legal/sla/search/v1_0/|
|SendGrid	|N/A	Service gratuit
|Azure DataFactory|	99.9	https://azure.microsoft.com/fr-fr/support/legal/sla/data-factory/v1_1/|
|Azure Relay	|99.9	https://azure.microsoft.com/fr-fr/support/legal/sla/service-bus/v1_1/|



##  Incident classification

|Category   | Incidcent Typology  | Examples | severity | 
| :--------------- |:---------------| :---------------| :---------------| 
| Intrusion and external |attack Fake Website |Counterfeit website of group-owned websites| Major|
|Intrusion and external  | SPAM |Detection of harmful elements in messaging or on a workstation.  |Minor |
 Intrusion and external |Phishing| Illegitimate attempts to recover information (password) |Major|
|Intrusion and external attack |Intrusion |Detection of an attempt to violate a critical rule, on a firewall (characterized attack). |Major|
||Website defacement |Modification of the group's website(s) with the intention of causing harm. |Major|
||Resource hijacking |Recovery of a file containing critical information in a public storage environment.| Major
||Denial of service |Saturation of a service by any means.| Major
||Malware Detection of a virus or other harmful device (not seen and stopped by the security measures in place) on a workstation or server |Major on a server and minor on a workstation|
||Physical intrusion Physical |intrusion into premises to steal confidential documents.| Major|


|Category   | Incidcent Typology  | Examples | severity | 
| :--------------- |:---------------| :---------------| :---------------| 
|Malfunction| Accidental shutdown or malfunction Air conditioning shutdown in the machine room. |Major|
||Loss or theft of computer equipment |Theft of a laptop in a hotel room. |Major|
||Malfunction trace Alert raised by an active device indicating saturation (potential denial-of-service attack). |Major if the production service is impacted|
|Deviant internal behavior |Impersonation| Use of an account by someone other than the account holder.| Major|
||Impersonation of rights or abuse| Detection of abnormal activity on a system corresponding to the execution of an unknown program. |Major if the production service is impacted|
||Other types of deviant behavior |Repeated attempts to access critical data by a user without the necessary authorizations.| Minor|
||Resource hijacking Use of internal resources for personal use for illicit purposes. |Minor|
||Illicit Internet access |Repeated connections or attempts to connect to a prohibited website. |Minor|
||Log recording deactivation Deactivation of logging of sensitive equipment (firewall, AD, etc.) |Major|
||Incidents all categories Exploitation of unpatched vulnerability |Exploitation of an unpatched vulnerability to obtain greater rights. |Major|
||Exploitation of configuration vulnerability |Exploitation of a configuration vulnerability to gain access to confidential files| Major
||Unknown incident| Incident never encountered before and not categorizable |Major|

##  Incident management

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/incidentmanagement.jpg')" alt="Incident Management">
</div>

## Installation process

### ARM
The instantiation of Azure components is done through Azure Resource Manager (ARM) scripts.
The scripts are versioned in the Witivio source controller.

The scripts allow:
- Activation of components in a region (DataCenter)
- Define the SKU
- Link configurations and parameters between components
- Apply security and Azure AD applications


### Steps
<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/Steps.jpg')" alt="Steps">
</div>

### Software installation
The installation of software components is done through Azure DevOps services from the central source repository.

### Steps

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/Steps.jpg')" alt="Steps">
</div>


## Restoration process

The restoration typology depends on the types of data and associated components:

### Data: Configuration
The configuration is saved by Microsoft as part of the Cosmos DB storage SLA. No restoration by Witivio is required.

### Data: Knowledge Base
The knowledge bases are backed up every 24 hours by Witivio. The restoration process is:

Chapter 7. Management of Data Breaches
