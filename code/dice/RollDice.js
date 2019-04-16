module.exports.function = function rollDice(numDice, numSides, modif) {

  var sum = 0;
  var min = [];
  var max = [];

  for (var i = 0; i < numDice; i++) {
    var higher = Math.ceil(Math.random() * numSides);
    var lower = Math.ceil(Math.random() * numSides);
    if (modif != null && higher < lower) {
      [higher, lower] = [lower, higher];
    }
    max.push(higher);
    min.push(lower);
    if (modif == "disadvantage") {
      sum += lower;
    }
    else {
      sum += higher;
    }
  }
  return {
    sum: sum,
    max: max,
    min: min,
    modif: modif
  }
}
