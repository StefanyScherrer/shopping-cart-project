    const fetchItem = (itemId) => {
    const urlAPI = `https://api.mercadolibre.com/items/${itemId}`;
    return fetch(urlAPI)
    .then((data) => data.json())
    .catch((error) => error);
  };
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }
