function somatoria(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  return result;
}
console.log(somatoria(6));