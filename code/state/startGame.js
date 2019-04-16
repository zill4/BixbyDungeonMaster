//Start the quest. Initialize the game state.
exports.function = function(quest) {
  gameState = {
    quest: quest,
    started: true,
    completed: quest.events.length == 0,
    currentEvent: quest.events[0],
    lastEntry: null,
    journal: {
      entries: [],
      correctAnswerCount: 0,
      eventsAnsweredCount: 0,
      eventsLeftCount: quest.events.length,
    }
  }
  return gameState
}


