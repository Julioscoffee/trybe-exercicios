let n = 5;
let asterisco = '*';
let linha = '';
let posicao = n;

for(iLinha=0; iLinha<n; iLinha+=1) {
  for(iColuna=0; iColuna<=n; iColuna+=1){
    if(iColuna<posicao) {
      linha+= " ";
    } else {
      linha+=asterisco;
    }
  }
  console.log(linha);
  linha="";
  posicao-=1;
}