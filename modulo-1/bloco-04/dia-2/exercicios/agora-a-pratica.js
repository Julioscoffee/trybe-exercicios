let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Exercicio 1: ");
for(let number of numbers) {
  console.log(number);
}

console.log("Exercicio 2: ");
let resultado = 0;
for(let i = 0; i < numbers.length; i += 1) {
  resultado += numbers[i];
}
console.log(resultado);

console.log("Exercicio 3: ");
let mediaAritm = 0;
mediaAritm = resultado/numbers.length;
console.log(mediaAritm);

console.log("Exercicio 4: ");
if(mediaAritm>20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

console.log("Exercicio 5: ");
let maiorValor = 0;
for(let i=0; i<numbers.length; i += 1) {
  if(maiorValor<numbers[i]) {
    maiorValor = numbers[i];
  }
}
console.log(maiorValor);

console.log("Exercicio 6: ");
let impar = 0;
for(let i=0; i<numbers.length; i+= 1) {
  if(numbers[i]%2 !== 0) {
    impar += 1;
  }
}
if(impar > 0) {
  console.log(impar);
} else {
  console.log("nenhum valor ímpar encontrado");
}

console.log("Exercicio 7: ");
let menorValor = 999;
for(let i=0; i < numbers.length; i += 1) {
  if(menorValor>numbers[i]) {
    menorValor = numbers[i];    
  }
}
console.log(menorValor);

console.log("Exercicio 8: ");
let array = [];
for(let i = 1; i<26; i += 1) {
  array.push(i);
}
console.log(array);

console.log("Exercicio 9: ");
for(let i = 0; i<array.length; i += 1) {
  console.log(array[i]/2);
}
