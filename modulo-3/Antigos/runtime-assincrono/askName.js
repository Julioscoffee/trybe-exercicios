const readline = require("readline-sync");

const askName = () => readline.question('Qual o seu nome? ');

module.exports = { askName };
