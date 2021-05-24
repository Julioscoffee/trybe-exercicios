let num = 7;
let div = 1;

for (let i = 2; i <= num; i += 1) {
  if (num % i === 0) {
    div += 1;
  }
}

if (div === 2) console.log(num + ' é primo');
else console.log(num + ' não é primo');