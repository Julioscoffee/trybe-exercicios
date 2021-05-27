function menor(a) {
  let result = 0;
  for (let i in a) {
    if (a[result] > a[i]) {
      result = i;
    }
  }
  return result;
}
let array = [3,5,9,4,7,2];
console.log(menor(array));