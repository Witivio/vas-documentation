# Configuration

Cliquez sur « **Connaissances** » puis « **Configuration** »

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/configuration1.png')" alt="low score">
</div>




## Correction orthographique, blagues et conversations courantes

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/configuration2.png')" alt="low score">
</div>


La correction orthographique automatique (1) peut être activée ou désactivée. Lorsque cette fonctionnalité est activée, le chatbot corrige les fautes d'orthographe et les fautes de frappe de l'utilisateur.

::: warning ⚠️
Si vous utilisez des acronymes métiers, le correcteur orthographique peut également les corriger.
:::

De plus, les blagues et les conversations courantes (par exemple « comment ça va ? ») (2)(3) sont déprogrammables via cet onglet. Si vous souhaitez les conserver, sachez que ces blagues et ces conversations ne sont pas gérables dans l'application mais gérées uniquement par Witivio pour tous ses clients.  
  
[Lien de téléchargement conversations courantes](https://witivio.blob.core.windows.net/static/Chitchat.xlsx) 


## Scores de confiance

[Les scores de confiance](/fr/chatbot/boite_de_reception/regles_des_scores.html) (1) pris en charge peuvent être configurés.

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/configuration3.png')" alt="low score">
</div>

<div class="image_center">
  <img :src="$withBase('/assets/img/fr/connaissances/configuration4.png')" alt="low score">
</div>

La difference de score minimum entre une question et une autre afin de lancer l'Active Learning peut également être configurée (2). Pour rappel, [L’Active Learning](/fr/chatbot/outils/active_learning.html) se déclenche lorsque le chatbot a un doute sur la compréhension de la question, plusieurs questions présentes dans la base de connaissances déclenchent un score élevé (écart de moins de 20 points).

### Commentaires
---

<Commentaire />


