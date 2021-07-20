function maior(a) {
  let result = 0;
  for (let i in a) {
    if (a[result] < a[i]) {
      result = i;
    }
  }
  return result;
}
let array = [2,3,6,5,9,2];
console.log(maior(array));