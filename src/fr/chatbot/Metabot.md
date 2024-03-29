# MetaBot

 <br />
 <br />

## Pourquoi créer un MetaBot ? 
 <br />

Plusieurs chatbots sont activés dans différents contextes, mais il arrive que les utilisateurs ne sachent pas à quel chatbot s’adresser. 
Le MetaBot devient alors le point unique de contact, car connecté à plusieurs chatbots dits « amis » dont chacun porte sur un périmètre.

Par exemple, une entreprise a trois chatbots avec chacun un domaine d'expertise : les Ressources Humaines, le support IT et la Direction Juridique. Le MetaBot répondra alors en puisant ses connaissances dans chacun d'eux pour apporter la meilleure réponse à l'utilisateur

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/metabot1.PNG')" alt="Metabot">
</div>

## Configuration du MetaBot
 <br />

Parmi les différentes étapes de configuration, le choix de la langue est conséquent. En effet, un MetaBot et ses chatbots amis doivent avoir au moins une langue en commun. 

Par exemple, si un MetaBot est configuré en français, ses chatbot ami doivent parler au moins le français. 
L'exemple ci-dessous montre que le chatbot IT ne peut pas être ami du MetaBot car il ne parle pas français, la langue de configuration du MetaBot. Les chatbots amis RH et Juridique parlent au moins français. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/Metabotlangue.PNG')" alt="Metabot Langue">
</div>
 <br />
 <br />

## Demande de contextualisation

Accédez à l'onglet Connaissances puis Configuration afin de configurer la demande de contextualisation. 

Lorsqu'un utilisateur interroge un metabot, ce dernier peut hésiter auprès de quel "chatbot ami" trouver la connaissance. Le Metabot peut ainsi demander "Quel est le périmètre de la question ?" et l'utilisateur sélectionne un des périmètres des chatbots amis. 
Cette demande de contextualisation peut être supprimée. L'utilisateur pose sa question au metabot, qui va interroger  directement tous les "chatbots amis", et statuer tout seul sur la meilleure réponse à lui donner (la réponse ayant le meilleur score de confiance).

Exemple :
Un collaborateur demande au metabot : "combien de CP me reste-t-il de ?" 
Lorsque la fonctionnalité ci-dessous est activée, le métabot, s'il a un doute, demande à l'utilisateur de choisir le contexte entre Rh et comptabilité. Lorsque cette fonctionnalité est désactivée, le chatbot ne demande pas le périmètre du chatbot, et donne directement la réponse avec la meilleure réponse. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/demandedecontextualisation.PNG')" alt="Metabot">
  </div>

Enfin, lorsque vous décidez d'activer la demande de contextualisation, vous pouvez personnaliser votre question. Par exemple " Pouvez-vous m'indiquer le périmètre de votre question ? " / "Quelle est le contexte de votre question ?".

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/demandedecontextualisation.PNG')" alt="Metabot">
</div>

## Fonctionnement du MetaBot
 <br />

Une fois votre MetaBot configuré, pour que celui-ci puisse interroger les connaissances d'autres chatbots il est nécessaire : 

- d'ajouter les chatbots amis depuis l'onglet CONNAISSANCES > Amis

- ainsi qu'indiquer le périmètre de chaque chatbot ami 

Une fois ajoutés, les chatbots amis sont présents en intégration. Cliquez sur le bouton PUBLIER afin de les rendre disponibles en production. 

 <br />
 <br />

## Schèma conversationnel : 
 <br />

Lorsque l'utilisateur pose une question au MetaBot, ce-dernier recherche la réponse la plus pertinente dans les connaissances des chatbots amis selon leurs périmètres. 

 <br />

**1) Score supérieur au seuil de réponse** 

