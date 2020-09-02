# Boîte de réception

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/inbox1.png')" alt="Suggested questions 2">
</div>

**A quoi sert ?**
------


Lorsqu'un utilisateur pose une question, une intelligence artificielle calcule pour chaque question présente dans la base de connaissances son pourcentage de correspondance avec la question posée. C'est ce qu'on appelle le score de confiance. [**(voir les Règles des scores)**](/fr/chatbot/boite_de_reception/regles_des_scores.html)

La boîte de réception permet donc de répertorier toutes les questions pour lesquelles le chatbot n'a pas de réponse ou n'a pas su répondre directement.

::: danger 🔴
La boîte de réception permet au coach de traiter les questions non comprises afin d’assurer une amélioration continue des connaissances du chatbot.
:::

::: tip 💡️ Bonne pratique
Il est essentiel de traiter les données de la boîte de réception régulièrement afin de consolider les connaissances du chatbot.
:::

**Comment ?**
--------------


La boîte de réception est composée de quatre sections :

-   [**Questions sans réponses**](/fr/chatbot/boite_de_reception/questions_sans_reponses.html)

-   [**Score faible**](/fr/chatbot/boite_de_reception/score_faible.html)

-   [**Questions suggérées**](/fr/chatbot/boite_de_reception/questions_suggerees.html)

-   [**Feedback Négatif**](/fr/chatbot/boite_de_reception/feedback_negatif.html) 

Le bouton "Exporter" en haut à droite vous permet d'exporter l'ensemble de ces données.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/inbox2.jpg')" alt="Suggested questions 2">
</div>

**Règles des scores**
---------------


Les règles des scores sont les règles qui déterminent le déclenchement de l’[Active Learning](/fr/chatbot/outils/active_learning.html) , [Score Faible](/fr/chatbot/boite_de_reception/score_faible.html) et **Pas de réponse**.


1.  **Réponse directe**: le chatbot donne une réponse lorsque le score est supérieur à 50%.

2.  **Active Learning**: se déclenche lorsque le chatbot a un doute sur la compréhension de la question, plusieurs questions présentes dans la base de connaissances déclenchent un score élevé (écart de moins de 20 points).

3.  **Score Faible**: se déclenche lorsqu'une seule question présente dans la base de connaissances correspond à la question posée par l'utilisateur mais que le score est comme son nom l'indique : faible (entre 30 et 50%).

4.  **Pas de réponse:** le chatbot ne connaît pas la réponse lorsque le score est inférieur à 30%.

::: warning ⚠️
Si dans l’onglet « Pas de réponse » vous retrouvez des scores supérieurs à 30%, cela s’explique par le fait que l’utilisateur a fait le choix « aucune de ces questions » lorsque l'Active Learning s'est déclenché.
:::

Le score de confiance (1) pris en charge peut être configurés en cliquant sur **Connaissances** puis **Configuration**.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/inbox3.png')" alt="Suggested questions 2">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/boite_de_reception/inbox4.png')" alt="Suggested questions 2">
</div>

