**Listes d'utilisateurs**
==================

Cliquez sur l'onglet « **Communication** » puis « **Listes de diffusion** »


::: warning ⚠️
Cet onglet est disponible uniquement pour les chatbots avec Skype et Microsoft Teams comme canaux de diffusion.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist1.png')" alt="low score">
</div>


Dans un premier temps, vous avez la possibilité de créer une liste de diffusion, c'est-à-dire une liste des destinataires du message dans l'onglet "Listes de diffusion".


Nommez cette liste. La configuration de ces listes peut se faire :

## à partir d'un fichier Excel (liste statique).
Pour connaître le format de ce fichier Excel, cliquez sur [**exemple**](https://witivio.blob.core.windows.net/static/list-sample.xlsx)" (1).

::: warning ⚠️
Ajoutez les adresse **SIP** pour Skype et les adresses **UPN** pour Microsoft Teams.
:::

::: warning ⚠️
Pour que la campagne push fonctionne, toutes les lignes (nom, prénom, adresse SIP/UPN) doivent être remplies.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist2.png')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist3.png')" alt="low score">
</div>

## à partir d'un groupe Active Directory (liste dynamique).

* L’administrateur Client fournit à Witivio le client ID et le Secret d’une application Azure AD. Witivio enregistre ces informations.
* Authentification vers Azure AD pour obtenir un token valide.
* Lors de la configuration d’une campagne push, Witivio recherche et affiche les groupes auxquelles l’utilisateur connecté du back office appartient. L’utilisateur sélectionne un groupe.
* Exécution d’une campagne push. Lecture des membres du groupeLecture de l’adresse SIP des membres. Envoi des messages.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist4.png')" alt="low score">
</div>

### Créer une application Azure AD qui liste les groupes dont je fait parti.

Connectez-vous sur le [portail Azure](https://portal.azure.com) puis accèdez à la section Azure AD puis à la section Inscription d'application

Cliquez sur "Nouvelle inscription"

Donnez un nom à votre application et choisissez "Comptes dans cet annuaire d'organisation uniquement"
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/ListWithGroupCreation1.png')" alt="low score">
</div>

Enfin cliquez sur "inscrire".

Accèdez à la section "Api Autorisée" et ajoutez les autorisations suivantes
| API | Autorisations | Type | Commentaires          |
|-----|---------------|------|-----------------------|
| Microsoft Graph | Group.Read.All | Autorisation d'application | Utilisé pour pouvoir lister tous les membres d'un groupe de l'AD |
| Microsoft Graph | User.Read.All | Autorisation d'application | Utilisé pour pouvoir lister tous les groupes de la personne connecté dans l'interface d'administration |

Supprimer l'autorisation "User.Read" qui n'est pas utile.

::: tip 💾
N’oubliez pas de cliquer sur le consentement administrateur
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/ListWithGroupCreation2.png')" alt="low score">
</div>
:::

Accèdez à la section "Certificats et secret" et ajoutez un secret
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/ListWithGroupCreation3.png')" alt="low score">
</div>

Copiez la valeur du secret avant de changer de section, vous en aurez besoin.
Retourner sur la section vue d'ensemble et copiez les 2 informations suivantes :
- Id d'application client
- Id de l'annuaire

Normalement, à la fin de cette étape, vous devriez avoir 3 informations:
- Id d'application client
- Secret d'application
- Id de l'annuaire

### Ajouter votre application créé dans les paramètres

Accèdez à votre chatbot puis allez sur la page de paramètre.
Dans l'onglet "Autorisation" ajoutez les informations precédement créé.
<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/ListWithGroupCreation4.png')" alt="low score">
</div>

N'oubliez pas de cliquer sur Sauvegarder.

# Modifier une liste d'utilisateur

En cliquant sur "modifier'" vous pouvez changer le nom de la liste ou la supprimer. Ce bouton permet également d'ajouter des utilisateurs.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist6.jpg')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist7.png')" alt="low score">
</div>

::: danger 🔴
Lorsque vous souhaitez créer une campagne push sur Microsoft Teams, vous avez la possibilité de savoir si vos destinataires ont installé l'application du chatbot dans Microsoft Teams. Tout utilisateur ayant l'icône Teams à droite de son adresse, recevra le message push.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/parametres/settingsuserlist8.png')" alt="low score">
</div>

v



### Commentaires
---

<Commentaire />
