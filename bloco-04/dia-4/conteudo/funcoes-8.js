function numPar(a,b,c) {
  let result = "";
  if(a%2===0 || b%2===0 || c%2===0) {
    result = "True";
  } else {
    result = "False";
  }
  return result;
}
let n = numPar(3,6,5);
console.log(n);