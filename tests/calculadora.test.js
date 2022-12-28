const { sum, diff, product, divi } = require('./../src/calculadora');
const calculadora = require('./../src/calculadora')

test('A soma de 3 e 3 deve ser igual a 6', () => {

    //expect(sum(3, 3)).toBe(6);
    expect(sum(3, 2)).not.toBe(6);
});

test('A diferenca de 15 e 5 deve ser igual a 10', () => {

    expect(diff(15, 5)).toBe(10);

});

test('A multiplicacao de 6 e 2 deve ser igual a 12', () => {

    expect(product(6, 2)).toBe(12);

});

test('A divisao de 10 e 2 deve ser igual a 5', () => {

    expect(divi(10, 2)).toBe(5);

});

