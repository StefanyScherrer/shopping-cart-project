// const saveCartItems = () => {
//   // seu código aqui
  const saveCartItems = (itemsSave) => {
    localStorage.setItem('cartItems', itemsSave);
  };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
