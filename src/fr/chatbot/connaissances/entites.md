# Entités

Les entités sont des données que vous souhaitez extraire de votre question, telles que des noms, des dates, des noms de produits ou des groupes de mots significatifs. Une question peut inclure plusieurs entités.

Voici les étapes à suivre pour définir vos propres entités à l'aide de la plateforme Witivio:

1. **Ajoutez les entités**

Cliquez sur l'onglet **Connaissances** puis sélectionnez **Entités**.

Ajoutez les entités souhaitées.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/entites1.png')" alt="low score">
</div>



2. **Rattachez les données détéctées aux entités**.  

Il sera possible de gérer les entités depuis la plateforme uniquement pour les types de réponses suivantes : 

- Arbres de conversation
- Power Automate 
- Azure Logic Apps
- Webhook

Accèdez à votre question, ajoutez les alternatives puis accèdez à l'onglet Détections


> Afin de rattacher un mot ou un group de mot à une entité, clic-droit sur la détection puis sur le nom de l'entité ajoutée au paravant.

> Dans l'exemple suivant, **E234** est consideré comme un numéro de ticket. 

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/entites2.png')" alt="low score">
</div>


Une question peut inclure plusieurs entités.

Une fois que votre base de connaissances sera **suffisamment entraînée**, la détection se fera automatiquement.



### Commentaires
---
<Commentaire />
