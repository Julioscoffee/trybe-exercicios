
const { askName } = require('./askName');
const { getPackage } = require('./npm');

const main = async () => {
  const name = askName();
  const result = await getPackage(name);
  if (result) {
    console.log(`Sim, ${name} é um projeto NPM!`);
  } else {
    console.log(`Não, ${name} não é um projeto NPM!`);
  }
}

main();
