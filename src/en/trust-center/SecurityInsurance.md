# Infrastructure & application
## Infrastructure security 

The environments are: 
- Dev (one per developer),
- Tests and tests
- Production

Witivio use Microsoft Azure cloud services. The SaaS and PaaS infrastructure are 100% managed by Microsoft.

Witivio do not manage any VMs or OS and have any low-level access.

Witivio indirectly undertakes to ensure that the security measures for the following SaaS & PaaS components are applied in accordance with our contract with the host.
- 	https://www.microsoft.com/en-us/trustcenter

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/Responsability.jpg')" alt="Responsibility - Paas">
</div>


## Physical Access

Witivio have no physical access to the datacenter.

Witivio indirectly undertakes that the following measures will be applied in accordance with our contract with the host and these certifications. 
- Cloud Security Alliance
- https://www.microsoft.com/en-us/trustcenter


## Database security
Witivio use Microsoft's SaaS Azure Storage and Azure CosmosDB services for data storage (data and backup).

- Access to resources is via a master key. The information is only stored and accessible from the production environment.
A.	Azure storage
- Encryption in Transit
- Encryption at Rest
- Storage Analytics
- Cross-Origin Resource Sharing (CORS)


## Azure Cosmos DB
- hash-based message authentication code (HMAC) for authorization
- Active directory integration (RBAC)
- Regional failovers
- Local replication
-	99.99% availability SLA
-	Automated online backups
-	Restore deleted data
-	Monitor for attacks
-	Microsoft Respond to attacks
-	HTTPS/SSL/TLS encryption
-	Encryption at rest

Data and backups are stored in Azure Storage and Cosmos DB services:
-	CF: https://docs.microsoft.com/en-us/azure/storage/common/storage-security-guide
-	CF: https://docs.microsoft.com/en-us/azure/cosmos-db/database-security


Witivio indirectly undertakes that the following measures will be applied in accordance with our contract with the host. 
	https://www.microsoft.com/en-us/trustcenter


## Security of application servers

The application server uses the PaaS Azure App Services Plan and Azure Function services (CF 1.2).
-	CF: https://docs.microsoft.com/en-us/azure/app-service/app-service-patch-os-runtime

Witivio indirectly undertakes that the following measures will be applied in accordance with our contract with the host. 
-	https://www.microsoft.com/en-us/trustcenter

## 	Data location
The Witivio 365 solution is hosted in the Microsoft Azure data center located in Northern Europe (Ireland).


##	Identity management

### 	Back Office
- Platform administrators connect with their Azure AD / Office 365 account on https://app.virtualagentstudio.com and https://app.witivio.com 
-	Authentication is performed with a multi-part Azure AD application. 
-	Witivio does not manage any client identities
-	Cf: https://docs.microsoft.com/en-us/azure/active-directory/application-dev-setup-multi-tenant-app


<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/backoffice.jpg')" alt="back Office">
</div>

- More information on scopes : https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/schema.jpg')" alt="Schema">
</div>

### bot & Office 365

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/botoffice.jpg')" alt="Schema">
</div>

- QnA

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/botofficetab.jpg')" alt="Schema">
</div>

- DynaMeet

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/dynameet.jpg')" alt="Dynameet">
</div>

-	More information on scopes: https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference


## Provisionning of identities

The Witivio backoffice uses the Azure AD of the client and depends on its own policies. Witivio does not manage any client identities. 

## Network security

Witivio only use PaaS services. The network and infrastructure layers are managed by Microsoft.
Witivio indirectly undertakes that the following measures will be applied in accordance with our contract with the host. 
- 	https://www.microsoft.com/en-us/trustcenter

The exchanges between the client network and the Witivio application are:
-	Data exchange is carried out via HTTPS with TLS version 1.2.
- 	The certificate is provided by AlphaSSL CA - SHA256 - G2.


## Audit
Witivio agree that audits and intrusion tests may be performed by the customer or a designated third party, limited by one per year and in client costs. 

## Certifications

Witivio have no certification.
Microsoft Azure, our hosting provider is certified:
-	ISO 27001, 27017, 27018, 9001
-	CSA STAR Certification
-	SOC1, 2, 3
-	Complete list: 
-	https://www.microsoft.com/en-us/trustcenter/compliance/complianceofferings
-	https://servicetrust.microsoft.com/Documents/ComplianceReports


## Monitoring

### Witivio Solution

The monitoring elements are:
-	Data base
-	Performance
-	Resource consumption
-	Storage
-	Availability
-	Usage
-	Application server
-	Performance
-	Resource consumption
-	Data flow
-	SaaS Services
-	Usage tracking
-	Usage
-	Quota
-	Application
-	Error
-	Performance
-	Usage
-	Use of the system

Example of or monitoring dashboard:

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/monitoring.jpg')" alt="Monitoring dashboard">
</div>

### Azure components

- Global status of Microsoft Azure services
-	Security monitoring operated by Microsoft

Example of keys monitoring

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/keys.jpg')" alt="Key monitoring">
</div>


## Update management

### Witivio solution

The application is updated on average every two weeks. A release management process is implemented.
An email is sent 10 days before major releases to inform all clients.

All release notes will be trace in http://status.witivio.com 

Depending on the criticality and priority of the corrections (development or configuration) will be applied within a maximum period of time (applicable during the following working hours: from 09:00 to 12:00 and from 14:00 to 18:00 (Paris time) from Monday to Friday outside public holidays):
-	8 working hours for a blocking anomaly,
-	12 business hours for a Non-blocking Anomaly.
-	48 business hours for any advice related to the use of the Application

The roadmap and a user voice is available at  https://ideas.virtualagentstudio.com
A support page is available at: http://support.witivio.com


### Azure components

