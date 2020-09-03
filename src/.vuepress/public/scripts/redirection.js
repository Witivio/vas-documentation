//redirection navigator en-US

window.onload = init;

function init() {
  
  if (window.location.pathname === "/") {
  
    if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {
  
      window.location.href = "https://docs.witivio.com/fr/";
  
    } else {
  
      window.location.href = "https://docs.witivio.com/en/";
  
    }
  
  } 

}

