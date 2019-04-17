var console = require('console');
var http = require('http');
var raceClass = require('../player/playerDisplay/raceClass');

module.exports.function = function findRaces (raceName) {
  var races = JSON.parse(http.getUrl("http://www.dnd5eapi.co/api/races/"))
  var raceInfo;
  var i;
  var validRace = false;
  var validClass = false;
  var raceSpeed;
  var raceSize;
  var raceAlignment;
  var raceAge;
  var languageDescription;
  var sizeDescription;
  var myUrl;
  var classURL;

  for (i = 0; i < races.results.length; i++) 
  { 
    if (races.results[i].name.toLowerCase() == raceName.toLowerCase())
      {
        console.log("Found the given race.");
        validRace = true;
        // Grab the race details.
        raceInfo = JSON.parse(http.getUrl(races.results[i].url));
      } 
  }
  
   for (w = 0; w < raceClass.length; w++)
   {
      if (raceClass[w].name == raceName)
        {
          myUrl = raceClass[w].classes[4].classUrl
        }
  }
  if (validRace) 
  {
    raceSpeed = raceInfo.speed;
    raceSize = raceInfo.size;
    raceAlignment = raceInfo.alignment;
    raceAge = raceInfo.age;
    // added size_desc and lang_desc
    sizeDescription = raceInfo.size_description;
    languageDescription = raceInfo.language_desc;
  }
  
  var race;

   race = {
      name: raceName,
      speed: raceSpeed,
      size: raceSize,
      alignment: raceAlignment,
      age: raceAge,
      // FROM HERE IS NEW
      // With class profiecieny we can check a recommended class/race combo.
      sizeDescription: sizeDescription,
      // need to add languages array
      languages: {
            languageDescription: languageDescription
      },
     image: myUrl
   }
  return race;
 }
