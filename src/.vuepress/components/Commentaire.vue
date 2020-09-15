<template>
  <div>
    <div v-if="$page.path.match(RegExp(`^\/..\/videos.+`))"></div>
    <div v-else id="disqus_thread"></div>
    <script type="text/javascript">

      if(!window.location.pathname.match(RegExp("^\/en.+"))){
          window.webChatSettings = {
            botId: '4f8c93fd-b71f-4abc-82b3-184b32cc7e20',
            color: '903163',
            title: 'Jeff',
            height: '500px',
            callout: true,
            welcome: true,
            width: '600px',
            refresh: false,
            apiKey: 'gxwhqaNdr01ITVcVFRmVv7HrXF3cyMuu&7V&AS5SmeviXPtQZ0VI50MiYftT',
            displayMode: 'close'
          };
          witivioWebChat.load(window.webChatSettings)  
      } else {
          witivioWebChat.destroy()
      }
    </script>
  </div>
</template>


<script>
export default {
  mounted () {
    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://witivio-doc.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  }
}
</script>