//redirection navigator en-US

console.log(navigator.language)

if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {

  if (window.location.href === `https://kind-desert-00b6b8203.azurestaticapps.net/`) {
    window.location.href = "https://kind-desert-00b6b8203.azurestaticapps.net/fr/"
  }

  if (window.location.href === `https://docs.witivio.com`) {
    window.location.href = "https://docs.witivio.com/fr/"
  }

} else {

  if (window.location.href === `https://kind-desert-00b6b8203.azurestaticapps.net/`) {
    window.location.href = "https://kind-desert-00b6b8203.azurestaticapps.net/en/"
  }
  
  if (window.location.href === `https://docs.witivio.com`) {
    window.location.href = "https://docs.witivio.com/en/"
  }
}
