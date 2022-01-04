const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];
function finalWinners (nameWinners) {
    winners.push(nameWinners)
 console.log(winners)
};
console.log(winners)
finalWinners("Rebeca");
// return
const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];
function finalWinners (nameWinners) {
    winners.push(nameWinners)
 return winners.length;
};
let newwinner=finalWinners("Rebeca");
console.log(newwinner);
console.log(winners);
