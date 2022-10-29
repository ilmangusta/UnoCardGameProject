class Deck { //class definition for our deck game including total of 108 cards, 25 for each color and 8 special cards.
  constructor() {
    //this.color = undefined; 
    this.arr = [[ 0, 'R' ], [ 1, 'R' ], [ 1, 'R' ], [ 2, 'R' ], [ 2, 'R' ], [ 3, 'R' ], [ 3, 'R' ], [ 4, 'R' ], 
                [ 4, 'R' ], [ 5, 'R' ], [ 5, 'R' ], [ 6, 'R' ], [ 6, 'R' ], [ 7, 'R' ], [ 7, 'R' ], [ 8, 'R' ], 
                [ 8, 'R' ], [ 9, 'R' ], [ 9, 'R' ], [ "STOP", 'R' ], [ "STOP", 'R' ], [ "SWITCH", 'R' ], [ "SWITCH", 'R' ], 
                [ "+2CARDS", 'R' ], ["+2CARDS", 'R'], [ 0, 'Y' ], [ 1, 'Y' ], [ 1, 'Y' ], [ 2, 'Y' ], [ 2, 'Y' ], [ 3, 'Y' ],
                [ 3, 'Y' ], [ 4, 'Y' ], [ 4, 'Y' ], [ 5, 'Y' ], [ 5, 'Y' ], [ 6, 'Y' ], [ 6, 'Y' ], [ 7, 'Y' ], [ 7, 'Y' ], [ 8, 'Y' ], 
                [ 8, 'Y' ], [ 9, 'Y' ], [ 9, 'Y' ], [ "STOP", 'Y' ], [ "STOP", 'Y' ], [ "SWITCH", 'Y' ], [ "SWITCH", 'Y' ], [ "+2CARDS", 'Y' ],
                ["+2CARDS", 'Y'], [ 0, 'G' ], [ 1, 'G' ], [ 1, 'G' ], [ 2, 'G' ], [ 2, 'G' ], [ 3, 'G' ], [ 3, 'G' ], [ 4, 'G' ],
                [ 4, 'G' ], [ 5, 'G' ], [ 5, 'G' ], [ 6, 'G' ], [ 6, 'G' ], [ 7, 'G' ], [ 7, 'G' ], [ 8, 'G' ], [ 8, 'G' ], [ 9, 'G' ], [ 9, 'G' ],
                [ "STOP", 'G' ], [ "STOP", 'G' ], [ "SWITCH", 'G' ], [ "SWITCH", 'G' ], [ "+2CARDS", 'G' ], ["+2CARDS", 'G'], [ 0, 'B' ],
                [ 1, 'B' ], [ 1, 'B' ], [ 2, 'B' ], [ 2, 'B' ], [ 3, 'B' ], [ 3, 'B' ], [ 4, 'B' ], [ 4, 'B' ], [ 5, 'B' ], [ 5, 'B' ], [ 6, 'B' ],
                [ 6, 'B' ], [ 7, 'B' ], [ 7, 'B' ], [ 8, 'B' ], [ 8, 'B' ], [ 9, 'B' ], [ 9, 'B' ], [ "STOP", 'B' ], [ "STOP", 'B' ], [ "SWITCH", 'B' ], 
                [ "SWITCH", 'B' ], [ "+2CARDS", 'B' ], ["+2CARDS", 'B'], ["CHANGE", "SPECIAL"], ["CHANGE", "SPECIAL"], ["CHANGE", "SPECIAL"], ["CHANGE", "SPECIAL"],
                ["+4CARDS", "SPECIAL"], ["+4CARDS", "SPECIAL"], ["+4CARDS", "SPECIAL"], ["+4CARDS", "SPECIAL"]]; 
  }

  randomize(){ //method to shuffle the deck at the start of game.
    this.arr=this.arr.sort(() => (Math.random() > .5) ? 1 : -1);
    return;
  }
}
