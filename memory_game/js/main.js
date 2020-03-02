let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
    },
    {
        rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
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

    console.log("user flipped " + cards[cardID].rank)
    
    cardsInPlay.push(cards[cardID.rank]);
    console.log(cardImage);
    console.log(suit);

    checkForMatch()
}

flipCard(0)

flipCard(1)
