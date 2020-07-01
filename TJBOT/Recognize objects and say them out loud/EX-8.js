var TJBot = require("tjbot");

var tj = new TJBot(
  ["camera","speaker"], 
  {
    robot: {
      gender: "male" 
    },
    speak: {
      language: "en-US"
    }
  }, 
  {
    visual_recognition: {
  "apikey": "W1ueyhsJXFamM6oe5q5ieYjpYC8h8XXXXX2ASJ7EU0Nj",
  "iam_apikey_description": "Auto-generated for key 45XXX2d-889c-4f30-a0d7-67deadc61bb3",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94ef49962d5627XXXXc6d::serviceid:ServiceId-58372723-6d6b-44ca-963e-8533532829bb",
  "url": "https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/0289f62c-a972-4b08-befe-31af3ba35138"
},
    text_to_speech: {
  "apikey": "s-xZq5tYj99vDnwLkwjIZiz9ZojjuXXXXiJLm9t11M",
  "iam_apikey_description": "Auto-generated for key b51b6920-c731-412a-87bb-f4XXXXf177e6",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94eXXXX62d5627623dc6d::serviceid:ServiceId-40fb47c0-d523-41da-94e2-036a98e92f38",
  "url": "https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/a3bab2fe-8d07-488c-b9b3-9b8XXXX81f92"
}
  });
    
tj.see(function(objects) {
  console.log(objects);
  
  var text = "T J Bot sees " + objects.map(item => item["class"]).join(", ");
  console.log(text);
  
tj.speak("Hello World");
});
