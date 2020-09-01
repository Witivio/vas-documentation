console.log(window.location.href)
//redirections vers nouveaux liens

if (window.location.href === `https://kind-desert-00b6b8203.azurestaticapps.net/fr/articles/canaux.html`) {
  window.location.href = "https://kind-desert-00b6b8203.azurestaticapps.net/articles/parametres/canaux.html"
}

if (window.location.href === `https://kind-desert-00b6b8203.azurestaticapps.net/fr/articles/escalade.html`) {
  window.location.href = "https://kind-desert-00b6b8203.azurestaticapps.net/articles/outils/escalade.html"
}

if (window.location.href === `https://kind-desert-00b6b8203.azurestaticapps.net/fr/articles/accessibilites%20du%20chatbot.html`) {
  window.location.href = "https://kind-desert-00b6b8203.azurestaticapps.net/articles/parametres/accessibilite_de_chatbot.html"
}


//redirection navigator en-US
if (navigator.language === 'en-US') {

  if (window.location.href === `https://kind-desert-00b6b8203.azurestaticapps.net/`) {
    window.location.href = "https://kind-desert-00b6b8203.azurestaticapps.net/en/"
  }

  if (window.location.href === `https://docs.witivio.com/`) {
    window.location.href = "https://docs.witivio.com/en/"
  }

}