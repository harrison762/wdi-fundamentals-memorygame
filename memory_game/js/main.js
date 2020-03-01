let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch(){
    if(cardsInPlay.length === 2){


    if (cardsInPlay[0] === cardsInPlay[1]){
        console.log("You found a match!");
    }
    else {
        console.log("Sorry, try again.");
    }
}
}


//if{condition}{execute if condition is met}
//if cardsinplay length is equal to 2, then if cardsinplay 0 and
//cardsinplay 1 are equal, then alert you found a match otherwise try again

function flipCard(cardID){

    console.log("user flipped " + cards[cardID])
    
    cardsInPlay.push(cards[cardID]);

    checkForMatch()
}

flipCard(0)

flipCard(1)
