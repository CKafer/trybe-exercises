const { encode, decode } = require('./encode');

describe('Exercício 4', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });
  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  });
  it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z')).toMatch('1, b, c, d, 2, f, g, h, 3, j, k, l, m, n, 4, p, q, r, s, t, 5, v, w, x, y, z');
  });
  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Charizard').length).toBe(9);
  });
});
