# Configuration du composant Webchat V1 (obsolète)

>Rappel: cette version est obsolète et ne sera plus supportée à partir du 1er octobre 2019.

Pour activer le contrôle Webchat V1 sur votre site Web, c'est assez simple. Ajoutez simplement l'iframe et remplacez les paramètres.

```
<!DOCTYPE html>
<html>
<head>
    <title>Witivio webchat sample</title>
</head>
<body>
    <script>
        window.webChatSettings = {
            botId: '[BOTID]',
            color: '[COLOR]',
            avatar: '[URL]',
            title: '[TITLE]',
            height: '500px',
            callout: true,
            welcome: true,
            width:'600px',
            user: {
                'id':'userId',
                'name': 'displayName'
            },
            refresh:false,
        };
        !function () { function t() { var t = e.createElement("script"); t.type = "text/javascript", t.async = !0, t.src = "https://webchat.witivio.com/init.js", t.onload = function () { loadWebChat(window.webChatSettings) }; var n = e.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n) } var e = document, n = window; n.attachEvent ? n.attachEvent("onload", t) : n.addEventListener("load", t, !1) }();
    </script>
</body>
</html>
```


<table>
        <tr>
            <td>BotId</td>
            <td>L'identifiant unique de votre chatbot. L'identifiant est disponible dans le menu paramètres .</td>
        </tr>
        <tr>
            <td>Color</td>
            <td>Couleur primaire en hexa</td>
        </tr>
        <tr>
            <td>Avatar</td>
            <td>URL de l'image de votre chatbot.</td>
        </tr>
		<tr>
            <td>Title</td>
            <td>Le titre de la fenêtre de discussion. Généralement le nom du chatbot.</td>
        </tr>
		<tr>
            <td>Callout</td>
            <td>Activer le message de bienvenue. (par défaut: true)</td>
        </tr>
		<tr>
            <td>Welcome</td>
            <td>Activer l'affichage du message de bienvenue dans la fenêtre de discussion. (par défaut: true)</td>
        </tr>
		 <tr>
            <td>USER</td>
            <td>Non obligatoire. Si vous êtes dans SharePoint Online, vous pouvez utiliser 
            <pre><code>
{
    'id': _spPageContextInfo.aadUserId,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            ou 
            <pre>
            <code>
{
    'id': _spPageContextInfo.userPrincipalName,
    'name': _spPageContextInfo.userDisplayName
}
            </code>
            </pre>
            Si auncune configuration n'est spécifiée, le composant génére un identifiant unique qui est enregistré dans le navigateur.
            </td>
        </tr>
        <tr>
            <td>refresh</td>
            <td>Affiche un bouton qui réactualise le composant (par défaut: false)</td>
        </tr>
         <tr>
            <td>environnement</td>
            <td>Environnement de la base de connaissance ('production', ou 'integration') (par défaut: 'production')</td>
        </tr>
 <tr>
            <td>startingFlowId</td>
            <td>Identifiant du starting flow à démarrer (facultatif)</td>
        </tr>
</table>


### Commentaires
---

<Commentaire />
