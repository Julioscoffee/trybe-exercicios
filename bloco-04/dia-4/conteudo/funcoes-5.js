function ladosTri(a,b,c) {
  let result = "";
  if(a+b+c === 180) {
    result = "True";
  } else if(a<1 || b<1 || c<1) {
    result = "Error";
  } else {
    result = "False";
  }
  return result;
}
let n = ladosTri(30,60,90);
console.log(n);