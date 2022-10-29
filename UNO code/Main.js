class Main{
  

  var used_card; //card used by user
  var move_player; //action of the user card
  var move_cpu; //action of the cpu card
  var cpu=new Cpu();//create a new player bot
  var p=new Player(); // create a new real player
  var f=new Field(); //create the field for the card
  var d=new Deck(); //create the deck
  d.randomize(); //shuffling the deck
  p.newHand(d.arr); //create a new hand for player 
  cpu.newHand(d.arr); // create a new hand for  CPU
  f.newField(d.arr); //i'm picking new card for field
  //console.log(d.arr);
  var name=prompt("Choose a name player:"); //new name for player

  while (d.arr.length!=0){ //main function 
    f.view(); //view always the card field at starting of the new turn
    console.log("Your actual hand is:\n")
    console.log(p.hand);
    used_card=prompt("Choose a card or draw a card and skip the turn!").split(" "); //[]
    move_player=p.move(used_card,f,d.arr); //save if skip o continue cpu turn

    p.discard(used_card); //discard the current card

    if (move_player=="SKIP"){continue} //player stop or switch cpu

    if (p.hand.length==0){ //victory of player with 0 cards left
      console.log("YOU WIN, CONGRATULATIONS!");
      break;
    }

    move_cpu=cpu.move(f,d.arr); //cpu moving 

    if (move_cpu=="STOP"){ //cpu stop  or switch 
      while(move_cpu!="GO"){
        move_cpu=cpu.move(f,d.arr) //cpu moving again cause used STOP or SWITCH card
      }
    }

    if (cpu.hand.length==0){ //victory of cpu 0 cards left
      console.log("THE ENEMY WIN, YOU LOSE. TRY AGAIN");
      break;
    }

    console.log("Deck still have " + d.arr.length + " cards!"); //checking how many cards are left
  }
  if (p.hand.length==cpu.hand.length){
    console.log("Ended in a draw!!");
  }else{
    console.log("The Winner is:");
    if (p.hand.length<cpu.hand.length){
      console.log(name+ "!!");
    }else{
      console.log(" CPU!!")
    }
  }
}


/*
Contributors:
- ilmangusta: https://github.com/ilmangusta
*/
