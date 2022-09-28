//** returns an array of thank you messages for each name provided to the function */


function writeCards(names, event) {
  
  let cards = []
  
  if (event = "surprise") {
    event = "for the wonderful surprise gift"
  } 
  
  for (let i = 0; i < names.length; i++) {
    
     cards.push(`Thank you, ${names[i]}, ${event}!`);

   }

  return cards;
}

writeCards(names, event)



// write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log()

function countDown(positiveInteger) {

  for ([i = positiveInteger]; [i > 0]; [positiveInteger--]) {
    [loop body]
  }

  return countDown
}

countDown(positiveInteger)

