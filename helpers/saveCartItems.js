// const saveCartItems = () => {
//   // seu código aqui
  // const saveCartItems = (itemsSave) => {
  //   localStorage.setItem('cartItems', itemsSave);
  // };
  const saveCartItems = (value) => {
    localStorage.setItem('cartItems', value);
  };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
