// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };
// greeting(); // Welcome usuário!

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome usuário!