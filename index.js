
// const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

// function addGewinner(gewinner){
//      winners.push(gewinner);
// }

// addGewinner("Eli");

// console.log(winners);


// Die Aufgabe wird mit verwenden von return gelöst

winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

function addGewinner(gewinner){
     winners.push(gewinner);
      return winners.length;
}

let newWinner = addGewinner("Eli");
console.log(newWinner)
