// Aufgabe 1

const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];


// Aufgabe 2 mit function
function addWinners(name) {
winners.push(name);
};

addWinners("Lilly")



// Aufgabe 2 ohne function
winners.push("Dennis");
winners.push("Alexandra");
winners.push("Lucas");
// Sortiert nach Alphabet ( Bonus )
winners.sort();

console.log("Gewonnen haben :",winners);


