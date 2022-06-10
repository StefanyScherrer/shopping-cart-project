require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // // implemente seus testes aqui
  // fail('Teste vazio');
  test ('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function')
  });

  test ('Se fetch é chamada caso chamado a função fetchItem(MLB1615760527)', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test ('Se ao chamar fetchItem sob o argumento MLB1615760527 a função usa o endpoint especificado', () => {
    const endpoint =  "https://api.mercadolibre.com/items/MLB1615760527";
    expect(fetch).toHaveBeenCalledWith(endpoint)
  })

  test('Se ao chamar fetchItem(MLB1615760527) retorna um objeto igual ao computadorSearch', async () => {
    const functionFetch = await fetchItem('MLB1615760527');
    expect(functionFetch).toEqual(item);
  })

  test('Se ao chamar a função sem parametro retorna um erro', async () => {
    const functionFetch =  await fetchItem();
    expect(functionFetch).toEqual(new Error('You must provide an url'));
  })

  test('verifica se ao chamar a função com o argumento MLB1615760527 fetch é chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('ao chamar com o mesmo argumento verifica se é uma estrutura de dados igual ao objeto item', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  })

  it('sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const error = new Error('You must provide an url');
    const result = await fetchItem();
    expect(result).toEqual(error);
  })



});