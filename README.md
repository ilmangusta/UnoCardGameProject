
## Simplified version of UNO Card Game 🎲
This is a particular version of the famous card game "UNO", 1vs1 against CPU.

It runs entirely in Node.js and it does not have yet a graphic interface.

## Type of cards 🃏
Every card except the special cards has one of these four colours: red, blue, yellow and green.
- Colored numbers: these are the most common cards with a number and a colour. Can be trew if there is a card in the field with the same colour or the same number.
- Colored special card: there are three types of these cards and each one card has a color.
    - Stop: the opponent skips one round.
    - Reverse: it changes the verse of the round (in this 1vs1 version reverse cards have the same effect of stop cards). 
    - +2: add two cards to the opponent's hand.
- Special card: there are two types of these cards and each one card has not a color. These cards can always be trew.
    - Color change: the player who's trow it can choose a color and change the field's card color.
    - +4 color change: it has the same effect of the color change cards but it adds four card to the opponent's hand. 

## How many cards 🧮
There are 108 cards in the deck.
- RED Cards: 
    - 1 copy of number 0
    - 2 copies of numbers from 1 to 9
    - 2 copies of colored special cards
- BLUE Cards
    - 1 copy of number 0
    - 2 copies of numbers from 1 to 9
    - 2 copies of colored special cards
- YELLOW Cards:
    - 1 copy of number 0
    - 2 copies of numbers from 1 to 9
    - 2 copies of colored special cards
- GREEN Cards:
    - 1 copy of number 0
    - 2 copies of numbers from 1 to 9
    - 2 copies of colored special cards
- SPECIAL Cards:
    - 4 copies of color change
    - 4 copies of +4 color change

## Object of the game 🎯
The first player to run out of cards in his hand wins. If the deck finishes before the reachment of the object from one of two players, the winner is the one who has less cards in the hand. 

## Setting up field of play 🔧
First of all the deck get shuffled and both players draws 7 card each one. After that, the first card of the deck is placed.

## Rules 🎮
The user is the first who starts and he has to put one card on the field. Players have to throw one card each round. If the thrown card is one of the coloured special cards the only thing to check is the colour of the card on the field; if it's a coloured number you need to check the colour or the number; if it's a special card it doesn't matter what's on the field.

## Gameplay 
If server on, the game is fully playable on the site: https://mangustaunowebapp.netlify.app

## Credits 📃
- ilmangusta: https://github.com/ilmangusta
