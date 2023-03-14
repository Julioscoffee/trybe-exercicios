
const readline = require('readline-sync');

const askName = () => readline.question('Qual o nome da biblioteca? ');

module.exports = {
  askName,
};
