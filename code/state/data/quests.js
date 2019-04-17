module.exports = [
  // Each event should have an ID
  // Each option should also have an ID
  // These ID's match to provide the next event in a queue.
  {
    title: "The Tired Inn",
    tags: ["Inn", "Tired"], 
    image: {
      url: 'https://pbs.twimg.com/media/DaVEvPZUQAA-Gnd.jpg'
    }, 
    events: [{
        event: "Welcome to the Jasper Inn, what would you like to do?",
        options: [{text:"Check into a room.", id: 2}, {text: "Grab a shot of dwarven spirits.", id: 3}],
        id : 1,
        answer: 1, 
        lastEvent: false
      },
      {
        event: "You sit in your room and smell a weird scent?",
        options: [{text: "Check it out.", id: 3}, {text:"Take a nap instead.", id: 4}],
        id: 2,
        answer: 1,
        explanation: "He says nothing and walks away.",
        lastEvent: false
      },
       {
        event: "A strange Half-orc approaches you. What do you do?",
        options: [{text: "Buy the orc a pint of mead.", id: 4}, {text:"Stare him down.", id: 4}],
        id: 3,
        answer: 0,
        explanation: "He says nothing and walks away.",
        lastEvent: false
      },
       {
        event: "You feel like you have been just punched in the face.",
        options: [{text:"Get knocked out.", id: 4}, {text:"Pretend like that didn't happen.", id: 4}],
        id: 4,
        answer: 1,
        explanation: "He says nothing and walks away.",
        lastEvent: true
      }
    ]
  }
]