L'utilisateur pose une question, le MetaBot retourne directement une réponse d'un des chatbots amis avec un score supérieur au seuil du score de réponse. 

  Si le feedback du chatbot amis est activé, alors le MetaBot demande un feedback. Par exemple lorsqu'un utilisateur indique ne pas être satisfait de la réponse, ce feedback négatif est recensé dans la boîte de réception du chatbot ami.

 <br />

**2) Contextualisation** 

Lorsque le MetaBot identifie plusieurs réponses de différents chatbots amis, il demande d'abord le périmetre. En fonction du choix de l'utilisateur, le MetaBot apporte la réponse trouvée. 

"J'ai un doute, est-ce que ta demande concerne : "

- Périmètre RH 
  
- Périmètre IT  
 
- Périmètre Juridique 
  
- Aucun périmètre


Si l'utilisateur séléctionne un des périmètres alors le MetaBot retourne la réponse du chatbot amis correspondant. De plus, si le feedback du chatbot amis est activé, alors le MetaBot demande le feedback. 

En revanche, si le choix de l'utilisateur est "Aucun périmètre", la question posée est envoyée vers la boîte de réception du MetaBot. 

NB. Une fois le périmètre demandé, il est possible que le MetaBot identifie plusieurs questions du même périmètre et déclenche donc l'Active Learning. 
 <br />
 <br />

**3) Score inférieur au seuil de réponse** 

Lorsque le score est inférieur au seuil du score de réponse, le MetaBot ne trouve aucune réponses parmi les connaissances des chatbots amis, il retourne le message de non réponse et demande le périmètre. 

" Est-ce que ta demande concerne : "

- Périmètre RH 

- Périmètre IT 

- Périmètre Juridique

- Aucun 

En fonction du périmètre indiqué, le résultat est recensé dans la boîte de réception du chatbot ami dans l'onglet "Questions sans réponse". De plus, si l'escalade du chatbot ami est activée, celle-ci sera déclenchée suite au message de non réponse. 

En revanche, si l'utilisateur choisit "Aucun", le résultalt est recensé dans la boîte de réception du MetaBot. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/Metabotfonctionnement.PNG')" alt="Metabot Fonctionnement">
</div>

 <br />
 <br />

## Amélioration continue 
 <br />

Lorsque le MetaBot n'a pas de réponse, il demande le périmètre de la question posée. Dans le cas où l'uilisateur choisit "Aucun de ces périmètres", la question sans réponse ni périmètre apparait dans la boite de réception du MetaBot. 
 <br />

**Traitement de la boîte de réception**

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/metabotamelioration.PNG')" alt="low score">
</div>


 <br />

La boite de réception du MetaBot comporte un seul onglet "Pas de périmètre". L'action disponible depuis cet onglet est le transfert de la question sans réponse à un ou plusieurs chatbots ami. Les coachs du/des chatbot(s) ami(s) traitent ensuite la question depuis l'inbox du chatbot ami et l'intégre à ses connaissances. 
 <br />
 <br />


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/metabot/metabottransfert.PNG')" alt="Metabot Transfert">
</div>

## Campagnes Push

Il est désormais possible de créer des campagnes push via le MetaBot. Une fois votre campagne configurée, le message push sera distribué par le MetaBot. Celui-ci parlera à l'utilisateur, par exemple pour diffuser une information en interne, promouvoir l'usage du chatbot, ...

Cliquez [**ici**](/fr/chatbot/communication/campagne.html#campagnes-teams) pour savoir comment configurer une campagne Push Teams. 

## Limites
 <br />

- Le MetaBot peut avoir au maximum 5 chatbots amis (Augmentation sur demande)
- Le MetaBot n'a pas de base de connaissances 
- Multilingue 
- Escalade de type Teams 
- Gestion de profils
- Conversation initiale 
- Statistiques Power BI 
- Liste autorisation 
- Historique du chatbot ami ne contient que les questions et les réponses liés à son périmètre
- Impossible de remonter dans la conversations et de changer de choix 


### Commentaires
---
<Commentaire />