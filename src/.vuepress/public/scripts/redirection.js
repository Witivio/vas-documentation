//redirection navigator en-US

if (window.location.pathname === "/") {

  if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {

    window.location.replace("https://docs.witivio.com/fr/");

  } else {

    window.location.replace("https://docs.witivio.com/en/");

  }

} 

