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
      event: "Your boat arrives at the coastal town of Susano, what do you do?",
      options: [{text:"Look around the ship.", id: 2}, {text: "Head into town.", id: 11}],
      id : 1,
      answer: 1, 
      lastEvent: false
    },
    {
      event: "You chose to look around the ship.",
      options: [{text: "Head down into the hull of the ship.", id: 3}, {text:"Talk with the firstmate.", id: 4}],
      id: 2,
      answer: 1,
      lastEvent: false
    },
     {
      event: "You discover a prisoner starving, and asking for help.",
      options: [{text: "Give her all of your rations.", id: 5}, {text:"Ignore her, tell the firstmate the prisoners are starving.", id: 4}],
      id: 3,
      answer: 0,
      lastEvent: false
    },
     {
      event: "The firstmate apears to have drunk himself asleep.",
      options: [{text:"Take the keys to the prisoners cells.", id: 6}, {text:"Take the keys to the cargo hold.", id: 7}],  
      id: 4,
      answer: 1,
      lastEvent: true
    },
       {
      event: "You chose to head into town.",
      options: [{text:"Go to the nearest Inn.", id: 12}, {text:"Head to the town square.", id: 13}],
      id: 11,
      answer: 1,
      lastEvent: true
    },
    {
      event: "You arrive at The Black Iron Inn.",
      options: [{text:"-path in progress-", id: 12}, {text:"-path in progress-", id: 12}],  
      id: 12,
      answer: 1,
      lastEvent: true
    },
    {
    event: "You arrive in the Susano town square. A large festival seems to be taking place, what do you do?",
    options: [{text:"Ask a strnger what is going on.", id: 13}, {text:"Go to the adventurers quest board.", id: 13}],
    id: 13,
    answer: 1,
    lastEvent: true
  }]
  }]
