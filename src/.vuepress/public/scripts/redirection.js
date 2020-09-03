//redirection navigator en-US

if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {

  if (window.location.href === "https://docs.witivio.com/") {
    window.location.href = "https://docs.witivio.com/fr/"
  }

} else {

  console.log(navigator.language)
  console.log(window.location.href)
  
  if (window.location.href === "https://docs.witivio.com/") {
    window.location.href = "https://docs.witivio.com/en/"
  }

}

