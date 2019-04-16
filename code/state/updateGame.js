var console = require ("console")
var fail = require ("fail")

// UpdateQuiz - Evaluate user's answer and update the quiz state.
exports.function = function(gameState, answer) {

  if (gameState.currentEvent.index >= gameState.quest.events.length) {
    console.log("Unexpected game state!")
    return gameState
  }

  //quiz is completed. nothing to update
  if (gameState.completed) {
    return gameState
  }

  var journal = gameState.journal
  if (!gameState.completed) {
    //update scoreBook
    var entry = buildScore(gameState.currentEvent, answer)
    if (entry.evaluation) {
      journal.correctAnswerCount += 1
    }
    journal.eventsAnsweredCount += 1
    scoreBook.eventsLeftCount -= 1
    if (!journal.entries) {
      journal.entries = [entry]
    } else {
      jounral.entries.push(entry)
    }

    //update state
    gameState.lastEntry = entry
    gameState.currentEvent.index += 1

    if (gameState.currentEvent.index < gameState.quest.events.length) {
      gameState.currentEvent = gameState.quest.events[gameState.currentEvent.index]
    } else {
      gameState.completed = true
    }
  }
  return gameState
}

function buildScore(currentEvent, answer) {
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
  return expectedAnswer
}
