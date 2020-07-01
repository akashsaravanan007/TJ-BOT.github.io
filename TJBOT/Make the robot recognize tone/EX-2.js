var TJBot = require("tjbot");

var tj = new TJBot(
  [],
  {},
  {
   tone_analyzer: {
  "apikey": "NbhSrdX_wyTYlVQxHVwIh7upUHVAvTTSHbxxxoqfiu-ne",
  "iam_apikey_description": "Auto-generated for key 5d1c3907-9077-402e-9baa-b1xxxc74cd7e",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94xxxx62d5627623dc6d::serviceid:ServiceId-24c8e285-c48c-4c24-bab8-345c3425c23e",
  "url": "https://api.eu-gb.tone-analyzer.watson.cloud.ibm.com/instances/99xxxx-e1b3-4c7e-b97f-405a8e41d28e"
}
  }
);

var text = "This is an amazing demo full of examples.";

tj.analyzeTone("hello world").then(function(response) {
  var emotions = response.document_tone.tone_categories[0].tones;
  var top = emotions[Object.keys(emotions).reduce(function(a, b) {
    return emotions[a].score > emotions[b].score ? a : b
  })];
  
  console.log("Top tone: "+top.tone_id);
});