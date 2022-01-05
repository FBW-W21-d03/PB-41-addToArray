// Aufgabe 1

const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];


// Aufgabe 2 mit function
function addWinners(name) {
winners.push(name);
};

function gewinner(name) {
  winners.push(name);
  return winners.length;
}
gewinner("Dennis");

console.log(winners);


