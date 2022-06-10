// const fetchProducts = () => {
//   // seu código aqui
// };
const fetchProducts = (product) => {
  const urlAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  return fetch(urlAPI)
  .then((data) => data.json())
  .catch((error) => error);
}; 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
