function maior(a,b) {
  let result = 0;
  if(a>b) {
    result = a;
  } else {
    result = b;
  }
  return result;
}
let n = maior(7,5);
console.log(n);