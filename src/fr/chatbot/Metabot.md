# Metabot


## Pourquoi créer un Metabot ? 

Plusieurs chatbots sont activés dans différents contextes, mais il arrive que les utilisateurs ne sachent pas à quel chatbot s’adresser. 
Le MetaBot devient alors le point unique de contact, car connecté à plusieurs chatbots dits « amis » dont chacun porte sur un périmètre.

Par exemple, une entreprise a trois chatbots avec chacun un domaine d'expertise : les Ressources Humaines, le support IT et la Direction Juridique. Le MetaBot répondra alors en puisant ses connaissances dans chacun d'eux pour apporter la meilleure réponse à l'utilisateur

![metabot1](/src/.vuepress/public/assets/img/fr/metabot/metaBot1.png)

## Configuration du Metabot

Parmi les différentes étapes de configuration, le choix de la langue est conséquent. En effet, un MetaBot et ses chatbots amis doivent avoir au moins une langue en commun. 

Par exemple, si un MetaBot est configuré en français, ses chatbot ami doivent parler au moins le français. 
L'exemple ci-dessous montre que le chatbot IT ne peut pas être ami du MetaBot car il ne parle pas français, la langue de configuration du MetaBot. Les chatbots amis RH et Juridique parlent au moins français. 

![metabotlangue](/src/.vuepress/public/assets/img/fr/metabot/metabotlangue.png)


## Fonctionnement du MetaBot

Une fois votre MetaBot configuré, pour que celui-ci puisse interroger les connaissances d'autres chatbots il est nécessaire : 

- d'ajouter les chatbots amis depuis l'onglet CONNAISSANCES > Amis

- ainsi qu'indiquer le périmètre de chaque chatbot ami 

Une fois ajoutés, les chatbots amis sont présents en intégration. Cliquez sur le bouton PUBLIER afin de les rendre disponibles en production. 


## Schèma conversationnel : 

Lorsque l'utilisateur pose une question au MetaBot, ce-dernier recherche la réponse la plus pertinente dans les connaissances des chatbots amis selon leurs périmètres. 


**1) Score supérieur au seuil de réponse** 

L'utilisateur pose une question, le MetaBot retourne directement une réponse d'un des chatbots amis avec un score supérieur au seuil du score de réponse. 

  Si le feedback du chatbot amis est activé, alors le Metabot demande un feedback. Par exemple lorsqu'un utilisateur indique ne pas être satisfait de la réponse, ce feedback négatif est recensé dans la boîte de réception du chatbot ami.

**2) Demande de périmètre**

L'utilisateur pose une question, si plusieurs amis répondent au Metabot avec un score supérieur au suil du score de réponse, le Metabot demande de contextualiser la réponse et de choisir un des périmètres avant de donner la réponse. 

  Si le feedback du chatbot amis est activé, alors le Metabot demande un feedback. 

NB. Il est possible que le MetaBot identifie plusieurs questions du même périmètre et déclenche donc l'Active Learning. 


**Contextualisation** 

Lorsque le Metabot identifie plusieurs réponses de différents chatbots amis, il demande le périmetre. En fonction du choix de l'utilisateur, le MetaBot apporte la réponse trouvée. 

Ajouter 2 cas : soit il reconnait directement le périmtre --> active learning 
Soit il demande d'abord le périmètre 

"J'ai un doute, est-ce que ta demande concerne : "

- Périmètre RH 
  
- Périmètre IT  
 
- Périmètre Juridique 
  
- Aucun périmètre


Si l'utilisateur séléctionne un des périmètres alors le MetaBot retourne la réponse du chatbot amis correspondant. De plus, si le feedback du chatbot amis est activé, alors le MetaBot demande le feedback. 

En revanche, si le choix de l'utilisateur est "Aucun périmètre", la question posée est envoyée vers la boîte de réception du MetaBot. 


**Score inférieur au seuil de réponse** 

Lorsque le score est inférieur au seuil du score de réponse, le Metabot ne trouve aucune réponses parmi les connaissances des chatbots amis, il retourne le message de non réponse et demande le pérmitre. 

" Est-ce que ta demande concerne : "

- Périmètre RH 

- Périmètre IT 

- Périmètre Juridique

- Aucun 

En fonction du périmètre indiqué, le résultat est recensé dans la boîte de réception du chatbot ami dans l'onglet "Questions sans réponse". De plus, si l'escalade du chatbot ami est activée, celle-ci sera déclenché suite au message de non réponse. 

En revanche, si l'utilisateur choisit "Aucun", le résultalt est recensé dans la boîte de réception du MetaBot. 


![metabotfonctionnement](/src/.vuepress/public/assets/img/fr/metabot/metabotfonctionnement.png)

## Amélioration continue 

Lorsque le MetaBot n'a pas de réponse, il demande le périmètre de la question posée. Dans le cas où l'uilisateur choisit "Aucun de ces périmètres", la question sans réponse ni périmètre apparait dans la boite de réception du MetaBot. 

**Traitement de la boîte de réception**

![metabotamelioration](/src/.vuepress/public/assets/img/fr/metabot/metabotamelioration.png)

La boite de réception du MetaBot comporte un seul onglet "Pas de périmètre". L'action disponible depuis cet onglet est le transfert de la question sans réponse à un chatbot ami. Les coachs du chatbot ami traitent ensuite la question depuis l'inbox du chatbot ami et l'intégre à ses connaissances. 

![metabotinbox](/src/.vuepress/public/assets/img/fr/metabot/metabotinbox.png)

![metabottransfert](/src/.vuepress/public/assets/img/fr/metabot/metabottransfert.png)


## Limites

- Le MetaBot peut avoir au maximum 5 chatbots amis (Augmentation sur demande)
- Le MetaBot n'a pas de base de connaissances 
- Multilingue 
- Escalade de type Teams 
- Gestion de profils
- Campagne push 
- Conversation initiale 
- Statistiques Power BI 
- Liste autorisation 
- Historique du chatbot ami ne contient que les questions et les réponses liés à son périmètre
- Impossible de remonter dans la conversations et de changer de choix 


### Commentaires
---
<Commentaire />