const soma = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(soma(4, 7, 8, 9, 60)); //88