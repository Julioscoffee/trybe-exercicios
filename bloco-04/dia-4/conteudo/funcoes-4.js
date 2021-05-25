function posNegNeu(a) {
  let result = "";
  if(a>0) {
    result = "Positivo";
  } else if(a<0) {
    result = "Negativo";
  } else {
    result = "Zero";
  }
  return result;
}
let n = posNegNeu(7);
console.log(n);