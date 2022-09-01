const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Hello World!');
    console.log('Arquivo escrito!');
  } catch (err) {
    console.error(`Erro ao escrever: ${err.message}`);
  }
}

main()
