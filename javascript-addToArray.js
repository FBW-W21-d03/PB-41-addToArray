// Aufgabe 1
const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

// Aufgabe 2
function gewiner(name) {

    winners.push(name);
    return winners.length;
}
gewiner("Orhan");

let winnersTotal = winners;
console.log(winnersTotal);