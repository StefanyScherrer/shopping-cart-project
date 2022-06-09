const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
//   // implemente seus testes aqui
//   fail('Teste vazio');
// });
test('Se, ao executar saveCartItems(<ol><li>Item</li></ol>) o metodo localStorage.setItem é chamado!', () => {
  saveCartItems('<ol><li>Item</li></ol>')
 expect(localStorage.setItem).toHaveBeenCalled()
}); 

test('Se, ao executar saveCartItems(<ol><li>Item</li></ol>) o metodo localStorage.setItem é chamado com dois parâmetros!', () => {
 saveCartItems('<ol><li>Item</li></ol>');
 expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
});

});
