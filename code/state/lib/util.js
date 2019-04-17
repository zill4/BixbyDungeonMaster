var console = require("console")

exports.findItems = findItems
exports.buildEventsFromJson = buildEventsFromJson

function findItems(items, searchTerm) {
   var matches = []
   //a lot can be improved here...
   for (var i=0; i<items.length; i++) {
      if (items[i].tags) {
        for (var j=0; j<items[i].tags.length; j++) {
          if (searchTerm.toLowerCase() == items[i].tags[j].toLowerCase()) {
             matches.push(items[i])
             break
          }
        }
      }
   }
   return matches
}

function buildEventsFromJson(questJson) {
  var events = []
  for (var i=0; i< questJson.events.length; i++) {
    events.push(buildEventFromJson(questJson.events[i], i))
  } 
  return events
}

function buildEventFromJson(eventJson, index) {
    if (!eventJson) {
        return null
    }
    var options = []
    if (eventJson.options) {
      for (var i=0; i< eventJson.options.length; i++) {
        options.push({
          text: eventJson.options[i].text,
          alias: String.fromCharCode('A'.charCodeAt(0) + i),
          id: eventJson.options[i].id
        })
      }
    }
    var event = {
      textToDisplay: eventJson.event,
      textToSpeak: buildEventToSpeak(eventJson.event, options),
      options: options,
      index: index,
      correctAnswer: {
         acceptedAnswers: buildAcceptedAnswers(eventJson.answer, options),
         explanation: eventJson.explanation
      }
    }
    return event
}

function buildEventToSpeak(event, options) {
  optionsString = ''
  for (var i=0; i<options.length; i++) {
    optionsString += options[i].alias + '... ' + options[i].text + (i+1 < options.length ? ', ... ' : '')
  }
  return event + ' ' + optionsString
}

function buildAcceptedAnswers(answer, options) {
   var acceptedAnswers = []
   if (Array.isArray(answer)) { //is answer an array?
     for (var i=0; i<answer.length; i++) {
        acceptedAnswers = acceptedAnswers.concat(buildAcceptedAnswers(answer[i], options))
     }
   } else if (typeof answer === 'number' && options && answer < options.length) {
     acceptedAnswers.push(options[answer].alias)
     acceptedAnswers.push(options[answer].text)
   } else if (answer) {
     acceptedAnswers.push(answer)
     //also push all aliases matching the answer
     if (options) {
       for (var i=0; i<options.length; i++) {
         if (options[i].text == answer) {
           acceptedAnswers.push(options[i].alias)
         }
       }
     }
   }
   return acceptedAnswers
}