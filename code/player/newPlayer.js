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
    for (i = 0; i < classes.results.length; i++) { 
        if (classes.results[i].name.toLowerCase() == className.toLowerCase())
         {
            validClass = true;
           // Save the url for the given class to get info.
             classURL = classes.results[i].url;
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
  // If we see that the given class is true, we can make a http request to populate the class data.
  var classInfo;
  var proficiencies;
  if (x == true)
  {
    // 1. Get class information by searching for class URL
    classInfo = JSON.parse(http.getUrl(classURL));
    // 2. Call a function to load listed objects like proficienies
    proficiencies = loadProficiencies(classInfo);
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
      age: raceAge,
      // FROM HERE IS NEW
      // With class profiecieny we can check a recommended class/race combo.
      sizeDescription: sizeDescription,
      // need to add languages array
      languageDescription: languageDescription,
      // need to add traits + proficencies array
    },
    class: {
      name: className,
      hitDie: classInfo.hit_die,
      proficiencies: proficiencies
    },
    image: myUrl
  }
  return player;
  }
// Here we load the list of proficiencies for the given class.
// i.e. Axes, Swords, Light or Heavy Armor
// Each proficiencey will have a name and type. 
// i.e. Axe = weapon and light armor = armor
 function loadProficiencies(classInfo)
{
  var proficiencies = new Array(classInfo.proficiencies.length);
  var i = 0;
  var profInfo;
  console.log(classInfo.proficiencies);
  for (i = 0; i < classInfo.proficiencies.length; i++)
  {
    console.log("Where is my issue? " + i)
    profInfo = JSON.parse(http.getUrl(classInfo.proficiencies[i].url));
    console.log("Here?  " + i)
    proficiencies[i].name = profInfo.name;
    proficiencies[i].type = profInfo.type;
  }
  return proficiencies;
}