Witivio automatically acquire new updates from Microsoft. Witivio contract with Microsoft ensures there is no functional or technical regressions. 

## Security update management

### Witivio solution

The application is updated with a security patch as soon as possible. A hotfix is applied to production after full technical and functional validations.
An email is sent to warn all clients as soon a security patch is applied.

All security updates will be trace in http://status.witivio.com 

The roadmap and a user voice are available at https://ideas.virtualagentstudio.com
A support page is available at: http://support.witivio.com


### Azure components

Witivio automatically acquire security updates from Microsoft. Witivio contract with Microsoft ensures there is no functional or technical regressions.


 ## Incident management

 ### Witivio solution

 An email is sent to warn all clients if the incident affects all clients.
All incidents will be trace in http://status.witivio.com 

The assistance is provided by Witivio in French.
WITIVIO will endeavor to answer the questions raised concerning the application, within a maximum of:
-	8 working hours for a blocking anomaly,
-	12 business hours for a Non-blocking Anomaly.
-	48 business hours for any advice related to the use of the Application

The Service is available during the following business hours: from 09:00 to 12:00 and from 14:00 to 18:00 (Paris time) Monday to Friday outside public holidays

### Azure components

An email is sent to warn clients if the Azure incident affects our clients.
All Azure incidents that affect Witivio will be trace in http://status.witivio.com

## Security incident management 

### Witivio solution

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/management.jpg')" alt="Incident management">
</div>

All security incidents will be trace in http://status.witivio.com

### Azure components
<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/azure.jpg')" alt="Azure components">
</div>

All security incidents will be trace in http://status.witivio.com (coming in November 2018)

## Business continuity and disaster recovery

In the event of a malfunction on the part of the host, the host undertakes to do everything possible to ensure a prompt return in accordance with our contract

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/recovery.jpg')" alt="recovery">
</div>
<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/recovery2.jpg')" alt="recovery">
</div>

Depending on the criticality and priority of the corrections (development or configuration) will be applied within a maximum period of time (applicable during the following working hours: from 09:00 to 12:00 and from 14:00 to 17:00 (Paris time) from Monday to Friday outside public holidays):
-	8 working hours for a blocking anomaly,
-	12 business hours for a Non-blocking Anomaly.
-	48 business hours for any advice related to the use of the Application


## Backup organisation

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/backuporganisation.png')" alt="recovery">
</div>
<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/configuration.jpg')" alt="recovery">
</div>

-	Data and backups are stored in Azure Storage and Cosmos DB services:
CF : https://docs.microsoft.com/en-us/azure/storage/common/storage-security-guide
CF : https://docs.microsoft.com/en-us/azure/cosmos-db/database-security
-	The data are saved and geo replicated:
CF : https://docs.microsoft.com/en-us/azure/cosmos-db/online-backup-and-restore#restoring-a-database-from-an-online-backup 


## User data self service

Witivio chatbots have user data self-service features. Users can ask to the bot:
-	I want my personal data
the chatbot sends all chat logs
-	Can you forgive me
the bot anonymize the chatlog
-	At the first conversation with the bot, a security policy is displayed.

# Witivio Staff

## Office & Mobility
All employees work from home. Access to resources is via secure HTTPS connections, including MFA.

## Workstation
Windows update is configured as standard, and patches are applied as soon as they are available.

Windows Defender is enabled on development workstations. The update frequency is set by default (every 24 hours).

## Password policy

Application and Back Office
-	The Witivio application uses the AD client Azure and depends on its policy. We do not manage any client identity.

Hosting
-	Witivio accounts are managed with Azure AD. Witivio applies the standard policy 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/passwordpolicy.jpg')" alt="recovery">
</div>

# Development processes

## Witivio DevOps process

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/devopsprocess.jpg')" alt="devops process">
</div>

## Development tools

Witivio develops the full solution with Microsoft stacks.
The tools, IDEs are:
-	Visual Studio 2019 & 2022
-	Visual Studio Code
-	Azure Devops (ex VSTS)
-	Bot Framework Emulator
-	Office 365 demo tenants
-	Azure Storage Emulator
-	Cosmos DB Emulator
-	Azure account for each developer
-	Azure storage explorer


## Repositories

Witivio use the Microsoft Azure Devops (ex VSTS) repositories, hosted by Microsoft.
Witivio manage:
-	Tasks and workitems
-	Code source management, with Git Flow
-	Workitems with source code tracking
-	Code review and code tests on each pull request
-	Continuous integration and continuous build with unit tests and integration tests execution
-	Release and workitems tracking

## Code branches
Witivio have 2 main branches:
-	Dev
-	Master
-	1 branch per features
-	1 branch per hotfix

## Main technologies stack

The technology stack is:
-	.NET 4.7
-	C#
-	Microsoft Bot Framework 3
-	ASP.NET Core 3.1
-	Type script 4
-	Angular 9
-	HTML 5 / CSS 3
-	Azure SaaS and PaaS


## Pull request management and code review

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/pullrequestmanagement.jpg')" alt="Pull request management">
</div>

## Deployment process

<div class="image_center">
  <img :src="$withBase('/assets/img/en/trustcenter/deploymentprocess.jpg')" alt="devops process">
</div>

## Infra as code

All azure components are instantiated by Azure ARM templates and extra configurations are made manually.

## Development best practices 

Witivio applies best practices in Web and Cloud development. 
-	The team follows Microsoft's recommendations: https://docs.microsoft.com/en-us/azure/architecture/patterns/
-	OWASP: https://www.owasp.org/images/0/08/OWASP_SCP_Quick_Reference_Guide_v2.pdf

During development, a code review process is applied at the end of each developed feature. The objective is to find potential bugs or vulnerabilities or to correct design errors in order to improve the quality, maintainability and security of the software
