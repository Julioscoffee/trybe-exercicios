const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Nepomuceno', region: 'SE' },
  { state: 'BA', name: 'Cachoeira', region: 'NE' },
  { state: 'PR', name: 'Curitiba', region: 'S' },
  { state: 'SP', name: 'Hortolândia', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
  { state: 'TO', name: 'Três Pedras', region: 'N' },
  { state: 'MG', name: 'João Pinheiro', region: 'SE' }
];

// .FILTER:

// Retornar elementos da região NE:
const citiesNE = cities.filter((city) => {
  return city.region === 'NE';
});
// console.log(citiesNE); 

// Retornar elementos com nome que iniciam com C:
const citiesC = cities.filter((city) => {
  // return city.name[0] === 'C';
  return city.name.startsWith('C');
});
// console.log(citiesC);
