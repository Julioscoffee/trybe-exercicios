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

//.EVERY:

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
]
const everyOneCanDrive = users.every((user) => user.isDriver === true);
// console.log(everyOneCanDrive);

//.FIND: (retorna apenas o primeiro que passar na condição)

const findANonDriver = users.find((user) => user.isDriver === false);
// console.log(findANonDriver);

//.SORT:

const pizzas2 = ['Frango com Catupirygo', 'Marguerita', 'Gratinada', 'Quatro Queijos'];
// console.log(pizzas2.sort());
const numbers2 = [8, 5, 9, 3, 1, 7, 4, 2, 6, 10];
console.log(numbers2.sort()); // resulta [1, 10, 2, 3, ...]
