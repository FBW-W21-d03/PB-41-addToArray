"use strict";

const winners = ["Greg", "Flizzy", "Putput", "Hannibal"];

winners.push("Nic");
winners.push("Nac");
winners.push("Noc");

winners.sort();
console.log("And the Winner is :", winners);
console.table(winners);
