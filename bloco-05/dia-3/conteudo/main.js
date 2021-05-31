const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function changeTech(event) {
  let classEvent = document.querySelector('.tech');
  classEvent.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
  input.focus();
}
divUm.addEventListener('click', changeTech);
divDois.addEventListener('click', changeTech);
divTres.addEventListener('click', changeTech);

function textoTech(event) {
  let atualTech = document.querySelector('.tech');
  atualTech.innerText = event.target.value;
}
input.addEventListener('input', textoTech);

function direciona() {
  window.open('https://julioscoffee.github.io/');
}
myWebpage.addEventListener('dblclick', direciona);

myWebpage.addEventListener('mouseenter', function () {
  myWebpage.style.color = 'yellow';
});
myWebpage.addEventListener('mouseout', function () {
  myWebpage.style.color = 'white';
});

/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

divDois.addEventListener('mouseup', resetText);
divTres.addEventListener('b', resetText);