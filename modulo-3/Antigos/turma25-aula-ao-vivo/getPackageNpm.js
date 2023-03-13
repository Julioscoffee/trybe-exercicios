const myFetch = require('node-fetch');

const API = 'https://registry.npmjs.org';

const getPackage = async (name) => {
  let response;
  try {
    response = await myFetch(`${API}/${name}`);
  } catch (error) {
    console.log(error);
    return false
  }
  const data = await response.json();
  if (data.error) return false;
  return data;
};

module.exports = { getPackage };
