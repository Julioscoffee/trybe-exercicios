let salarioBruto = 3190.10;
let salarioBase;
let salarioIr;
let salarioLiquido;

if (salarioBruto<1556.95) {
  salarioBase = salarioBruto * 92 / 100;
} else if (salarioBruto>=1556.95 && salarioBruto<=2594.92) {
  salarioBase = salarioBruto * 91 / 100;
} else if (salarioBruto>=2594.93 && salarioBruto<=5189.82) {
  salarioBase = salarioBruto * 89 / 100;
} else if (salarioBruto>5189.82) {
  salarioBase = salarioBruto - 570.88;
} else {
  console.log("error");
}

if (salarioBase<1903.99) {
  salarioIr = 0;
} else if (salarioBase>=1903.99 && salarioBase<=2826.65) {
  salarioIr = (salarioBase * 7.5 / 100)-142.8;
} else if (salarioBase>=2826.66 && salarioBase<=3751.05) {
  salarioIr = (salarioBase * 15 / 100)-354.8;
} else if (salarioBase>=3751.06 && salarioBase<=4664.68) {
  salarioIr = (salarioBase * 22.5 / 100)-636.13;
} else if (salarioBase>4664.68) {
  salarioIr = (salarioBase * 27.5 / 100)-869.36;
} else {
  console.log("Error");
}

salarioLiquido = salarioBase - salarioIr;

console.log(salarioLiquido);
