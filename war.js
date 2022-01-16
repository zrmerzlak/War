class Deck{
    constructor(){
        this.stack =[]; //array to hold all the cards.
    }

    deal(){
         //By using sort func. w/ Math.random floored at -.5 instead of a constant
         // it should return the deck in a random order every time.
        let shuffledDeck = stack.sort(() => Math.random() -0.5);
        for(let i=0; i < 52; i++){
            if(i%2==0){         //even index is dealt, aka every other card.
                let j = 0;      //j is a counter for p1 deck
                player1Deck[j]=shuffledDeck[i];
                j++;
            }else{
                let f = 0;      //f is a counter for p2 deck
                player2Deck[f] = shuffledDeck[i];
                f++;
            }
        }
    }
}

class Player{
    constructor(){
        this.name = name;       //playername
        this.playerDeck = [];   //array to hold players cards
        this.points = 0;        //var to hold players points
    }
    
    //pullCard function to use for playing the game.
    // top var is for top card in deck. 
    pullCard(){
        for(let top=25; top>=0, top--){
            return `${this.playerDeck[top]}`;
        }
}

class Card{
    constructor(){
        this.suit = '';
        this.face = '';
    }
}