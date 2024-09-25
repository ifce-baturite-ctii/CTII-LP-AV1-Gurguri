const {contarVogais} = require('../main/contador');

describe('Testes para a fun. contarVogais',()=>{
    test('Vogais básicas',()=>{
        expect(contarVogais('carioca')).toEqual(4);
    });
    test('Palavra com acentos diacríticos',()=>{
        expect(contarVogais('você')).toEqual(2);
    })

    test('Vogais maiúsculas',()=>{
        expect(contarVogais('VOCÊ')).toEqual(2);
    })
});
