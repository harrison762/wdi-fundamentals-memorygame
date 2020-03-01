let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User Flipped " + cardTwo);
if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }
    else{
        alert("sorry try again");
    }

}
//if{condition}{execute if condition is met}
//if cardsinplay length is equal to 2, then if cardsinplay 0 and
//cardsinplay 1 are equal, then alert you found a match otherwise try again