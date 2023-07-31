# L'apprentissage GPT 

 

La fonctionnalité d'apprentissage GPT est destinée aux utilisateurs de Virtual Agent Studio souhaitant optimiser le temps nécessaire à la création d’une base de connaissances en allant trouver des réponses dans une documentation rédigée sur des thématiques précises. 

 

Aussi appelée "indexation sémantique" cette fonctionnalité permet à votre chatbot de comprendre et de répondre de manière contextuelle à partir d'un ensemble de documents que vous fournissez. Particulièrement utile lorsque vous voulez que votre chatbot traite une grande quantité d'informations structurées et non structurées, comme des manuels d'utilisation, des FAQ, des articles de base de connaissances, des textes réglementaires, etc. 

 

Votre chatbot analyse vos documents pour comprendre les concepts, les thèmes et les relations qui existent entre les différents éléments d'information. Il utilise des techniques d'intelligence artificielle avancées pour analyser le contenu de vos documents et pour lier ces informations aux questions possibles que pourraient poser vos utilisateurs. 

 

Grâce à l'indexation sémantique vous pouvez vous couper d'une partie, ou totalement de l'alimentation de la base de connaissance de votre chatbot.  

 

## Comment fonctionne la recherche ?  

 

Dans le cadre du développement de cette fonctionnalité :  

-  VAS permet de gérer les documents disponibles pour l'apprentissage du chatbot.  

-  lorsqu'un utilisateur pose une question qui n'est pas reconnue par votre chatbot dans son modèle de base de connaissances principal il lance une escalade (paramétrée préalablement par l’équipe Witivio)  

- Il s'interface avec Microsoft Azure Cognitive Search, développé par Microsoft Azure.  

- Ce dernier parcourt l'ensemble des documents à sa disposition afin de retrouver des mots et concepts clés abordées dans la question et renvoi au studio une liste de résultats qui lui semble pertinents  

- Le studio récupère la liste des réponses en fonction de leur score de pertinence par ordre croissant.  

- Le studio sélectionne la réponse ayant obtenu le score de pertinence le plus haut et sélectionne une partie du contexte du document afin d'apporter la réponse la plus complète possible à l'utilisateur. 

- L'utilisateur reçoit la réponse sous forme d'adaptive card contenant la citation du document et dispose d'un bouton pour visualiser celui-ci. 

 

## Étape 1: Identifier les documents à indexer 

 

Nous vous encourageons à commencer à identifier les documents que vous souhaitez indexer dans votre chatbot. Qu'il s'agisse de FAQ, de manuels d'utilisation, d'articles ou d'autres types de documents pertinents pour votre activité, assurez-vous qu'ils sont prêts et que les informations contenues sont correctes. 

Virtual Agent Studio autorise les formats suivants :  

- Pdf, 
- Docx, 
- Pptx,  
- txt 

Veuillez noter que les fichiers contenant des macro ne sont supportés. 

Chaque fichier peut atteindre la taille maximale de 10 MO, l'espace de stockage maximum par chatbot est de 2GO.  

 

## Etape 2 : Vérifier la structure des documents 

 

Afin de donner à votre chatbot les meilleures chances de trouver la bonne réponse nous vous conseillons de veiller à la bonne structure de vos documents. Pour cela voici une liste de bonnes pratiques qui pourront vous aider :  

 

- Préparez un sommaire clair et structuré au début de votre document 

- les informations clés auxquelles vous souhaitez répondre doivent être contenues dans des paragraphes détaillés et clairs. 

- La documentation contient peu de tableaux. En effet les tableaux ne sont qu'une suite d'informations, l'outil n'est pour le moment pas capacité d'en comprendre le sens. 

- Les tableaux doivent être de véritables composants "tableaux" dans les documents de référence initiaux (Docx, PowerPoint etc.). 

- Tout commentaire dans le document sera considéré comme un élément de réponse ce qui peut influencer la pertinence des résultats. 

- Les images des documents ne sont pour le moment pas traitées comme des éléments de réponse. Assurez-vous que la réponse soit contenue dans du texte. 

- Les documents donnés doivent de préférence correspondre à la langue du chatbot.  

 

  

 ## Etape 3 : Intégrer les documents dans votre chatbot 

 

 Nos CSM sont disponibles pour réceptionner les documents et vous aider dans le choix et la pertinence de ces derniers.  

 Une fois que vous avez transmis vos documents, le processus d'indexation sémantique se lance toutes les heures à heure pile. (Exemple : 12h00, 13h00 …) 

 L'indexation peut prendre un certain temps, selon la taille et la complexité de vos documents. Lorsqu'elle est terminée, votre chatbot sera capable de répondre aux questions basées sur les informations contenues dans ces documents. 

 

 ## Etape 4 : Testez les réponses 

 

 Votre chatbot est à présent prêt à répondre. Nous vous conseillons de prendre le temps de tester les réponses apportées par ce dernier afin de modifier, au besoin, les documents de référence.  

 

Si l'IA donne une réponse qui semble incorrecte ou hors contexte, nous vous invitons à vérifier le contenu de vos documents et à reformuler au besoin afin d’améliorer la compréhension de certains paragraphes. Veuillez noter que l'exactitude des informations peut varier, nous vous invitons donc à vérifier la pertinence des réponses fournies afin d’anticiper s 

 

## Etape 5 résultat  envoyé par le chatbot 

 

Le résultat s'affiche sous forme d'adaptive card pour l'utilisateur final.  
 

Le chatbot précise que la réponse provient d'une source documentaire et cite le passage faisant l'objet de la réponse.  

En bas de card on retrouve le fichier source ainsi qu'un bouton permettant d'ouvrir le fichier et de rechercher la réponse depuis les documents.  

 

## Je rencontre des problèmes avec les réponses de mon chatbot 

 

Si vous rencontrez un delta entre les réponses que vous souhaiteriez obtenir et les réponses obtenues n'hésitez pas à vous référer à l'étape 2 de ce document.  

 

Enfin, nous vous invitons à vérifier la véracité des informations fournies par le chatbot. En effet, le contenu généré par IA peut parfois produire des résultats imprécis. Virtual Agent Studio ne pouvant interférer avec le processus de recherche fourni par Azure, nous vous invitons à effectuer des tests en amont et / ou contacter vos CSM pour bénéficier d'un accompagnement dans ce processus. 

 

 