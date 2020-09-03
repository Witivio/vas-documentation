console.log(window.location.pathname)
var disqus_config = function () {
  this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://docs-witivio.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

