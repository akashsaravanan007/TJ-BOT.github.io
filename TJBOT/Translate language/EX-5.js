var TJBot = require("tjbot");

var tj = new TJBot(
  [],
  {},
  {
   language_translator:{
  "apikey": "IiHkRhSiUZscNJ8r0Et4MYFexPXXXXbLUYLhCe4JkDLz",
  "iam_apikey_description": "Auto-generated for key e2c286cc-7a6e-46ad-9d48-2018XXXXe2d2",
  "iam_apikey_name": "Auto-generated service credentials",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/c7e9c59471c94ef499XXXX27623dc6d::serviceid:ServiceId-8e8f4e53-8398-45c7-bbb7-d8991d9bf803",
  "url": "https://api.eu-gb.language-translator.watson.cloud.ibm.com/instances/86ba819e-9c3f-4c62-8070-bd7aXXXXX15927"
}
  }
);

var text = "bonjour";

tj.identifyLanguage(text).then(function(languages) {
  var sourceLanguage = languages.languages[0].language;
  var targetLanguage = "en";
  
  tj.isTranslatable(sourceLanguage, targetLanguage).then(function(result) {
    if(result) {
      tj.translate(text, sourceLanguage, targetLanguage).then(function(translation) {
        console.log(translation.translations[0].translation);
      });
    } else {
      console.log("Unable to translate from '"+sourceLanguage+"' to '"+targetLanguage+"'");
    }
  });  
});

sample usage:-
tj.identifyLanguage(text) method:-
tj.identifyLanguage("Hello, my name is TJBot!").then(function(languages) {

tj.translate(text, sourceLanguage, targetLanguage) method:-
tj.translate("Hello, my name is TJBot!", 'en', 'es').then(function(translation) {
    ...
});

tj.isTranslatable(sourceLanguage, targetLanguage) method:-
tj.isTranslatable("en", "es").then(function(result) {
    if(result) {
        console.log("TJBot can translate between English and Spanish!");
    } else {
        console.log("TJBot cannot translate between English and Spanish.");
    }
});
