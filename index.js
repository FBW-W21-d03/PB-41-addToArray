/* Aufgabenstellung - Teil 1
Schreibe das folgende Array in JavaScript: const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];*/

const winners = ["Greg","Flizzy","Putput","Hannibal"];



/* Aufgabenstellung - Teil 2
Schreibe eine Funktion, die einen Gewinner in das Array hinzufügt.
Die Funktion nimmt den Namen des Gewinners über einen Parameter auf.
Anschließend fügt die Funktion den Namen dem Array hinzu.*/

function addWinners (name){ 
winners.push(name);
return winners.length;

};

addWinners("Jemes")
console.log (winners)

let return1 = addWinners("Jemes");
console.log (return1);