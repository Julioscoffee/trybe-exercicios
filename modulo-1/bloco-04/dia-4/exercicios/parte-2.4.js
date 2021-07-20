function comp(nomes) {
  let result = nomes[0];
  for (let i in nomes) {
    if (result.length < nomes[i].length) {
      result = nomes[i];
    }
  }
  return result;
}
let array = ['jose', 'mariana', 'pedro', 'carlo'];
console.log(comp(array));