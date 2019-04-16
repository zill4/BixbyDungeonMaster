module.exports = [
  {
    title: "The Tired Inn",
    tags: ["Inn", "Tired"], //used to find this quiz
    image: {
      url: 'https://pbs.twimg.com/media/DaVEvPZUQAA-Gnd.jpg'
    }, //optional
    events: [{
        event: "Welcome to the Jasper Inn, what can would you like to do?",
        options: ["Check into a room.", "Grab a shot of dwarven spirits.", "Listen to the bard."],
        //you can enter the answer as the index of the corresponding option from the "options" (where 0 is the first option)
        answer: 0, // Corresponds to "Mice cream",
        lastEvent: false
      },
      {
        event: "A strange Half-orc approaches you. What do you do?",
        options: ["Buy the orc a pint of mead.", "Stare him down.", "Lok'tar Ogar!"],
        //you can enter the answer as a string instead of using the index
        answer: "Stare him down.",
        //you can optionally provide an explanation
        explanation: "He says nothing and walks away.",
        lastEvent: true
      }
    ]
  },
  {
    title: "A night in the forest.",
    tags: ["forest", "night"], //used to find this quiz
    image: {
      url: 'https://i.pinimg.com/originals/1f/05/45/1f054547ad89c86f9414bc25de6eda18.jpg'
    }, //optional
    events: [{
        event: "You enter a dark and mysterious forest, what do you do?",
        options: ["Setup camp.", "Search your surroundings."],
        answer: 0,
        lastEvent: false
      },
      {
        event: "You hear a rustling in the bushes behind you.",
        options: ["Investigate the foliage.", "Throw a rock into the bush.", "Ignore it."],
        answer: ["Investigate the foliage", "Throw a rock into the bush."],
        lastEvent: false
      },
      {
        event: "A massive Owl-bear thunders through the bush!",
        options: ["Attack", "Make owl sounds.", "Run away!"],

        //you have to provide a list of accepted answers if there are no options
        answer: ["Attack", "Run away!"],

        //you can optionally provide an explanation
        explanation: "Fight or flight is the best choice.",
        lastEvent: true
      }
    ]
  }, 
  // End of presidents quiz
  
  // Start of states quiz generated from the spreadsheet
  { title: "The Ancient City of Jakano", 
   tags: ["jakano","city","ancient"], 
   image: { url: 'https://i.warosu.org/data/tg/img/0337/86/1406780105172.jpg' },  
   events: [
    {event: "You enter the ancient and mysterious city of Jakano, what do you do?", 
     options: ["Find the nearest inn.","Speak wi    th a guard.","Wander through the city."], 
     answer: ["Wander through the city.", "Find the nearest inn."], 
     explanation: "Most guards don't take kindly to strangers.",
     lastEvent: false
    },
    {event: "You walk through a dark and dirty alley way, a mugger appears.", 
     options: ["Pay the mugger 1 Gold.","Attack.","Turn around and run."], 
     answer: 2,
     lastEvent: false},
    {event: "You meet a bartender named John.", 
     options: ["Buy a beer.","Ask about any quests in the area.","Talk with John."], 
     answer: "Buy a beer.", 
     explanation: "John just wants you to drink.",
     lastEvent: false
    },
    {event: "A bird starts darting towards you.", 
     options: ["Duck in cover.","Stand your ground.","Make owl noises."], 
     answer: "Stand your ground.", 
     explanation: "The bird admires your courage and follows you as a companion.",
     lastEvent: false
    },
    {event: "You notice a beggar in rags as you walk by.", 
     options: ["Give him 1 Gold coin.","Ignore him and keep walking.","Kick dirt in his face as you walk by."], 
     answer: 0, 
     explanation: "The beggar notices your kind heart, he blesses you with greater insight, and as you walk away he vanishes.",
     lastEvent: false
    },

    {event: "Tired and hungry, you head to the nearest inn.", 
     options: ["Order a pint of mead.","Check into a room and go to sleep.","Get in a bar fight."], 
     answer: 2, 
     explanation: "The inn breaks out in a havoc, you come face to face with an angry dwarf, and for the next hour trade blows until your knocked out.",
     lastEvent: false
    },
    {event: "Waking up the next morning you find your gear missing.", 
     options: ["Search the room.","Accept the loss and move on.","Call the guards."], 
     answer: "Search the room.",
     lastEvent: false
    },
    {event: "You find a hidden door in the room.", 
     options: ["Enter the hidden passage.","Knock 3 times and see what happens.","Peak through the holes."], 
     answer: "Enter the hidden passage.",
     lastEvent: false
    },
    {event: "Inside the passge you find your gear, and hear a noise.", 
     options: ["Call out to the sound.","Put on your gear.","Run towards the sound."], 
     answer: "Put on your gear.", 
     explanation: "It is best to be prepared for what lies ahead.",
     lastEvent: false
    },
    {event: "A awful smell starts to creep towards you.", 
     answer: ["Attack","run away!"], 
     explanation: "A large ghoul starts rushing towards you, brace yourself.",
     lastEvent: true
    },
  ]},
  // End of States quiz
]
