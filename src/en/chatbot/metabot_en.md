# MetaBot
<br />
<br />

## Why to create a MetaBot? 
 
When several chatbots are available in different scopes, users may not know which chatbot to address. 

The MetaBot then becomes the primary contact point. Indeed, it is connected to several chatbots known as "friends", each of which covers a specific scope.

For instance, a company uses three chatbots, each one having a specific scope: Human Resources, IT support and Legal Department.

 
<div class="image_center">
  <img :src="$withBase('/assets/img/en/metabot/metabot.PNG')" alt="metabot">
</div>

<br />

## MetaBot configuration

 

Among the different configuration steps, the language choice is important. Indeed, a MetaBot and its chatbots friends must have at least one common language. 

 

For example, if a MetaBot is configured in French, its chatbots friends must speak at least French. 

The example below shows that the IT chatbot cannot be a MetaBot's friend because it doesn't speak French, which is the MetaBot's configuration language. The HR and Legal chatbots friends speak at least French. 

 
 
<div class="image_center">
  <img :src="$withBase('/assets/img/en/metabot/metabotlanguage.PNG')" alt="metabot language">
</div>
<br />

## How the MetaBot works

 

Once your MetaBot is configured, to allow it to query the knowledge of other chatbots it requires : 

 

- to add chatbots friends from the tab KNOWLEDGE > Friends.

 

- as well as to indicate the perimeter of each chatbot friend 

 

Once added, the chatbots friends are available in integration. Click on the PUBLISH button to publish them in production.

 
<br />

## Conversational schema

<br />


When the user asks a question to the MetaBot, the MetaBot looks for the most relevant answer in the knowledge of the chatbots friends according to their perimeters. 

<br />
<br />

**1) Score higher than the answer threshold** 

 

The user asks a question, the MetaBot directly understands the perimeter and thus gives back an answer from a chatbot friend. (% > answer threshold). 

 

  If the feedback from the chatbot friend is enabled, then the MetaBot asks for feedback. For example when a user is not satisfied with the answer, this negative feedback is logged in the inbox of the chatbot friend.

<br />
<br />

  **2) Contextualization** 

 

When the MetaBot finds several answers of different chatbots friends, it first asks for the perimeter. Depending on the user's choice, the MetaBot provides the answer found. 

 

"I have a doubt, does your question concern: "

 

- HR perimeter 

  

- IT perimeter  

 

- Legal perimeter 

  

- None of above


If the user selects one particular perimeter the MetaBot returns the answer of the corresponding chatbot friend. In addition, if the feedback of the chatbot friend is enabled, then the MetaBot asks for the feedback. 

 

However, if the user selects "None of above", then the question is sent to the MetaBot's inbox. 

 

NB. Once the perimeter has been requested, it is possible that the MetaBot identifies several questions from the same perimeter and thus triggers the Active Learning.

<br />
<br />
 

**3) Score lower than the answer threshold**

 

When the MetaBot does not find any answers among the chatbots' friends, it means that the score is below the threshold of the response score. The MetaBot returns the no answer message and asks for the perimeter. 

 

"Does your question concern: "

 

- HR perimeter 

 

- IT perimeter 

 

- Legal perimeter

 

- None of above

 

Depending on the chosen perimeter, the answer is logged in the inbox of the chatbot friend in the "Unanswered questions" tab. Moreover, if the escalation of the chatbot friend is enabled, it will be triggered. 

 

However, if the user chooses "None of above", the result is logged in the MetaBot inbox. 

<div class="image_center">
  <img :src="$withBase('/assets/img/en/metabot/metabothowitworks.PNG')" alt="how it works">
</div>


<br />
<br />
<br />

## Continuous improvement 

 

When the MetaBot has no answer, it asks the perimeter of the question asked. If the user chooses "None of these perimeters", the question without answer and perimeter is logged in the MetaBot's inbox.

 
 **Inbox processing**

 
<div class="image_center">
  <img :src="$withBase('/assets/img/en/metabot/metabotimprovement.PNG')" alt="Metabot Improvement">
</div>

 

The MetaBot inbox has a single tab "No perimeter". The available action from this tab is the transfer of the unanswered question to a chatbot friend. The coaches of the chatbot friend then process the question from the inbox of the chatbot friend and integrate it with its knowledge.

<br />
<br />


## Limitations

 

- The MetaBot can have a maximum of 5 chatbots friends (more on demand)

- The MetaBot has no knowledge base 

- Multilingual 

- Teams escalation 

- Profile management

- Push Campaign 

- Initial conversation 

- Power BI Statistics 

- Authorization list 

- the chatbot friend history contains only questions and answers related to its perimeter

- Not allowed to go back into the conversation and change choices


### Comments

---

<Commentaire />