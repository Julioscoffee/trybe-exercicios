function numImpar(a,b,c) {
  let result = "";
  if(a%2!==0 || b%2!==0 || c%2!==0) {
    result = "True";
  } else {
    result = "False";
  }
  return result;
}
let n = numImpar(2,5,8);
console.log(n);