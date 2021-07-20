let n = 7;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let asterisco = '*';

for (let line = 1; line <= meio; line += 1) {
  let saida = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == esquerda || col == direita || line == meio) {
      saida += asterisco;
    } else {
      saida += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(saida);
}