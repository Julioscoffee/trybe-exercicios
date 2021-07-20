function maior(a,b,c) {
  let result = 0;
  if(a>b && a>c) {
    result = a;
  } else if(b>a && b>c) {
    result = b;
  } else {
    result = c;
  }
  return result;
}
let n = maior(3,8,2);
console.log(n);