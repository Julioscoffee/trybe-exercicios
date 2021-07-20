function salLiq(salBruto) {
  let salBase = 0;
  let salIr = 0;
  let result = 0;

  if (salBruto<1556.95) {
    salBase = salBruto * 92 / 100;
  } else if (salBruto>=1556.95 && salBruto<=2594.92) {
    salBase = salBruto * 91 / 100;
  } else if (salBruto>=2594.93 && salBruto<=5189.82) {
    salBase = salBruto * 89 / 100;
  } else if (salBruto>5189.82) {
    salBase = salBruto - 570.88;
  }

  if (salBase<1903.99) {
    salIr = 0;
  } else if (salBase>=1903.99 && salBase<=2826.65) {
    salIr = (salBase * 7.5 / 100)-142.8;
  } else if (salBase>=2826.66 && salBase<=3751.05) {
    salIr = (salBase * 15 / 100)-354.8;
  } else if (salBase>=3751.06 && salBase<=4664.68) {
    salIr = (salBase * 22.5 / 100)-636.13;
  } else if (salBase>4664.68) {
    salIr = (salBase * 27.5 / 100)-869.36;
  }
  result = salBase-salIr;
  return result;
}
let n = salLiq(3190.10);
console.log(n);