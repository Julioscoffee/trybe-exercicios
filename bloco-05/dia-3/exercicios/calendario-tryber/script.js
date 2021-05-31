function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

//Exercício 1: 
function createDays() {
  const daysNum = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysNumList = document.querySelector('#days');

  for (let i = 0; i < daysNum.length; i += 1) {
    const days = daysNum[i];
    const daysList = document.createElement('li');
    daysList.classList.add('day');
    daysList.innerHTML = days;
    if (days === 24 | days === 25 | days === 31) {
      daysList.classList.add('holiday');
    }
    if (days === 4 | days === 11 | days === 18 | days === 25) {
      daysList.classList.add('friday');
    }

    daysNumList.appendChild(daysList);
  }
}
createDays();

//Exercício 2: 
function feriadosBtn(feriados) {
  let btnFeriados = document.createElement('button');
  btnFeriados.id = 'btn-holiday'
  let btns = document.querySelector('.buttons-container');
  btns.appendChild(btnFeriados);
  btnFeriados.innerHTML = feriados;
}
feriadosBtn('Feriados');

//Exercício 3: 
const btnFeriados = document.querySelector('#btn-holiday');
let holidays = document.querySelectorAll('.holiday');
btnFeriados.addEventListener('click', corHolyday);
function corHolyday() {
  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.color !== 'white' && holidays[i].style.backgroundColor !== 'green') {
      holidays[i].style.color = 'white';
      holidays[i].style.backgroundColor = 'green';
    } else {
      holidays[i].style.color = null;
      holidays[i].style.backgroundColor = null;
    }
  }
}

//Exercício 4: 
function sextaBtn(sexta) {
  let btnSexta = document.createElement('button');
  btnSexta.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(btnSexta);
  btnSexta.innerHTML = sexta;
}
sextaBtn('Sexta-feira');

//Exercício 5: 
const btnSextas = document.querySelector('#btn-friday');
let fridays = document.querySelectorAll('.friday');
btnSextas.addEventListener('click', textFriday);
function textFriday() {
  const fridayArray = [4, 11 , 18, 25];
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerHTML !== 'Sextou!') {
      fridays[i].innerHTML = 'Sextou!';
    } else {
      fridays[i].innerHTML = fridayArray[i];
    }
  }
}

//Exercício 6: 
const daysOfMonth = document.querySelectorAll('.day');
for (let i = 0; i < daysOfMonth.length; i += 1) {
  daysOfMonth[i].addEventListener('mouseover', amplia);
  daysOfMonth[i].addEventListener('mouseout', reduz);
  function amplia() {
    daysOfMonth[i].style.zoom = '200%';
  }
  function reduz() {
    daysOfMonth[i].style.zoom = '100%';
  }
}
