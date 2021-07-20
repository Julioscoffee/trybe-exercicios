let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem vinda,', info.personagem);

info.recorrente = "Sim";
console.log(info);

for(let key in info) {
  console.log(key);
}

for(let key in info) {
  console.log(info[key]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let prop in info) {
  if (
    info[prop] === info.recorrente &&
    info[prop] === "Sim" &&
    info2[prop] === "Sim"
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[prop], 'e', info2[prop]);
  }
}
