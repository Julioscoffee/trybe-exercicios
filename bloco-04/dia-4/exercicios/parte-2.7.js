function verifica(word, end) {
  let palavra = word.split('').reverse().join('');
  let final = end.split('').reverse().join('');
  let result = true;
  for (let i = 0; i < final.length; i += 1) {
    if (palavra[i] !== final[i]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}
console.log(verifica('mario', 'rio'));