# Rapport de la performance

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance1.png')" alt="Suggested questions 2">
</div>


Cliquez sur « **Performance** » afin d’obtenir le rapport de la performance.

::: warning
Choisissez la période souhaitée (Aujourd'hui, les 7, 14, 30 derniers jours ou les 12 derniers mois) en cliquant en haut à droite sur le filtre (1). Ainsi les tuiles correspondantes s’afficheront.
:::

::: warning
Le rapport de la performance peut être filtré selon les profils existants mais également selon les canaux de diffusion (2).
:::

>Le filtrage par profil ou par canal n'existe que s'il y en existe plusieurs.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance2.png')" alt="Suggested questions 2">
</div>


L’onglet « Performance » fait remonter les informations concernant :

## Le nombre de réponses apportées

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance3.jpg')" alt="Suggested questions 2">
</div>



Le nombre de réponses apportées comporte tout type de réponse confondue : réponse directe ou réponse Score faible.

Par exemple, comme indiqué ci-dessus, sur les 7 derniers jours, le chatbot a apporté 12 réponses.

## Le nombre de questions sans réponse

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance4.jpg')" alt="Suggested questions 2">
</div>


Ici par exemple, sur les 7 derniers jours, le chatbot n’a pas su répondre à 20 questions

### Le nombre total de questions posées

Le graphique suivant indique l’évolution du nombre de questions posées sur la période choisie. Par exemple, sur les 7 derniers jours.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance5.png')" alt="Suggested questions 2">
</div>



## La performance globale

La performance globale indique le pourcentage de questions répondues sur la période choisie

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance6.jpg')" alt="Suggested questions 2">
</div>



Le pourcentage est calculé de la manière suivante : le nombre de questions répondues divisé par le nombre total de questions posées (peu importe le statut: sans réponse + Score faible ou réponse réussie).

the number of questions answered divided by the total number of questions asked (question answered + no answer + Low score).

>Exemple : 12 Q répondues/ (12 Q répondues + 20 nb de Q sans réponse) = 0,375
>Performance du chatbot : 38%
>Chatbot performance: 39%.

En plus de la tuile (ci-dessus) donnant la performance globale sur les 7 derniers jours, le graphique "Pourcentage de questions répondues " permet d'évaluer la performance du chatbot sur la période choisie.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance7.png')" alt="Suggested questions 2">
</div>



Le graphique ci-dessous indique la distribution de la compréhension de la question sur la période choisie, c’est-à-dire le pourcentage des questions parfaitement comprises ou non comprises.

Par exemple, sur les 30 derniers jours, 2 questions ont été partiellement comprises (1,83%), 24 questions n'ont pas été comprises (22,02%) et 83 questions ont été parfaitement comprises (76,15%).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance8.png')" alt="Suggested questions 2">
</div>



De plus, le graphique suivant indique le nombre précis de questions comprises pour chaque jour sur une période choisie (par exemple sur les 14 derniers jours). Les retours peuvent être parfaitement comprises, partiellement comprises ou non comprises.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance9.png')" alt="Suggested questions 2">
</div>



## Le nombre de feedbacks reçus

Le nombre de feedbacks reçus indique le nombre de fois où un utilisateur a donné un retour, négatif, positif ou ignoré, sur la période choisie.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance10.jpg')" alt="Suggested questions 2">
</div>



Ici par exemple, sur 12 questions auxquelles le chatbot a répondu, les utilisateurs ont fourni 3 retours/feedbacks. Il y a donc 9 feedbacks qui n'ont pas été renseignés par les utilisateurs.

Pour chaque réponse donnée, le chatbot recueille un feedback auprès de l’utilisateur.

Le feedback peut être positif, négatif ou non renseigné.

::: tip Règle de calcul pour les feedbacks non renseignés
Nombre de réponses apportées – nombre de feedbacks (feedback négatif + positif) = nombre de feedback non renseignés.**
:::

Par exemple : 12 réponses apportées – 3 feedbacks = 9 feedbacks non renseignés.

De plus, les graphiques suivants indiquent la distribution des feedbakcs en pourcentage, ainsi que le nombre précis de feedbacks pour chaque jour, sur une période choisie.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance11.png')" alt="Suggested questions 2">
</div>


<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance12.png')" alt="Suggested questions 2">
</div>



L’utilisateur peut renseigner un feedback négatif lorsque:

-   la réponse contient des fautes ou est incomplète
-   lorsqu’elle ne correspond pas à la question posée
-   pour une autre raison

Par exemple, sur les 30 derniers jours, 2 réponse contenait des fautes (28,57%), 2 réponses étaient incomplètes (28,57%), 2 réponses ne correspondaient pas à la question posée (28,57%) et 1 retour sans information (14,29%).

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/tableaux_de_bord/performance13.png')" alt="Suggested questions 2">
</div>

