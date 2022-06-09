const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
//   // implemente seus testes aqui
//   fail('Teste vazio');
// });
test('Se, ao executar saveCartItems() o metodo localStorage.setItem é chamado!', () => {
  getSavedCartItems();
  expect(localStorage.getItem).toHaveBeenCalled();
}); 

test('Se, ao executar getSavedCartItems() o metodo localStorage.setItem é chamado com cartItems como parâmetros!', () => {
  getSavedCartItems();
  expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
}); 

});
