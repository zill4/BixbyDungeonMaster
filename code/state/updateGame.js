var console = require ("console")
var fail = require ("fail")

// UpdateQuiz - Evaluate user's answer and update the quiz state.
exports.function = function(gameState, answer) {

  // if (gameState.currentEvent.index >= gameState.quest.events.length) {
  //   console.log("Unexpected game state!")
  //   return gameState
  // }

  //quiz is completed. nothing to update
  if (gameState.completed) {
    return gameState
  }

  var journal = gameState.journal
  if (!gameState.completed) {

    var entry = buildEntry(gameState.currentEvent, answer)
    // so we just checked if our answer was correct.
    // Really we want to keep going until the total event chain is done.
    // quest should be completed when we check if even == final event
    // or if the player is dead. or in the future if the player wants to save and quit.
    if (entry.evaluation) {
      journal.correctAnswerCount += 1
    }
    journal.eventsAnsweredCount += 1
    journal.eventsLeftCount -= 1
    if (!journal.entries) {
      journal.entries = [entry]
    } else {
      journal.entries.push(entry)
    }
    //update state
    gameState.lastEntry = entry
    gameState.currentEvent.index += 1
    
    var l;
    var newId;
//This can probably be changed to if gameState.currentEvent.finalEvent?
    //gameState.currentEvent = gameState.quest.events.options.answer
    if (gameState.currentEvent.id != 4)
      {
        // For the current number of events in this quest.
        newId = answerToOptionId(gameState.currentEvent.options, answer);
        // for (l = 1; l < newId; l++)
        //  {
           // console.log("Event Id " + gameState.quest.events[l].id + " newId " + newId);
           // console.log(gameState.quest.events[l]);
           // if (gameState.quest.events[l].id == newId)
           //  {
              gameState.currentEvent = gameState.quest.events[newId - 1];
              gameState.currentEvent.id = gameState.quest.events[newId - 1].id;
            //  console.log("Defined here? sad yet?");
                return gameState;
            //}
         }
        gameState.currentEvent.id = newId;
      }
    else
      {
        gameState.completed = true;
      }
    // if (gameState.currentEvent.index < gameState.quest.events.length) {
    //   gameState.currentEvent = gameState.quest.events[gameState.currentEvent.index]
    // } else {
    //   gameState.completed = true
    // }
  
  return gameState
}

function buildEntry(currentEvent, answer) {
  return {
    event: currentEvent,
    answer: unAliasedAnswer(currentEvent.options, answer),
    expectedAnswer: getExpectedAnswer(currentEvent.correctAnswer.acceptedAnswers),
    evaluation: checkAnswer(currentEvent.correctAnswer.acceptedAnswers, answer)
  }
}

// Check if the answer is correct
function checkAnswer(acceptedAnswers, answer) {
   for (var i=0; i<acceptedAnswers.length; i++) {
     if (acceptedAnswers[i].toLowerCase() == answer.toLowerCase()) {
       return true
     }
   }
   return false
}

//return the answer from alias
function unAliasedAnswer(options, answer) {
  for (var i=0; i<options.length; i++) {
    if (answer.toLowerCase() == options[i].alias.toLowerCase()) {
      return options[i].text
    }
  }
  return answer
}

//picks the longest answer from the acceptedAnswers list as the expected answer
function getExpectedAnswer(acceptedAnswers) {
  var expectedAnswer = ""
  if (acceptedAnswers) {
   for (var i=0; i<acceptedAnswers.length; i++) {
     if (acceptedAnswers[i].length > expectedAnswer.length) {
       expectedAnswer = acceptedAnswers[i]
     }
   }
  }
}
function answerToOptionId(options, answer) {
  for (var i=0; i<options.length; i++) {
    console.log(options[i].alias);
    console.log(answer);
    if (answer.toLowerCase() == options[i].alias.toLowerCase()) {
      return options[i].id
    }
  }
  // if we could not find it just give me the worst case.
  console.log("Yep we got the worst case!");
  return 4
}

