class Cpu{ //class definition for all cpu actions.
  constructor(){
    this.hand=[];
  }
  draw(n,deck){ //draw new card;
    for (var i=0; i<n; i++){this.hand.push(deck.shift())};
  }
  newHand(arr){ //new hand
    for (var i=0; i<7; i++){this.hand.push(arr.shift())}
  }
   function randomColor(){ //function to help to random color for cpu when using +4 or CHANGE color card
    var number=Math.floor(Math.random() * 4);
    if (number==0){return number="R"};
    if (number==1){return number="B"};
    if (number==2){return number="G"};
    if (number==3){return number="Y"};
  }
  move(field,deck){
    var card;
    for (var i=0; i<this.hand.length; i++){
      if (this.hand[i][0]=="+4CARDS"){

        p.draw(4,deck);
        console.log("Enemy used "+ this.hand[i])
        console.log("You draw 4 cards and enemy choose the color!");
        f.color=randomColor();
        f.number=-1;
        console.log("Enemy choose "+f.color);
        this.discard(this.hand[i]);
        return "GO"
      }
      if (this.hand[i][0]=="CHANGE"){
        console.log("Enemy used "+ this.hand[i])
        console.log ("Enemey choose the color!");
        f.color=randomColor();
        f.number=-1;
        console.log("Enemy choose "+f.color);
        this.discard(this.hand[i]);
        return "GO"
      }
      if (this.hand[i][0]=="+2CARDS" && (this.hand[i][1]==field.color || this.hand[i][0]==field.number)){
        p.draw(2,deck);
        console.log("Enemy used "+ this.hand[i])
        console.log("You draw 2 cards!");
        f.color=this.hand[i][1]
        f.number=this.hand[i][0];
        this.discard(this.hand[i]);
        return "GO"
      }
      if (this.hand[i][0]=="STOP" && (this.hand[i][1]==field.color || this.hand[i][0]==field.number)){
        console.log("Enemy used "+ this.hand[i])
        console.log("You skip one turn!");
        f.number=this.hand[i][0];
        f.color=this.hand[i][1];
        this.discard(this.hand[i]);
        return "STOP"
      } 
      if (this.hand[i][0]=="SWITCH" && (this.hand[i][1]==field.color || this.hand[i][0]==field.number)){
        console.log("Enemy used "+ this.hand[i])
        console.log("The enemy changed the spin! You skip one turn!");
        f.color=this.hand[i][1];
        f.number=this.hand[i][0];
        this.discard(this.hand[i]);
        return "STOP"
      } 
      if (this.hand[i][0]==field.number || this.hand[i][1]==field.color){
        f.number=this.hand[i][0];
        f.color=this.hand[i][1];
        console.log("Enemy used "+ this.hand[i])
        this.discard(this.hand[i]);
        return "GO"
      }
    }
    cpu.draw(1,d.arr);
    console.log("The enemy draw one card and have "+ this.hand.length + " cards! Your turn!");
    return "GO"
  }
  discard(card){
    var swap;
    if (this.hand.length==1){
      if (this.hand[0][1]=="SPECIAL" || this.hand[0][0]=="+2CARDS" || this.hand[0][0]=="SWITCH" || this.hand[0][0]=="STOP" ){
        this.hand=[];
        cpu.draw(1,deck);
        console.log("You can not finish the game with Not number card!! Draw new card!");
        console.log("Enemy yells `UNO`");
        return;
      }
    }
    for(var i=0; i<this.hand.length; i++)
      if(this.hand[i][0]==card[0] && this.hand[i][1]==card[1]) { 
        swap = this.hand[0];
        this.hand[0] = this.hand[i];
        this.hand[i] = swap;
        break;
      }
    cpu.hand.shift();
    //console.log("Enemy hand: ");
   // console.log(cpu.hand)
    console.log("The enemy still has " + this.hand.length + " cards!")
    if (this.hand.length==1){console.log("THE ENEMY HAS ONE CARD LEFT!!")};
    return
  }
}
