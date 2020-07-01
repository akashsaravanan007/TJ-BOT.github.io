var TJBot = require("tjbot");

var tj = new TJBot(
  ["microphone","led"], 
  {}, 
  {
    speech_to_text:{
  "apikey": "0XG75vuvy_FHjo_wPUsqjqDADs-6j9XXXX2P_5XPSSY",
  "iam_apikey_description": "Auto-generated for key 55XXXX8-97d6-43f5-bb68-7f64d8ff2d56",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94ef4XXXXX7623dc6d::serviceid:ServiceId-0e924705-e6ec-44d3-9f58-40767f3ee1a5",
  "url": "https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/deXXXX8-f47b-42ae-bf8e-4f7eb1a7e034"
},
    tone_analyzer: {
  "apikey": "NbhSrdX_wyTYlVQxHVwIh7upUXXXXXHbrIoqfiu-ne",
  "iam_apikey_description": "Auto-generated for key 5d1c3907-9077-402e-9baa-b1XXXXX4cd7e",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94ef499XXXX627623dc6d::serviceid:ServiceId-24c8e285-c48c-4c24-bab8-345c3425c23e",
  "url": "https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com/instances/99969323-e1b3-4c7e-b97f-405XXXX41d28e"
}
  }
);

function processText(text) {
  console.log(text);
  
  tj.analyzeTone(text).then(function(response) {
    console.log(response);
    
    var emotions = response.document_tone.tone_categories[0].tones;
    var top = emotions[Object.keys(emotions).reduce(function(a, b)  {
        return emotions[a].score > emotions[b].score ? a : b
    })];
    console.log(top);
    
    var colors = {
      "anger": "red",
      "disgust": "green",
      "fear": "magenta",
      "joy": "yellow",
      "sadness": "blue"  
    };
    
    tj.shine(colors[top.tone_id]);
  });
}

tj.listen(processText);