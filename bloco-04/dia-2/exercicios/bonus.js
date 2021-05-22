let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("bonus 01: ");
for(let i = 1; i<numbers.length; i += 1) {
  for(let j = 0; j<i; j += 1) {
    if(numbers[i]<numbers[j]) {
      let position1 = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position1;
    }
  }
}
console.log(numbers);

console.log("bonus 02: ");
for(let i=1; i<numbers.length; i += 1) {
  for(let j=0; j<i; j += 1) {
    if(numbers[i]>numbers[j]) {
      let position2 = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position2;
    }
  }
}
console.log(numbers);

console.log("bonus 03: ");
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2=[];
for(let i=0; i<numbers.length; i+=1) {
  if(i+1 < numbers.length) {
    numbers2.push(numbers[i]*numbers[i+1]);
  } else {
    numbers2.push(numbers[i]*2);
  }
}
console.log(numbers2);
