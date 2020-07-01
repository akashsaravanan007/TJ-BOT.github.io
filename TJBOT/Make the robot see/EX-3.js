var tj = new TJBot(  
  ["camera"],  
  {},  
  {
     visual_recognition: {
  "apikey": "W1ueyhsJXFamM6oe5q5ieYjpYC8h8rVcxxxxJ7EU0Nj",
  "iam_apikey_description": "Auto-generated for key 457xxxd-889c-4f30-a0d7-67deadc61bb3",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c9xxx962d5627623dc6d::serviceid:ServiceId-58372723-6d6b-44ca-963e-8533532829bb",
  "url": "https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/0289f62c-a972-4b08-befe-31afxxx35138"
}
  });
 
tj.takePhoto(targetPath).then(function(filePath) {
  console.log(response.map(i => i.class).join(", "));
});   

tj.see(function(response) {
  console.log(response.map(i => i.class).join(", "));
}); 

tj.see().then(function(objects) {
  console.log(response.map(i => i.class).join(", "));
}); 
