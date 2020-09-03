# Image gallery


The image gallery page allows you to manage the storage of your images to build [**Adaptive card**](/en/chatbot/knowledge/kb.html#adaptive-card) answers and [**Image**](/en/chatbot/knowledge/kb.html#image-answer) answers. 


Go to the **Tools** tab and then **image gallery**. Select a folder to upload your images. The folders correspond to your [**categories**](/en/chatbot/knowledge/categories.html). 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/image1.png')" alt="low score">
</div>




Click on the wished folder and then add your images using the button on the top right "Upload an image". 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/image2.png')" alt="low score">
</div>



You can also upload your images directly from your question. To do this, go to the tab **Knowledge** > **KB**, add a new question or select an existing question, and in the answer tab select **Adaptive card answer**. 

You will then find the **Image gallery** tab. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/image3.png')" alt="low score">
</div>



Then add your images using the "Upload Image" button at the top right of the pop-up or drag and drop the image. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/image4.png')" alt="low score">
</div>



Finally, click on the button **Copy the url** and paste it into your Adaptive card in the answer tab. 

To add an image in your Adaptive card, drag the **Image** element > Open the properties of this element on the right using the + > paste your url in the url field. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/tools/image5.png')" alt="low score">
</div>

### Comments
---
<div id="disqus_thread"></div>


<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#33"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://docs-witivio.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
  }
}
</script>