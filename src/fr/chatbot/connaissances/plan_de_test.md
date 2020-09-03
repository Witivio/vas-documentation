# Plan de test

Cliquez sur l’onglet « **Connaissances** » puis « **Test** ».

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/plan_de_test1.png')" alt="low score">
</div>



### A quoi sert ?
---
>Cet outil permet de faire des échelons de test de non régression sur la plateforme. Lorsque vous apportez des modifications à votre base de connaissances, vous allez pouvoir ainsi vérifier que les anciennes questions continuent d'avoir un bon fonctionnement.


### Comment ?
---
Cliquez sur « **Ajouter un plan de test** » (1).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/plan_de_test2.png')" alt="low score">
</div>



Vous sélectionnez un profil ainsi que le nom du nouveau plan de test (2) & (3).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/plan_de_test3.png')" alt="low score">
</div>



Un fois le plan de test crée, vous pouvez en rajouter un supplémentaire (4).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/plan_de_test4.png')" alt="low score">
</div>



Vous allez pouvoir définir une règle, c’est-à-dire un [**score**](/fr/chatbot/boite_de_reception.html) minimum attendu entre la question posée par l’utilisateur et la question présente dans la base de connaissances.

Une fois crée et exécuté, cliquez sur le cas de test souhaité. Vous pouvez décider de supprimer ce plan de test mais également de le tester à nouveau à l'aide du bouton EXECUTER ( en haut à droite).

Si le pourcentage s'ffichant à droite de la question est égal ou supérieur au score prédéfini le test est valide ( 👍 bleu) . Le cas échéant, la base de connaissances doit être modifiée (👎 rouge)

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/plan_de_test5.png')" alt="low score">
</div>

La tuile ci-dessus vous indique :

* le pourcentage de réussite du plan à la dérnière exécution
* le nombre de questions qui ont échouée à la dernière exécution
* l'évolution d'un plan de test à l'autre
* date et heure de la dernière exécution


### Commentaires
---
<div id="disqus_thread"></div>

<Commentaire />
