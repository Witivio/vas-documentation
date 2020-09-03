# Règles des scores

Les règles des scores sont les règles qui déterminent le déclenchement de l’**Active Learning**, « **Score Faible** » et « **Pas de réponse** ».

1.  **Réponse directe** : le chatbot donne une réponse directe lorsque le score est supérieur à 50%.

2.  **Active Learning** : se déclenche lorsque le chatbot a un doute sur la compréhension de la question, plusieurs questions présentes dans la base de connaissances déclenchent un score élevé (écart de moins de 20 points)

3.  **Score Faible** : se déclenche lorsqu'une seule question présente dans la base de connaissances correspond à la question posée par l'utilisateur mais que le score est comme son nom l'indique : faible (entre 35 et 50%)

4.  **Pas de réponse** : le chatbot ne connaît pas la réponse lorsque le score est inférieur à 35%.

::: warning ⚠️
Si dans l’onglet « Pas de réponse » vous retrouvez des scores supérieurs à 30%, cela s’explique par le fait que l’utilisateur a fait le choix « aucune de ces questions » lorsque l'Active Learning s'est déclenché.
:::

Le score de confiance (1) prit en charge peut être configurés en cliquant sur **Connaisances** puis **Configuration**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/scoring1.png')" alt="Suggested questions 2">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/scoring2.png')" alt="Suggested questions 2">
</div>



### Commentaires
---
<Commentaire />


