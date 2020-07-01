var TJBot = require("tjbot");
    
var tj = new TJBot(  
  ["speaker"],  
  {
    robot: {
 gender: "female"
},
speak: {
  language: "en-US"
} 
  },
  {
   text_to_speech:{
  "apikey": "-b0Zofv3kCl0VG82ifvbDsA2xxxxxxxxeGIGC0b",
  "iam_apikey_description": "Auto-generated for key f4fecdab-xxxxxxxxxx8013e5e9e",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94xxxxxxxx3dc6d::serviceid:ServiceId-c4ce5a84-4d7f-496f-b5de-0d485673dc81",
  "url": "https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/9b910428-d2f2-48xxx15e-6e26dc571bdd"
}
  });
    
tj.speak("hello guys....").then(function() {
    return tj.speak("my name is T J bot");
    
}).then(function () {
    return tj.speak("How are you?,i'm fine guys");
}).then(function () {
    return tj.speak("it's very nice to meet you!!!");
});
