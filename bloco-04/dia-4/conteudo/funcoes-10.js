function calculaVenda(custo,venda) {
  let imposto = custo*20/100;
  let custoTotal = custo+imposto;
  let lucro = venda-custoTotal;
  let montante = lucro*1000;
  return montante;
}

let n = calculaVenda(100,180);
console.log(n);