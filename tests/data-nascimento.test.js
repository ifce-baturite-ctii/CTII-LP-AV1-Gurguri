const {validarDataNascimento} = require('../main/data-nascimento');

describe('Testes para fun. validarDataNascimento', ()=> {
    test('Testando uma data inválida, separador errado "-": f("30-06-2024") => false', () => {
        expect(validarDataNascimento("30-06-2024")).toBeFalsy();
    });
    test('Testando uma data válida: f("30/06/2024") => true', () => {
        expect(validarDataNascimento("30/06/2024")).toBeTruthy();
    });
    test('Testando uma data inválida em formato mm/dd/aaaa: f("12/30/2024") => false', () => {
        expect(validarDataNascimento("12/30/2024")).toBeFalsy();
    });

    test('Testando um ano bissexto: f("29/02/2024") => true', () => {
        expect(validarDataNascimento("29/02/2024")).toBeTruthy();
    });
    test('Testando um ano NÃO bissexto: f("29/02/2022") => true', () => {
        expect(validarDataNascimento("29/02/2022")).toBeFalsy();
    });

});