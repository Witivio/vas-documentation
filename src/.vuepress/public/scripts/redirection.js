//redirection navigator en-US
if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {

  if (window.location.pathname === "/") {
    window.location.replace("https://docs.witivio.com/fr/");
  }

} else {
  
  if (window.location.pathname === "/") {
    window.location.replace("https://docs.witivio.com/en/");
  }

}

