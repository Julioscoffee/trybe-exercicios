const fetch = require('node-fetch');

const getPackage = async (name) => {
  try {
    const API = 'https://registry.npmjs.org/';
    const response = await fetch(
      `${API + name}`
    );
    return response.ok;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  getPackage
};
