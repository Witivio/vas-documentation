# Profils

### A quoi sert ?
---

Le chatbot cherche l’information ou la condition concernant l’utilisateur afin de lui apporter la réponse correspondante.

Chaque profil a sa propre base de connaissances. Le profil « Everyone » réunit tous les profils car les questions peuvent également concerner l’ensemble des profils.

Par exemple il peut y avoir un groupe d’utilisateurs selon le type de contrat de travail (CDI, CDD, …), selon le lieu de travail, le service, etc. La réponse sera différente selon ces critères.


### Comment ?
---

Vous pouvez ajouter le(s) profil(s) souhaité(s):

Vous nommez le nouveau profil, vous choisissez entre le tutoiement et le vouvoiement, et également si vous souhaitez activer ou désactiver l’affichage du nom et prénom lorsque le chatbot envoie un message de bienvenue.

-   Si votre choix est le tutoiement, le chatbot répondra par : "**Bonjour + PRENOM**"
-   Si votre choix est le vouvoiement, la réponse sera : "**M. /Mme. + NOM**"
-   Si l’affichage du nom et prénom est désactivé, le chatbot ne les affiche pas.

Une fois le nouveau profil crée, cliquez sur "Modifier" si vous souhaitez changer les éléments ci-dessus.

::: tip 💾
N’oubliez pas d'enregistrer !
:::

# Gestion des profils

::: danger 🔴
Les profils ne sont valables que pour les questions de la base de connaissances ainsi que les messages de bases. Ils ne sont pas pris en compte pour le déclenchement d'une escalade et lors des campagnes push. Pour toutes les questions présentes dans la boîte de réception, le profil correspondant est affiché.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/profil1.jpg')" alt="low score">
</div>



L'information de profil peut venir de :

-   A SharePoint list
-   HRIS
-   Azure AD
-   Nous vous conseillons de consolider cette information via une API (à développer). Cette API peut-être facilement réalisée sans code via Microsoft Flow (voir ci-dessous).

::: warning ⚠️
L'api de gestion des profils n'est pas soumise à authentification.
:::

Lorsqu'un utilisateur parle au chatbot pour la première fois, le chatbot determine son profils selon le schéma suivant :

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/profil2.jpg')" alt="low score">
</div>



Une fois détérminé le profil est valable 24 heures.

::: warning ⚠️
Cas particulier: Lorsque le profil n'est pas configuré (par exemple CDD dans le schéma ci-dessous), l'API renvoie par défaut l'information : profil Everyone.
:::

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/profil/profil3.png')" alt="low score">
</div>


[**Créer une API de profils avec Flow et Sharepoint**](/fr/articles/profil/api_profil.html#creer-une-api-de-profils-avec-flow-et-sharepoint) 


