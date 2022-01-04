console.log("------------------------");
console.log("javascript-addToArray");

// aufgabe teil 1

const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

console.log(winners);

// aufgabe teil 2

winners.push('Angelika');
winners.push('Frank');
console.log(winners);

console.log("------------------------");
console.log("!NEU! - Verwende RETURN in der Funktion");
//DIE FUNKTION SOLL ZUSÄTZLICH MIT RETURN DIE LÄNGE DES ARRAYS AUSGEBEN

const buddies = ["Greg", "Flizzy", "Putput", "Hannibal"];
function hinzufügen(name) {
    return buddies.push(name)};
    hinzufügen("Enza") + buddies.length;
let return1= buddies;
let return2= buddies.length;
console.log(return1);
console.log(return2);
