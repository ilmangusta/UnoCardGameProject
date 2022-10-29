

class Player{ //class definition for all player actions.
  constructor(){
    this.hand=[];
  }
  draw(n,deck){ //draw new card;
    for (var i=0; i<n; i++){this.hand.push(deck.shift())}
  }
  newHand(arr){ //new hand
    for (var i=0; i<7; i++){this.hand.push(arr.shift())}
  }
  move(card,field,deck){
    if (card[0]=="SKIP"){
      p.draw(1,deck);
      console.log("You drew one card and skipped the turn!");

      return "GO"
    }
    if (card[0]=="+4CARDS"){
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
    if (card[0]=="+2CARDS"){
      cpu.draw(2,deck);
      console.log("Enemy draw 2 cards!");
      f.number=card[0];
      f.color=card[1];
      return "GO"
    }
    if (card[0]=="STOP"){
      console.log("Enemy skip one turn!");
      f.color=card[1];
      f.number=card[0];
      return "SKIP"
    }
    if (card[0]=="SWITCH"){
      console.log("Change Spin! Enemy skip one turn!");
      f.color=card[1];
      f.number=card[0];
      return "SKIP"
    }
    f.color=card[1]
    f.number=card[0]
    return "GO"
  }
  discard(card){
    var swap;
    if (this.hand.length==1){
      if (this.hand[0][1]=="SPECIAL" || this.hand[0][0]=="+2CARDS" || this.hand[0][0]=="SWITCH" || this.hand[0][0]=="STOP" ){
        this.hand=[];
        p.draw(1,deck);
        console.log("You can not finish the game with Not number card!! Draw new card!");
        console.log("You yell `UNO`");
        return;
      }
    }
    for(var i=0; i<this.hand.length; i++){
      if (card[0]=="SKIP"){
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
    if (this.hand.length==1){console.log("YOU YELL `UNO`!!")};
  }
}
