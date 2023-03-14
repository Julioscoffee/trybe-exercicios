
const readline = require('readline-sync');

const askName = () => readline.question('Qual seu nome? ');

module.exports = {
  askName,
};
