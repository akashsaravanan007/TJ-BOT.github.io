var TJBot = require("tjbot");

var tj = new TJBot(
  ["microphone","speaker"],
  {
    robot: {
      gender: "male"
    },
    speak: {
      language: "en-US"
    }
  },
  {
    speech_to_text:{
  "apikey": "0XG75vuvy_FHjo_wPUsqjqDADs-6jxxxxP_5XPSSY",
  "iam_apikey_description": "Auto-generated for key 5xxxxe78-97d6-43f5-bb68-7f64d8ff2d56",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94efxxxxd5627623dc6d::serviceid:ServiceId-0e924705-e6ec-44d3-9f58-40767f3ee1a5",
  "url": "https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/deb2bab8-f47b-42ae-bf8e-4f7eb1a7e034"
}
    conversation: {
      username: "",
      password: ""
    },
    text_to_speech: {
  "apikey": "-b0Zofv3kCl0VG82ifvbDsA2JHJxxxxS9eGIGC0b",
  "iam_apikey_description": "Auto-generated for key f4fecdab-fa02-4bda-b01c-1bxxxx5e9e",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94ef49962dxxx623dc6d::serviceid:ServiceId-c4ce5a84-4d7f-496f-b5de-0xxxx3dc81",
  "url": "https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/9b910428-d2f2-4855-915e-6e26dc571bdd"
}
  }
);

var workspaceId = "";

function processText(text) {
  console.log(text);
  tj.stopListening();

  tj.converse(workspaceId, text, function(response) {
    console.log(response);

    tj.speak(response.object.output.text.join(" ")).then(function(){
      tj.listen(processText);
    });
  });
}

tj.listen(processText);
