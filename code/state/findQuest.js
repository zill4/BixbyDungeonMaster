var console = require("console")
var lib = require("./lib/util");

const QUESTS = require("./data/quests");

// FindQuiz
exports.function = function(searchTerm) {
  //You can replace with a call to a web api - make sure you map api response to Quiz model
  var questsJson = QUESTS
  console.log(questsJson)
  //filter based on searchTerm (note that if you use a web api then filtering can be done in the web API itself)
  if (searchTerm) {
    questsJson = lib.findItems(questsJson, searchTerm)
  }
  var quests = []
  //read the questions in the quiz and initialize the state
  for (var i=0; i< questsJson.length; i++) {
    var quest = questsJson[i]
    var events = lib.buildEventsFromJson(quest)
    //cannot start a quiz without any questions
    if (!events || !events.length) {
      console.log("Chosen quest has no events!")
    } else {
      quest.events = events
      quests.push(quest)
    }
  }
  return quests
}
