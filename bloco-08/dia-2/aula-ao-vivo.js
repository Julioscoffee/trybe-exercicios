//.FOREACH:

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
letters.forEach((value) => {
  // console.log(value);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
  // console.log(number * 3);
});

const pizzas = [
  { flavor: 'Frango', price: 12.20},
  { flavor: 'Marguerita', price: 13.50},
  { flavor: 'Gratinada', price: 15.32},
  { flavor: 'Quatro Queijos', price: 13.63},
];
pizzas.forEach((pizza) => {
  // console.log(`${pizza.flavor} ${pizza.price}`);
})

//.SOME:

const priceLessThan13 = (pizzasArray) => {
  return pizzasArray.some((pizza) => {
    return pizza.price < 13; 
  });
};
// console.log(priceLessThan13(pizzas));