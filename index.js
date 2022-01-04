const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

function gewiner(name) {
  winners.push(name);
}

gewiner("kawan");
gewiner("John");
gewiner("Keven");
console.table(winners);
