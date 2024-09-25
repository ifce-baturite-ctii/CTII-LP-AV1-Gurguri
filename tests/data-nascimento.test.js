const {validarDataNascimento} = require('../main/data-nascimento');

describe('Testes para fun. validarDataNascimento', ()=> {
    test('Testando uma data válida: f("30/06/2024") => true', () => {
        expect(validarDataNascimento("30/06/2024")).toBeTruthy();
    })
});