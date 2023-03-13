const readline = require('readline-sync');

const ask = (question) => readline.question(question);

module.exports = ask;
