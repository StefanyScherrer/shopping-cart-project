// const getSavedCartItems = () => {
const getSavedCartItems = () => localStorage.getItem('cartItems');
//   const itemsCart = document.querySelector('.cart__items');
//   const restoreList = JSON.parse(localStorage.getItem('cartItems'));
//   if (restoreList !== null) {
//     itemsCart.innerHTML = restoreList;
//   }

// const store = localStorage.getItem('cartItems');
//   return store;
// };

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}