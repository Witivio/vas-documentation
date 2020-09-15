# Pré requis Skype Entreprise Online


## Création d'utilisateur

Avant de commencer, dans votre centre d’administration Office 365 [https://portal.office.com/adminportal/](https://portal.office.com/adminportal/) , créez un utilisateur avec un mot de passe pour le chatbot.

::: tip 💡 Bonnes pratiques
* Vérification: le mot de passe n'expire jamais
* Décocher: l'utilisateur doit changer le mot de passe à la prochaine ouverture de session
* Attribuer une licence Skype pour Entreprise
:::

## Azure Active Directory

Connectez-vous à votre centre d'administration Office 365 [https://portal.office.com/adminportal/](https://portal.office.com/adminportal/)

* Sélectionnez Centre d'administration dans le panneau de gauche.
* Sélectionnez Azure AD

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/skype1.jpg')" alt="select Azure AD">
</div>



* Vous êtes redirigé vers [https://portal.azure.com/](https://portal.azure.com/).

* Sélectionnez **Azure Active Directory** dans le panneau de gauche.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/skype2.jpg')" alt="Azure active directory">
</div>


* Sélectionnez **App registrations** dans le panneau de gauche.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/skype3.jpg')" alt="apps registration">
</div>


* Sélectionnez **New application registration**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/creation_chatbot/skype4.jpg')" alt="new application registration">
</div>


* Insérez la configuration suivante et sélectionnez **Créer**.


| Name             | WitivioConnector              |
|------------------|-------------------------------|
| Application type | Native                        |
| Sign-on URL      | <https://www.witivio.com/s4b> |

* Sélectionnez WitivioConnector dans la liste des applications.
* Copier l'ID de l'application
* Sélectionnez **Required permissions** dans le panneau de droite.
* Sélectionnez **Add**
* Sélectionnez **Select an API**
* Sélectionnez **Skype for Business Online**
* Sélectionnez **Select permissions**
* Sélectionnez **all** elements in the section **Delegated permissions**
* Sélectionnez **Save**

## Accorder une application Azure AD

Copiez cette URL dans le bloc-notes: 

<pre style="color:white">https://login.microsoftonline.com/common/oauth2/authorize?response_type=id_token&client_id=[APPIDinge&redirect_uri= https://www.witivio.com/s4b&response_mode=form_post&form .online.lync.com & prompt = admin_consent</pre>

* Remplacez le mot **[APPID]** par l'application créée précédemment.
* Copier et coller dans un navigateur
* Connectez-vous en tant qu'administrateur Office 365
* Accorder la permission

### Commentaires
---

<Commentaire />
