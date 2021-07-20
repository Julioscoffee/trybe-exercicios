let custo = 100;
let venda = 180;
let imposto = custo*20/100;
let custoTotal = custo + imposto;
let lucro = venda - custoTotal;

console.log(`Ao vender mil, o lucro é ${lucro*1000} reais`);