const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

const somaNumbers = numbers.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
});
// console.log(somaNumbers);

const expectedValue = 59;
assert.strictEqual(somaNumbers, expectedValue);

const evenNumbers = numbers.reduce((acumulador, valorAtual) => {
  if(valorAtual % 2 !== 0) {
    return acumulador + 0;
  }
  return acumulador + valorAtual;
});
// console.log(evenNumbers);