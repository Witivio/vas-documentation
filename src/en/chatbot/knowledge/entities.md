# Entities

Click on **Knowledge** then **Entities**.

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/entities1.png')" alt="low score">
</div>




### What for?
---
>Entities are data you want to pull from the question, such as names, dates, product names, or any significant group of words. A question may include many entities. 


### How?
---
Here are the steps to follow to define your own entities using the Witivio platform : 


**1) Add entities** 

Click on the **Knowledge** tab and select **Entities**. 

Add the entities you want here. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/entities2.png')" alt="low score">
</div>



**2) Attach the detected data to the entities**.  

It is possible to manage entities from the platform only for the following types of answer: 

- Conversation tree 
- Power Automate 
- Azure Logic Apps
- Webhook

Access your question, add the alternatives and then access the **Detections** tab. 


> In order to link a word or a group of words to an entity, right-click on the detection and then on the name of the entity added before. 

> In the following example, **E234** is considered as a ticket number. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/knowledge/entities3.png')" alt="low score">
</div>

A question may include several entities. 


Once your knowledge base is **enough trained**, the detection will be done automatically. 

### Comments
---
<div id="disqus_thread"></div>


<script>

export default {
  mounted () {

    var disqus_config = function () {
      this.page.url = "https://docs.witivio.com";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "witivio_#16"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
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