const ask = require('./ask');
const { getPackage } = require('./getPackageNpm');

const askPackage = async () => {
  const package = ask('Qual pacote NPM deseja verificar? ');
  const project = await getPackage(package);

  if (!project) {
    console.log(`O nome ${package} não é um pacote NPM!`);
  } else {
    console.log(`Este nome é um pacote NPM!`);
  }
}

const name = ask('Qual seu nome? ');

console.log(`Olá ${name}!`);

askPackage();
