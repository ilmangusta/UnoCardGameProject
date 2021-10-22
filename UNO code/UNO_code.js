class Deck {
  constructor() {
    this.color = undefined; 
    this.arr = [[ 0, 'R' ], [ 1, 'R' ], [ 1, 'R' ], [ 2, 'R' ], [ 2, 'R' ], [ 3, 'R' ], [ 3, 'R' ], [ 4, 'R' ], [ 4, 'R' ], [ 5, 'R' ], [ 5, 'R' ],
 		[ 6, 'R' ], [ 6, 'R' ], [ 7, 'R' ], [ 7, 'R' ], [ 8, 'R' ], [ 8, 'R' ], [ 9, 'R' ], [ 9, 'R' ], [ "STOP", 'R' ], [ "STOP", 'R' ], [ "SWITCH", 'R' ], 
		[ "SWITCH", 'R' ], [ "+2", 'R' ], ["+2", 'R'], [ 0, 'Y' ], [ 1, 'Y' ], [ 1, 'Y' ], [ 2, 'Y' ], [ 2, 'Y' ], [ 3, 'Y' ], [ 3, 'Y' ], [ 4, 'Y' ], [ 4, 'Y' ],
 		[ 5, 'Y' ], [ 5, 'Y' ], [ 6, 'Y' ], [ 6, 'Y' ], [ 7, 'Y' ], [ 7, 'Y' ], [ 8, 'Y' ], [ 8, 'Y' ], [ 9, 'Y' ], [ 9, 'Y' ], [ "STOP", 'Y' ], [ "STOP", 'Y' ], 
		[ "SWITCH", 'Y' ], [ "SWITCH", 'Y' ], [ "+2", 'Y' ], ["+2", 'Y'], [ 0, 'G' ], [ 1, 'G' ], [ 1, 'G' ], [ 2, 'G' ], [ 2, 'G' ], [ 3, 'G' ], [ 3, 'G' ], [ 4, 'G' ],
 		[ 4, 'G' ], [ 5, 'G' ], [ 5, 'G' ], [ 6, 'G' ], [ 6, 'G' ], [ 7, 'G' ], [ 7, 'G' ], [ 8, 'G' ], [ 8, 'G' ], [ 9, 'G' ], [ 9, 'G' ], [ "STOP", 'G' ], [ "STOP", 'G' ], 
		[ "SWITCH", 'G' ], [ "SWITCH", 'G' ], [ "+2", 'G' ], ["+2", 'G'], [ 0, 'B' ], [ 1, 'B' ], [ 1, 'B' ], [ 2, 'B' ], [ 2, 'B' ], [ 3, 'B' ], [ 3, 'B' ], [ 4, 'B' ],
 		[ 4, 'B' ], [ 5, 'B' ], [ 5, 'B' ], [ 6, 'B' ], [ 6, 'B' ], [ 7, 'B' ], [ 7, 'B' ], [ 8, 'B' ], [ 8, 'B' ], [ 9, 'B' ], [ 9, 'B' ], [ "STOP", 'B' ], [ "STOP", 'B' ],
 		[ "SWITCH", 'B' ], [ "SWITCH", 'B' ], [ "+2", 'B' ], ["+2", 'B'], ["CHANGE", "SPECIAL"], ["CHANGE", "SPECIAL"], ["CHANGE", "SPECIAL"], ["CHANGE", "SPECIAL"],
   		 ["4CHANGE", "SPECIAL"], ["4CHANGE", "SPECIAL"], ["4CHANGE", "SPECIAL"], ["4CHANGE", "SPECIAL"]]; 
  }

  randomize(){
    this.arr=this.arr.sort(() => (Math.random() > .5) ? 1 : -1);
    return;
  }
}

// ----------------------------------------------------------------------------------------------

function randomColor(){ //function to help to random color for cpu
  var number=Math.floor(Math.random() * 4);
  if (number==0){return number="R"};
  if (number==1){return number="B"};
  if (number==2){return number="G"};
  if (number==3){return number="Y"};
}
//-------------------------------------------------------------------------------------------------------------------

class Field{
  constructor(){ //[number,color] -> color
    this.number;
    this.color;
  }
  view(){
    console.log("The actual field is:\n"+ f.number +"  "+  f.color)
  }
  newField(deck){ //search for 1st valid card of the game
    var card=[0,0];
    var swap;
    for (var i=0; i<deck.length; i++){
      if (deck[i][0]=="+2" || deck[i][0]=="+4"){continue};
      if (deck[i][0]>=0 || deck[i][0]<=9){
        card[0]=deck[i][0];
        card[1]=deck[i][1];
        swap = d.arr[0];
        d.arr[0] = deck[i];
        deck[i] = swap;
        d.arr.shift();
        break;
      }
    }
    f.number=card[0];
    f.color=card[1];
  }    
}

//--------------------------------------------------------------------------------------------------------------------

