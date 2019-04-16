var console = require('console');
var http = require('http');
var raceClass = require('./playerDisplay/raceClass');

module.exports.function = function newPlayer (raceName, className) {
  var races = JSON.parse(http.getUrl("http://www.dnd5eapi.co/api/races/"))
  var classes = JSON.parse(http.getUrl("http://www.dnd5eapi.co/api/classes/"))
  var raceInfo;
  var i;
  var validRace = false;
  var validClass = false;
  var raceSpeed;
  var raceSize;
  var raceAlignment;
  var raceAge;
  var myUrl;
  console.log(raceClass);
  for (i = 0; i < races.results.length; i++) { 
        if (races.results[i].name.toLowerCase() == raceName.toLowerCase())
          {
            console.log("Found the given race.");
            validRace = true;
            // Grab the race details.
            raceInfo = JSON.parse(http.getUrl(races.results[i].url));
          } 
  }
  console.log("Made it to line 29")
  if (validRace) {
    raceSpeed = raceInfo.speed;
    raceSize = raceInfo.size;
    raceAlignment = raceInfo.alignment;
    raceAge = raceInfo.age;
  }
    for (i = 0; i < classes.results.length; i++) { 
        if (classes.results[i].name.toLowerCase() == className.toLowerCase())
         {
            validClass = true;
            console.log("Found the given class.");  
         } 
  }
  if (validClass && validRace)
    console.log("Both class name and race name are valid.")
  var w;
  var x = false;
  for (i = 0; i < raceClass.length; i++)
  {
    if (raceClass[i].raceName.toLowerCase() == raceName.toLowerCase())
      console.log("Name is " + raceName);
    for (w = 0; w < raceClass[i].classes.length; w++)
      {
            if (raceClass[i].classes[w].className.toLowerCase() == className.toLowerCase() && x != true && raceClass[i].raceName.toLowerCase() == raceName.toLowerCase() )
              {
                myUrl = raceClass[i].classes[w].classUrl;
                x = true;
              }
      }
  }
  var player;
  player = {
    currentLevel: 1,
    armor: 15,
    health: 8,
    currentHealth: 8,
    race: {
      name: raceName,
      speed: raceSpeed,
      size: raceSize,
      alignment: raceAlignment,
      age: raceAge
    },
    class: {
      name: className
    },
    image: myUrl
  }
  return player;
  }
  
