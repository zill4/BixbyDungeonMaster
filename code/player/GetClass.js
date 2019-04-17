var console = require ("console")
var fail = require ("fail")
var http = require('http');

module.exports.function = function getClass (answer) {

 var dndClasses = JSON.parse(http.getUrl("http://www.dnd5eapi.co/api/classes/"))
 var validClass = false;
 for (i = 0; i < dndClasses.results.length; i++) 
  { 
        if (dndClasses.results[i].name.toLowerCase() == answer.toLowerCase())
          {
            console.log("Found the given class.");
            validClass = true;
            
          } 
  }
  return className
}