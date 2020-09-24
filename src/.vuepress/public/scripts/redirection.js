//redirection navigator en-US

window.onload = init;

function init() {
  if (window.location.pathname === "/") {
    if (navigator.language === 'fr-FR' || navigator.language === 'fr' ) {
      window.location.href = window.location.origin + "/fr/";
    } else {
      window.location.href = window.location.origin + "/en/";
    }
  
  } 

}

