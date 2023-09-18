for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Ada", "Brendan", "John"];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank You ${names[i]} for the wonderful birthday present!`);
    debugger;
  }

  return names;
}

writeCards(names);

function count(num){
let counted = 0;
 while (counted <= num) {
    console.log(num--);
 };
};
count(10);