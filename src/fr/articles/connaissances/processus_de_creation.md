# Processus de création

### A quoi sert ?
---
Le processus de création regroupe l’ensemble des étapes permettant de créer, modifier, tester et enfin publier les questions/réponses.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/creation1.png')" alt="low score">
</div>




### Comment ?
---

En cliquant sur l’onglet « **Connaissances** » puis « **FAQ** », vous retrouverez les différentes composantes afin de débuter le processus de création

-   **IMPORTER** 
-   **EXPORTER** 
-   **ENTRAINER** 
-   **ESSAYER** 
-   **PUBLIER** 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/creation2.png')" alt="low score">
</div>




**Création**
------------------------------


Tout d’abord, il est possible d’importer (1) un fichier Excel, autrement dit une base de données crée en amont. S’il existe plusieurs catégories, il faut sélectionner [**la catégorie**](/fr/articles/connaissances/categories.html) dans laquelle vous souhaitez importer. [**(En savoir plus)**](/fr/articles/connaissances/faq.html)

Une fois votre base de connaissances alimentée, le bouton « **EXPORTER** » (2) vous permet de télécharger l'ensemble de vos connaissances. Il est possible de télécharger par catégories en ajoutant un filtre avant l’exportation. Ce fichier comporte la question, la catégorie, le profil, le type de réponse (de type texte, adaptive card, contextuelle avec les choix, arbre de conversation), la date de publication, de création et de modification aisni que la personne qui la crée et/ou modifiée


**Entraînement**
------------------------


Le bouton « **ENTRAINER** » (3) permet de synchroniser toutes les informations sur la plateforme et les mettre en intégration..

L'entraînement simple est effectif uniquement pour les derniers ajouts ou modifications. Vous pouvez toutefois choisir de lancer un **entraînement complet** afin de traiter l'ensemble des connaissances du chatbot.

Une fois l’information "**entraînée**", le bouton « **ESSAYER** » (4) permet de tester le chatbot afin d’avoir une idée de son comportement en intégration et production.



**La fenêtre Webchat** <img class="webchat_img" :src="$withBase('/assets/img/fr/connaissances/creation3.png')" alt="low score"> s’affichant en bas à droite de la page, est votre chatbot en intégration et vous permet également de tester le chatbot avant sa publication. Lorsque vous modifiez le profil dans la base de connaissances, le chatbot prend en compte le choix du nouveau profil dans le test.

Une nouvelle version (V2) de la fenetre Webchat permet l'affichage des réponses de type Adaptive Card. Cette version n'écrase pas la version actuelle (V1), cependant, cette dernière ne sera plus supportée à partir du 1er octobre 2019.

::: warning ⚠️
Pensez bien à migrer sur la nouvelle version!
:::

Cette nouvelle version permet également de gérer la sécurité du chatbot d'une meilleure façon. D'une part, elle permet de savoir où est déployée la webchat. En effet, pour des raison de gouvernance, il faut explicitement indiquer où se trouve la webchat, et donc déclarer les différents sites sur lesquels elle est disponible. D'autre part cette version permet d'éviter d'ajouter la webchat sans que cela soit autorisé.

>La fenêtre Webchat s'affiche également dans le canal de diffusion Webchat dans l'onglet "Paramètres", afin de vous permettre de tester et parler directement au chatbot en production.

Si vous souhaitez aller pour loin, afin de tester les modifications de votre base de connaissances, vous avez la possibilité de créer un [**plan de test**](/fr/articles/connaissances/plan_de_test.html).

::: warning ⚠️
 Lorsque vous souhaitez ajouter un arbre de conversation dans votre base de connaissances et que celle-ci comporte déjà un nombre important que questions avec des réponses simples et contextuelles, l'entrainement (c'est à dire la synchronisation) peut être plus long. Cliquez sur "Entrainer" et patientez jusqu'à ce que le bouton soit grisé, avant de poursuivre la construction de vos connaissances.
:::



**Publication**
--------------------------


Lorsque les question/réponses sont testées et le chatbot fonctionne correctement, il sera possible de le publier en cliquant sur « **PUBLIER** » (5). L’utilisateur a accès aux nouvelles connaissances de votre chatbot.

Le nombre total de questions de la base de connaissances ainsi que la date et l'heure de dernière publication sont indiqués dans l'onglet "**Connaissances**".