class Player{
  constructor(){
    this.hand=[];
  }
  draw(n,deck){ //draw new card;
    for (var i=0; i<n; i++){this.hand.push(deck.shift())}
  }
  newHand(arr){ //new hand
    for (var i=0; i<10; i++){this.hand.push(arr.shift())}
  }
  move(card,field,deck){
    if (card[0]=="Skip"){
      p.draw(1,deck);
      console.log("You drew one card and skipped the turn!");
      return "GO"
    }
    if (card[0]=="4CHANGE"){
      cpu.draw(4,deck);
      var color=prompt("Enemy draw 4 cards and you choose the color!");
      f.color=color;
      f.number=-1;
      return "GO"
    }
    if (card[0]=="CHANGE"){
      var color=prompt("Choose the color!");
      f.color=color;
      f.number=-1;
      return "GO"
    }
    if (card[0]=="+2"){
      cpu.draw(2,deck);
      console.log("Enemy draw 2 cards!");
      f.number=-1;
      f.color=card[1];

      return "GO"
    }
    if (card[0]=="STOP"){
      console.log("Enemy skip one turn!");
      f.color=card[1];
      f.number=-1;
      return "SKIP"
    }
    if (card[0]=="SWITCH"){
      console.log("Change Spin! Enemy skip one turn!");
      f.color=card[1];
      f.number=-1;
      return "SKIP"
    }
    f.color=card[1]
    f.number=card[0]
    return "GO"
  }
  discard(card){
    var swap;
    for(var i=0; i<this.hand.length; i++){
      if (card[0]=="Skip"){
        console.log("You still have "+this.hand.length+ " cards!");
        return;
      }
      if(this.hand[i][0]==card[0] && this.hand[i][1]==card[1]) { 
        swap = this.hand[0]; //first card on hand 
        this.hand[0] = this.hand[i]; //swapping first with i-esimo
        this.hand[i] = swap; //loading first element in i-esima position
        break;
      }
    } 
    p.hand.shift();
    console.log("You still have "+this.hand.length+ " cards!");
    if (this.hand.length==1){console.log("YOU HAVE ONE CARD!!")};
    if (this.hand.length==0){console.log("YOU WIN, CONGRATULATIONS!")}
  }
}


class Cpu{
  constructor(){
    this.hand=[];
  }
  draw(n,deck){ //draw new card;
    for (var i=0; i<n; i++){this.hand.push(deck.shift())};
  }
  newHand(arr){ //new hand
    for (var i=0; i<10; i++){this.hand.push(arr.shift())}
  }
  move(field,deck){
    var card;
    for (var i=0; i<this.hand.length; i++){
      if (this.hand[i][0]==field[0] || this.hand[i][1]==field[1]){
        f.number=this.hand[i][0];
        f.color=this.hand[i][1];
        console.log("Enemy used "+ this.hand[i])
        this.discard(this.hand[i]);
        return
      }
      if (this.hand[i][0]=="4CHANGE"){
        p.draw(4,deck);
        console.log("Enemy used "+ this.hand[i])
        console.log("You draw 4 cards and enemy choose the color!");
        f.color=randomColor();
        f.number=-1;
        console.log("Enemy choose "+f.color);
        this.discard(this.hand[i]);
        return
      }
      if (this.hand[i][0]=="CHANGE"){
        console.log("Enemy used "+ this.hand[i])
        console.log ("Enemey choose the color!");
        f.color=randomColor();
        f.number=-1;
        console.log("Enemy choose "+f.color);
        this.discard(this.hand[i]);
        return
      }
      if (this.hand[i][0]=="+2"){
        if (this.hand[i][1]!=field.color){continue}
        p.draw(2,deck);
        console.log("Enemy used "+ this.hand[i])
        console.log("You draw 2 cards!");
        this.discard(this.hand[i]);
        f.number=-1;
        return
      }
      if (this.hand[i][0]=="STOP"){
        if (this.hand[i][1]!=field.color){continue}
        console.log("Enemy used "+ this.hand[i])
        console.log("You skip one turn!");
        f.number=-1;
        this.discard(this.hand[i]);
        return "STOP"
      } 
      if (this.hand[i][0]=="SWITCH"){
        if (this.hand[i][1]!=field.color){continue}
        console.log("Enemy used "+ this.hand[i])
        console.log("The enemy changed the spin! You skip one turn!");
        f.number=-1;
        this.discard(this.hand[i]);
        return "STOP"
      } 
    }
    cpu.draw(1,d.arr);
    console.log("The enemy draw one card and have "+ this.hand.length + " cards! Your turn!");
    return "GO"
  }
  discard(card){
    var swap;
    for(var i=0; i<this.hand.length; i++)
      if(this.hand[i][0]==card[0] && this.hand[i][1]==card[1]) { 
        swap = this.hand[0];
        this.hand[0] = this.hand[i];
        this.hand[i] = swap;
        break;
      }
    cpu.hand.shift();
    console.log("The enemy still has " + this.hand.length + " cards!")
    if (this.hand.length==1){console.log("THE ENEMY HAS ONE CARD LEFT!!")};
    if (this.hand.length==0){console.log("THE ENEMY WIN, YOU LOSE. TRY AGAIN")}
    return
  }
}



var used_card;
var move_player;
var move_cpu;
var cpu=new Cpu();//create a new player bot
var p=new Player(); // create a new real player
var f=new Field(); //create the field for the card
var d=new Deck(); //create the deck
d.randomize(); //shuffling the deck
f.newField(d.arr); //i'm picking new card for field

var name=prompt("Choose a name player:");
p.newHand(d.arr); //create a new hand for player 
cpu.newHand(d.arr); // create a new hand for  CPU

while (true){
  if (cpu.hand.length==0 || p.hand.length==0){
    break;
  }
  f.view();
  console.log("Your actual hand is:\n")
  console.log(p.hand);
  used_card=prompt("Choose a card or draw a card and skip the turn!").split(" "); //[]
  move_player=p.move(used_card,f,d.arr);
  p.discard(used_card);
  if (move_player=="SKIP"){continue}
  if (p.hand.length==0){break};
  move_cpu=cpu.move(f,d.arr);
  if (move_cpu=="STOP"){
    while(move_cpu=="GO"){
      move_cpu=cpu.move(f,d.arr)
    }
  }
  if (p.hand.length==0){break};
  console.log("Deck still have " + d.arr.length + " cards!");
}