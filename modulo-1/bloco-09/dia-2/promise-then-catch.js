// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);
//   if (number<= 5) {
//     return reject(console.log(`Falhou! O número foi ${number}`));
//   }
//   resolve(console.log(`Passou! O número foi ${number}`));
// });

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);
  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Passou! O número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Falhou! O número foi ${number}`))
