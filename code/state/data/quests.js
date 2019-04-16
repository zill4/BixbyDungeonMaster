module.exports = [
  /* 
 Replace content below to customize the quiz
 - "title" (required): The quiz title
 - "tags" (optional Array): Keywords used find the quiz e.g. "Take a [tag] quiz"
 - "image.url" (optional): An image that shows up when you start the quiz. It can be a public url or a relative path to an image file in the /assets folder of this capsule
 - "questions" (required Array): List of questions for the quiz
    - "question" (required): Question to ask
    - "options" (optional Array): If present Bixby will show these choices on the screen and read them out. If not present, you will need to type or say the answer
    - "answer" (required Array or single value): The correct answer to the question. You can define this using either the index of the corresponding option from the "options" (where 0 is the first option) or using a text value. You can list multiple indices/values if you want to accept multiple correct answers
    - "explanation" (optional): This is additional information to explain the answer. It is shown when Bixby displays the summary of the quiz
  */

  /* Paste data from the spreadsheet below here. If there are multiple quizzes, each will begin with 
  ```
  { 
    title
  ```
  and end with
  ```
  ]},
  ```
  */
  
  // Start of funny quiz
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
        answer: 0 // Corresponds to "Mice cream"
      },
      {
        event: "A strange Half-orc approaches you. What do you do?",
        options: ["Buy the orc a pint of mead.", "Stare him down.", "Lok'tar Ogar!"],
        //you can enter the answer as a string instead of using the index
        answer: "Stare him down.",
        //you can optionally provide an explanation
        explanation: "He says nothing and walks away.",
      }
    ]
  },
  // End of funny quiz
  
  // Start of president quiz
  {
    title: "A night in the forest.",
    tags: ["forest", "night"], //used to find this quiz
    image: {
      url: 'https://i.pinimg.com/originals/1f/05/45/1f054547ad89c86f9414bc25de6eda18.jpg'
    }, //optional
    questions: [{
        question: "You enter a dark and mysterious forest, what do you do?",
        options: ["Setup camp.", "Search your surroundings."],
        answer: 0
      },
      {
        question: "You hear a rustling in the bushes behind you.",
        options: ["Investigate the foliage.", "Throw a rock into the bush.", "Ignore it."],
        //you can provide a list of accepted answers instead of giving an index to the options
        answer: ["Investigate the foliage", "Throw a rock into the bush."],
      },
      {
        question: "A massive Owl-bear thunders through the bush!",
        //options are optional!
        options: ["Attack", "Make owl sounds.", "Run away!"],

        //you have to provide a list of accepted answers if there are no options
        answer: ["Attack", "Run away!"],

        //you can optionally provide an explanation
        explanation: "Fight or flight is the best choice."
      }
    ]
  }, 
  // End of presidents quiz
  
  // Start of states quiz generated from the spreadsheet
  { title: "The Ancient City of Jakano", 
   tags: ["jakano","city","ancient"], 
   image: { url: 'https://i.warosu.org/data/tg/img/0337/86/1406780105172.jpg' },  
   questions: [
    {question: "You enter the ancient and mysterious city of Jakano, what do you do?", 
     options: ["Find the nearest inn.","Speak with a guard.","Wander through the city."], 
     answer: ["Wander through the city.", "Find the nearest inn."], 
     explanation: "Most guards don't take kindly to strangers."},
    {question: "You walk through a dark and dirty alley way, a mugger appears.", 
     options: ["Pay the mugger 1 Gold.","Attack.","Turn around and run."], 
     answer: 2},
    {question: "You meet a bartender named John.", 
     options: ["Buy a beer.","Ask about any quests in the area.","Talk with John."], 
     answer: "Buy a beer.", 
     explanation: "John just wants you to drink."},
    {question: "A bird starts darting towards you.", 
     options: ["Duck in cover.","Stand your ground.","Make owl noises."], 
     answer: "Stand your ground.", 
     explanation: "The bird admires your courage and follows you as a companion."},
    {question: "You notice a beggar in rags as you walk by.", 
     options: ["Give him 1 Gold coin.","Ignore him and keep walking.","Kick dirt in his face as you walk by."], 
     answer: 0, 
     explanation: "The beggar notices your kind heart, he blesses you with greater insight, and as you walk away he vanishes."},
    {question: "Tired and hungry, you head to the nearest inn.", 
     options: ["Order a pint of mead.","Check into a room and go to sleep.","Get in a bar fight."], 
     answer: 2, 
     explanation: "The inn breaks out in a havoc, you come face to face with an angry dwarf, and for the next hour trade blows until your knocked out."},
    {question: "Waking up the next morning you find your gear missing.", 
     options: ["Search the room.","Accept the loss and move on.","Call the guards."], 
     answer: "Search the room."},
    {question: "You find a hidden door in the room.", 
     options: ["Enter the hidden passage.","Knock 3 times and see what happens.","Peak through the holes."], 
     answer: "Enter the hidden passage."},
    {question: "Inside the passge you find your gear, and hear a noise.", 
     options: ["Call out to the sound.","Put on your gear.","Run towards the sound."], 
     answer: "Put on your gear.", 
     explanation: "It is best to be prepared for what lies ahead."},
    {question: "A awful smell starts to creep towards you.", 
     answer: ["Attack","run away!"], 
     explanation: "A large ghoul starts rushing towards you, brace yourself."},
  ]},
  // End of States quiz
]
