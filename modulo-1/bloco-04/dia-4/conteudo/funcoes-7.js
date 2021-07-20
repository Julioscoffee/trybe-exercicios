function nota(a) {
  let result = "";
  if(a>=90 && a<=100) {
    result = "A";
  } else if (a>=80 && a<90) {
    result = "B";
  } else if (a>=70 && a<80) {
    result = "C";
  } else if (a>=60 && a<70) {
    result = "D";
  } else if (a>=50 && a<60) {
    result = "E";
  } else if (a>=0 && a <50) {
    result = "F";
  } else {
    result = "error";
  }
  return result;
}
let n = nota(95);
console.log(n);