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

const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' }
]

const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centroeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' }
]

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

// .MAP:

const citiesAndStates = cities.map((city) => {
  return `${city.name} - ${city.state}`;
});
// console.log(citiesAndStates);

const citiesAndStateName = cities.map((city) => {
  const findState = states.find((state) => {
    return state.short === city.state;
  })
  return `${city.name} fica no estado ${findState.name}`;
});
// console.log(citiesAndStateName);

const arrayCities = cities.map((city) => {
  const findState = states.find((state) => state.short === city.state);
  const findRegion = regions.find((region) => region.short === city.region);
  return {
    city: city.name,
    state: findState.name,
    region: findRegion.name
  }
});
console.log(arrayCities);
