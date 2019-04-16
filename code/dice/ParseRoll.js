// RollDice
// Rolls a dice given a number of sides and a number of dice

// Main entry point
var console = require('console');
module.exports.function = function parseRoll (parseNumSides) {
  // Convert undefined to string.
  var value = parseNumSides + "";
  console.log(typeof parseNumSides);
  
  // We capture multiple numbers.
  var re = /\d+/g;
  var myArray = value.match(re);
  // The first num of the array is the number of dice.
  // The second num of the array is teh number of sides.
  // If array is of size 1 the value is sides.
  // If the array is greater than 2 the 3rd value is ignored. Till we implement multiple rolls.
  var sides = 6;
  var num = 1;
  if (myArray.length == 1)
    numSides = Number(myArray[0]);
  
  else if (myArray.length > 1)
  {
    numDice = Number(myArray[0]);
    numSides = Number(myArray[1]);
  }
  
  var sum = 0;
  var result = [];

  for (var i = 0; i < numDice; i++) {
    var roll = Math.ceil(Math.random() * numSides);
    result.push(roll);
    sum += roll;
  }
  // RollResult
  return {
    sum: sum, // required Sum
    roll: result // required list Roll
  }
  
  
}

