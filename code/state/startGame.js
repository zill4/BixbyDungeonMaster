//Start the quest. Initialize the game state.
exports.function = function(quest) {
  state = {
    quest: quest,
    started: true,
    completed: quest.entries.length == 0,
    currentQuestion: quest.entries[0],
    lastScore: null,
    journal: {
      entries: [],
      correctAnswerCount: 0,
      entryAnsweredCount: 0,
      entryLeftCount: quest.entries.length,
    }
  }

  return gameState
}
