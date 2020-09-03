//redirection navigator en-US

console.log(navigator.language)

if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {

  if (window.location.href === 'https://docs.witivio.com/') {
    window.location.href = "https://docs.witivio.com/fr/"
  }

} else {
  
  if (window.location.href === 'https://docs.witivio.com/') {
    window.location.href = "https://docs.witivio.com/en/"
  }
}
