var TJBot = require("tjbot");

var tj = new TJBot(  
  ["microphone"],  
  {
    listen: {
      language: "en-US"    
    }
  },  
  { 
    speech_to_text: {
  "apikey": "0XG75vuvy_FHjo_wPUsqjqDADs-6j9elXXXP_5XPSSY",
  "iam_apikey_description": "Auto-generated for key 55fXXXX-97d6-43f5-bb68-7f64d8ff2d56",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94ef499XXXX7623dc6d::serviceid:ServiceId-0e924705-e6ec-44d3-9f58-40767f3ee1a5",
  "url": "https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/deb2bab8-f47b-42ae-bf8e-4f7ebXXXX034"
}
  });

tj.listen(function(text) {  
  console.log(text);  
  tj.resumeListening(); /tj.stopListening(); /tj.pauseListening(); /
});