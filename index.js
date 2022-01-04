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
let push=finalWinners("Rebeca");
let finallist=winners;
console.log(push);
console.log(finallist);
