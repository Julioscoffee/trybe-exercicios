function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error('Não existe divisão por 0');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 0);
  console.log("resultado:", resultado);
} catch (e) {
  console.log("erro:", e.message);
}
