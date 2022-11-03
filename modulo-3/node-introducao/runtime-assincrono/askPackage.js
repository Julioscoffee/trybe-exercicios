const readline = require("readline-sync");

const askPackage = () => readline.question('Qual é o nome do pacote? ');

module.exports = { askPackage };
