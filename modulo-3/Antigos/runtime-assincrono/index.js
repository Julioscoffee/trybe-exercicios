const { getPackage } = require("./npm");
const { askPackage } = require("./askPackage");
const { askName } = require("./askName")

const main = async () => {
  const name = askName();
  console.log(`Olá ${name}!`);

  const packageName = askPackage();
  const package = await getPackage(packageName);

  if (!package) {
    console.log(`O nome ${packageName} não é um pacote NPM válido!`);
  } else {
    console.log(`O nome ${packageName} é um pacote NPM!`);
  }
}

main();
