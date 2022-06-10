// const saveCartItems = () => {
//   // seu código aqui
  // const saveCartItems = (itemsSave) => {
  //   localStorage.setItem('cartItems', itemsSave);
  // };
  const saveCartItems = (cartOl) => {
    localStorage.setItem('cartItems', cartOl);
  };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
