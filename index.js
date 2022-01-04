const winners = ["", "Greg", "Flizzy", "Putput", "Hannibal"];

function gewiner(name) {
  winners.push(name);
  return winners.length;
}

let winners2 = gewiner("kawan");

console.log(winners2);
gewiner("John Smith");
gewiner("Keven");
gewiner("Serdar");
gewiner("Sprote");
console.table(winners);
