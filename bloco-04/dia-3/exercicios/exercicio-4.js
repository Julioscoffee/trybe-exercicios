let base = 5;
let asterisco = '*';
let linha = '';
let meio = (base+1)/2;
let esquerda = meio;
let direita = meio;

for(iLinha=0; iLinha<meio; iLinha+=1) {
  for(iColuna=0; iColuna<=base; iColuna+=1) {
    if(iColuna>=esquerda && iColuna<=direita) {
      linha+=asterisco;
    } else {
      linha+=" ";
    }
  }
  console.log(linha);
  linha="";
  esquerda-=1;
  direita+=1;
}