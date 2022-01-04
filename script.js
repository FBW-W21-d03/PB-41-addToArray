const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

function addWinner(name){
    winners.push(name);
    return name.length;
}

addWinner('Betty');
addWinner('Max');
addWinner('Axell');

let returnet = addWinner('Betty');
let returnet1 = addWinner('Max');
let returnet2 = addWinner('Axell');

console.log("Der Name ", winners[4], " ist folgende Zeichen lang: ", returnet);
console.log("Der Name ", winners[5], " ist folgende Zeichen lang: ", returnet1);
console.log("Der Name ", winners[6], " ist folgende Zeichen lang: ", returnet2);